"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/assets";
import { localeLabels, locales, type Dictionary, type Locale } from "@/lib/dictionaries";

type HeaderProps = {
  lang: Locale;
  dict: Dictionary;
  page: "home" | "about" | "services" | "careers";
};

export function Header({ lang, dict, page }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || `/${lang}`;

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 1280) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const switchHref = (target: Locale) => {
    const parts = pathname.split("/");
    if (parts.length < 2) return `/${target}`;
    parts[1] = target;
    return parts.join("/") || `/${target}`;
  };

  const navItems = [
    { href: `/${lang}`, label: dict.nav.home, page: "home" },
    { href: `/${lang}/sobre`, label: dict.nav.about, page: "about" },
    { href: `/${lang}/servicos`, label: dict.nav.solutions, page: "services" },
    { href: `/${lang}/carreiras`, label: dict.nav.careers, page: "careers" },
  ];

  const ctaHref = `/${lang}#contato`;
  const CtaIcon = MessageCircle;
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
      <div className="shell grid min-h-[64px] grid-cols-[minmax(0,1fr)_44px] items-center gap-3 py-2 xl:min-h-[72px] xl:grid-cols-[auto_minmax(0,1fr)_auto] xl:gap-4 xl:py-0">
        <Link
          href={`/${lang}`}
          aria-label="Contabilidade Brachilenos - página inicial"
          className="display-serif flex min-w-0 items-center gap-2 font-bold text-[#071f3b] sm:gap-3"
        >
          <Image
            src={assetPath("/assets/logo-brachilenos.jpeg")}
            width={52}
            height={52}
            alt="Contabilidade Brachilenos"
            className="h-10 w-10 shrink-0 border border-[#b88228]/40 object-cover sm:h-12 sm:w-12"
            priority
          />
          <span className="min-w-0 truncate text-sm leading-tight sm:text-lg">Contabilidade Brachilenos</span>
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

        {open ? (
          <button
            type="button"
            aria-label="Fechar menu"
            className="fixed inset-0 top-[64px] z-40 bg-[#071f3b]/45 xl:hidden"
            onClick={() => setOpen(false)}
          />
        ) : null}

        <nav
          id="menu-principal"
          role={open ? "dialog" : undefined}
          aria-modal={open ? true : undefined}
          className={`${open ? "flex" : "hidden"} fixed left-0 right-0 top-[64px] z-50 max-h-[calc(100dvh-64px)] flex-col gap-1 overflow-y-auto border-t border-[#071f3b]/10 bg-white px-5 pb-6 pt-3 text-sm font-semibold text-[#5c6b78] shadow-[0_18px_42px_rgba(7,31,59,0.18)] xl:static xl:col-span-1 xl:flex xl:max-h-none xl:w-auto xl:flex-row xl:items-center xl:justify-center xl:gap-5 xl:overflow-visible xl:border-t-0 xl:bg-transparent xl:p-0 xl:shadow-none`}
        >
          {navItems.map((item) => {
            const active = item.page === page;
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
          <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-[#071f3b]/10 pt-5 xl:hidden">
            <div className="inline-flex border border-[#d9e0e6] bg-white">
              {locales.map((locale) => (
                <Link
                  key={locale}
                  href={switchHref(locale)}
                  onClick={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
              className="focus-ring inline-flex min-h-10 w-full items-center justify-center gap-2 border border-[#071f3b] bg-[#071f3b] px-4 text-center text-sm font-extrabold leading-tight text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <CtaIcon className="h-4 w-4" />
              <span>{dict.nav.commercialCta}</span>
            </Link>
          </div>
        </nav>

        <div className="hidden flex-wrap items-center gap-3 xl:col-span-1 xl:flex xl:justify-end">
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
            <span>{dict.nav.commercialCta}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
