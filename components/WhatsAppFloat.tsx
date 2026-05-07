import { MessageCircle } from "lucide-react";

const whatsappNumber = "5511969870407";

export function WhatsAppFloat() {
  const message = encodeURIComponent("Olá! Gostaria de falar com a BRACHILENOS.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-[#0f6f43] text-white shadow-[0_16px_34px_rgba(15,111,67,0.32)] transition hover:-translate-y-1 hover:bg-[#128c52] hover:shadow-[0_20px_42px_rgba(15,111,67,0.42)]"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
