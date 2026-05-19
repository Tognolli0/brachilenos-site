import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, CheckCircle2, FileText, Globe2, MessageCircle, ShieldCheck, UsersRound } from "lucide-react";
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
const profileIcons = { pf: UsersRound, pj: Building2 };

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
    text: "Cada serviço é orientado pelo tipo de cliente, pela jurisdição envolvida e pelo nível de risco da operação.",
    pfLabel: "Pessoa Física",
    pjLabel: "Pessoa Jurídica",
    profiles: {
      brasil: {
        pf: [
          { title: "Regularização fiscal", text: "Organização de pendências, declarações e documentos pessoais no Brasil." },
          { title: "Residência fiscal", text: "Análise de vínculo fiscal, renda mundial e comprovantes necessários." },
          { title: "Organização patrimonial", text: "Separação entre pessoa física, empresa, bens, rendimentos e investimentos." },
          { title: "Planejamento de renda", text: "Apoio para decisões com impacto tributário, financeiro e documental." },
        ],
        pj: [
          { title: "Contabilidade empresarial", text: "Rotina contábil, fechamento mensal e relatórios para gestão." },
          { title: "Fiscal e obrigações", text: "Apuração de impostos, declarações e calendário fiscal acompanhado." },
          { title: "Abertura e regularização", text: "Constituição, alterações, certidões e ajuste de pendências." },
          { title: "BPO financeiro", text: "Contas, conciliação, fluxo de caixa e indicadores para decisão." },
        ],
      },
      chile: {
        pf: [
          { title: "Orientação para brasileiros", text: "Suporte em português para reduzir dúvidas sobre obrigações locais." },
          { title: "Regularização documental", text: "Mapeamento de documentos, prazos e pontos fiscais relevantes." },
          { title: "Planejamento financeiro", text: "Organização de renda, custos, remessas e decisões entre países." },
          { title: "Apoio preventivo", text: "Leitura de riscos antes de investir, empreender ou movimentar recursos." },
        ],
        pj: [
          { title: "Abertura de empresa", text: "Direcionamento societário, documental e operacional para iniciar atividades." },
          { title: "Contabilidade local", text: "Rotina contábil e fiscal com acompanhamento claro para o empresário." },
          { title: "Gestão financeira", text: "Controle de contas, conciliação, fluxo de caixa e relatórios." },
          { title: "Compliance operacional", text: "Processos e evidências para manter a empresa organizada." },
        ],
      },
      "brasil-chile": {
        pf: [
          { title: "Residência fiscal", text: "Definição do cenário fiscal e impactos de renda nos dois países." },
          { title: "Dupla tributação", text: "Análise de regras, créditos e documentos para evitar pagamento duplicado." },
          { title: "Remessas e renda mundial", text: "Organização de entradas, saídas, lucros, comprovantes e declarações." },
          { title: "Dossiê de evidências", text: "Contratos, extratos e documentos preparados para maior segurança." },
        ],
        pj: [
          { title: "Estruturação binacional", text: "Avaliação de onde faturar, como operar e como comprovar fluxos." },
          { title: "Planejamento tributário", text: "Estratégia para reduzir risco fiscal e melhorar eficiência legal." },
          { title: "Gestão financeira entre países", text: "Fluxo de caixa, conciliação e indicadores para operação internacional." },
          { title: "Contratos e compliance", text: "Organização documental, responsabilidades e rotinas de controle." },
        ],
      },
    },
  },
  es: {
    eyebrow: "Atención por perfil",
    title: "Soluciones para persona natural y empresa",
    text: "Cada servicio se orienta por el tipo de cliente, la jurisdicción y el nivel de riesgo de la operación.",
    pfLabel: "Persona Natural",
    pjLabel: "Empresa",
    profiles: {
      brasil: {
        pf: [
          { title: "Regularización fiscal", text: "Organización de pendientes, declaraciones y documentos personales en Brasil." },
          { title: "Residencia fiscal", text: "Análisis de vínculo fiscal, renta mundial y comprobantes necesarios." },
          { title: "Organización patrimonial", text: "Separación entre persona, empresa, bienes, ingresos e inversiones." },
          { title: "Planificación de renta", text: "Apoyo para decisiones con impacto tributario, financiero y documental." },
        ],
        pj: [
          { title: "Contabilidad empresarial", text: "Rutina contable, cierre mensual e informes de gestión." },
          { title: "Fiscal y obligaciones", text: "Cálculo de impuestos, declaraciones y calendario fiscal." },
          { title: "Apertura y regularización", text: "Constitución, modificaciones, certificados y pendientes." },
          { title: "BPO financiero", text: "Cuentas, conciliación, flujo de caja e indicadores." },
        ],
      },
      chile: {
        pf: [
          { title: "Orientación para brasileños", text: "Soporte en portugués para reducir dudas sobre obligaciones locales." },
          { title: "Regularización documental", text: "Mapeo de documentos, plazos y puntos fiscales relevantes." },
          { title: "Planificación financiera", text: "Organización de renta, costos, remesas y decisiones entre países." },
          { title: "Apoyo preventivo", text: "Lectura de riesgos antes de invertir, emprender o mover recursos." },
        ],
        pj: [
          { title: "Apertura de empresa", text: "Dirección societaria, documental y operacional para iniciar actividades." },
          { title: "Contabilidad local", text: "Rutina contable y fiscal con acompañamiento claro." },
          { title: "Gestión financiera", text: "Control de cuentas, conciliación, caja e informes." },
          { title: "Compliance operacional", text: "Procesos y evidencias para mantener la empresa organizada." },
        ],
      },
      "brasil-chile": {
        pf: [
          { title: "Residencia fiscal", text: "Definición del escenario fiscal e impactos de renta en ambos países." },
          { title: "Doble tributación", text: "Análisis de reglas, créditos y documentos para evitar pago duplicado." },
          { title: "Remesas y renta mundial", text: "Organización de ingresos, salidas, utilidades y declaraciones." },
          { title: "Dossier de evidencias", text: "Contratos, extractos y documentos preparados para más seguridad." },
        ],
        pj: [
          { title: "Estructuración binacional", text: "Evaluación de dónde facturar, cómo operar y comprobar flujos." },
          { title: "Planificación tributaria", text: "Estrategia para reducir riesgo fiscal y mejorar eficiencia legal." },
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
          { title: "Tax regularization", text: "Organization of pending items, filings and personal documents in Brazil." },
          { title: "Tax residence", text: "Review of tax ties, worldwide income and supporting evidence." },
          { title: "Asset organization", text: "Separation between individual, company, assets, income and investments." },
          { title: "Income planning", text: "Support for decisions with tax, finance and documentation impact." },
        ],
        pj: [
          { title: "Business accounting", text: "Accounting routine, monthly closing and management reports." },
          { title: "Tax and filings", text: "Tax calculations, declarations and tracked fiscal calendar." },
          { title: "Opening and regularization", text: "Formation, amendments, certificates and pending items." },
          { title: "Finance BPO", text: "Accounts, reconciliation, cash flow and decision indicators." },
        ],
      },
      chile: {
        pf: [
          { title: "Guidance for Brazilians", text: "Portuguese-language support to reduce doubts about local obligations." },
          { title: "Document regularization", text: "Mapping documents, deadlines and relevant tax points." },
          { title: "Financial planning", text: "Organization of income, costs, remittances and cross-border decisions." },
          { title: "Preventive support", text: "Risk review before investing, starting a business or moving funds." },
        ],
        pj: [
          { title: "Company opening", text: "Corporate, document and operational guidance to start activities." },
          { title: "Local accounting", text: "Accounting and tax routine with clear business follow-up." },
          { title: "Financial management", text: "Account control, reconciliation, cash flow and reports." },
          { title: "Operational compliance", text: "Processes and evidence to keep the company organized." },
        ],
      },
      "brasil-chile": {
        pf: [
          { title: "Tax residence", text: "Definition of the fiscal scenario and income impacts in both countries." },
          { title: "Double taxation", text: "Rule, credit and documentation review to avoid duplicate payment." },
          { title: "Remittances and income", text: "Organization of inflows, outflows, profits, evidence and filings." },
          { title: "Evidence dossier", text: "Contracts, statements and documents prepared for greater security." },
        ],
        pj: [
          { title: "Binational structuring", text: "Review of where to bill, how to operate and how to evidence flows." },
          { title: "Tax planning", text: "Strategy to reduce fiscal risk and improve legal efficiency." },
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
  const audience = audienceCopy[lang];
  const profileGroups = audience.profiles[slug];

  return (
    <>
      <Header lang={lang} dict={dict} page="solutions" />
      <main>
        <section className="border-b border-[#071f3b]/10 bg-[#f8faf9]">
          <div className="shell grid gap-8 py-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end lg:py-16">
            <div>
              <p className="eyebrow mb-4">{group.eyebrow}</p>
              <h1 className="display-serif max-w-4xl text-balance text-[clamp(1.9rem,3.4vw,3.1rem)] font-bold leading-tight text-[#071f3b]">
                {group.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[#31465a] sm:text-lg">{group.description}</p>
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
              <span className="display-serif block text-4xl font-bold text-[#071f3b]">{group.label}</span>
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
              <h2 className="display-serif text-balance text-[clamp(1.65rem,3vw,2.35rem)] font-bold leading-tight text-[#071f3b]">
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

        <section className="section-pad bg-[#f8faf9]">
          <div className="shell">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow mb-3">{audience.eyebrow}</p>
              <h2 className="display-serif text-balance text-[clamp(1.65rem,3vw,2.35rem)] font-bold leading-tight text-[#071f3b]">
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

        <section className="bg-[#071f3b] py-12 text-white">
          <div className="shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow mb-3">{content.labels.talkSpecialist}</p>
              <h2 className="display-serif max-w-3xl text-balance text-[clamp(1.55rem,2.8vw,2.35rem)] font-bold leading-tight text-white">
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
    <div className="min-w-0">
      <div className="mb-4 flex items-center gap-3">
        <span className={`grid h-11 w-11 shrink-0 place-items-center ${toneClasses}`}>
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="text-xl font-extrabold text-[#071f3b]">{label}</h3>
      </div>
      <div className="grid gap-4">
        {cards.map((card) => (
          <article key={card.title} className="min-w-0 border border-[#d9e0e6] bg-white p-5 shadow-[0_10px_28px_rgba(7,31,59,.05)]">
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
