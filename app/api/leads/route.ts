import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const requiredFields = ["name", "email", "whatsapp", "country", "need"] as const;

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const sanitized = sanitizePayload(payload);

  if (requiredFields.some((field) => !sanitized[field])) {
    return NextResponse.json({ ok: false, error: "missing_required_fields" }, { status: 400 });
  }

  if (!emailPattern.test(String(sanitized.email))) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const record = {
    source: "brachilenos-site",
    type: "client-lead",
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
