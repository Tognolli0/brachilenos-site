"use client";

import Link from "next/link";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="min-h-screen bg-[#f8faf9]">
      <section className="grid min-h-screen place-items-center px-4 py-16">
        <div className="w-full max-w-3xl border border-[#d9e0e6] border-t-4 border-t-[#c91f28] bg-white p-6 shadow-[0_18px_44px_rgba(7,31,59,.08)] sm:p-10">
          <AlertTriangle className="mb-6 h-11 w-11 text-[#c91f28]" aria-hidden />
          <p className="eyebrow mb-4">Instabilidade temporaria</p>
          <h1 className="display-serif text-balance text-[clamp(2.1rem,5vw,3.7rem)] font-bold leading-tight text-[#071f3b]">
            Nao foi possivel carregar esta area agora.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5c6b78]">
            Tente novamente em alguns segundos. Se continuar, volte ao inicio ou fale com a equipe pelo WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={reset} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 border border-[#071f3b] bg-[#071f3b] px-5 font-extrabold text-white">
              <RefreshCcw className="h-5 w-5" aria-hidden />
              Tentar novamente
            </button>
            <Link href="/pt-br" className="focus-ring inline-flex min-h-12 items-center justify-center border border-[#b88228] bg-white px-5 font-extrabold text-[#071f3b]">
              Voltar ao inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
