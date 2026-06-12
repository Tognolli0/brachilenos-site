import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  LineChart,
  ReceiptText,
  Scale,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CommercialLeadForm } from "@/components/CommercialLeadForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { contactEmail, contactWhatsAppDisplay } from "@/lib/contact";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/dictionaries";
import { getSiteContent, solutionSlugs } from "@/lib/site-content";
import { getSiteUrl } from "@/lib/site-url";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: paramLang } = await params;
  const lang = isLocale(paramLang) ? paramLang : "pt-br";
  const dict = getDictionary(lang);

  return {
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "pt-BR": "/pt-br",
        es: "/es",
        en: "/en",
      },
    },
  };
}

const serviceIcons = [Calculator, Scale, LineChart, Building2, Globe2, ShieldCheck];
const methodIcons = [ClipboardCheck, FileCheck2, BriefcaseBusiness, CheckCircle2];
const serviceTargetSlugs = ["brasil", "brasil-chile", "brasil", "chile", "brasil-chile", "brasil-chile"] as const;

export default async function HomePage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = (isLocale(paramLang) ? paramLang : "pt-br") as Locale;
  const dict = getDictionary(lang);
  const content = getSiteContent(lang);
  const workHref = `/${lang}/${content.routes.work}`;
  const solutionsHref = `/${lang}/${content.routes.solutions}`;
  const siteUrl = getSiteUrl();

  return (
    <>
      <Header lang={lang} page="home" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            name: "BRACHILENOS",
            areaServed: ["Brazil", "Chile"],
            serviceType: ["Accounting", "Finance BPO", "Business management", "International business advisory"],
            availableLanguage: ["pt-BR", "es", "en"],
            url: `${siteUrl}/${lang}`,
            email: contactEmail,
            telephone: contactWhatsAppDisplay,
          }),
        }}
      />
      <main>
        <section className="border-b border-[#071f3b]/10 bg-[#071f3b] text-white">
          <div className="shell grid min-w-0 gap-7 py-9 lg:min-h-[calc(100svh-73px)] lg:grid-cols-[minmax(0,1fr)_minmax(330px,.55fr)] lg:items-center lg:py-10 xl:gap-9">
            <div className="min-w-0">
              <p className="eyebrow mb-4">{content.home.hero.eyebrow}</p>
              <h1
                className="max-w-3xl text-balance font-black text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 3.12rem)", lineHeight: 1.04 }}
              >
                {content.home.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-lg lg:max-w-xl xl:max-w-2xl">
                {content.home.hero.text}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={`/${lang}#contato`} icon={WhatsAppIcon} variant="light">
                  {content.home.hero.primary}
                </ButtonLink>
                <Link
                  href={`/${lang}#solucoes`}
                  className="focus-ring inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 border border-white/35 bg-transparent px-5 text-center text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#071f3b] hover:shadow-xl sm:w-auto"
                >
                  <span className="min-w-0 break-words">{content.home.hero.secondary}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {content.home.proof.map((item) => (
                  <div key={item.label} className="border border-white/15 bg-white/[.06] p-3.5">
                    <strong className="block text-sm font-black uppercase text-[#d7aa52]">{item.value}</strong>
                    <span className="mt-2 block text-sm font-semibold leading-5 text-white/72">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="min-w-0 border border-white/15 bg-white/[.07] p-4 shadow-[0_18px_48px_rgba(0,0,0,.18)] sm:p-5 xl:p-6">
              <div className="mb-5 grid gap-4 border-b border-white/15 pb-5 sm:grid-cols-[112px_minmax(0,1fr)] sm:items-center lg:grid-cols-[104px_minmax(0,1fr)] xl:grid-cols-[116px_minmax(0,1fr)]">
                <Image
                  src="/assets/logo-brachilenos-symbol-large.webp"
                  width={640}
                  height={640}
                  alt="Logo BRACHILENOS Contabilidade Brasil x Chile"
                  className="mx-auto h-28 w-28 rounded-full object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,.35)] sm:h-28 sm:w-28 lg:h-[104px] lg:w-[104px] xl:h-[116px] xl:w-[116px]"
                  priority
                />
                <div className="min-w-0 text-center sm:text-left">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d7aa52]">{content.home.brandSeal.eyebrow}</p>
                  <p className="mt-2 display-serif text-[1.3rem] font-bold leading-tight text-white sm:text-[1.4rem]">{content.home.brandSeal.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/68">{content.home.brandSeal.text}</p>
                </div>
              </div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#d7aa52]">{content.home.heroPanel.eyebrow}</p>
              <h2 className="mt-2 text-[1.35rem] font-black leading-tight text-white sm:text-2xl">{content.home.heroPanel.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/72">{content.home.heroPanel.text}</p>
              <div className="mt-5 grid gap-2.5">
                {content.home.heroPanel.items.map((item) => (
                  <span key={item} className="flex min-h-11 items-center gap-3 border border-white/15 bg-[#071f3b]/35 px-3 py-2.5 text-sm font-bold text-white/82">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#d7aa52]" aria-hidden />
                    {item}
                  </span>
                ))}
              </div>
              <Link href={`/${lang}#contato`} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-white px-5 text-sm font-extrabold text-[#071f3b] transition hover:-translate-y-0.5 hover:shadow-xl">
                {content.home.heroPanel.cta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </aside>
          </div>
        </section>

        <section id="solucoes" className="section-pad bg-white">
          <div className="shell">
            <SectionHeading eyebrow={content.solutions.indexEyebrow} title={content.home.serviceTitle} text={content.home.serviceText} />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {content.home.serviceCards.map((service, index) => {
                const Icon = serviceIcons[index] || BadgeCheck;
                return (
                  <article
                    key={service.title}
                    className="group flex min-w-0 flex-col border border-[#d9e0e6] bg-white p-6 shadow-[0_12px_32px_rgba(7,31,59,.06)] transition hover:-translate-y-1 hover:border-[#b88228] hover:shadow-[0_18px_42px_rgba(7,31,59,.12)]"
                  >
                    <Icon className="mb-5 h-9 w-9 text-[#b88228]" aria-hidden />
                    <h3 className="text-xl font-extrabold text-[#071f3b]">{service.title}</h3>
                    <p className="mt-3 leading-7 text-[#5c6b78]">{service.text}</p>
                    <Link
                      href={`${solutionsHref}/${serviceTargetSlugs[index] ?? "brasil-chile"}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#071f3b] group-hover:text-[#b88228]"
                    >
                      {content.labels.viewSolution}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-pad bg-[#eef4f2]">
          <div className="shell">
            <SectionHeading align="left" eyebrow={content.solutions.indexEyebrow} title={content.solutions.title} text={content.solutions.text} />
            <div className="grid gap-5 lg:grid-cols-3">
              {solutionSlugs.map((slug) => {
                const group = content.solutions.groups[slug];
                return (
                  <article key={slug} className="flex min-h-full min-w-0 flex-col border border-[#d9e0e6] bg-white p-6 shadow-[0_12px_32px_rgba(7,31,59,.06)] transition hover:-translate-y-1 hover:border-[#b88228] hover:shadow-[0_18px_42px_rgba(7,31,59,.12)]">
                    <span className="mb-4 inline-flex w-fit bg-[#071f3b] px-3 py-1 text-xs font-black uppercase text-white">
                      {group.label}
                    </span>
                    <h3 className="display-serif text-2xl font-bold leading-tight text-[#071f3b]">{group.title}</h3>
                    <p className="mt-3 leading-7 text-[#5c6b78]">{group.description}</p>
                    <ul className="mt-5 grid gap-2 text-sm font-semibold text-[#102235]">
                      {group.services.slice(0, 4).map((service) => (
                        <li key={service.title} className="flex gap-2">
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0f6f43]" aria-hidden />
                          <span>{service.title}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`${solutionsHref}/${slug}`} className="mt-6 inline-flex items-center gap-2 font-extrabold text-[#071f3b]">
                      {content.labels.viewDetails}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#071f3b] py-12 text-white">
          <div className="shell">
            <SectionHeading eyebrow={content.home.method.eyebrow} title={content.home.method.title} dark />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {content.home.method.steps.map((step, index) => {
                const Icon = methodIcons[index] || CheckCircle2;
                return (
                  <article key={step.title} className="relative min-w-0 border border-white/15 bg-white/[.06] p-5">
                    <span className="mb-4 flex items-center justify-between gap-4">
                      <Icon className="h-7 w-7 text-[#d7aa52]" aria-hidden />
                      <span className="text-sm font-black text-white/40">{String(index + 1).padStart(2, "0")}</span>
                    </span>
                    <h3 className="text-lg font-extrabold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/72">{step.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-[#071f3b]/10 bg-white py-12">
          <div className="shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow mb-3">{content.home.workBand.eyebrow}</p>
              <h2 className="display-serif text-balance text-[clamp(1.55rem,2.6vw,2.2rem)] font-bold leading-tight text-[#071f3b]">
                {content.home.workBand.title}
              </h2>
              <p className="mt-4 leading-7 text-[#5c6b78]">{content.home.workBand.text}</p>
            </div>
            <ButtonLink href={workHref} icon={UsersRound} variant="secondary">
              {content.home.workBand.cta}
            </ButtonLink>
          </div>
        </section>

        <section id="contato" className="section-pad scroll-mt-24 bg-[#f8faf9]">
          <div className="shell grid gap-9 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-3">{content.home.contact.eyebrow}</p>
              <h2 className="display-serif text-balance text-[clamp(1.65rem,3vw,2.35rem)] font-bold leading-tight text-[#071f3b]">
                {content.home.contact.title}
              </h2>
              <p className="mt-4 leading-7 text-[#5c6b78]">{content.home.contact.text}</p>
              <div className="mt-7 grid gap-3">
                {content.home.contact.highlights.map((highlight) => (
                  <span key={highlight} className="flex min-h-14 items-center gap-3 border border-[#d9e0e6] bg-white p-3 font-semibold text-[#102235]">
                    <ReceiptText className="h-5 w-5 shrink-0 text-[#b88228]" aria-hidden />
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
            <CommercialLeadForm forms={dict.forms} />
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={`mb-10 max-w-3xl min-w-0 ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className={`display-serif text-balance text-[clamp(1.65rem,3vw,2.35rem)] font-bold leading-tight ${dark ? "text-white" : "text-[#071f3b]"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-4 text-lg leading-8 ${dark ? "text-white/75" : "text-[#5c6b78]"}`}>{text}</p> : null}
    </div>
  );
}
