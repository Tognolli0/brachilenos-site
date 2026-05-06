"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, UploadCloud, X } from "lucide-react";
import { useState } from "react";
import { assetPath } from "@/lib/assets";
import { localeLabels, locales, type Dictionary, type Locale } from "@/lib/dictionaries";

type HeaderProps = {
  lang: Locale;
  dict: Dictionary;
  page: "home" | "careers";
};

export function Header({ lang, dict, page }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || `/${lang}`;

  const switchHref = (target: Locale) => {
    const parts = pathname.split("/");
    if (parts.length < 2) return `/${target}`;
    parts[1] = target;
    return parts.join("/") || `/${target}`;
  };

  const navItems = [
    { href: `/${lang}#solucoes`, label: dict.nav.solutions },
    { href: `/${lang}#perfis`, label: dict.nav.audiences },
    { href: `/${lang}#processo`, label: dict.nav.process },
    { href: `/${lang}/carreiras`, label: dict.nav.careers },
    { href: `/${lang}#conteudo`, label: dict.nav.content },
    { href: `/${lang}#contato`, label: dict.nav.contact },
  ];

  const ctaHref = page === "careers" ? `/${lang}/carreiras#candidatura` : `/${lang}#contato`;
  const CtaIcon = page === "careers" ? UploadCloud : MessageCircle;
  const skipLabel = {
    "pt-br": "Pular para o conteúdo",
    es: "Saltar al contenido",
    en: "Skip to content",
  }[lang];

  return (
    <header className="sticky top-0 z-40 border-b border-[#071f3b]/10 bg-[#f8faf9]/95 backdrop-blur">
      <a
        href="#conteudo-principal"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-extrabold focus:text-[#071f3b] focus:shadow-lg"
      >
        {skipLabel}
      </a>
      <div className="shell grid min-h-[72px] grid-cols-[minmax(0,auto)_auto] items-center justify-between gap-4 xl:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Link
          href={`/${lang}`}
          aria-label="BRACHILENOS - página inicial"
          className="display-serif flex min-w-0 items-center gap-3 font-bold text-[#071f3b]"
        >
          <Image
            src={assetPath("/assets/logo-brachilenos.jpeg")}
            width={52}
            height={52}
            alt="BRACHILENOS"
            className="h-11 w-11 shrink-0 border border-[#b88228]/40 object-cover sm:h-12 sm:w-12"
            priority
          />
          <span className="truncate text-base sm:text-lg">BRACHILENOS</span>
        </Link>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center border border-[#d9e0e6] bg-white text-[#071f3b] xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <nav
          id="menu-principal"
          className={`${open ? "flex" : "hidden"} col-span-2 flex-col gap-1 border-t border-[#071f3b]/10 pb-3 pt-3 text-sm font-semibold text-[#5c6b78] xl:col-span-1 xl:flex xl:flex-row xl:items-center xl:justify-center xl:gap-5 xl:border-t-0 xl:pb-0 xl:pt-0`}
        >
          {navItems.map((item) => {
            const active = page === "careers" && item.href.includes("carreiras");
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`border-b-2 px-0 py-3 transition hover:border-[#b88228] hover:text-[#071f3b] xl:py-2 ${
                  active ? "border-[#b88228] text-[#071f3b]" : "border-transparent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div
          className={`${open ? "flex" : "hidden"} col-span-2 flex-wrap items-center gap-3 pb-4 xl:col-span-1 xl:flex xl:justify-end xl:pb-0`}
        >
          <div className="inline-flex border border-[#d9e0e6] bg-white">
            {locales.map((locale) => (
              <Link
                key={locale}
                href={switchHref(locale)}
                className={`focus-ring grid h-9 min-w-10 place-items-center px-2 text-xs font-extrabold ${
                  locale === lang ? "bg-[#071f3b] text-white" : "text-[#5c6b78] hover:text-[#071f3b]"
                }`}
              >
                {localeLabels[locale]}
              </Link>
            ))}
          </div>
          <Link
            href={ctaHref}
            className="focus-ring inline-flex min-h-10 w-full items-center justify-center gap-2 border border-[#071f3b] bg-[#071f3b] px-4 text-center text-sm font-extrabold leading-tight text-white transition hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
          >
            <CtaIcon className="h-4 w-4" />
            <span>{page === "careers" ? dict.nav.careersCta : dict.nav.commercialCta}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
