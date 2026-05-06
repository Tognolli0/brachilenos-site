import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Database,
  FileCheck2,
  FileText,
  FolderCheck,
  Globe2,
  Handshake,
  Landmark,
  Languages,
  LineChart,
  MapPin,
  MessageCircle,
  Network,
  ReceiptText,
  Scale,
  SearchCheck,
  Send,
  ShieldCheck,
  Target,
  UsersRound,
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
const controlIcons = [CalendarDays, ReceiptText, FolderCheck, ClipboardList, LineChart, ShieldCheck];
const complianceIcons = [Scale, FileText, AlertTriangle, CheckCircle2];

export default async function HomePage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = (isLocale(paramLang) ? paramLang : "pt-br") as Locale;
  const dict = getDictionary(lang);

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
                <ButtonLink href={`/${lang}/carreiras`} icon={UsersRound} variant="secondary">
                  {dict.home.hero.secondary}
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
                src={assetPath("/assets/santiago-hero.png")}
                alt="Santiago do Chile com referência Brasil e Chile"
                fill
                priority
                sizes="(min-width: 1280px) 430px, (min-width: 1024px) 38vw, 100vw"
                className="object-cover object-top"
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
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <SectionHeading align="left" eyebrow={dict.home.audiences.eyebrow} title={dict.home.audiences.title} text={dict.home.audiences.text} />
              <div className="grid gap-3 sm:grid-cols-3">
                {dict.home.audiences.proofs.map((proof) => (
                  <div key={proof} className="border border-[#d9e0e6] bg-[#f8faf9] p-4 text-sm font-extrabold text-[#071f3b]">
                    {proof}
                  </div>
                ))}
              </div>
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
            <SectionHeading align="left" eyebrow={dict.home.solutions.eyebrow} title={dict.home.solutions.title} text={dict.home.solutions.text} />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {dict.home.solutions.items.map((service, index) => {
                const Icon = serviceIcons[index];
                return (
                  <article key={service.title} className="min-h-60 min-w-0 border border-[#d9e0e6] bg-white p-6 shadow-[0_12px_32px_rgba(7,31,59,.06)]">
                    <Icon className="mb-5 h-9 w-9 text-[#b88228]" />
                    <h3 className="text-lg font-extrabold text-[#071f3b]">{service.title}</h3>
                    <p className="mt-3 leading-7 text-[#5c6b78]">{service.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-pad bg-[#eef4f2]">
          <div className="shell">
            <SectionHeading align="left" eyebrow={dict.home.control.eyebrow} title={dict.home.control.title} text={dict.home.control.text} />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {dict.home.control.items.map((item, index) => {
                const Icon = controlIcons[index];
                return (
                  <article key={item.title} className="min-w-0 border border-[#d9e0e6] bg-white p-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <Icon className="h-8 w-8 text-[#b88228]" />
                      <span className="text-xs font-black uppercase text-[#0f6f43]">{item.tag}</span>
                    </div>
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

        <section className="section-pad bg-white">
          <div className="shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="eyebrow mb-3">{dict.home.compliance.eyebrow}</p>
              <h2 className="display-serif text-[clamp(2rem,4vw,3.35rem)] font-bold leading-tight text-[#071f3b]">
                {dict.home.compliance.title}
              </h2>
              <p className="mt-4 leading-8 text-[#5c6b78]">{dict.home.compliance.text}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={`/${lang}#contato`} icon={SearchCheck}>
                  {dict.home.compliance.cta}
                </ButtonLink>
                <ButtonLink href={`/${lang}#conteudo`} variant="secondary" icon={Target}>
                  {dict.home.compliance.secondary}
                </ButtonLink>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {dict.home.compliance.items.map((item, index) => {
                const Icon = complianceIcons[index];
                return (
                  <article key={item.title} className="min-w-0 border border-[#d9e0e6] bg-[#f8faf9] p-5">
                    <Icon className="mb-4 h-7 w-7 text-[#b88228]" />
                    <h3 className="font-extrabold text-[#071f3b]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#5c6b78]">{item.text}</p>
                  </article>
                );
              })}
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
            <ButtonLink href={`/${lang}/carreiras`} icon={Send} className="shrink-0 border-white bg-white text-[#071f3b]">
              {dict.home.careerBand.cta}
            </ButtonLink>
          </div>
        </section>

        <section id="conteudo" className="section-pad bg-[#eef4f2]">
          <div className="shell">
            <SectionHeading align="left" eyebrow={dict.home.content.eyebrow} title={dict.home.content.title} />
            <div className="grid gap-5 lg:grid-cols-3">
              {dict.home.content.cards.map((card) =>
                "image" in card ? (
                  <article key={card.title} className="min-w-0 overflow-hidden border border-[#d9e0e6] bg-white shadow-[0_12px_32px_rgba(7,31,59,.06)]">
                    <div className="relative h-56">
                      <Image
                        src={assetPath(card.image)}
                        alt={card.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-black uppercase text-[#b88228]">{card.tag}</span>
                      <h3 className="mt-3 text-lg font-extrabold text-[#071f3b]">{card.title}</h3>
                      <p className="mt-3 leading-7 text-[#5c6b78]">{card.text}</p>
                    </div>
                  </article>
                ) : (
                  <article key={card.title} className="flex min-h-full min-w-0 items-center border border-[#d9e0e6] bg-[linear-gradient(135deg,rgba(7,31,59,.96),rgba(31,107,143,.86))] p-6 text-white">
                    <div>
                      <span className="text-xs font-black uppercase text-[#d7aa52]">{card.tag}</span>
                      <h3 className="mt-3 text-xl font-extrabold text-white">{card.title}</h3>
                      <p className="mt-3 leading-7 text-white/75">{card.text}</p>
                      <Link href={`/${lang}/carreiras`} className="mt-5 inline-flex border-b-2 border-[#d7aa52] font-extrabold">
                        {card.cta}
                      </Link>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <SectionHeading align="left" eyebrow={dict.home.faq.eyebrow} title={dict.home.faq.title} text={dict.home.faq.text} />
            <div className="grid gap-3">
              {dict.home.faq.items.map((item) => (
                <details key={item.question} className="group border border-[#d9e0e6] bg-[#f8faf9] p-5 open:bg-white open:shadow-[0_12px_32px_rgba(7,31,59,.06)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-extrabold text-[#071f3b]">
                    {item.question}
                    <span className="grid h-7 w-7 shrink-0 place-items-center border border-[#d9e0e6] text-[#b88228] group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-7 text-[#5c6b78]">{item.answer}</p>
                </details>
              ))}
            </div>
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
