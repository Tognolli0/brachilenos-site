import { contactWhatsAppNumber } from "@/lib/contact";

export const clientWhatsAppNumber = contactWhatsAppNumber;

export function createWhatsAppUrl(message: string, number = clientWhatsAppNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildCommercialLeadMessage(payload: Record<string, unknown>) {
  const value = (key: string) => String(payload[key] || "").trim();

  return [
    "Olá! Quero solicitar uma análise da BRACHILENOS.",
    "",
    "*Dados do contato*",
    `Nome: ${value("name")}`,
    `WhatsApp: ${value("whatsapp")}`,
    `E-mail: ${value("email")}`,
    "",
    "*Cenário do atendimento*",
    `Perfil: ${value("profile") || "Não informado"}`,
    `Mercado: ${value("market") || "Não informado"}`,
    `País: ${value("country")}`,
    `Cidade: ${value("city") || "Não informado"}`,
    `Necessidade: ${value("need")}`,
    `Urgência: ${value("urgency") || "Não informado"}`,
    `Página de origem: ${value("sourcePath") || "Não informado"}`,
    "",
    "*Mensagem do cliente*",
    value("message") || "Não informado",
    "",
    "Pode me orientar sobre o melhor próximo passo?",
  ].join("\n");
}

export function createMailToUrl({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
