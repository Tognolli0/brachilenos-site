import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronDown,
  FileText,
  Globe2,
  Landmark,
  LineChart,
  MessageCircle,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/dictionaries";
import { serviceCatalogBySlug, serviceCatalogIntro, type ServiceCatalogCard } from "@/lib/service-catalog";
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
  const copy = solutionPageCopy[lang];

  return {
    title: `${group.label} | ${copy.metaTitleSuffix}`,
    description: group.description,
    keywords: copy.keywords,
    alternates: {
      canonical: `/${lang}/solucoes/${slug}`,
    },
  };
}

const icons = [FileText, ShieldCheck, Globe2, CheckCircle2, BadgeCheck, MessageCircle];
const profileIcons = { pf: UsersRound, pj: Building2 };
const catalogCardIcons = [Calculator, LineChart, Landmark, Globe2, ShieldCheck, FileText];
const servicePageTabs: { slug: SolutionSlug; label: string; description: string }[] = [
  { slug: "brasil", label: "Brasil", description: "PF e PJ no mercado brasileiro" },
  { slug: "chile", label: "Chile", description: "PF e PJ no mercado chileno" },
  { slug: "brasil-chile", label: "Brasil x Chile", description: "Operações internacionais" },
];

const solutionPageCopy: Record<
  Locale,
  {
    metaTitleSuffix: string;
    keywords: string[];
    sidebarEyebrow: string;
    quickTitle: (market: string) => string;
    quickText: string;
    ctaTitle: (market: string) => string;
    ctaText: string;
    backHome: string;
    catalogEyebrow: string;
    catalogTitle: string;
    profileShortcut: string;
    areasOfService: (count: number) => string;
    serviceNavigation: string;
    solutionsLabel: string;
    viewServicesList: string;
    onThisPage: string;
    areas: (count: number) => string;
    services: (count: number) => string;
    viewServices: string;
    talkAboutService: string;
  }
> = {
  "pt-br": {
    metaTitleSuffix: "Soluções Contábeis BRACHILENOS",
    keywords: ["contabilidade Brasil Chile", "BPO financeiro", "gestão empresarial internacional", "contador brasileiro no Chile"],
    sidebarEyebrow: "Nesta página",
    quickTitle: (market) => `O que podemos resolver em ${market}`,
    quickText:
      "Uma visão rápida dos serviços mais buscados antes de entrar no detalhe por pessoa física, pessoa jurídica ou operação internacional.",
    ctaTitle: (market) => `Precisa organizar sua operação em ${market}?`,
    ctaText: "Envie seu cenário e receba o melhor caminho para diagnóstico, proposta ou atendimento recorrente.",
    backHome: "Voltar para a home",
    catalogEyebrow: "Catálogo de atendimento",
    catalogTitle: "Escolha pelo perfil e veja os serviços disponíveis",
    profileShortcut: "Atalho de perfil",
    areasOfService: (count) => `${count} ${count === 1 ? "área" : "áreas"} de atendimento`,
    serviceNavigation: "Navegação de soluções",
    solutionsLabel: "Soluções",
    viewServicesList: "Ver lista de serviços",
    onThisPage: "Nesta página",
    areas: (count) => `${count} ${count === 1 ? "área" : "áreas"}`,
    services: (count) => `${count} ${count === 1 ? "serviço" : "serviços"}`,
    viewServices: "Ver serviços",
    talkAboutService: "Falar sobre este serviço",
  },
  es: {
    metaTitleSuffix: "Soluciones contables BRACHILENOS",
    keywords: ["contabilidad Brasil Chile", "BPO financiero", "gestión empresarial internacional", "contador brasileño en Chile"],
    sidebarEyebrow: "En esta página",
    quickTitle: (market) => `Lo que podemos resolver en ${market}`,
    quickText:
      "Una visión rápida de los servicios más buscados antes de ver el detalle por persona natural, empresa u operación internacional.",
    ctaTitle: (market) => `¿Necesitas organizar tu operación en ${market}?`,
    ctaText: "Envía tu escenario y recibe el mejor camino para diagnóstico, propuesta o atención recurrente.",
    backHome: "Volver al inicio",
    catalogEyebrow: "Catálogo de atención",
    catalogTitle: "Elige por perfil y revisa los servicios disponibles",
    profileShortcut: "Atajo por perfil",
    areasOfService: (count) => `${count} ${count === 1 ? "área" : "áreas"} de atención`,
    serviceNavigation: "Navegación de soluciones",
    solutionsLabel: "Soluciones",
    viewServicesList: "Ver lista de servicios",
    onThisPage: "En esta página",
    areas: (count) => `${count} ${count === 1 ? "área" : "áreas"}`,
    services: (count) => `${count} ${count === 1 ? "servicio" : "servicios"}`,
    viewServices: "Ver servicios",
    talkAboutService: "Hablar sobre este servicio",
  },
  en: {
    metaTitleSuffix: "Accounting solutions BRACHILENOS",
    keywords: ["Brazil Chile accounting", "finance BPO", "international business management", "Brazilian accountant in Chile"],
    sidebarEyebrow: "On this page",
    quickTitle: (market) => `What we can solve in ${market}`,
    quickText: "A quick view of the most requested services before the detailed breakdown by individual, company or international operation.",
    ctaTitle: (market) => `Need to organize your ${market} operation?`,
    ctaText: "Send your scenario and receive the best path for diagnosis, proposal or ongoing service.",
    backHome: "Back to home",
    catalogEyebrow: "Service catalog",
    catalogTitle: "Choose by profile and view available services",
    profileShortcut: "Profile shortcut",
    areasOfService: (count) => `${count} ${count === 1 ? "service area" : "service areas"}`,
    serviceNavigation: "Solutions navigation",
    solutionsLabel: "Solutions",
    viewServicesList: "View service list",
    onThisPage: "On this page",
    areas: (count) => `${count} ${count === 1 ? "area" : "areas"}`,
    services: (count) => `${count} ${count === 1 ? "service" : "services"}`,
    viewServices: "View services",
    talkAboutService: "Talk about this service",
  },
};

type ProfileCard = {
  title: string;
  text: string;
};

const audienceCopy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    text: string;
    pfLabel: string;
    pjLabel: string;
    profiles: Record<SolutionSlug, { pf: ProfileCard[]; pj: ProfileCard[] }>;
  }
> = {
  "pt-br": {
    eyebrow: "Atendimento por perfil",
    title: "Soluções para pessoa física e pessoa jurídica",
    text: "Cada serviço é orientado pelo tipo de cliente, pela jurisdição envolvida e pelo nível de complexidade da operação.",
    pfLabel: "Pessoa Física",
    pjLabel: "Pessoa Jurídica",
    profiles: {
      brasil: {
        pf: [
          { title: "Regularização documental", text: "Organização de pendências, declarações e documentos pessoais no Brasil." },
          { title: "Residência e vínculos", text: "Análise de vínculos, renda mundial e comprovantes necessários." },
          { title: "Organização patrimonial", text: "Separação entre pessoa física, empresa, bens, rendimentos e investimentos." },
          { title: "Planejamento de renda", text: "Apoio para decisões com impacto financeiro, patrimonial e documental." },
        ],
        pj: [
          { title: "Contabilidade empresarial", text: "Rotina contábil, fechamento mensal e relatórios para gestão." },
          { title: "Rotinas e documentos", text: "Organização de declarações, documentos, prazos e acompanhamentos recorrentes." },
          { title: "Abertura e regularização", text: "Constituição, alterações, certidões e ajuste de pendências." },
          { title: "BPO financeiro", text: "Contas, conciliação, fluxo de caixa e indicadores para decisão." },
        ],
      },
      chile: {
        pf: [
          { title: "Orientação para brasileiros", text: "Suporte em português para reduzir dúvidas sobre obrigações locais." },
          { title: "Regularização documental", text: "Mapeamento de documentos, prazos e pontos operacionais relevantes." },
          { title: "Planejamento financeiro", text: "Organização de renda, custos, remessas e decisões entre países." },
          { title: "Apoio preventivo", text: "Leitura de riscos antes de investir, empreender ou movimentar recursos." },
        ],
        pj: [
          { title: "Abertura de empresa", text: "Direcionamento societário, documental e operacional para iniciar atividades." },
          { title: "Contabilidade local", text: "Rotina contábil e documental com acompanhamento claro para o empresário." },
          { title: "Gestão financeira", text: "Controle de contas, conciliação, fluxo de caixa e relatórios." },
          { title: "Compliance operacional", text: "Processos e evidências para manter a empresa organizada." },
        ],
      },
      "brasil-chile": {
        pf: [
          { title: "Residência e vínculos", text: "Definição do cenário de residência, renda e documentação nos dois países." },
          { title: "Renda em dois países", text: "Análise de regras, comprovantes e documentos para evitar cobranças ou pagamentos duplicados." },
          { title: "Remessas e renda mundial", text: "Organização de entradas, saídas, lucros, comprovantes e declarações." },
          { title: "Dossiê de evidências", text: "Contratos, extratos e documentos preparados para maior segurança." },
        ],
        pj: [
          { title: "Estruturação binacional", text: "Avaliação de onde faturar, como operar e como comprovar fluxos." },
          { title: "Planejamento binacional", text: "Estratégia para reduzir riscos, organizar fluxos e melhorar eficiência operacional." },
          { title: "Gestão financeira entre países", text: "Fluxo de caixa, conciliação e indicadores para operação internacional." },
          { title: "Contratos e compliance", text: "Organização documental, responsabilidades e rotinas de controle." },
        ],
      },
    },
  },
  es: {
    eyebrow: "Atención por perfil",
    title: "Soluciones para persona natural y empresa",
    text: "Cada servicio se orienta por el tipo de cliente, la jurisdicción y el nivel de complejidad de la operación.",
    pfLabel: "Persona Natural",
    pjLabel: "Empresa",
    profiles: {
      brasil: {
        pf: [
          { title: "Regularización documental", text: "Organización de pendientes, declaraciones y documentos personales en Brasil." },
          { title: "Residencia y vínculos", text: "Análisis de vínculos, renta mundial y comprobantes necesarios." },
          { title: "Organización patrimonial", text: "Separación entre persona, empresa, bienes, ingresos e inversiones." },
          { title: "Planificación de renta", text: "Apoyo para decisiones con impacto financiero, patrimonial y documental." },
        ],
        pj: [
          { title: "Contabilidad empresarial", text: "Rutina contable, cierre mensual e informes de gestión." },
          { title: "Rutinas y documentos", text: "Organización de declaraciones, documentos, plazos y acompañamientos recurrentes." },
          { title: "Apertura y regularización", text: "Constitución, modificaciones, certificados y pendientes." },
          { title: "BPO financiero", text: "Cuentas, conciliación, flujo de caja e indicadores." },
        ],
      },
      chile: {
        pf: [
          { title: "Orientación para brasileños", text: "Soporte en portugués para reducir dudas sobre obligaciones locales." },
          { title: "Regularización documental", text: "Mapeo de documentos, plazos y puntos operacionales relevantes." },
          { title: "Planificación financiera", text: "Organización de renta, costos, remesas y decisiones entre países." },
          { title: "Apoyo preventivo", text: "Lectura de riesgos antes de invertir, emprender o mover recursos." },
        ],
        pj: [
          { title: "Apertura de empresa", text: "Dirección societaria, documental y operacional para iniciar actividades." },
          { title: "Contabilidad local", text: "Rutina contable y documental con acompañamiento claro." },
          { title: "Gestión financiera", text: "Control de cuentas, conciliación, caja e informes." },
          { title: "Compliance operacional", text: "Procesos y evidencias para mantener la empresa organizada." },
        ],
      },
      "brasil-chile": {
        pf: [
          { title: "Residencia y vínculos", text: "Definición del escenario de residencia, renta y documentación en ambos países." },
          { title: "Renta en dos países", text: "Análisis de reglas, comprobantes y documentos para evitar cobros o pagos duplicados." },
          { title: "Remesas y renta mundial", text: "Organización de ingresos, salidas, utilidades y declaraciones." },
          { title: "Dossier de evidencias", text: "Contratos, extractos y documentos preparados para más seguridad." },
        ],
        pj: [
          { title: "Estructuración binacional", text: "Evaluación de dónde facturar, cómo operar y comprobar flujos." },
          { title: "Planificación binacional", text: "Estrategia para reducir riesgos, organizar flujos y mejorar eficiencia operacional." },
          { title: "Gestión financiera", text: "Caja, conciliación e indicadores para operación internacional." },
          { title: "Contratos y compliance", text: "Organización documental, responsabilidades y controles." },
        ],
      },
    },
  },
  en: {
    eyebrow: "Client profile",
    title: "Solutions for individuals and companies",
    text: "Each service is shaped by the client profile, jurisdiction involved and risk level of the operation.",
    pfLabel: "Individual",
    pjLabel: "Company",
    profiles: {
      brasil: {
        pf: [
          { title: "Document regularization", text: "Organization of pending items, filings and personal documents in Brazil." },
          { title: "Residence and ties", text: "Review of ties, worldwide income and supporting evidence." },
          { title: "Asset organization", text: "Separation between individual, company, assets, income and investments." },
          { title: "Income planning", text: "Support for decisions with financial, asset and documentation impact." },
        ],
        pj: [
          { title: "Business accounting", text: "Accounting routine, monthly closing and management reports." },
          { title: "Routines and documents", text: "Organization of declarations, documents, deadlines and recurring follow-up." },
          { title: "Opening and regularization", text: "Formation, amendments, certificates and pending items." },
          { title: "Finance BPO", text: "Accounts, reconciliation, cash flow and decision indicators." },
        ],
      },
      chile: {
        pf: [
          { title: "Guidance for Brazilians", text: "Portuguese-language support to reduce doubts about local obligations." },
          { title: "Document regularization", text: "Mapping documents, deadlines and relevant operational points." },
          { title: "Financial planning", text: "Organization of income, costs, remittances and cross-border decisions." },
          { title: "Preventive support", text: "Risk review before investing, starting a business or moving funds." },
        ],
        pj: [
          { title: "Company opening", text: "Corporate, document and operational guidance to start activities." },
          { title: "Local accounting", text: "Accounting and document routine with clear business follow-up." },
          { title: "Financial management", text: "Account control, reconciliation, cash flow and reports." },
          { title: "Operational compliance", text: "Processes and evidence to keep the company organized." },
        ],
      },
      "brasil-chile": {
        pf: [
          { title: "Residence and ties", text: "Definition of the residence, income and documentation scenario in both countries." },
          { title: "Income in two countries", text: "Rule, evidence and document review to avoid duplicate charges or payments." },
          { title: "Remittances and income", text: "Organization of inflows, outflows, profits, evidence and filings." },
          { title: "Evidence dossier", text: "Contracts, statements and documents prepared for greater security." },
        ],
        pj: [
          { title: "Binational structuring", text: "Review of where to bill, how to operate and how to evidence flows." },
          { title: "Binational planning", text: "Strategy to reduce risks, organize flows and improve operational efficiency." },
          { title: "Cross-border finance", text: "Cash flow, reconciliation and indicators for international operations." },
          { title: "Contracts and compliance", text: "Document organization, responsibilities and control routines." },
        ],
      },
    },
  },
};

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
  const copy = solutionPageCopy[lang];
  const audience = audienceCopy[lang];
  const profileGroups = audience.profiles[slug];

  return (
    <>
      <Header lang={lang} page="solutions" />
      <main>
        <section className="border-b border-[#071f3b]/10 bg-[#f8faf9]">
          <div className="shell grid min-w-0 gap-7 py-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end lg:py-14">
            <div className="min-w-0">
              <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs font-extrabold uppercase text-[#5c6b78]" aria-label="Breadcrumb">
                <Link href={`/${lang}`} className="text-[#071f3b] hover:text-[#b88228]">
                  {content.labels.home}
                </Link>
                <ArrowRight className="h-3.5 w-3.5 text-[#b88228]" aria-hidden />
                <Link href={`/${lang}#solucoes`} className="text-[#071f3b] hover:text-[#b88228]">
                  {content.labels.solutionsMenu}
                </Link>
                <ArrowRight className="h-3.5 w-3.5 text-[#b88228]" aria-hidden />
                <span>{group.label}</span>
              </nav>
              <p className="eyebrow mb-4">{group.eyebrow}</p>
              <h1 className="max-w-4xl break-words text-balance text-[clamp(1.45rem,6.2vw,2.55rem)] font-black leading-tight text-[#071f3b]">
                {group.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[#31465a] sm:text-lg">{group.description}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={`/${lang}#contato`} icon={MessageCircle}>
                  {content.labels.requestProposal}
                </ButtonLink>
                <ButtonLink href={`/${lang}#solucoes`} variant="secondary" icon={ArrowRight}>
                  {content.labels.solutionsMenu}
                </ButtonLink>
              </div>
            </div>
            <aside className="min-w-0 border border-[#d9e0e6] bg-white p-4 shadow-[0_12px_32px_rgba(7,31,59,.06)] sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#b88228]">{copy.sidebarEyebrow}</p>
              <span className="mt-2 block text-2xl font-black text-[#071f3b]">{group.label}</span>
              <div className="mt-4 grid gap-2">
                {group.services.slice(0, 4).map((service) => (
                  <span key={service.title} className="flex gap-2 border border-[#d9e0e6] bg-[#f8faf9] px-3 py-3 text-sm font-bold leading-5 text-[#102235]">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0f6f43]" aria-hidden />
                    {service.title}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white py-10 sm:py-12">
          <div className="shell">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow mb-3">{content.solutions.indexEyebrow}</p>
              <h2 className="break-words text-balance text-[clamp(1.45rem,5.7vw,2.1rem)] font-black leading-tight text-[#071f3b]">
                {copy.quickTitle(group.label)}
              </h2>
              <p className="mt-3 leading-7 text-[#5c6b78]">{copy.quickText}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {group.services.map((service, index) => {
                const Icon = icons[index] || BadgeCheck;
                return (
                  <article
                    key={service.title}
                    className="group min-w-0 border border-[#d9e0e6] bg-white p-5 shadow-[0_12px_32px_rgba(7,31,59,.06)] transition hover:-translate-y-1 hover:border-[#b88228] hover:shadow-[0_18px_42px_rgba(7,31,59,.12)]"
                  >
                    <Icon className="mb-4 h-7 w-7 text-[#b88228]" aria-hidden />
                    <h3 className="text-lg font-extrabold leading-6 text-[#071f3b]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#5c6b78]">{service.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {lang === "pt-br" ? (
          <DetailedServiceCatalog slug={slug} lang={lang} />
        ) : (
          <section className="section-pad bg-[#f8faf9]">
            <div className="shell">
              <div className="mb-10 max-w-3xl">
                <p className="eyebrow mb-3">{audience.eyebrow}</p>
                <h2 className="break-words text-balance text-[clamp(1.45rem,5.7vw,2.2rem)] font-black leading-tight text-[#071f3b]">
                  {audience.title}
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-[#5c6b78]">{audience.text}</p>
              </div>

              <div className="grid gap-9 lg:grid-cols-2">
                <ProfileColumn label={audience.pfLabel} icon={profileIcons.pf} cards={profileGroups.pf} tone="green" />
                <ProfileColumn label={audience.pjLabel} icon={profileIcons.pj} cards={profileGroups.pj} tone="navy" />
              </div>
            </div>
          </section>
        )}

        <section className="bg-[#071f3b] py-10 text-white">
          <div className="shell grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-[#d9a441]">{content.labels.talkSpecialist}</p>
              <h2 className="break-words text-balance text-[clamp(1.4rem,5.4vw,2.05rem)] font-black leading-tight text-white">
                {copy.ctaTitle(group.label)}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">{copy.ctaText}</p>
            </div>
            <ButtonLink href={`/${lang}#contato`} icon={MessageCircle} variant="light" className="shrink-0">
              {content.labels.requestProposal}
            </ButtonLink>
          </div>
        </section>

        <section className="section-pad bg-[#eef4f2]">
          <div className="shell">
            <div className="mb-8 flex items-end justify-between gap-6">
              <h2 className="text-2xl font-black text-[#071f3b]">{content.labels.solutionsMenu}</h2>
              <Link href={`/${lang}#solucoes`} className="hidden font-extrabold text-[#071f3b] sm:inline-flex">
                {copy.backHome}
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

function DetailedServiceCatalog({ slug, lang }: { slug: SolutionSlug; lang: Locale }) {
  const blocks = serviceCatalogBySlug[slug];
  const copy = solutionPageCopy[lang];
  const summaryCards = blocks.flatMap((block) =>
    block.cards.map((card, cardIndex) => ({
      block,
      card,
      id: `${block.id}-area-${cardIndex + 1}`,
    })),
  );

  return (
    <section id="catalogo-servicos" className="section-pad bg-[#f8faf9]">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(300px,0.55fr)] lg:items-start">
          <div>
            <p className="eyebrow mb-3">{copy.catalogEyebrow}</p>
            <h2 className="break-words text-balance text-[clamp(1.45rem,5.7vw,2.2rem)] font-black leading-tight text-[#071f3b]">
              {copy.catalogTitle}
            </h2>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-[#5c6b78] sm:text-base sm:leading-7">
              {serviceCatalogIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="border border-[#d9e0e6] bg-white p-5 shadow-[0_12px_32px_rgba(7,31,59,.06)]">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#b88228]">{copy.profileShortcut}</p>
            <div className="mt-4 grid gap-2">
              {blocks.map((block) => (
                <a
                  key={block.id}
                  href={`#${block.id}`}
                  className="group border border-[#d9e0e6] bg-[#f8faf9] p-3 transition hover:border-[#b88228] hover:bg-white"
                >
                  <span className="block text-xs font-black uppercase text-[#b88228]">{block.eyebrow}</span>
                  <span className="mt-1 block font-extrabold leading-5 text-[#071f3b] group-hover:text-[#b88228]">{block.title}</span>
                  <span className="mt-1 block text-xs font-semibold text-[#5c6b78]">{copy.areasOfService(block.cards.length)}</span>
                </a>
              ))}
            </div>
          </aside>
        </div>

        <nav className="mt-8 grid gap-2 sm:grid-cols-3 sm:gap-3" aria-label={copy.serviceNavigation}>
          {servicePageTabs.map((tab) => {
            const isActive = tab.slug === slug;
            return (
              <Link
                key={tab.slug}
                href={`/${lang}/solucoes/${tab.slug}`}
                className={`min-w-0 border p-3 transition hover:-translate-y-0.5 hover:border-[#b88228] hover:shadow-[0_14px_30px_rgba(7,31,59,.08)] sm:p-4 ${
                  isActive ? "border-[#071f3b] bg-[#071f3b] text-white" : "border-[#d9e0e6] bg-white text-[#071f3b]"
                }`}
              >
                <span className={`text-xs font-black uppercase tracking-[0.14em] ${isActive ? "text-[#d9a441]" : "text-[#b88228]"}`}>
                  {copy.solutionsLabel}
                </span>
                <strong className="mt-2 block text-sm leading-5 sm:text-lg">{tab.label}</strong>
                <span className={`mt-1 hidden text-sm leading-5 sm:block ${isActive ? "text-white/75" : "text-[#5c6b78]"}`}>{tab.description}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {summaryCards.map(({ block, card, id }, index) => {
            const Icon = catalogCardIcons[index] || BadgeCheck;
            return (
              <a
                key={id}
                href={`#${id}`}
                className="group flex min-w-0 flex-col border border-[#d9e0e6] bg-white p-5 shadow-[0_12px_32px_rgba(7,31,59,.06)] transition hover:-translate-y-1 hover:border-[#b88228] hover:shadow-[0_18px_42px_rgba(7,31,59,.1)]"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#071f3b] text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-black uppercase text-[#b88228]">{block.eyebrow}</span>
                </span>
                <strong className="mt-4 text-lg leading-6 text-[#071f3b]">{card.title}</strong>
                <span className="mt-3 block text-sm leading-6 text-[#5c6b78]">{card.text}</span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#071f3b] group-hover:text-[#b88228]">
                  {copy.viewServicesList}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </a>
            );
          })}
        </div>

        {blocks.length > 1 ? (
          <nav className="sticky top-20 z-10 mt-8 flex max-w-full gap-2 overflow-x-auto border border-[#d9e0e6] bg-white/95 p-2 shadow-[0_12px_24px_rgba(7,31,59,.06)] backdrop-blur" aria-label={copy.onThisPage}>
            {blocks.map((block) => (
              <a
                key={block.id}
                href={`#${block.id}`}
                className="shrink-0 border border-transparent px-4 py-3 text-sm font-extrabold text-[#071f3b] transition hover:border-[#b88228] hover:bg-[#f8faf9]"
              >
                {block.title}
              </a>
            ))}
          </nav>
        ) : null}

        <div className="mt-8 grid gap-8">
          {blocks.map((block) => (
            <section key={block.id} id={block.id} className="scroll-mt-32 border border-[#d9e0e6] bg-white shadow-[0_16px_42px_rgba(7,31,59,.08)]">
              <div className="grid gap-5 border-b border-[#d9e0e6] bg-[#071f3b] p-5 text-white sm:p-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d9a441]">{block.eyebrow}</p>
                  <h3 className="mt-2 break-words text-balance text-[clamp(1.35rem,5.4vw,2rem)] font-black leading-tight">{block.title}</h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">{block.text}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <span className="border border-white/15 bg-white/[.08] px-3 py-3 text-sm font-extrabold">{copy.areas(block.cards.length)}</span>
                  <span className="border border-white/15 bg-white/[.08] px-3 py-3 text-sm font-extrabold">
                    {copy.services(block.cards.reduce((sum, card) => sum + card.services.length, 0))}
                  </span>
                </div>
              </div>

              <div className="grid gap-4 p-4 sm:p-6">
                {block.cards.map((card, cardIndex) => (
                  <ServiceCatalogDetails
                    key={card.title}
                    id={`${block.id}-area-${cardIndex + 1}`}
                    card={card}
                    index={cardIndex}
                    open={cardIndex === 0}
                    lang={lang}
                    copy={copy}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCatalogDetails({
  id,
  card,
  index,
  open,
  lang,
  copy,
}: {
  id: string;
  card: ServiceCatalogCard;
  index: number;
  open?: boolean;
  lang: Locale;
  copy: (typeof solutionPageCopy)[Locale];
}) {
  const Icon = catalogCardIcons[index] || BadgeCheck;

  return (
    <details
      id={id}
      open={open}
      className="group scroll-mt-36 border border-[#d9e0e6] bg-[#f8faf9] transition open:bg-white open:shadow-[0_14px_34px_rgba(7,31,59,.08)]"
    >
      <summary className="grid cursor-pointer list-none gap-4 p-5 outline-none transition hover:bg-white sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:p-6 [&::-webkit-details-marker]:hidden">
        <span className="grid h-12 w-12 shrink-0 place-items-center border border-[#d9e0e6] bg-white text-[#b88228]">
          <Icon className="h-6 w-6" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className="block text-xl font-black leading-7 text-[#071f3b] sm:text-2xl">{card.title}</span>
          <span className="mt-2 block text-sm leading-6 text-[#5c6b78] sm:text-base sm:leading-7">{card.text}</span>
        </span>
        <span className="inline-flex h-11 w-full max-w-full items-center justify-center gap-2 border border-[#071f3b] px-4 text-sm font-extrabold text-[#071f3b] transition group-open:border-[#b88228] group-open:text-[#b88228] sm:w-auto">
          {copy.viewServices}
          <ChevronDown className="h-4 w-4 transition group-open:rotate-180" aria-hidden />
        </span>
      </summary>

      <div className="border-t border-[#d9e0e6] p-5 sm:p-6">
        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {card.services.map((service) => (
            <span key={service} className="flex min-w-0 gap-2 border border-[#d9e0e6] bg-white px-3 py-3 text-sm font-semibold leading-5 text-[#102235]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0f6f43]" aria-hidden />
              <span>{service}</span>
            </span>
          ))}
        </div>
        <Link href={`/${lang}#contato`} className="mt-5 inline-flex items-center gap-2 border-b-2 border-[#b88228] pb-1 text-sm font-extrabold text-[#071f3b]">
          {copy.talkAboutService}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </details>
  );
}

function ProfileColumn({
  label,
  icon: Icon,
  cards,
  tone,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  cards: ProfileCard[];
  tone: "green" | "navy";
}) {
  const toneClasses = tone === "green" ? "bg-[#0f6f43] text-white" : "bg-[#071f3b] text-white";

  return (
    <div className="min-w-0 border border-[#d9e0e6] bg-white shadow-[0_12px_32px_rgba(7,31,59,.06)]">
      <div className="flex items-center justify-between gap-4 border-b border-[#d9e0e6] p-5">
        <div className="flex min-w-0 items-center gap-3">
        <span className={`grid h-11 w-11 shrink-0 place-items-center ${toneClasses}`}>
          <Icon className="h-5 w-5" aria-hidden />
        </span>
          <h3 className="text-xl font-extrabold text-[#071f3b]">{label}</h3>
        </div>
        <span className="shrink-0 text-xs font-black uppercase text-[#b88228]">{String(cards.length).padStart(2, "0")}</span>
      </div>
      <div className="grid gap-4 p-4 sm:p-5">
        {cards.map((card) => (
          <article key={card.title} className="min-w-0 border border-[#d9e0e6] border-l-[#b88228] border-l-4 bg-[#f8faf9] p-5 transition hover:bg-white">
            <div className="mb-3 flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 shrink-0 text-[#b88228]" aria-hidden />
              <h4 className="text-base font-extrabold leading-6 text-[#071f3b]">{card.title}</h4>
            </div>
            <p className="text-sm leading-6 text-[#5c6b78]">{card.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
