import { NextResponse } from "next/server";
import { buildCommercialLeadMessage, createWhatsAppUrl } from "@/lib/conversion";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const requiredFields = ["name", "email", "whatsapp", "profile", "market", "country", "need", "privacyConsent"] as const;

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
    type: "client-lead",
    pipeline: "commercial",
    status: "novo",
    group: inferLeadGroup(sanitized),
    tags: buildLeadTags(sanitized),
    createdAt: new Date().toISOString(),
    payload: sanitized,
  };

  if (process.env.LEADS_WEBHOOK_URL) {
    const response = await fetch(process.env.LEADS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "webhook_failed" }, { status: 502 });
    }
  }

  return NextResponse.json({
    ok: true,
    destination: "whatsapp",
    whatsappUrl: createWhatsAppUrl(buildCommercialLeadMessage(sanitized)),
    mode: process.env.LEADS_WEBHOOK_URL ? "webhook" : "preview",
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

function inferLeadGroup(payload: Record<string, unknown>) {
  const profile = String(payload.profile || "").toLowerCase();

  if (profile.includes("jur") || profile.includes("empresa") || profile.includes("company")) {
    return "empresas";
  }

  if (profile.includes("invest")) {
    return "investidores";
  }

  return "pessoas-fisicas";
}

function buildLeadTags(payload: Record<string, unknown>) {
  return [
    inferLeadGroup(payload),
    String(payload.market || "").trim(),
    String(payload.country || "").trim(),
    String(payload.need || "").trim(),
    String(payload.urgency || "").trim(),
    String(payload.sourcePath || "").trim(),
  ].filter(Boolean);
}
