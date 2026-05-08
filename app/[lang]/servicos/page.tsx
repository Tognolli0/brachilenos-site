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
      images: [{ url: "/assets/riscos-fiscais.webp", width: 1536, height: 1024, alt: dict.meta.servicesTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.servicesTitle,
      description: dict.meta.servicesDescription,
      images: ["/assets/riscos-fiscais.webp"],
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

type ServiceGroup = {
  label: string;
  country: string;
  accent: string;
  cards: {
    title: string;
    text: string;
    services: string[];
  }[];
};

const serviceGroupsPtBr: ServiceGroup[] = [
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

const serviceGroupsByLocale: Record<Locale, ServiceGroup[]> = {
  "pt-br": serviceGroupsPtBr,
  es: [
    {
      label: "Persona natural - Brasil",
      country: "Brasil",
      accent: "border-t-[#0f6f43]",
      cards: [
        {
          title: "Contabilidad para persona natural",
          text: "Asesoría fiscal y tributaria para brasileños en Brasil o residentes en el exterior, con foco en regularización, planificación y cumplimiento ante la Receita Federal.",
          services: [
            "IRPF - Declaración anual del impuesto de renta de persona física.",
            "Carnê-Leão - Cálculo mensual de ingresos recibidos del exterior o de personas naturales.",
            "Ganancia de capital - Cálculo tributario sobre venta de bienes y derechos.",
            "Regularización de CPF - Soporte para CPF irregular, suspendido o pendiente.",
            "Declaración de salida definitiva - Regularización fiscal para quien dejó Brasil.",
            "Declaración de bienes en el exterior - Organización patrimonial internacional.",
            "Planificación tributaria PF - Estrategias para organización fiscal y reducción de riesgos.",
            "Regularización fiscal - Apoyo ante la Receita Federal.",
            "Consultoría para residentes en el exterior - Asesoría para brasileños expatriados.",
            "Análisis de doble tributación Brasil x Chile - Evaluación tributaria internacional.",
          ],
        },
        {
          title: "Finanzas para persona natural",
          text: "Organización financiera y patrimonial para brasileños que quieren estructurar su vida financiera en Brasil o en el exterior.",
          services: ["Planificación financiera", "Diagnóstico financiero", "Organización financiera", "Control de flujo de caja personal", "Planificación patrimonial", "Reserva de emergencia", "Organización de deudas", "Reorganización financiera", "Educación financiera", "Planificación para cambio internacional", "Planificación de jubilación", "Consultoría para inversiones", "Estructuración de cartera", "Diversificación patrimonial", "Planificación sucesoria"],
        },
      ],
    },
    {
      label: "Persona jurídica - Brasil",
      country: "Brasil",
      accent: "border-t-[#0f6f43]",
      cards: [
        {
          title: "Contabilidad empresarial",
          text: "Soluciones contables, fiscales y societarias para empresas brasileñas y operaciones con socios o estructuras internacionales.",
          services: ["Apertura de empresas", "Modificación contractual", "Cierre de empresas", "MEI, ME, LTDA y SLU", "Regularización de CNPJ", "DAS / Simples Nacional", "DASN", "Emisión de notas fiscales", "Cálculo de impuestos", "Nómina", "Pró-labore", "Escrituración contable", "Escrituración fiscal", "Conciliación bancaria", "Balance patrimonial", "DRE", "Distribución de utilidades", "Parcelamientos fiscales", "DEFIS", "DCTFWeb", "SPED", "ECD", "ECF", "Consultoría para socios en el exterior", "Estructuración fiscal Brasil x Chile"],
        },
        {
          title: "Finanzas empresariales",
          text: "Estructuración financiera y soporte estratégico para crecimiento, gestión y expansión empresarial.",
          services: ["BPO financiero", "Flujo de caja", "Control financiero", "DRE gerencial", "Planificación financiera empresarial", "Definición de precios", "Margen y rentabilidad", "Cuentas por pagar y cobrar", "Proyección de caja", "Planificación de crecimiento", "KPIs financieros", "Diagnóstico financiero", "Reestructuración financiera", "Valuation básico", "Apoyo a la toma de decisiones"],
        },
      ],
    },
    {
      label: "Persona natural - Chile",
      country: "Chile",
      accent: "border-t-[#c91f28]",
      cards: [
        {
          title: "Contabilidad para persona natural en Chile",
          text: "Asesoría tributaria y regularización fiscal para brasileños residentes en Chile y contribuyentes ante el SII.",
          services: ["Operación Renta (F22)", "Declaración anual de renta", "Regularización tributaria en el SII", "Inicio de actividades", "Emisión de boletas", "Honorarios", "Planificación tributaria", "Consultoría para brasileños en Chile", "Regularización de RUT", "Residencia fiscal", "Declaración de renta exterior", "Créditos tributarios", "Consultoría sobre APV y DFL2"],
        },
        {
          title: "Finanzas para persona natural en Chile",
          text: "Planificación financiera y organización patrimonial para brasileños que viven en Chile.",
          services: ["Organización financiera en Chile", "Planificación financiera para expatriados", "Educación financiera", "Organización de presupuesto en CLP", "Planificación patrimonial internacional", "Reserva de emergencia", "Organización de deudas", "Planificación de metas", "Análisis de costo de vida"],
        },
      ],
    },
    {
      label: "Persona jurídica - Chile",
      country: "Chile",
      accent: "border-t-[#c91f28]",
      cards: [
        {
          title: "Contabilidad empresarial en Chile",
          text: "Estructuración empresarial y asesoría tributaria para empresas que operan en Chile.",
          services: ["Apertura de empresa en Chile", "Constitución de SpA", "EIRL", "Persona natural con giro", "Inicio de actividades", "RUT empresa", "Patente comercial", "Facturas", "Boletas", "F29 mensual", "F22 anual", "Contabilidad mensual", "Cálculo de impuestos", "Planificación tributaria", "Escrituración contable", "Conciliación bancaria", "Remuneraciones", "Estructura administrativa", "Regularización en el SII", "Cierre de empresa", "Consultoría para brasileños en Chile"],
        },
        {
          title: "Finanzas empresariales en Chile",
          text: "Gestión financiera y planificación estratégica para empresas en el mercado chileno.",
          services: ["Estructuración financiera", "Flujo de caja", "Control financiero", "DRE gerencial", "Definición de precios", "Margen y rentabilidad", "Organización de costos", "Planificación para expansión", "KPIs financieros", "Diagnóstico financiero", "Reestructuración financiera", "Apoyo estratégico"],
        },
      ],
    },
    {
      label: "Servicios internacionales - Brasil x Chile",
      country: "Internacional",
      accent: "border-t-[#b88228]",
      cards: [
        {
          title: "Consultoría tributaria internacional",
          text: "Estructuración fiscal y tributaria para operaciones, patrimonio e ingresos entre Brasil y Chile.",
          services: ["Planificación tributaria internacional", "Consultoría fiscal Brasil x Chile", "Residencia fiscal", "Estructuración patrimonial internacional", "Estructuración societaria", "Doble tributación", "Aplicación del acuerdo Brasil-Chile", "Regularización de ingresos en el exterior", "Retiro de utilidades", "Pró-labore internacional", "Consultoría para empresas binacionales", "Estructuración para prestadores internacionales"],
        },
        {
          title: "Planificación financiera internacional",
          text: "Organización patrimonial y financiera para personas y empresas con operaciones entre países.",
          services: ["Planificación financiera internacional", "Organización patrimonial", "Estructuración financiera internacional", "Gestión financiera para expatriados", "Planificación de cambio internacional", "Protección patrimonial", "Remesas internacionales", "Estructuración de ingresos", "Estrategia financiera binacional"],
        },
        {
          title: "Asesoría financiera e inversiones",
          text: "Consultoría estratégica para crecimiento patrimonial, inversiones e internacionalización de activos.",
          services: ["Planificación de inversiones", "Perfil de inversionista", "Construcción de cartera", "Diversificación de inversiones", "Estrategia de asignación", "Internacionalización patrimonial", "Estrategia de dolarización", "Planificación de largo plazo", "Organización financiera del socio", "Separación PF x PJ", "Estrategia de retiro de utilidades", "Estructuración de capital", "Estrategia de reinversión"],
        },
      ],
    },
  ],
  en: [
    {
      label: "Individual - Brazil",
      country: "Brazil",
      accent: "border-t-[#0f6f43]",
      cards: [
        {
          title: "Individual accounting",
          text: "Tax and fiscal advisory for Brazilians in Brazil or living abroad, focused on regularization, planning and compliance with the Brazilian Receita Federal.",
          services: [
            "IRPF - Annual individual income tax return.",
            "Carnê-Leão - Monthly calculation of income received from abroad or from individuals.",
            "Capital gain - Tax calculation on the sale of assets and rights.",
            "CPF regularization - Support for irregular, suspended or pending CPF status.",
            "Definitive departure declaration - Tax regularization for those who left Brazil.",
            "Declaration of assets abroad - International asset organization.",
            "Individual tax planning - Strategies for fiscal organization and risk reduction.",
            "Tax regularization - Support before the Brazilian Receita Federal.",
            "Consulting for residents abroad - Advisory for Brazilian expatriates.",
            "Brazil x Chile double taxation analysis - International tax evaluation.",
          ],
        },
        {
          title: "Individual finance",
          text: "Financial and asset organization for Brazilians who want to structure their financial life in Brazil or abroad.",
          services: ["Financial planning", "Financial diagnosis", "Financial organization", "Personal cash flow control", "Asset planning", "Emergency reserve", "Debt organization", "Financial restructuring", "Financial education", "International relocation planning", "Retirement planning", "Investment consulting", "Portfolio structuring", "Asset diversification", "Succession planning"],
        },
      ],
    },
    {
      label: "Company - Brazil",
      country: "Brazil",
      accent: "border-t-[#0f6f43]",
      cards: [
        {
          title: "Business accounting",
          text: "Accounting, tax and corporate solutions for Brazilian companies and operations with partners or international structures.",
          services: ["Company formation", "Contract amendments", "Company closure", "MEI, ME, LTDA and SLU", "CNPJ regularization", "DAS / Simples Nacional", "DASN", "Invoice issuance", "Tax calculation", "Payroll", "Pro-labore", "Bookkeeping", "Tax bookkeeping", "Bank reconciliation", "Balance sheet", "Income statement", "Profit distribution", "Tax installment plans", "DEFIS", "DCTFWeb", "SPED", "ECD", "ECF", "Consulting for partners abroad", "Brazil x Chile fiscal structuring"],
        },
        {
          title: "Business finance",
          text: "Financial structuring and strategic support for business growth, management and expansion.",
          services: ["Finance BPO", "Cash flow", "Financial control", "Management income statement", "Business financial planning", "Pricing", "Margin and profitability", "Accounts payable and receivable", "Cash projection", "Growth planning", "Financial KPIs", "Financial diagnosis", "Financial restructuring", "Basic valuation", "Decision-making support"],
        },
      ],
    },
    {
      label: "Individual - Chile",
      country: "Chile",
      accent: "border-t-[#c91f28]",
      cards: [
        {
          title: "Individual accounting in Chile",
          text: "Tax advisory and fiscal regularization for Brazilians living in Chile and taxpayers before the SII.",
          services: ["Operación Renta (F22)", "Annual income declaration", "Tax regularization before the SII", "Inicio de Actividades", "Boleta issuance", "Honorarios", "Tax planning", "Consulting for Brazilians in Chile", "RUT regularization", "Tax residence", "Foreign income declaration", "Tax credits", "Consulting on APV and DFL2"],
        },
        {
          title: "Individual finance in Chile",
          text: "Financial planning and asset organization for Brazilians living in Chile.",
          services: ["Financial organization in Chile", "Financial planning for expatriates", "Financial education", "Budget organization in CLP", "International asset planning", "Emergency reserve", "Debt organization", "Goal planning", "Cost of living analysis"],
        },
      ],
    },
    {
      label: "Company - Chile",
      country: "Chile",
      accent: "border-t-[#c91f28]",
      cards: [
        {
          title: "Business accounting in Chile",
          text: "Business structuring and tax advisory for companies operating in Chile.",
          services: ["Company formation in Chile", "SpA incorporation", "EIRL", "Persona Natural con Giro", "Inicio de Actividades", "Company RUT", "Commercial license", "Facturas", "Boletas", "Monthly F29", "Annual F22", "Monthly accounting", "Tax calculation", "Tax planning", "Bookkeeping", "Bank reconciliation", "Payroll", "Administrative structure", "SII regularization", "Company closure", "Consulting for Brazilians in Chile"],
        },
        {
          title: "Business finance in Chile",
          text: "Financial management and strategic planning for companies in the Chilean market.",
          services: ["Financial structuring", "Cash flow", "Financial control", "Management income statement", "Pricing", "Margin and profitability", "Cost organization", "Expansion planning", "Financial KPIs", "Financial diagnosis", "Financial restructuring", "Strategic support"],
        },
      ],
    },
    {
      label: "International services - Brazil x Chile",
      country: "International",
      accent: "border-t-[#b88228]",
      cards: [
        {
          title: "International tax consulting",
          text: "Fiscal and tax structuring for operations, assets and income between Brazil and Chile.",
          services: ["International tax planning", "Brazil x Chile fiscal consulting", "Tax residence", "International asset structuring", "Corporate structuring", "Double taxation", "Application of the Brazil-Chile treaty", "Regularization of foreign income", "Profit withdrawal", "International pro-labore", "Consulting for binational companies", "Structuring for international service providers"],
        },
        {
          title: "International financial planning",
          text: "Asset and financial organization for people and companies with cross-border operations.",
          services: ["International financial planning", "Asset organization", "International financial structuring", "Financial management for expatriates", "International relocation planning", "Asset protection", "International remittances", "Income structuring", "Binational financial strategy"],
        },
        {
          title: "Financial advisory and investments",
          text: "Strategic consulting for asset growth, investments and internationalization of assets.",
          services: ["Investment planning", "Investor profile", "Portfolio construction", "Investment diversification", "Allocation strategy", "Asset internationalization", "Dollarization strategy", "Long-term planning", "Partner financial organization", "Individual x company separation", "Profit withdrawal strategy", "Capital structuring", "Reinvestment strategy"],
        },
      ],
    },
  ],
};

export default async function ServicesPage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = (isLocale(paramLang) ? paramLang : "pt-br") as Locale;
  const dict = getDictionary(lang);
  const copy = servicesPageCopy[lang];
  const serviceGroups = serviceGroupsByLocale[lang];

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
              { image: "/assets/riscos-fiscais.webp", title: copy.imageCards[0].title, text: copy.imageCards[0].text },
              { image: "/assets/erros-imposto.webp", title: copy.imageCards[1].title, text: copy.imageCards[1].text },
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
