import { NextResponse } from "next/server";
import { contactEmail } from "@/lib/contact";
import { createMailToUrl } from "@/lib/conversion";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const requiredFields = ["name", "email", "whatsapp", "country", "interest", "privacyConsent"] as const;
const temporaryTalentEmail = process.env.TALENTS_EMAIL_TO || contactEmail;

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const sanitized = sanitizePayload(payload);

  if (sanitized.company) {
    return NextResponse.json({ ok: true, mode: "spam_ignored" });
  }

  if (requiredFields.some((field) => !sanitized[field])) {
    return NextResponse.json({ ok: false, error: "missing_required_fields" }, { status: 400 });
  }

  if (!emailPattern.test(String(sanitized.email))) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const record = {
    source: "brachilenos-site",
    type: "talent-bank",
    pipeline: "professional-network",
    status: "novo",
    group: inferTalentGroup(sanitized),
    tags: buildTalentTags(sanitized),
    createdAt: new Date().toISOString(),
    payload: sanitized,
  };

  if (process.env.TALENTS_WEBHOOK_URL) {
    const response = await fetch(process.env.TALENTS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "webhook_failed" }, { status: 502 });
    }

    return NextResponse.json({
      ok: true,
      destination: "talent-webhook",
      mode: "webhook",
    });
  }

  if (process.env.RESEND_API_KEY && process.env.TALENTS_EMAIL_FROM) {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.TALENTS_EMAIL_FROM,
        to: [temporaryTalentEmail],
        subject: createTalentSubject(sanitized),
        text: createTalentEmailBody(record),
      }),
      cache: "no-store",
    });

    if (!emailResponse.ok) {
      return NextResponse.json({ ok: false, error: "email_failed" }, { status: 502 });
    }

    return NextResponse.json({
      ok: true,
      destination: temporaryTalentEmail,
      mode: "email",
    });
  }

  return NextResponse.json({
    ok: true,
    destination: temporaryTalentEmail,
    mode: "email_draft",
    mailtoHref: createMailToUrl({
      to: temporaryTalentEmail,
      subject: createTalentSubject(sanitized),
      body: createTalentEmailBody(record),
    }),
  });
}

function sanitizePayload(payload: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [
      key,
      typeof value === "string" ? value.trim().slice(0, 1500) : value,
    ]),
  ) as Record<string, unknown>;
}

function createTalentSubject(payload: Record<string, unknown>) {
  const name = String(payload.name || "Profissional").trim();
  const interest = String(payload.interest || "Talento").trim();
  const area = String(payload.area || "Área não informada").trim();

  return `BRACHILENOS | ${interest} | ${area} | ${name}`;
}

function createTalentEmailBody(record: {
  source: string;
  type: string;
  pipeline: string;
  status: string;
  group: string;
  tags: string[];
  createdAt: string;
  payload: Record<string, unknown>;
}) {
  const value = (key: string) => String(record.payload[key] || "").trim() || "Não informado";

  return [
    "Novo cadastro profissional recebido pelo site BRACHILENOS.",
    "",
    "Classificação interna:",
    `Origem: ${record.source}`,
    `Tipo: ${record.type}`,
    `Pipeline: ${record.pipeline}`,
    `Status: ${record.status}`,
    `Grupo: ${record.group}`,
    `Tags: ${record.tags.join(", ") || "Não informado"}`,
    `Data: ${record.createdAt}`,
    "",
    "Contato:",
    `Nome: ${value("name")}`,
    `WhatsApp: ${value("whatsapp")}`,
    `E-mail: ${value("email")}`,
    `País: ${value("country")}`,
    `Cidade: ${value("city")}`,
    "",
    "Perfil técnico:",
    `Formação: ${value("education")}`,
    `CRC / Registro: ${value("registry")}`,
    `Área: ${value("area")}`,
    `Experiência: ${value("experience")}`,
    `Onde pode atuar: ${value("operationCountry")}`,
    `Idiomas: ${value("languages")}`,
    `Modelo de atuação: ${value("workMode")}`,
    `Disponibilidade: ${value("availability")}`,
    `LinkedIn: ${value("linkedin")}`,
    "",
    "Interesse:",
    `Interesse: ${value("interest")}`,
    `Grupo enviado pelo formulário: ${value("group")}`,
    `Currículo / portfólio: ${formatPortfolio(record.payload.portfolio)}`,
    `Página de origem: ${value("sourcePath")}`,
    `Consentimento de contato: ${value("privacyConsent") === "on" ? "Sim" : value("privacyConsent")}`,
    "",
    "Mensagem:",
    value("message"),
    "",
    "Próximo passo sugerido:",
    "Responder o profissional, validar perfil técnico e registrar na base de talentos/planilha quando ela for conectada.",
  ].join("\n");
}

function inferTalentGroup(payload: Record<string, unknown>) {
  const interest = String(payload.interest || "").toLowerCase();

  if (interest.includes("prest") || interest.includes("service") || interest.includes("servicio")) {
    return "prestadores";
  }

  return "candidatos";
}

function buildTalentTags(payload: Record<string, unknown>) {
  return [
    inferTalentGroup(payload),
    String(payload.area || "").trim(),
    String(payload.country || "").trim(),
    String(payload.operationCountry || "").trim(),
    String(payload.workMode || "").trim(),
    String(payload.availability || "").trim(),
  ].filter(Boolean);
}

function formatPortfolio(portfolio: unknown) {
  if (!portfolio) return "Não informado";

  if (typeof portfolio === "string") return portfolio || "Não informado";

  if (typeof portfolio === "object" && "name" in portfolio) {
    const file = portfolio as { name?: unknown; size?: unknown; type?: unknown };
    return `${String(file.name || "Arquivo sem nome")} (${String(file.type || "tipo não informado")}, ${String(file.size || "tamanho não informado")} bytes)`;
  }

  return "Arquivo informado";
}
