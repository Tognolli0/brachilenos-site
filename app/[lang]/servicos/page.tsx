import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  FileCheck2,
  FileText,
  Landmark,
  LineChart,
  Scale,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
    title: `${dict.nav.solutions} | ${dict.meta.homeTitle}`,
    description: dict.meta.homeDescription,
  };
}

const solutionIcons = [Calculator, Landmark, LineChart, FileCheck2, BriefcaseBusiness, ShieldCheck];
const complianceIcons = [Scale, FileText, AlertTriangle, CheckCircle2];

export default async function ServicesPage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = (isLocale(paramLang) ? paramLang : "pt-br") as Locale;
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} page="services" />
      <main id="conteudo-principal">
        <section className="border-b border-[#071f3b]/10 bg-[linear-gradient(120deg,#071f3b,#0b345b_62%,#0f6f43)] py-14 text-white sm:py-20">
          <div className="shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow mb-3">{dict.home.solutions.eyebrow}</p>
              <h1 className="display-serif text-balance text-[clamp(2.25rem,6vw,4.4rem)] font-bold leading-tight text-white">
                {dict.home.solutions.title}
              </h1>
            </div>
            <div>
              <p className="max-w-3xl text-lg leading-8 text-white/75">{dict.home.solutions.text}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={`/${lang}#contato`} icon={SearchCheck} variant="gold">
                  {dict.nav.commercialCta}
                </ButtonLink>
                <ButtonLink href={`/${lang}/sobre`} icon={Scale} variant="secondary">
                  {dict.nav.about}
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="shell">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {dict.home.solutions.items.map((item, index) => {
                const Icon = solutionIcons[index];
                return (
                  <article key={item.title} className="min-w-0 border border-[#d9e0e6] border-t-4 border-t-[#b88228] bg-[#f8faf9] p-6 shadow-[0_12px_32px_rgba(7,31,59,.06)]">
                    <Icon className="mb-5 h-9 w-9 text-[#b88228]" aria-hidden />
                    <h2 className="text-xl font-extrabold text-[#071f3b]">{item.title}</h2>
                    <p className="mt-3 leading-7 text-[#5c6b78]">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-pad bg-[#eef4f2]">
          <div className="shell">
            <SectionHeading eyebrow={dict.home.plans.eyebrow} title={dict.home.plans.title} />
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
              <ButtonLink href={`/${lang}#contato`} icon={SearchCheck} className="mt-7">
                {dict.home.compliance.cta}
              </ButtonLink>
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

        <section className="section-pad bg-[#eef4f2]">
          <div className="shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <SectionHeading eyebrow={dict.home.faq.eyebrow} title={dict.home.faq.title} text={dict.home.faq.text} />
            <div className="grid gap-3">
              {dict.home.faq.items.map((item) => (
                <details key={item.question} className="group border border-[#d9e0e6] bg-white p-5 open:shadow-[0_12px_32px_rgba(7,31,59,.06)]">
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

        <section className="bg-[#071f3b] py-10 text-white">
          <div className="shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <h2 className="display-serif max-w-2xl text-3xl font-bold leading-tight text-white">{dict.home.contact.title}</h2>
            <Link href={`/${lang}#contato`} className="inline-flex min-h-11 items-center justify-center border border-[#d7aa52] bg-[#d7aa52] px-5 font-extrabold text-[#071f3b]">
              {dict.nav.commercialCta}
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="display-serif text-balance text-[clamp(1.85rem,4vw,3.35rem)] font-bold leading-tight text-[#071f3b]">
        {title}
      </h2>
      {text ? <p className="mt-4 text-lg leading-8 text-[#5c6b78]">{text}</p> : null}
    </div>
  );
}
