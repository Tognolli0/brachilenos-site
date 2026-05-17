import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  BadgeCheck,
  BookOpenText,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  HelpCircle,
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
const audienceIcons = [Building2, Globe2, BriefcaseBusiness, UsersRound];
const controlIcons = [ClipboardCheck, Calculator, FileCheck2, CheckCircle2, LineChart, ShieldCheck];
const riskIcons = [Globe2, Scale, ReceiptText, AlertTriangle];
const contentIcons = [BookOpenText, Scale, UsersRound];

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
        <section className="overflow-hidden border-b border-[#071f3b]/10 bg-[linear-gradient(120deg,#f8faf9_0%,#ffffff_52%,#eef4f2_100%)]">
          <div className="shell hero-grid py-12 lg:py-16">
            <div className="min-w-0">
              <p className="eyebrow mb-5">{content.home.hero.eyebrow}</p>
              <h1
                className="display-serif max-w-3xl text-balance font-bold text-[#071f3b]"
                style={{ fontSize: "clamp(2rem, 3.8vw, 3.35rem)", lineHeight: 1.08 }}
              >
                {content.home.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-[clamp(1rem,1.5vw,1.15rem)] leading-8 text-[#31465a]">
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

            <aside
              className="min-w-0 border border-[#d9e0e6] bg-white p-5 shadow-[0_18px_48px_rgba(7,31,59,.08)] lg:relative lg:overflow-hidden sm:p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 hidden h-52 w-52 rounded-full border-8 border-[#b88228]/20 lg:block" />
              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center bg-[#071f3b] text-white">
                  <Landmark className="h-6 w-6" />
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
                    <Icon className="mb-5 h-9 w-9 text-[#b88228]" />
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
                          <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0f6f43]" />
                          <span>{service.title}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`${solutionsHref}/${slug}`} className="mt-6 inline-flex items-center gap-2 font-extrabold text-[#071f3b]">
                      {content.labels.viewDetails}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="quem-somos" className="section-pad bg-white">
          <div className="shell grid gap-8 lg:grid-cols-[.42fr_1fr]">
            <div>
              <p className="eyebrow mb-3">{content.home.aboutEyebrow}</p>
              <h2 className="display-serif text-balance text-[clamp(2rem,4vw,3.35rem)] font-bold leading-tight text-[#071f3b]">
                {content.home.aboutTitle}
              </h2>
            </div>
            <div className="grid gap-5 text-[1.02rem] leading-8 text-[#31465a]">
              {content.home.aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="perfis" className="section-pad bg-[#f8faf9]">
          <div className="shell">
            <SectionHeading eyebrow={dict.home.audiences.eyebrow} title={dict.home.audiences.title} text={dict.home.audiences.text} />
            <div className="mb-7 flex flex-wrap justify-center gap-3">
              {dict.home.audiences.proofs.map((proof) => (
                <span key={proof} className="border border-[#d9e0e6] bg-white px-4 py-2 text-sm font-bold text-[#071f3b]">
                  {proof}
                </span>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {dict.home.audiences.cards.map((card, index) => {
                const Icon = audienceIcons[index] || BadgeCheck;
                return (
                  <article key={card.title} className="min-w-0 border border-[#d9e0e6] bg-white p-5 shadow-[0_12px_32px_rgba(7,31,59,.05)]">
                    <Icon className="mb-4 h-8 w-8 text-[#b88228]" />
                    <h3 className="text-lg font-extrabold text-[#071f3b]">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#5c6b78]">{card.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="processo" className="section-pad bg-[#071f3b] text-white">
          <div className="shell">
            <SectionHeading eyebrow={content.home.method.eyebrow} title={content.home.method.title} dark />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {content.home.method.steps.map((step, index) => {
                const Icon = methodIcons[index] || CheckCircle2;
                return (
                  <article key={step.title} className="min-w-0 border border-white/15 bg-white/[.06] p-6">
                    <span className="mb-5 flex items-center justify-between gap-4">
                      <Icon className="h-8 w-8 text-[#d7aa52]" />
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

        <section className="section-pad bg-white">
          <div className="shell">
            <SectionHeading align="left" eyebrow={dict.home.control.eyebrow} title={dict.home.control.title} text={dict.home.control.text} />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {dict.home.control.items.map((item, index) => {
                const Icon = controlIcons[index] || ShieldCheck;
                return (
                  <article key={item.title} className="min-w-0 border border-[#d9e0e6] p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center bg-[#f8faf9] text-[#b88228]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-black uppercase text-[#b88228]">{item.tag}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#071f3b]">{item.title}</h3>
                    <p className="mt-3 leading-7 text-[#5c6b78]">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-pad bg-[#eef4f2]">
          <div className="shell grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow mb-3">{dict.home.compliance.eyebrow}</p>
              <h2 className="display-serif text-balance text-[clamp(2rem,4vw,3.35rem)] font-bold leading-tight text-[#071f3b]">
                {dict.home.compliance.title}
              </h2>
              <p className="mt-4 leading-7 text-[#5c6b78]">{dict.home.compliance.text}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={`/${lang}#contato`} icon={AlertTriangle}>
                  {dict.home.compliance.cta}
                </ButtonLink>
                <ButtonLink href={`/${lang}#conteudo`} icon={BookOpenText} variant="secondary">
                  {dict.home.compliance.secondary}
                </ButtonLink>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {dict.home.compliance.items.map((item, index) => {
                const Icon = riskIcons[index] || AlertTriangle;
                return (
                  <article key={item.title} className="min-w-0 border border-[#d9e0e6] bg-white p-5 shadow-[0_12px_32px_rgba(7,31,59,.05)]">
                    <Icon className="mb-4 h-8 w-8 text-[#c91f28]" />
                    <h3 className="text-lg font-extrabold text-[#071f3b]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#5c6b78]">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="shell">
            <SectionHeading eyebrow={dict.home.plans.eyebrow} title={dict.home.plans.title} />
            <div className="grid gap-5 lg:grid-cols-3">
              {dict.home.plans.items.map((plan, index) => (
                <article
                  key={plan.title}
                  className={`min-w-0 border p-6 shadow-[0_12px_32px_rgba(7,31,59,.06)] ${
                    index === 1 ? "border-[#b88228] bg-[#071f3b] text-white" : "border-[#d9e0e6] bg-white"
                  }`}
                >
                  {index === 1 ? <span className="mb-4 inline-flex bg-[#d7aa52] px-3 py-1 text-xs font-black uppercase text-[#071f3b]">{dict.home.plans.featured}</span> : null}
                  <h3 className={`display-serif text-2xl font-bold leading-tight ${index === 1 ? "text-white" : "text-[#071f3b]"}`}>{plan.title}</h3>
                  <p className={`mt-3 leading-7 ${index === 1 ? "text-white/75" : "text-[#5c6b78]"}`}>{plan.text}</p>
                  <ul className="mt-5 grid gap-2">
                    {plan.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2 text-sm font-semibold">
                        <BadgeCheck className={`mt-0.5 h-4 w-4 shrink-0 ${index === 1 ? "text-[#d7aa52]" : "text-[#0f6f43]"}`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#071f3b]/10 bg-white py-12">
          <div className="shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow mb-3">{content.home.workBand.eyebrow}</p>
              <h2 className="display-serif text-balance text-[clamp(1.9rem,4vw,3rem)] font-bold leading-tight text-[#071f3b]">
                {content.home.workBand.title}
              </h2>
              <p className="mt-4 leading-7 text-[#5c6b78]">{content.home.workBand.text}</p>
            </div>
            <ButtonLink href={workHref} icon={UsersRound} variant="secondary">
              {content.home.workBand.cta}
            </ButtonLink>
          </div>
        </section>

        <section id="conteudo" className="section-pad bg-[#f8faf9]">
          <div className="shell">
            <SectionHeading eyebrow={dict.home.content.eyebrow} title={dict.home.content.title} />
            <div className="grid gap-4 lg:grid-cols-3">
              {dict.home.content.cards.map((card, index) => {
                const Icon = contentIcons[index] || BookOpenText;
                return (
                  <article key={card.title} className="min-w-0 border border-[#d9e0e6] bg-white p-6 shadow-[0_12px_32px_rgba(7,31,59,.05)]">
                    <span className="mb-5 grid h-12 w-12 place-items-center bg-[#071f3b] text-[#d7aa52]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <p className="text-xs font-black uppercase text-[#b88228]">{card.tag}</p>
                    <h3 className="mt-2 text-xl font-extrabold text-[#071f3b]">{card.title}</h3>
                    <p className="mt-3 leading-7 text-[#5c6b78]">{card.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="shell grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
            <div>
              <p className="eyebrow mb-3">{dict.home.faq.eyebrow}</p>
              <h2 className="display-serif text-balance text-[clamp(2rem,4vw,3.35rem)] font-bold leading-tight text-[#071f3b]">
                {dict.home.faq.title}
              </h2>
              <p className="mt-4 leading-7 text-[#5c6b78]">{dict.home.faq.text}</p>
            </div>
            <div className="grid gap-3">
              {dict.home.faq.items.map((item) => (
                <details key={item.question} className="group border border-[#d9e0e6] bg-white">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 font-extrabold text-[#071f3b] [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <HelpCircle className="h-5 w-5 shrink-0 text-[#b88228]" />
                  </summary>
                  <p className="border-t border-[#d9e0e6] px-5 pb-5 pt-4 leading-7 text-[#5c6b78]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section-pad bg-[#f8faf9]">
          <div className="shell grid gap-9 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-3">{content.home.contact.eyebrow}</p>
              <h2 className="display-serif text-balance text-[clamp(2rem,4vw,3.35rem)] font-bold leading-tight text-[#071f3b]">
                {content.home.contact.title}
              </h2>
              <p className="mt-4 leading-7 text-[#5c6b78]">{content.home.contact.text}</p>
              <div className="mt-7 grid gap-3">
                {content.home.contact.highlights.map((highlight) => (
                  <span key={highlight} className="flex min-h-14 items-center gap-3 border border-[#d9e0e6] bg-white p-3 font-semibold text-[#102235]">
                    <ReceiptText className="h-5 w-5 shrink-0 text-[#b88228]" />
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
      <h2 className={`display-serif text-balance text-[clamp(1.85rem,4vw,3.35rem)] font-bold leading-tight ${dark ? "text-white" : "text-[#071f3b]"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-4 text-lg leading-8 ${dark ? "text-white/75" : "text-[#5c6b78]"}`}>{text}</p> : null}
    </div>
  );
}
