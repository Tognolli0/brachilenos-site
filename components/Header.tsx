"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { localeLabels, locales, type Locale } from "@/lib/dictionaries";
import { getSiteContent, solutionSlugs } from "@/lib/site-content";

type HeaderProps = {
  lang: Locale;
  page?: "home" | "about" | "work" | "solutions";
};

export function Header({ lang, page = "home" }: HeaderProps) {
  const pathname = usePathname() || `/${lang}`;
  const content = getSiteContent(lang);
  const solutions = content.solutions.groups;
  const solutionsHref = `/${lang}/${content.routes.solutions}`;
  const workHref = `/${lang}/${content.routes.work}`;
  const contactLabel = content.labels.contact;

  const switchHref = (target: Locale) => {
    const parts = pathname.split("/");
    if (parts.length < 2) return `/${target}`;
    parts[1] = target;
    return parts.join("/") || `/${target}`;
  };

  const beforeSolutionsNav: Array<{ href: string; label: string; pageKey: "home" | "about" }> = [
    { href: `/${lang}`, label: content.labels.home, pageKey: "home" },
    { href: `/${lang}/sobre`, label: content.labels.about, pageKey: "about" },
  ];

  const afterSolutionsNav = [{ href: workHref, label: content.labels.workWithUs }];

  return (
    <header className="sticky top-0 z-40 border-b border-[#071f3b]/10 bg-[#f8faf9]/95 text-[#071f3b] backdrop-blur">
      <div className="shell grid min-h-[72px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-4">
        <Link href={`/${lang}`} className="flex min-w-0 items-center gap-3 text-[#071f3b]">
          <Image
            src="/assets/logo-brachilenos-symbol.webp"
            width={56}
            height={56}
            alt="BRACHILENOS"
            className="h-11 w-11 shrink-0 rounded-full object-contain drop-shadow-[0_6px_10px_rgba(7,31,59,.18)] sm:h-12 sm:w-12 lg:h-[52px] lg:w-[52px]"
            priority
          />
          <span className="grid min-w-0 gap-0.5 leading-none">
            <span className="hidden truncate text-[9px] font-black uppercase tracking-[0.22em] text-[#b88228] sm:block">
              Contabilidade
            </span>
            <span className="display-serif block truncate text-[1.05rem] font-bold tracking-wide sm:text-xl">
              BRACHILENOS
            </span>
            <span className="truncate text-[9px] font-black uppercase tracking-[0.14em] text-[#5c6b78] sm:text-[10px]">
              Brasil x Chile
            </span>
          </span>
        </Link>

        <details className="group justify-self-end lg:hidden">
          <summary
            aria-label={content.labels.openMenu}
            className="focus-ring grid h-12 w-12 cursor-pointer list-none place-items-center border border-[#d9e0e6] bg-white text-[#071f3b] transition hover:border-[#b88228] [&::-webkit-details-marker]:hidden"
          >
            <Menu className="h-5 w-5 group-open:hidden" aria-hidden />
            <X className="hidden h-5 w-5 group-open:block" aria-hidden />
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
              solutionsLabel={content.labels.solutionsMenu}
              contactLabel={contactLabel}
              overviewLabel={content.labels.overview}
            />
          </div>
        </details>

        <nav className="hidden min-w-0 items-center justify-center gap-4 text-sm font-bold text-[#5c6b78] lg:flex xl:gap-7">
          {beforeSolutionsNav.map((item) => (
            <DesktopLink key={item.href} href={item.href} active={page === item.pageKey}>
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
              <span>{content.labels.solutionsMenu}</span>
              <ChevronDown className="h-4 w-4 shrink-0 transition group-hover:rotate-180" aria-hidden />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-[360px] -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden border border-[#d9e0e6] bg-white shadow-[0_16px_40px_rgba(7,31,59,.14)]">
                <div className="bg-[#071f3b] p-4 text-white">
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-[#d9a441]">{content.labels.chooseMarket}</span>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/75">{content.labels.solutionsMenuText}</p>
                </div>
                <div className="grid gap-1 p-2">
                {solutionSlugs.map((slug) => (
                  <Link
                    key={slug}
                    href={`${solutionsHref}/${slug}`}
                    className="border-l-2 border-transparent px-3 py-3 text-[#071f3b] transition hover:border-[#b88228] hover:bg-[#f8faf9]"
                  >
                    <span className="block font-extrabold">{solutions[slug].label}</span>
                    <span className="mt-1 block text-xs font-semibold leading-5 text-[#5c6b78]">{solutions[slug].eyebrow}</span>
                  </Link>
                ))}
                  <Link href={`/${lang}#contato`} className="mt-1 border border-[#071f3b] bg-[#071f3b] px-3 py-3 text-center text-sm font-extrabold text-white transition hover:bg-[#102d50]">
                    {content.labels.talkSpecialist}
                  </Link>
                </div>
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

        <div className="hidden min-w-0 items-center justify-end gap-3 lg:flex">
          <Link
            href={`/${lang}#contato`}
            className="focus-ring inline-flex min-h-10 items-center justify-center border border-[#071f3b] bg-[#071f3b] px-4 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            {contactLabel}
          </Link>
          <LanguageSwitcher lang={lang} switchHref={switchHref} />
        </div>
      </div>
    </header>
  );
}

function DesktopLink({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`whitespace-nowrap border-b-2 py-2 transition hover:border-[#b88228] hover:text-[#071f3b] ${
        active ? "border-[#b88228] text-[#071f3b]" : "border-transparent"
      }`}
    >
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
  contactLabel,
  overviewLabel,
}: {
  beforeSolutionsNav: Array<{ href: string; label: string; pageKey: "home" | "about" }>;
  afterSolutionsNav: Array<{ href: string; label: string }>;
  solutions: ReturnType<typeof getSiteContent>["solutions"]["groups"];
  solutionsHref: string;
  lang: Locale;
  switchHref: (locale: Locale) => string;
  activePage: HeaderProps["page"];
  activeWorkHref: string;
  solutionsLabel: string;
  contactLabel: string;
  overviewLabel: string;
}) {
  return (
    <div className="grid gap-2 text-sm font-bold">
      {beforeSolutionsNav.map((item) => (
        <MobileLink key={item.href} href={item.href} active={activePage === item.pageKey}>
          {item.label}
        </MobileLink>
      ))}
      <details open={activePage === "solutions"} className={`group border border-[#d9e0e6] ${activePage === "solutions" ? "bg-[#f8faf9]" : "bg-white"}`}>
        <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-[#071f3b] [&::-webkit-details-marker]:hidden">
          <span>{solutionsLabel}</span>
          <ChevronDown className="h-4 w-4 transition group-open:rotate-180" aria-hidden />
        </summary>
        <div className="grid border-t border-[#d9e0e6]">
          <Link href={`/${lang}#solucoes`} className="px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#b88228] hover:bg-[#f8faf9]">
            {overviewLabel}
          </Link>
          {solutionSlugs.map((slug) => (
            <Link key={slug} href={`${solutionsHref}/${slug}`} className="px-4 py-3 text-[#5c6b78] hover:bg-[#f8faf9] hover:text-[#071f3b]">
              <span className="block font-extrabold text-[#071f3b]">{solutions[slug].label}</span>
              <span className="block text-xs">{solutions[slug].eyebrow}</span>
            </Link>
          ))}
        </div>
      </details>
      {afterSolutionsNav.map((item) => (
        <MobileLink key={item.href} href={item.href} active={activePage === "work" && item.href === activeWorkHref}>
          {item.label}
        </MobileLink>
      ))}
      <Link href={`/${lang}#contato`} className="border border-[#071f3b] bg-[#071f3b] px-3 py-3 text-center font-extrabold text-white">
        {contactLabel}
      </Link>
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
