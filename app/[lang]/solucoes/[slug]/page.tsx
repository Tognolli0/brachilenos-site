import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, FileText, Globe2, MessageCircle, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/dictionaries";
import { getSiteContent, isSolutionSlug, solutionSlugs, type SolutionSlug } from "@/lib/site-content";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((lang) => solutionSlugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: paramLang, slug } = await params;
  const lang = isLocale(paramLang) ? paramLang : "pt-br";

  if (!isSolutionSlug(slug)) {
    return {};
  }

  const group = getSiteContent(lang).solutions.groups[slug];

  return {
    title: `${group.label} | Soluções Contábeis`,
    description: group.description,
    alternates: {
      canonical: `/${lang}/solucoes/${slug}`,
    },
  };
}

const icons = [FileText, ShieldCheck, Globe2, CheckCircle2, BadgeCheck, MessageCircle];

export default async function SolutionPage({ params }: PageProps) {
  const { lang: paramLang, slug: paramSlug } = await params;
  const lang = (isLocale(paramLang) ? paramLang : "pt-br") as Locale;

  if (!isSolutionSlug(paramSlug)) {
    notFound();
  }

  const slug = paramSlug as SolutionSlug;
  const dict = getDictionary(lang);
  const content = getSiteContent(lang);
  const group = content.solutions.groups[slug];

  return (
    <>
      <Header lang={lang} dict={dict} page="solutions" />
      <main>
        <section className="border-b border-[#071f3b]/10 bg-[#f8faf9]">
          <div className="shell grid gap-8 py-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:py-18">
            <div>
              <p className="eyebrow mb-4">{group.eyebrow}</p>
              <h1 className="display-serif max-w-4xl text-balance text-[clamp(2.25rem,5vw,4.6rem)] font-bold leading-[.98] text-[#071f3b]">
                {group.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#31465a]">{group.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={`/${lang}#contato`} icon={MessageCircle}>
                  {content.labels.requestProposal}
                </ButtonLink>
                <ButtonLink href={`/${lang}#solucoes`} variant="secondary" icon={ArrowRight}>
                  {content.labels.solutionsMenu}
                </ButtonLink>
              </div>
            </div>
            <aside className="border border-[#d9e0e6] bg-white p-6 shadow-[0_12px_32px_rgba(7,31,59,.06)]">
              <span className="display-serif block text-5xl font-bold text-[#071f3b]">{group.label}</span>
              <p className="mt-4 leading-7 text-[#5c6b78]">
                {content.solutions.text}
              </p>
            </aside>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="shell">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow mb-3">{content.solutions.indexEyebrow}</p>
              <h2 className="display-serif text-balance text-[clamp(1.9rem,4vw,3.35rem)] font-bold leading-tight text-[#071f3b]">
                {group.label}: serviços disponíveis
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {group.services.map((service, index) => {
                const Icon = icons[index] || BadgeCheck;
                return (
                  <article key={service.title} className="min-w-0 border border-[#d9e0e6] bg-white p-6 shadow-[0_12px_32px_rgba(7,31,59,.06)]">
                    <Icon className="mb-5 h-8 w-8 text-[#b88228]" />
                    <h3 className="text-xl font-extrabold text-[#071f3b]">{service.title}</h3>
                    <p className="mt-3 leading-7 text-[#5c6b78]">{service.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#071f3b] py-12 text-white">
          <div className="shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow mb-3">{content.labels.talkSpecialist}</p>
              <h2 className="display-serif max-w-3xl text-balance text-[clamp(1.85rem,4vw,3rem)] font-bold leading-tight text-white">
                Precisa organizar sua operação em {group.label}?
              </h2>
            </div>
            <ButtonLink href={`/${lang}#contato`} icon={MessageCircle} className="shrink-0 border-white bg-white text-[#071f3b]">
              {content.labels.requestProposal}
            </ButtonLink>
          </div>
        </section>

        <section className="section-pad bg-[#eef4f2]">
          <div className="shell">
            <div className="mb-8 flex items-end justify-between gap-6">
              <h2 className="display-serif text-3xl font-bold text-[#071f3b]">{content.labels.solutionsMenu}</h2>
              <Link href={`/${lang}#solucoes`} className="hidden font-extrabold text-[#071f3b] sm:inline-flex">
                Voltar para a home
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {solutionSlugs.map((item) => {
                const related = content.solutions.groups[item];
                return (
                  <Link
                    key={item}
                    href={`/${lang}/${content.routes.solutions}/${item}`}
                    className={`border p-5 transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(7,31,59,.1)] ${
                      item === slug ? "border-[#b88228] bg-white" : "border-[#d9e0e6] bg-white"
                    }`}
                  >
                    <span className="font-black text-[#b88228]">{related.label}</span>
                    <p className="mt-2 font-extrabold leading-6 text-[#071f3b]">{related.eyebrow}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
