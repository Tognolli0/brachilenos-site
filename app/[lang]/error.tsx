"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { isLocale, type Locale } from "@/lib/dictionaries";

const copy: Record<
  Locale,
  { eyebrow: string; title: string; text: string; retry: string; home: string }
> = {
  "pt-br": {
    eyebrow: "Instabilidade temporária",
    title: "Não foi possível carregar esta área agora.",
    text: "Tente novamente em alguns segundos. Se continuar, volte ao início ou fale com a equipe pelo WhatsApp.",
    retry: "Tentar novamente",
    home: "Voltar ao início",
  },
  es: {
    eyebrow: "Inestabilidad temporal",
    title: "No fue posible cargar esta área ahora.",
    text: "Intenta nuevamente en unos segundos. Si continúa, vuelve al inicio o habla con el equipo por WhatsApp.",
    retry: "Intentar nuevamente",
    home: "Volver al inicio",
  },
  en: {
    eyebrow: "Temporary instability",
    title: "This area could not load right now.",
    text: "Try again in a few seconds. If it continues, return home or talk to the team on WhatsApp.",
    retry: "Try again",
    home: "Back home",
  },
};

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const pathname = usePathname() || "/pt-br";
  const locale = pathname.split("/")[1];
  const lang = isLocale(locale) ? locale : "pt-br";
  const text = copy[lang];

  return (
    <main className="min-h-screen bg-[#f8faf9]">
      <section className="grid min-h-screen place-items-center px-4 py-16">
        <div className="w-full max-w-3xl border border-[#d9e0e6] border-t-4 border-t-[#c91f28] bg-white p-6 shadow-[0_18px_44px_rgba(7,31,59,.08)] sm:p-10">
          <AlertTriangle className="mb-6 h-11 w-11 text-[#c91f28]" aria-hidden />
          <p className="eyebrow mb-4">{text.eyebrow}</p>
          <h1 className="display-serif text-balance text-[clamp(2.1rem,5vw,3.7rem)] font-bold leading-tight text-[#071f3b]">
            {text.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5c6b78]">{text.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={reset} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 border border-[#071f3b] bg-[#071f3b] px-5 font-extrabold text-white">
              <RefreshCcw className="h-5 w-5" aria-hidden />
              {text.retry}
            </button>
            <Link href={`/${lang}`} className="focus-ring inline-flex min-h-12 items-center justify-center border border-[#b88228] bg-white px-5 font-extrabold text-[#071f3b]">
              {text.home}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
