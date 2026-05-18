import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, Globe2, ShieldCheck, UsersRound } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/dictionaries";
import { getSiteContent } from "@/lib/site-content";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: paramLang } = await params;
  const lang = isLocale(paramLang) ? paramLang : "pt-br";

  return {
    title: lang === "pt-br" ? "Quem Somos" : lang === "es" ? "Quiénes Somos" : "About",
    description:
      lang === "pt-br"
        ? "Conheça a BRACHILENOS, empresa de contabilidade, finanças e estratégia para operações entre Brasil e Chile."
        : lang === "es"
          ? "Conoce BRACHILENOS, empresa de contabilidad, finanzas y estrategia para operaciones entre Brasil y Chile."
          : "Meet BRACHILENOS, an accounting, finance and strategy company for Brazil and Chile operations.",
    alternates: {
      canonical: `/${lang}/sobre`,
    },
  };
}

const aboutCopy = {
  "pt-br": {
    eyebrow: "Escritório Contábil",
    title: "Quem Somos",
    breadcrumb: "Quem Somos",
    history: "Nossa atuação",
    historyTitle: "Estratégia contábil para quem opera entre Brasil e Chile.",
    historyText:
      "A BRACHILENOS nasce para atender clientes que precisam de clareza técnica, organização financeira e segurança fiscal em decisões que envolvem dois mercados.",
    systemTitle: "Visão, Missão, Valores e Política",
    systemText:
      "Nossa estrutura combina atendimento próximo, rede técnica especializada e processos pensados para reduzir riscos e dar previsibilidade ao cliente.",
    pillars: [
      {
        title: "Visão",
        text: "Ser referência em soluções contábeis e estratégicas para operações Brasil x Chile.",
      },
      {
        title: "Missão",
        text: "Oferecer suporte técnico para empresas, investidores e pessoas físicas crescerem com segurança.",
      },
      {
        title: "Valores",
        text: "Transparência, responsabilidade, organização, visão estratégica e compromisso com resultado.",
      },
      {
        title: "Política de atuação",
        text: "Diagnóstico antes da proposta, rotinas documentadas e orientação alinhada à realidade de cada país.",
      },
    ],
    numbers: [
      { value: "BR + CL", label: "Atuação conectada aos dois mercados" },
      { value: "PT / ES / EN", label: "Comunicação para clientes internacionais" },
      { value: "360", label: "Contábil, fiscal, financeiro e tributário" },
    ],
    ctaTitle: "Precisa organizar sua operação entre Brasil e Chile?",
    ctaText: "Fale com a BRACHILENOS e receba um caminho claro para análise, proposta ou atendimento recorrente.",
    primary: "Falar com especialista",
    secondary: "Conhecer soluções",
  },
  es: {
    eyebrow: "Estudio Contable",
    title: "Quiénes Somos",
    breadcrumb: "Quiénes Somos",
    history: "Nuestra actuación",
    historyTitle: "Estrategia contable para quienes operan entre Brasil y Chile.",
    historyText:
      "BRACHILENOS atiende clientes que necesitan claridad técnica, organización financiera y seguridad fiscal en decisiones que involucran dos mercados.",
    systemTitle: "Visión, Misión, Valores y Política",
    systemText:
      "Nuestra estructura combina atención cercana, red técnica especializada y procesos pensados para reducir riesgos y dar previsibilidad.",
    pillars: [
      { title: "Visión", text: "Ser referencia en soluciones contables y estratégicas para operaciones Brasil x Chile." },
      { title: "Misión", text: "Ofrecer soporte técnico para empresas, inversionistas y personas con crecimiento seguro." },
      { title: "Valores", text: "Transparencia, responsabilidad, organización, visión estratégica y foco en resultados." },
      { title: "Política", text: "Diagnóstico antes de la propuesta, rutinas documentadas y orientación local." },
    ],
    numbers: [
      { value: "BR + CL", label: "Actuación conectada a dos mercados" },
      { value: "PT / ES / EN", label: "Comunicación internacional" },
      { value: "360", label: "Contable, fiscal, financiero y tributario" },
    ],
    ctaTitle: "¿Necesitas organizar tu operación entre Brasil y Chile?",
    ctaText: "Habla con BRACHILENOS y recibe un camino claro para análisis, propuesta o atención recurrente.",
    primary: "Hablar con especialista",
    secondary: "Conocer soluciones",
  },
  en: {
    eyebrow: "Accounting Firm",
    title: "About",
    breadcrumb: "About",
    history: "Our work",
    historyTitle: "Accounting strategy for those operating between Brazil and Chile.",
    historyText:
      "BRACHILENOS serves clients who need technical clarity, financial organization and tax confidence in decisions involving two markets.",
    systemTitle: "Vision, Mission, Values and Policy",
    systemText:
      "Our structure combines close service, a specialized technical network and processes designed to reduce risk and bring predictability.",
    pillars: [
      { title: "Vision", text: "To be a reference in accounting and strategic solutions for Brazil x Chile operations." },
      { title: "Mission", text: "To provide technical support for companies, investors and individuals to grow safely." },
      { title: "Values", text: "Transparency, responsibility, organization, strategic vision and commitment to results." },
      { title: "Policy", text: "Diagnosis before proposal, documented routines and guidance aligned with each country." },
    ],
    numbers: [
      { value: "BR + CL", label: "Connected to both markets" },
      { value: "PT / ES / EN", label: "International communication" },
      { value: "360", label: "Accounting, tax, finance and advisory" },
    ],
    ctaTitle: "Need to organize your Brazil and Chile operation?",
    ctaText: "Talk to BRACHILENOS and receive a clear path for analysis, proposal or ongoing service.",
    primary: "Talk to a specialist",
    secondary: "View solutions",
  },
} as const;

const pillarIcons = [Globe2, ShieldCheck, UsersRound, Building2];

export default async function AboutPage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = (isLocale(paramLang) ? paramLang : "pt-br") as Locale;
  const dict = getDictionary(lang);
  const content = getSiteContent(lang);
  const copy = aboutCopy[lang];
  const solutionsHref = `/${lang}/${content.routes.solutions}`;

  return (
    <>
      <Header lang={lang} dict={dict} page="about" />
      <main>
        <section className="border-b border-[#071f3b]/10 bg-[#f8faf9]">
          <div className="shell py-12 lg:py-14">
            <p className="eyebrow mb-4">{copy.eyebrow}</p>
            <h1 className="display-serif text-balance text-[clamp(2rem,3.3vw,3rem)] font-bold leading-tight text-[#071f3b]">
              {copy.title}
            </h1>
            <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#5c6b78]">
              <Link href={`/${lang}`} className="text-[#071f3b] hover:text-[#b88228]">
                Home
              </Link>
              <ArrowRight className="h-4 w-4" aria-hidden />
              <span>{copy.breadcrumb}</span>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="shell grid gap-10 lg:grid-cols-[.82fr_1.18fr]">
            <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow mb-3">{copy.history}</p>
              <h2 className="display-serif text-balance text-[clamp(1.65rem,3vw,2.35rem)] font-bold leading-tight text-[#071f3b]">
                {copy.historyTitle}
              </h2>
              <p className="mt-4 leading-7 text-[#5c6b78]">{copy.historyText}</p>
              <div className="mt-7 grid gap-3">
                {copy.numbers.map((item) => (
                  <div key={item.label} className="border-l-4 border-[#b88228] bg-[#f8faf9] p-4">
                    <strong className="display-serif block text-3xl text-[#071f3b]">{item.value}</strong>
                    <span className="mt-1 block text-sm font-bold leading-5 text-[#5c6b78]">{item.label}</span>
                  </div>
                ))}
              </div>
            </aside>

            <div className="min-w-0">
              <div className="grid gap-5 text-base leading-8 text-[#31465a]">
                {content.home.aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 border-t border-[#d9e0e6] pt-10">
                <p className="eyebrow mb-3">{copy.systemTitle}</p>
                <h2 className="display-serif text-balance text-[clamp(1.55rem,2.6vw,2.2rem)] font-bold leading-tight text-[#071f3b]">
                  {copy.systemText}
                </h2>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {copy.pillars.map((pillar, index) => {
                    const Icon = pillarIcons[index] || BadgeCheck;
                    return (
                      <article key={pillar.title} className="min-w-0 border border-[#d9e0e6] bg-white p-5 shadow-[0_10px_28px_rgba(7,31,59,.05)]">
                        <Icon className="mb-4 h-7 w-7 text-[#b88228]" aria-hidden />
                        <h3 className="text-lg font-extrabold text-[#071f3b]">{pillar.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-[#5c6b78]">{pillar.text}</p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#071f3b] py-12 text-white">
          <div className="shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow mb-3">{content.labels.talkSpecialist}</p>
              <h2 className="display-serif text-balance text-[clamp(1.55rem,2.8vw,2.35rem)] font-bold leading-tight">
                {copy.ctaTitle}
              </h2>
              <p className="mt-3 leading-7 text-white/75">{copy.ctaText}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/${lang}#contato`} icon={WhatsAppIcon} variant="light">
                {copy.primary}
              </ButtonLink>
              <ButtonLink href={`${solutionsHref}/brasil-chile`} icon={ArrowRight} variant="outlineLight">
                {copy.secondary}
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
