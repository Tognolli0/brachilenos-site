"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessageCircle, SearchX } from "lucide-react";
import { isLocale, type Locale } from "@/lib/dictionaries";

const copy: Record<
  Locale,
  { eyebrow: string; title: string; text: string; home: string; contact: string }
> = {
  "pt-br": {
    eyebrow: "Página não encontrada",
    title: "Este caminho não existe ou foi movido.",
    text: "Volte para o início ou fale com a equipe para encontrar o melhor caminho de atendimento entre Brasil e Chile.",
    home: "Ir para o início",
    contact: "Falar com especialista",
  },
  es: {
    eyebrow: "Página no encontrada",
    title: "Esta ruta no existe o fue movida.",
    text: "Vuelve al inicio o habla con el equipo para encontrar el mejor camino de atención entre Brasil y Chile.",
    home: "Ir al inicio",
    contact: "Hablar con especialista",
  },
  en: {
    eyebrow: "Page not found",
    title: "This path does not exist or has moved.",
    text: "Return home or talk to the team to find the best service path between Brazil and Chile.",
    home: "Go home",
    contact: "Talk to a specialist",
  },
};

export default function NotFound() {
  const pathname = usePathname() || "/pt-br";
  const locale = pathname.split("/")[1];
  const lang = isLocale(locale) ? locale : "pt-br";
  const text = copy[lang];

  return (
    <main className="min-h-screen bg-[#f8faf9]">
      <section className="grid min-h-screen place-items-center px-4 py-16">
        <div className="w-full max-w-3xl border border-[#d9e0e6] border-t-4 border-t-[#b88228] bg-white p-6 shadow-[0_18px_44px_rgba(7,31,59,.08)] sm:p-10">
          <SearchX className="mb-6 h-11 w-11 text-[#b88228]" aria-hidden />
          <p className="eyebrow mb-4">{text.eyebrow}</p>
          <h1 className="display-serif text-balance text-[clamp(2.1rem,5vw,3.7rem)] font-bold leading-tight text-[#071f3b]">
            {text.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5c6b78]">{text.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={`/${lang}`} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 border border-[#071f3b] bg-[#071f3b] px-5 font-extrabold text-white">
              <Home className="h-5 w-5" aria-hidden />
              {text.home}
            </Link>
            <Link href={`/${lang}#contato`} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 border border-[#b88228] bg-white px-5 font-extrabold text-[#071f3b]">
              <MessageCircle className="h-5 w-5" aria-hidden />
              {text.contact}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
