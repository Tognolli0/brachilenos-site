import { Buffer } from "node:buffer";
import { NextResponse } from "next/server";
import { contactEmail } from "@/lib/contact";
import { createMailToUrl } from "@/lib/conversion";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const requiredFields = ["name", "email", "whatsapp", "country", "interest", "privacyConsent"] as const;
const temporaryTalentEmail = process.env.TALENTS_EMAIL_TO || contactEmail;
const maxAttachmentBytes = 8 * 1024 * 1024;

const allowedAttachmentTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/jpeg",
  "image/png",
]);

const allowedAttachmentExtensions = new Set([".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png"]);

type TalentAttachment = {
  filename: string;
  content: string;
  contentType?: string;
  size: number;
};

class TalentRequestError extends Error {
  constructor(
    public code: string,
    public status = 400,
  ) {
    super(code);
  }
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  let attachment: TalentAttachment | null = null;

  try {
    const parsed = await readTalentRequest(request);
    payload = parsed.payload;
    attachment = parsed.attachment;
  } catch (error) {
    if (error instanceof TalentRequestError) {
      return NextResponse.json({ ok: false, error: error.code }, { status: error.status });
    }

    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
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

  let webhookDelivered = false;

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

    webhookDelivered = true;
  }

  if (process.env.RESEND_API_KEY && process.env.TALENTS_EMAIL_FROM) {
    const emailPayload: {
      from: string;
      to: string[];
      subject: string;
      text: string;
      attachments?: Array<{ filename: string; content: string; contentType?: string }>;
    } = {
      from: process.env.TALENTS_EMAIL_FROM,
      to: [temporaryTalentEmail],
      subject: createTalentSubject(sanitized),
      text: createTalentEmailBody(record),
    };

    if (attachment) {
      emailPayload.attachments = [
        {
          filename: attachment.filename,
          content: attachment.content,
          contentType: attachment.contentType,
        },
      ];
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
      cache: "no-store",
    });

    if (!emailResponse.ok) {
      return NextResponse.json({ ok: false, error: "email_failed" }, { status: 502 });
    }

    return NextResponse.json({
      ok: true,
      destination: temporaryTalentEmail,
      mode: webhookDelivered ? "webhook_email" : "email",
      attachmentIncluded: Boolean(attachment),
    });
  }

  if (webhookDelivered) {
    return NextResponse.json({
      ok: true,
      destination: "talent-webhook",
      mode: "webhook",
      attachmentSkipped: Boolean(attachment),
    });
  }

  return NextResponse.json({
    ok: true,
    destination: temporaryTalentEmail,
    mode: "email_draft",
    attachmentSkipped: Boolean(attachment),
    mailtoHref: createMailToUrl({
      to: temporaryTalentEmail,
      subject: createTalentSubject(sanitized),
      body: createTalentEmailBody(record),
    }),
  });
}

async function readTalentRequest(request: Request) {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("multipart/form-data")) {
    return readTalentFormData(await request.formData());
  }

  try {
    return {
      payload: (await request.json()) as Record<string, unknown>,
      attachment: null,
    };
  } catch {
    throw new TalentRequestError("invalid_json", 400);
  }
}

async function readTalentFormData(formData: FormData) {
  const payload: Record<string, unknown> = {};
  let attachment: TalentAttachment | null = null;

  for (const [key, value] of formData.entries()) {
    if (isFile(value)) {
      if (key === "portfolio" && value.name && value.size > 0) {
        attachment = await createTalentAttachment(value);
        payload[key] = {
          name: attachment.filename,
          size: attachment.size,
          type: attachment.contentType || "application/octet-stream",
          selected: true,
        };
      } else {
        payload[key] = "";
      }

      continue;
    }

    payload[key] = value;
  }

  return { payload, attachment };
}

async function createTalentAttachment(file: File): Promise<TalentAttachment> {
  const filename = sanitizeFileName(file.name);
  const contentType = file.type && file.type !== "application/octet-stream" ? file.type : inferContentType(filename);

  if (file.size > maxAttachmentBytes) {
    throw new TalentRequestError("attachment_too_large", 413);
  }

  if (!isAllowedAttachment(filename, contentType)) {
    throw new TalentRequestError("attachment_type_not_allowed", 400);
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  return {
    filename,
    content: buffer.toString("base64"),
    contentType,
    size: file.size,
  };
}

function isFile(value: FormDataEntryValue): value is File {
  return typeof File !== "undefined" && value instanceof File;
}

function sanitizeFileName(name: string) {
  return name
    .replace(/[^\w.\- ()]/g, "_")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120) || "curriculo";
}

function getExtension(filename: string) {
  const dotIndex = filename.lastIndexOf(".");
  return dotIndex >= 0 ? filename.slice(dotIndex).toLowerCase() : "";
}

function inferContentType(filename: string) {
  const extension = getExtension(filename);

  if (extension === ".pdf") return "application/pdf";
  if (extension === ".doc") return "application/msword";
  if (extension === ".docx") return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  if (extension === ".png") return "image/png";
  if (extension === ".jpg" || extension === ".jpeg") return "image/jpeg";

  return "application/octet-stream";
}

function isAllowedAttachment(filename: string, contentType: string) {
  return allowedAttachmentTypes.has(contentType) || allowedAttachmentExtensions.has(getExtension(filename));
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
    const file = portfolio as { name?: unknown; size?: unknown; type?: unknown; selected?: unknown };
    const selected = file.selected ? ", arquivo selecionado no formulário" : "";

    return `${String(file.name || "Arquivo sem nome")} (${String(file.type || "tipo não informado")}, ${String(file.size || "tamanho não informado")} bytes${selected})`;
  }

  return "Arquivo informado";
}
