import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CheckCircle2,
  FileCheck2,
  FileText,
  Landmark,
  LineChart,
  Scale,
  SearchCheck,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
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
    title: dict.meta.servicesTitle,
    description: dict.meta.servicesDescription,
    openGraph: {
      title: dict.meta.servicesTitle,
      description: dict.meta.servicesDescription,
      url: `/${lang}/servicos`,
      images: [{ url: "/assets/riscos-fiscais.png", width: 1536, height: 1024, alt: dict.meta.servicesTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.servicesTitle,
      description: dict.meta.servicesDescription,
      images: ["/assets/riscos-fiscais.png"],
    },
    alternates: {
      canonical: `/${lang}/servicos`,
      languages: {
        "pt-BR": "/pt-br/servicos",
        es: "/es/servicos",
        en: "/en/servicos",
      },
    },
  };
}

const solutionIcons = [Calculator, Landmark, LineChart, FileCheck2, BriefcaseBusiness, ShieldCheck];
const complianceIcons = [Scale, FileText, AlertTriangle, CheckCircle2];
const serviceGroupIcons = [UsersRound, Building2, UsersRound, Building2, Landmark];
const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyBmaWxsPScjMGI1NjQ1Jy8+PC9zdmc+";

const serviceGroups = [
  {
    label: "Pessoa Física — Brasil",
    country: "Brasil",
    accent: "border-t-[#0f6f43]",
    cards: [
      {
        title: "Contabilidade Pessoa Física",
        text: "Assessoria fiscal e tributária para brasileiros no Brasil ou residentes no exterior, com foco em regularização, planejamento e conformidade junto à Receita Federal.",
        services: [
          "IRPF — Declaração anual do imposto de renda pessoa física.",
          "Carnê-Leão — Apuração mensal de rendimentos recebidos do exterior ou de pessoas físicas.",
          "Ganho de Capital — Cálculo tributário sobre venda de bens e direitos.",
          "Regularização de CPF — Suporte para CPF irregular, suspenso ou pendente.",
          "Declaração de Saída Definitiva — Regularização fiscal para quem deixou o Brasil.",
          "Declaração de Bens no Exterior — Organização patrimonial internacional.",
          "Planejamento Tributário PF — Estratégias para organização fiscal e redução de riscos.",
          "Regularização Fiscal — Apoio junto à Receita Federal.",
          "Consultoria para Residentes no Exterior — Assessoria para brasileiros expatriados.",
          "Análise de Bitributação Brasil x Chile — Avaliação tributária internacional.",
        ],
      },
      {
        title: "Finanças Pessoa Física",
        text: "Organização financeira e patrimonial para brasileiros que desejam estruturar sua vida financeira no Brasil ou no exterior.",
        services: ["Planejamento Financeiro", "Diagnóstico Financeiro", "Organização Financeira", "Controle de Fluxo de Caixa Pessoal", "Planejamento Patrimonial", "Reserva de Emergência", "Organização de Dívidas", "Reorganização Financeira", "Educação Financeira", "Planejamento para Mudança Internacional", "Planejamento de Aposentadoria", "Consultoria para Investimentos", "Estruturação de Carteira", "Diversificação Patrimonial", "Planejamento Sucessório"],
      },
    ],
  },
  {
    label: "Pessoa Jurídica — Brasil",
    country: "Brasil",
    accent: "border-t-[#0f6f43]",
    cards: [
      {
        title: "Contabilidade Empresarial",
        text: "Soluções contábeis, fiscais e societárias para empresas brasileiras e operações com sócios ou estruturas internacionais.",
        services: ["Abertura de Empresas", "Alteração Contratual", "Encerramento de Empresas", "MEI, ME, LTDA e SLU", "Regularização de CNPJ", "DAS / Simples Nacional", "DASN", "Emissão de Notas Fiscais", "Apuração de Impostos", "Folha de Pagamento", "Pró-labore", "Escrituração Contábil", "Escrituração Fiscal", "Conciliação Bancária", "Balanço Patrimonial", "DRE", "Distribuição de Lucros", "Parcelamentos Fiscais", "DEFIS", "DCTFWeb", "SPED", "ECD", "ECF", "Consultoria para Sócios no Exterior", "Estruturação Fiscal Brasil x Chile"],
      },
      {
        title: "Finanças Empresariais",
        text: "Estruturação financeira e suporte estratégico para crescimento, gestão e expansão empresarial.",
        services: ["BPO Financeiro", "Fluxo de Caixa", "Controle Financeiro", "DRE Gerencial", "Planejamento Financeiro Empresarial", "Precificação", "Margem e Rentabilidade", "Contas a Pagar e Receber", "Projeção de Caixa", "Planejamento de Crescimento", "KPIs Financeiros", "Diagnóstico Financeiro", "Reestruturação Financeira", "Valuation Básico", "Apoio à Tomada de Decisão"],
      },
    ],
  },
  {
    label: "Pessoa Física — Chile",
    country: "Chile",
    accent: "border-t-[#c91f28]",
    cards: [
      {
        title: "Contabilidade Pessoa Física Chile",
        text: "Assessoria tributária e regularização fiscal para brasileiros residentes no Chile e contribuintes perante o SII.",
        services: ["Operación Renta (F22)", "Declaração Anual de Renda", "Regularização Tributária no SII", "Inicio de Actividades", "Emissão de Boletas", "Honorarios", "Planejamento Tributário", "Consultoria para Brasileiros no Chile", "Regularização de RUT", "Residência Fiscal", "Declaração de Renda Exterior", "Créditos Tributários", "Consultoria sobre APV e DFL2"],
      },
      {
        title: "Finanças Pessoa Física Chile",
        text: "Planejamento financeiro e organização patrimonial para brasileiros vivendo no Chile.",
        services: ["Organização Financeira no Chile", "Planejamento Financeiro para Expatriados", "Educação Financeira", "Organização de Orçamento em CLP", "Planejamento Patrimonial Internacional", "Reserva de Emergência", "Organização de Dívidas", "Planejamento de Metas", "Análise de Custo de Vida"],
      },
    ],
  },
  {
    label: "Pessoa Jurídica — Chile",
    country: "Chile",
    accent: "border-t-[#c91f28]",
    cards: [
      {
        title: "Contabilidade Empresarial Chile",
        text: "Estruturação empresarial e assessoria tributária para empresas operando no Chile.",
        services: ["Abertura de Empresa no Chile", "Constitución de SpA", "EIRL", "Persona Natural con Giro", "Inicio de Actividades", "RUT Empresa", "Patente Comercial", "Facturas", "Boletas", "F29 Mensal", "F22 Anual", "Contabilidade Mensal", "Apuração de Impostos", "Planejamento Tributário", "Escrituração Contábil", "Conciliação Bancária", "Remunerações", "Estrutura Administrativa", "Regularização no SII", "Encerramento de Empresa", "Consultoria para Brasileiros no Chile"],
      },
      {
        title: "Finanças Empresariais Chile",
        text: "Gestão financeira e planejamento estratégico para empresas no mercado chileno.",
        services: ["Estruturação Financeira", "Fluxo de Caixa", "Controle Financeiro", "DRE Gerencial", "Precificação", "Margem e Rentabilidade", "Organização de Custos", "Planejamento para Expansão", "KPIs Financeiros", "Diagnóstico Financeiro", "Reestruturação Financeira", "Apoio Estratégico"],
      },
    ],
  },
  {
    label: "Serviços Internacionais — Brasil x Chile",
    country: "Internacional",
    accent: "border-t-[#b88228]",
    cards: [
      {
        title: "Consultoria Tributária Internacional",
        text: "Estruturação fiscal e tributária para operações, patrimônio e rendimentos entre Brasil e Chile.",
        services: ["Planejamento Tributário Internacional", "Consultoria Fiscal Brasil x Chile", "Residência Fiscal", "Estruturação Patrimonial Internacional", "Estruturação Societária", "Bitributação", "Aplicação do Acordo Brasil-Chile", "Regularização de Rendimentos no Exterior", "Retirada de Lucros", "Pró-labore Internacional", "Consultoria para Empresas Binacionais", "Estruturação para Prestadores Internacionais"],
      },
      {
        title: "Planejamento Financeiro Internacional",
        text: "Organização patrimonial e financeira para pessoas e empresas com operações entre países.",
        services: ["Planejamento Financeiro Internacional", "Organização Patrimonial", "Estruturação Financeira Internacional", "Gestão Financeira para Expatriados", "Planejamento de Mudança Internacional", "Proteção Patrimonial", "Remessas Internacionais", "Estruturação de Recebimentos", "Estratégia Financeira Binacional"],
      },
      {
        title: "Assessoria Financeira & Investimentos",
        text: "Consultoria estratégica para crescimento patrimonial, investimentos e internacionalização de ativos.",
        services: ["Planejamento de Investimentos", "Perfil de Investidor", "Construção de Carteira", "Diversificação de Investimentos", "Estratégia de Alocação", "Internacionalização Patrimonial", "Estratégia de Dolarização", "Planejamento de Longo Prazo", "Organização Financeira do Sócio", "Separação PF x PJ", "Estratégia de Retirada de Lucros", "Estruturação de Capital", "Estratégia de Reinvestimento"],
      },
    ],
  },
];

export default async function ServicesPage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = (isLocale(paramLang) ? paramLang : "pt-br") as Locale;
  const dict = getDictionary(lang);
  const copy = servicesPageCopy[lang];

  return (
    <>
      <Header lang={lang} dict={dict} page="services" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Contabilidade Brachilenos",
            url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://brachilenos-site.netlify.app"}/${lang}/servicos`,
            areaServed: ["Brazil", "Chile"],
            availableLanguage: ["pt-BR", "es", "en"],
            serviceType: serviceGroups.flatMap((group) => group.cards.map((card) => card.title)),
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: dict.meta.servicesTitle,
              itemListElement: serviceGroups.map((group) => ({
                "@type": "OfferCatalog",
                name: group.label,
                itemListElement: group.cards.map((card) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: card.title,
                    description: card.text,
                  },
                })),
              })),
            },
          }),
        }}
      />
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

        <section className="bg-[#071f3b] py-10 text-white">
          <div className="shell grid gap-5 lg:grid-cols-2">
            {[
              { image: "/assets/riscos-fiscais.png", title: copy.imageCards[0].title, text: copy.imageCards[0].text },
              { image: "/assets/erros-imposto.png", title: copy.imageCards[1].title, text: copy.imageCards[1].text },
            ].map((item) => (
              <article key={item.title} className="grid min-h-[260px] overflow-hidden border border-white/15 bg-white/5 md:grid-cols-[0.8fr_1fr]">
                <div className="relative min-h-56">
                  <Image src={assetPath(item.image)} alt={item.title} fill sizes="(min-width: 1024px) 280px, 100vw" className="object-cover object-top" placeholder="blur" blurDataURL={blurDataURL} />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <h2 className="display-serif text-2xl font-bold leading-tight text-white">{item.title}</h2>
                  <p className="mt-3 leading-7 text-white/75">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad bg-[#eef4f2]">
          <div className="shell">
            <SectionHeading
              eyebrow={copy.detailEyebrow}
              title={copy.detailTitle}
              text={copy.detailText}
            />
            <div className="grid gap-7">
              {serviceGroups.map((group, index) => {
                const Icon = serviceGroupIcons[index];
                return (
                  <section key={group.label} className={`min-w-0 border border-[#d9e0e6] border-t-4 ${group.accent} bg-white p-4 sm:p-6`}>
                    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#f8faf9] text-[#b88228] shadow-sm">
                          <Icon className="h-6 w-6" aria-hidden />
                        </span>
                        <div className="min-w-0">
                          <span className="text-xs font-black uppercase tracking-[0.08em] text-[#5c6b78]">{group.country}</span>
                          <h2 className="display-serif text-balance text-2xl font-bold leading-tight text-[#071f3b]">{group.label}</h2>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-4 lg:grid-cols-2">
                      {group.cards.map((card) => (
                        <ServiceDetailCard key={card.title} card={card} lang={lang} cta={copy.cardCta} />
                      ))}
                    </div>
                  </section>
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

function ServiceDetailCard({
  card,
  lang,
  cta,
}: {
  card: { title: string; text: string; services: string[] };
  lang: Locale;
  cta: string;
}) {
  return (
    <article className="min-w-0 border border-[#d9e0e6] bg-[#f8faf9] p-5 shadow-[0_12px_32px_rgba(7,31,59,.06)] sm:p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-xl font-extrabold leading-tight text-[#071f3b]">{card.title}</h3>
          <p className="mt-3 leading-7 text-[#5c6b78]">{card.text}</p>
        </div>
        <Calculator className="h-7 w-7 shrink-0 text-[#b88228]" aria-hidden />
      </div>
      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {card.services.map((service) => (
          <span key={service} className="flex min-h-10 items-start gap-2 border border-[#d9e0e6] bg-white px-3 py-2 text-sm font-semibold leading-5 text-[#102235]">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0f6f43]" aria-hidden />
            {service}
          </span>
        ))}
      </div>
      <Link href={`/${lang}#contato`} className="mt-5 inline-flex border-b-2 border-[#b88228] font-extrabold text-[#071f3b]">
        {cta}
      </Link>
    </article>
  );
}

const servicesPageCopy = {
  "pt-br": {
    detailEyebrow: "Serviços por perfil",
    detailTitle: "Blocos de atendimento por país, pessoa física, empresa e operação internacional",
    detailText:
      "A página foi estruturada para o cliente encontrar rapidamente o tipo de apoio que precisa, sem misturar demandas pessoais, empresariais e binacionais.",
    cardCta: "Solicitar orientação",
    imageCards: [
      { title: "Risco fiscal mapeado antes da decisão", text: "Residência fiscal, renda no exterior, dupla tributação e documentos analisados antes da execução." },
      { title: "Planejamento para evitar retrabalho", text: "Organização contábil e financeira para reduzir inconsistências, multas e decisões sem visibilidade." },
    ],
  },
  es: {
    detailEyebrow: "Servicios por perfil",
    detailTitle: "Bloques de atención por país, persona natural, empresa y operación internacional",
    detailText:
      "La página fue estructurada para que el cliente encuentre rápidamente el tipo de apoyo que necesita, sin mezclar demandas personales, empresariales y binacionales.",
    cardCta: "Solicitar orientación",
    imageCards: [
      { title: "Riesgo fiscal mapeado antes de decidir", text: "Residencia fiscal, renta exterior, doble tributación y documentos revisados antes de ejecutar." },
      { title: "Planificación para evitar retrabajo", text: "Organización contable y financiera para reducir inconsistencias, multas y decisiones sin visibilidad." },
    ],
  },
  en: {
    detailEyebrow: "Services by profile",
    detailTitle: "Service blocks by country, individual, company and international operation",
    detailText:
      "This page is structured so clients can quickly find the support they need without mixing personal, business and binational demands.",
    cardCta: "Request guidance",
    imageCards: [
      { title: "Tax risk mapped before decisions", text: "Tax residence, foreign income, double taxation and documents reviewed before execution." },
      { title: "Planning that prevents rework", text: "Accounting and financial organization to reduce inconsistencies, penalties and blind decisions." },
    ],
  },
} satisfies Record<Locale, { detailEyebrow: string; detailTitle: string; detailText: string; cardCta: string; imageCards: { title: string; text: string }[] }>;
