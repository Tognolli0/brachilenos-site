"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { localeLabels, locales, type Dictionary, type Locale } from "@/lib/dictionaries";
import { getSiteContent, solutionSlugs } from "@/lib/site-content";

type HeaderProps = {
  lang: Locale;
  dict: Dictionary;
  page?: "home" | "work" | "solutions";
};

export function Header({ lang, dict, page = "home" }: HeaderProps) {
  const pathname = usePathname() || `/${lang}`;
  const content = getSiteContent(lang);
  const solutions = content.solutions.groups;
  const solutionsHref = `/${lang}/${content.routes.solutions}`;
  const workHref = `/${lang}/${content.routes.work}`;

  const switchHref = (target: Locale) => {
    const parts = pathname.split("/");
    if (parts.length < 2) return `/${target}`;
    parts[1] = target;
    return parts.join("/") || `/${target}`;
  };

  const beforeSolutionsNav = [
    { href: `/${lang}`, label: lang === "pt-br" ? "Home" : lang === "es" ? "Inicio" : "Home" },
    { href: `/${lang}#quem-somos`, label: lang === "pt-br" ? "Quem Somos" : lang === "es" ? "Quiénes Somos" : "About" },
  ];

  const afterSolutionsNav = [
    { href: `/${lang}#perfis`, label: dict.nav.audiences },
    { href: `/${lang}#processo`, label: dict.nav.process },
    { href: `/${lang}#conteudo`, label: dict.nav.content },
    { href: workHref, label: dict.nav.careers },
    { href: `/${lang}#contato`, label: lang === "pt-br" ? "Fale Conosco" : lang === "es" ? "Contacto" : "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#071f3b]/10 bg-[#f8faf9]/95 text-[#071f3b] backdrop-blur">
        <div className="shell grid min-h-[72px] grid-cols-[minmax(0,auto)_auto] items-center justify-between gap-4 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
          <Link href={`/${lang}`} className="display-serif flex min-w-0 items-center gap-3 font-bold text-[#071f3b]">
            <Image
              src="/assets/logo-brachilenos.jpeg"
              width={52}
              height={52}
              alt="BRACHILENOS"
              className="h-11 w-11 shrink-0 border border-[#b88228]/40 bg-white object-cover sm:h-12 sm:w-12"
              priority
            />
            <span className="truncate text-lg tracking-wide sm:text-xl">BRACHILENOS</span>
          </Link>

          <details className="group justify-self-end lg:hidden">
            <summary
              aria-label="Abrir menu"
              className="focus-ring grid h-11 w-11 cursor-pointer list-none place-items-center border border-[#d9e0e6] bg-white text-[#071f3b] [&::-webkit-details-marker]:hidden"
            >
              <Menu className="h-5 w-5" />
            </summary>
            <div className="fixed left-4 right-4 top-[80px] z-50 max-h-[calc(100vh-96px)] overflow-y-auto border border-[#d9e0e6] bg-white p-3 shadow-[0_18px_48px_rgba(7,31,59,.2)]">
              <MobileNavLinks
                beforeSolutionsNav={beforeSolutionsNav}
                afterSolutionsNav={afterSolutionsNav}
                solutions={solutions}
                solutionsHref={solutionsHref}
                lang={lang}
                switchHref={switchHref}
                activeWorkHref={workHref}
                activePage={page}
                solutionsLabel={dict.nav.solutions}
              />
            </div>
          </details>

          <nav className="hidden min-w-0 items-center justify-center gap-4 text-[13px] font-bold text-[#5c6b78] lg:flex xl:gap-6 xl:text-sm">
            {beforeSolutionsNav.map((item) => (
              <DesktopLink key={item.href} href={item.href}>
                {item.label}
              </DesktopLink>
            ))}

            <div className="group relative">
              <Link
                href={`/${lang}#solucoes`}
                className={`flex items-center gap-1 border-b-2 py-2 transition hover:border-[#b88228] hover:text-[#071f3b] ${
                  page === "solutions" ? "border-[#b88228] text-[#071f3b]" : "border-transparent"
                }`}
              >
                <span>{dict.nav.solutions}</span>
                <ChevronDown className="h-4 w-4 shrink-0 transition group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="grid gap-1 border border-[#d9e0e6] bg-white p-2 shadow-[0_16px_40px_rgba(7,31,59,.14)]">
                  {solutionSlugs.map((slug) => (
                    <Link
                      key={slug}
                      href={`${solutionsHref}/${slug}`}
                      className="border-l-2 border-transparent px-3 py-3 text-[#071f3b] transition hover:border-[#b88228] hover:bg-[#f8faf9]"
                    >
                      <span className="block font-extrabold">{solutions[slug].label}</span>
                      <span className="mt-1 block text-xs font-semibold leading-5 text-[#5c6b78]">
                        {solutions[slug].eyebrow}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {afterSolutionsNav.map((item) => {
              const active = page === "work" ? item.href === workHref : false;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap border-b-2 py-2 transition hover:border-[#b88228] hover:text-[#071f3b] ${
                    active ? "border-[#b88228] text-[#071f3b]" : "border-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden justify-end lg:flex">
            <LanguageSwitcher lang={lang} switchHref={switchHref} />
          </div>
        </div>
    </header>
  );
}

function DesktopLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="whitespace-nowrap border-b-2 border-transparent py-2 transition hover:border-[#b88228] hover:text-[#071f3b]">
      {children}
    </Link>
  );
}

function MobileNavLinks({
  beforeSolutionsNav,
  afterSolutionsNav,
  solutions,
  solutionsHref,
  lang,
  switchHref,
  activePage,
  activeWorkHref,
  solutionsLabel,
}: {
  beforeSolutionsNav: Array<{ href: string; label: string }>;
  afterSolutionsNav: Array<{ href: string; label: string }>;
  solutions: ReturnType<typeof getSiteContent>["solutions"]["groups"];
  solutionsHref: string;
  lang: Locale;
  switchHref: (locale: Locale) => string;
  activePage: HeaderProps["page"];
  activeWorkHref: string;
  solutionsLabel: string;
}) {
  return (
    <div className="grid gap-2 text-sm font-bold">
      {beforeSolutionsNav.map((item) => (
        <MobileLink key={item.href} href={item.href}>
          {item.label}
        </MobileLink>
      ))}
      <div className={`border border-[#d9e0e6] ${activePage === "solutions" ? "bg-[#f8faf9]" : "bg-white"}`}>
        <Link href={`/${lang}#solucoes`} className="flex items-center justify-between px-3 py-3 text-[#071f3b]">
          <span>{solutionsLabel}</span>
          <ChevronDown className="h-4 w-4" />
        </Link>
        <div className="grid border-t border-[#d9e0e6]">
          {solutionSlugs.map((slug) => (
            <Link key={slug} href={`${solutionsHref}/${slug}`} className="px-4 py-3 text-[#5c6b78] hover:bg-[#f8faf9] hover:text-[#071f3b]">
              <span className="block font-extrabold text-[#071f3b]">{solutions[slug].label}</span>
              <span className="block text-xs">{solutions[slug].eyebrow}</span>
            </Link>
          ))}
        </div>
      </div>
      {afterSolutionsNav.map((item) => (
        <MobileLink key={item.href} href={item.href} active={activePage === "work" && item.href === activeWorkHref}>
          {item.label}
        </MobileLink>
      ))}
      <div className="mt-2 border-t border-[#d9e0e6] pt-3">
        <LanguageSwitcher lang={lang} switchHref={switchHref} />
      </div>
    </div>
  );
}

function MobileLink({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <Link href={href} className={`border px-3 py-3 text-[#071f3b] ${active ? "border-[#b88228] bg-[#f8faf9]" : "border-[#d9e0e6] bg-white"}`}>
      {children}
    </Link>
  );
}

function LanguageSwitcher({ lang, switchHref }: { lang: Locale; switchHref: (locale: Locale) => string }) {
  return (
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
  );
}
