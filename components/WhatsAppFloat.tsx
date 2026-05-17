import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const whatsappNumber = "5511969870407";

export function WhatsAppFloat() {
  const message = encodeURIComponent("Ola! Gostaria de falar com a BRACHILENOS.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="focus-ring fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#19b45b] text-white shadow-[0_16px_34px_rgba(15,111,67,0.32)] transition hover:-translate-y-1 hover:bg-[#128c52] hover:shadow-[0_20px_42px_rgba(15,111,67,0.42)] sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
    >
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
    </a>
  );
}
