export const clientWhatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511969870407";

export function createWhatsAppUrl(message: string, number = clientWhatsAppNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
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
