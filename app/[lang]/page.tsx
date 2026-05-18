import type { Metadata } from "next";
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
  Landmark,
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
import { getDictionary, isLocale, locales, type Locale } from "@/lib/dictionaries";
import { getSiteContent, solutionSlugs } from "@/lib/site-content";

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

export default async function HomePage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = (isLocale(paramLang) ? paramLang : "pt-br") as Locale;
  const dict = getDictionary(lang);
  const content = getSiteContent(lang);
  const workHref = `/${lang}/${content.routes.work}`;
  const solutionsHref = `/${lang}/${content.routes.solutions}`;

  return (
    <>
      <Header lang={lang} dict={dict} page="home" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            name: "BRACHILENOS",
            areaServed: ["Brazil", "Chile"],
            serviceType: ["Accounting", "Tax planning", "Finance BPO", "International tax advisory"],
            availableLanguage: ["pt-BR", "es", "en"],
            url: process.env.NEXT_PUBLIC_SITE_URL || "https://brachilenos.com",
          }),
        }}
      />
      <main>
        <section className="overflow-hidden border-b border-[#071f3b]/10 bg-[linear-gradient(120deg,#f8faf9_0%,#ffffff_58%,#eef4f2_100%)]">
          <div className="shell grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(330px,.68fr)] lg:items-center lg:py-16">
            <div className="min-w-0">
              <p className="eyebrow mb-5">{content.home.hero.eyebrow}</p>
              <h1
                className="display-serif max-w-3xl text-balance font-bold text-[#071f3b]"
                style={{ fontSize: "clamp(1.9rem, 3.1vw, 2.8rem)", lineHeight: 1.12 }}
              >
                {content.home.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#31465a] sm:text-lg">
                {content.home.hero.text}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={`/${lang}#contato`} icon={WhatsAppIcon} className="border-[#071f3b] bg-[#071f3b] text-white">
                  {content.home.hero.primary}
                </ButtonLink>
                <ButtonLink href={`/${lang}#solucoes`} icon={ArrowRight} variant="secondary">
                  {content.home.hero.secondary}
                </ButtonLink>
              </div>
            </div>

            <aside className="min-w-0 border border-[#d9e0e6] bg-white p-5 shadow-[0_18px_48px_rgba(7,31,59,.08)] sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center bg-[#071f3b] text-white">
                  <Landmark className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-[#d7aa52]">BRACHILENOS</p>
                  <h2 className="font-extrabold text-[#071f3b]">Operação integrada Brasil x Chile</h2>
                </div>
              </div>
              <div className="grid gap-3">
                {content.home.proof.map((item) => (
                  <div key={item.label} className="border-l-4 border-[#b88228] bg-[#f8faf9] p-4">
                    <strong className="display-serif block text-3xl text-[#071f3b]">{item.value}</strong>
                    <span className="mt-1 block text-sm font-bold leading-5 text-[#5c6b78]">{item.label}</span>
                  </div>
                ))}
              </div>
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
                  <article key={service.title} className="min-w-0 border border-[#d9e0e6] bg-white p-6 shadow-[0_12px_32px_rgba(7,31,59,.06)]">
                    <Icon className="mb-5 h-9 w-9 text-[#b88228]" aria-hidden />
                    <h3 className="text-xl font-extrabold text-[#071f3b]">{service.title}</h3>
                    <p className="mt-3 leading-7 text-[#5c6b78]">{service.text}</p>
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
                  <article key={slug} className="flex min-h-full min-w-0 flex-col border border-[#d9e0e6] bg-white p-6 shadow-[0_12px_32px_rgba(7,31,59,.06)]">
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

        <section className="section-pad bg-[#071f3b] text-white">
          <div className="shell">
            <SectionHeading eyebrow={content.home.method.eyebrow} title={content.home.method.title} dark />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {content.home.method.steps.map((step, index) => {
                const Icon = methodIcons[index] || CheckCircle2;
                return (
                  <article key={step.title} className="min-w-0 border border-white/15 bg-white/[.06] p-6">
                    <span className="mb-5 flex items-center justify-between gap-4">
                      <Icon className="h-8 w-8 text-[#d7aa52]" aria-hidden />
                      <span className="font-black text-white/40">{String(index + 1).padStart(2, "0")}</span>
                    </span>
                    <h3 className="text-xl font-extrabold text-white">{step.title}</h3>
                    <p className="mt-3 leading-7 text-white/75">{step.text}</p>
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

        <section id="contato" className="section-pad bg-[#f8faf9]">
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
            <CommercialLeadForm dict={dict} />
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
