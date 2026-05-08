import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CalendarCheck,
  CheckCircle2,
  Database,
  FileCheck2,
  Globe2,
  Landmark,
  Languages,
  LineChart,
  MapPin,
  MessageCircle,
  Network,
  ReceiptText,
  Send,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CommercialLeadForm } from "@/components/CommercialLeadForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { assetPath } from "@/lib/assets";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/dictionaries";

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
    openGraph: {
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      url: `/${lang}`,
      images: [{ url: "/assets/santiago-hero.webp", width: 1024, height: 1536, alt: dict.meta.homeTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      images: ["/assets/santiago-hero.webp"],
    },
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

const serviceIcons = [Calculator, Landmark, LineChart, FileCheck2, BriefcaseBusiness, ShieldCheck];
const contactIcons = [MessageCircle, Languages, Database];
const audienceIcons = [Building2, MapPin, Globe2, BriefcaseBusiness];
const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyBmaWxsPScjZWVmNGYyJy8+PC9zdmc+";

export default async function HomePage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = (isLocale(paramLang) ? paramLang : "pt-br") as Locale;
  const dict = getDictionary(lang);
  const copy = homePageCopy[lang];

  return (
    <>
      <Header lang={lang} dict={dict} page="home" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            name: "Contabilidade Brachilenos",
            areaServed: ["Brazil", "Chile"],
            serviceType: [
              "Accounting",
              "Tax planning",
              "Financial BPO",
              "International tax advisory",
              "Corporate compliance",
            ],
            availableLanguage: ["pt-BR", "es", "en"],
            url: process.env.NEXT_PUBLIC_SITE_URL || "https://brachilenos.com",
          }),
        }}
      />
      <main id="conteudo-principal">
        <section className="overflow-hidden border-b border-[#071f3b]/10 bg-[linear-gradient(120deg,rgba(248,250,249,.98)_0%,rgba(248,250,249,.92)_48%,rgba(31,107,143,.14)_100%)]">
          <div className="shell grid min-h-[auto] items-center gap-8 py-10 sm:py-14 lg:min-h-[640px] lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.82fr)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(430px,0.86fr)]">
            <div className="min-w-0 max-w-2xl">
              <p className="eyebrow mb-3">{dict.home.hero.eyebrow}</p>
              <h1 className="display-serif text-balance text-[clamp(2.05rem,8.8vw,4.25rem)] font-bold leading-[.95] text-[#071f3b]">
                {dict.home.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-[clamp(1rem,2vw,1.26rem)] leading-8 text-[#31465a]">
                {dict.home.hero.subtitle}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={`/${lang}#contato`} icon={CalendarCheck}>
                  {dict.home.hero.primary}
                </ButtonLink>
              </div>
              <div className="mt-8 grid border border-[#071f3b]/10 bg-[#071f3b]/10 sm:grid-cols-3">
                {dict.home.hero.trust.map((item) => (
                  <span key={item} className="min-w-0 bg-white p-4 text-sm font-extrabold leading-5 text-[#071f3b] sm:min-h-16">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5 grid gap-2 text-sm font-bold text-[#071f3b] sm:grid-cols-2">
                {dict.home.hero.assurances.map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-[#0f6f43]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[310px] min-w-0 overflow-hidden border border-[#071f3b]/10 bg-white shadow-[0_18px_50px_rgba(7,31,59,.12)] sm:min-h-[390px] lg:min-h-[500px]">
              <Image
                src={assetPath("/assets/santiago-hero.webp")}
                alt={copy.heroImageAlt}
                fill
                priority
                sizes="(min-width: 1280px) 430px, (min-width: 1024px) 38vw, 100vw"
                className="object-cover object-top"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,31,59,.7),rgba(7,31,59,.12)_52%,rgba(248,250,249,.05))]" />
              <div className="absolute inset-x-3 bottom-3 border-l-4 border-[#b88228] bg-[#071f3b]/95 p-4 text-white sm:inset-x-5 sm:bottom-5 sm:p-5">
                <span className="block text-sm text-white/70">{dict.home.hero.routeLabel}</span>
                <strong className="display-serif my-1 block text-2xl sm:text-3xl">{dict.home.hero.routeTitle}</strong>
                <small className="block text-sm leading-6 text-white/75">{dict.home.hero.routeText}</small>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#071f3b]/10 bg-white py-8">
          <div className="shell grid gap-4 md:grid-cols-4">
            {dict.home.authority.metrics.map((metric) => (
              <div key={metric.label} className="border-l-4 border-[#b88228] bg-[#f8faf9] p-5">
                <strong className="display-serif block text-3xl text-[#071f3b]">{metric.value}</strong>
                <span className="mt-1 block text-sm font-bold text-[#5c6b78]">{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="modelo" className="section-pad bg-[#eef4f2]">
          <div className="shell">
            <SectionHeading eyebrow={dict.home.model.eyebrow} title={dict.home.model.title} text={dict.home.model.text} />
            <div className="grid gap-5 md:grid-cols-2">
              {dict.home.model.tracks.map((track, index) => {
                const Icon = index === 0 ? Building2 : Network;
                return (
                  <article key={track.title} className="border border-[#d9e0e6] border-t-[5px] border-t-[#1f6b8f] bg-white p-7 shadow-[0_12px_32px_rgba(7,31,59,.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(7,31,59,.1)] even:border-t-[#b88228]">
                    <Icon className="mb-5 h-9 w-9 text-[#b88228]" />
                    <h3 className="text-lg font-extrabold text-[#071f3b]">{track.title}</h3>
                    <p className="mt-3 text-[#5c6b78]">{track.text}</p>
                    <ul className="my-5 list-disc space-y-2 pl-5 text-[#102235]">
                      {track.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <Link href={index === 0 ? `/${lang}#contato` : `/${lang}/carreiras`} className="border-b-2 border-[#b88228] font-extrabold text-[#071f3b]">
                      {track.cta}
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="perfis" className="section-pad bg-white">
          <div className="shell">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <SectionHeading align="left" eyebrow={dict.home.audiences.eyebrow} title={dict.home.audiences.title} text={dict.home.audiences.text} />
              <AccountingProfilePanel proofs={[...dict.home.audiences.proofs]} copy={copy.profilePanel} />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {dict.home.audiences.cards.map((card, index) => {
                const Icon = audienceIcons[index];
                return (
                  <article key={card.title} className="min-w-0 border border-[#d9e0e6] bg-white p-6 shadow-[0_12px_32px_rgba(7,31,59,.06)]">
                    <Icon className="mb-5 h-9 w-9 text-[#b88228]" />
                    <h3 className="text-lg font-extrabold text-[#071f3b]">{card.title}</h3>
                    <p className="mt-3 leading-7 text-[#5c6b78]">{card.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="solucoes" className="section-pad bg-white">
          <div className="shell">
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="eyebrow mb-3">{dict.home.solutions.eyebrow}</p>
                <h2 className="display-serif text-balance text-[clamp(2rem,4vw,3.35rem)] font-bold leading-tight text-[#071f3b]">
                  {dict.home.solutions.title}
                </h2>
              </div>
              <div className="max-w-3xl">
                <p className="text-lg leading-8 text-[#5c6b78]">{dict.home.solutions.text}</p>
                <Link href={`/${lang}/servicos`} className="mt-5 inline-flex border-b-2 border-[#b88228] font-extrabold text-[#071f3b]">
                  {copy.servicesLink}
                </Link>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {dict.home.solutions.items.map((item, index) => {
                const Icon = serviceIcons[index];
                return (
                  <article key={item.title} className="min-w-0 border border-[#d9e0e6] border-t-4 border-t-[#b88228] bg-[#f8faf9] p-6">
                    <Icon className="mb-5 h-8 w-8 text-[#b88228]" aria-hidden />
                    <h3 className="text-lg font-extrabold text-[#071f3b]">{item.title}</h3>
                    <p className="mt-3 leading-7 text-[#5c6b78]">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="processo" className="section-pad bg-[linear-gradient(135deg,rgba(7,31,59,.97),rgba(11,52,91,.97))] text-white">
          <div className="shell">
            <SectionHeading eyebrow={dict.home.process.eyebrow} title={dict.home.process.title} dark />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {dict.home.process.steps.map((step, index) => (
                <article key={step.title} className="min-h-64 min-w-0 border border-white/20 bg-white/5 p-6">
                  <span className="mb-5 grid h-12 w-12 place-items-center bg-[#b88228] font-black text-[#071f3b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-extrabold text-white">{step.title}</h3>
                  <p className="mt-3 leading-7 text-white/75">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="planos" className="section-pad bg-white">
          <div className="shell">
            <SectionHeading align="left" eyebrow={dict.home.plans.eyebrow} title={dict.home.plans.title} />
            <div className="grid gap-5 lg:grid-cols-3">
              {dict.home.plans.items.map((plan, index) => (
                <article key={plan.title} className={`min-h-[340px] min-w-0 border bg-white p-6 shadow-[0_12px_32px_rgba(7,31,59,.06)] sm:p-7 ${index === 1 ? "border-[#b88228]/70 shadow-[0_18px_48px_rgba(184,130,40,.16)]" : "border-[#d9e0e6]"}`}>
                  {index === 1 ? <div className="mb-4 inline-flex bg-[#0f6f43]/10 px-3 py-1 text-xs font-black uppercase text-[#0f6f43]">{dict.home.plans.featured}</div> : null}
                  <h3 className="text-xl font-extrabold text-[#071f3b]">{plan.title}</h3>
                  <p className="mt-3 leading-7 text-[#5c6b78]">{plan.text}</p>
                  <ul className="mt-5 list-disc space-y-2 pl-5 text-[#102235]">
                    {plan.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(90deg,rgba(7,31,59,.96),rgba(15,111,67,.9))] py-12 text-white">
          <div className="shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow mb-3">{dict.home.careerBand.eyebrow}</p>
              <h2 className="display-serif max-w-3xl text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight text-white">
                {dict.home.careerBand.title}
              </h2>
              <p className="mt-4 max-w-3xl text-white/75">{dict.home.careerBand.text}</p>
            </div>
            <ButtonLink href={`/${lang}/carreiras`} icon={Send} variant="gold" className="shrink-0">
              {dict.home.careerBand.cta}
            </ButtonLink>
          </div>
        </section>

        <section id="contato" className="section-pad bg-white">
          <div className="shell grid gap-9 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-3">{dict.home.contact.eyebrow}</p>
              <h2 className="display-serif text-[clamp(2rem,4vw,3.35rem)] font-bold leading-tight text-[#071f3b]">
                {dict.home.contact.title}
              </h2>
              <p className="mt-4 leading-7 text-[#5c6b78]">{dict.home.contact.text}</p>
              <div className="mt-7 grid gap-3">
                {dict.home.contact.highlights.map((highlight, index) => {
                  const Icon = contactIcons[index];
                  return (
                    <span key={highlight} className="flex min-h-14 items-center gap-3 border border-[#d9e0e6] bg-[#f8faf9] p-3 font-semibold text-[#102235]">
                      <Icon className="h-5 w-5 shrink-0 text-[#b88228]" />
                      {highlight}
                    </span>
                  );
                })}
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
function AccountingProfilePanel({ proofs, copy }: { proofs: string[]; copy: (typeof homePageCopy)[Locale]["profilePanel"] }) {
  const rows = [
    { label: copy.rows[0].label, value: copy.rows[0].value, icon: ReceiptText },
    { label: copy.rows[1].label, value: copy.rows[1].value, icon: LineChart },
    { label: copy.rows[2].label, value: copy.rows[2].value, icon: Globe2 },
  ];

  return (
    <div className="relative min-h-[360px] overflow-hidden border border-[#d9e0e6] bg-[linear-gradient(135deg,#071f3b,#0b345b_52%,#0f6f43)] p-5 text-white shadow-[0_18px_44px_rgba(7,31,59,.14)] sm:p-7">
      <div className="absolute right-0 top-0 h-28 w-28 border-l border-b border-white/10 bg-white/5" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-[0.08em] text-[#d7aa52]">{copy.eyebrow}</span>
          <h3 className="display-serif mt-2 max-w-md text-balance text-3xl font-bold leading-tight text-white">
            {copy.title}
          </h3>
        </div>
        <Calculator className="h-10 w-10 shrink-0 text-[#d7aa52]" aria-hidden />
      </div>

      <div className="relative mt-7 grid gap-3">
        {rows.map((row) => {
          const Icon = row.icon;
          return (
            <div key={row.label} className="flex items-center gap-3 border border-white/15 bg-white/10 p-3 backdrop-blur">
              <span className="grid h-10 w-10 shrink-0 place-items-center bg-white text-[#071f3b]">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <strong className="block text-sm text-white">{row.label}</strong>
                <span className="block text-sm text-white/70">{row.value}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative mt-6 grid gap-2 sm:grid-cols-3">
        {proofs.map((proof) => (
          <span key={proof} className="min-h-16 border border-white/15 bg-white px-3 py-3 text-sm font-extrabold leading-5 text-[#071f3b] shadow-sm">
            {proof}
          </span>
        ))}
      </div>
    </div>
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
      <h2 className={`display-serif text-balance text-[clamp(1.85rem,4vw,3.35rem)] font-bold leading-tight ${dark ? "text-white" : "text-[#071f3b]"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-4 text-lg leading-8 ${dark ? "text-white/75" : "text-[#5c6b78]"}`}>{text}</p> : null}
    </div>
  );
}

const homePageCopy = {
  "pt-br": {
    heroImageAlt: "Santiago do Chile com referência Brasil e Chile",
    servicesLink: "Ver serviços detalhados",
    profilePanel: {
      eyebrow: "Mapa de atendimento",
      title: "Contabilidade, finanças e tributação em uma visão integrada",
      rows: [
        { label: "Fiscal", value: "IRPF, SII e impostos" },
        { label: "Financeiro", value: "caixa, custos e margem" },
        { label: "Estratégia", value: "Brasil x Chile" },
      ],
    },
  },
  es: {
    heroImageAlt: "Santiago de Chile con referencia Brasil y Chile",
    servicesLink: "Ver servicios detallados",
    profilePanel: {
      eyebrow: "Mapa de atención",
      title: "Contabilidad, finanzas y tributación en una visión integrada",
      rows: [
        { label: "Fiscal", value: "F22, SII e impuestos" },
        { label: "Financiero", value: "caja, costos y margen" },
        { label: "Estrategia", value: "Brasil x Chile" },
      ],
    },
  },
  en: {
    heroImageAlt: "Santiago, Chile with Brazil and Chile reference",
    servicesLink: "View detailed services",
    profilePanel: {
      eyebrow: "Service map",
      title: "Accounting, finance and tax in one integrated view",
      rows: [
        { label: "Tax", value: "IRPF, SII and taxes" },
        { label: "Finance", value: "cash, costs and margin" },
        { label: "Strategy", value: "Brazil x Chile" },
      ],
    },
  },
} satisfies Record<
  Locale,
  {
    heroImageAlt: string;
    servicesLink: string;
    profilePanel: { eyebrow: string; title: string; rows: { label: string; value: string }[] };
  }
>;

