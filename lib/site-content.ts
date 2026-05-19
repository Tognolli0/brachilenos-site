import type { Locale } from "@/lib/dictionaries";

export const solutionSlugs = ["brasil", "chile", "brasil-chile"] as const;
export type SolutionSlug = (typeof solutionSlugs)[number];

const content = {
  "pt-br": {
    routes: {
      work: "trabalhe-conosco",
      solutions: "solucoes",
    },
    labels: {
      solutionsMenu: "Soluções",
      viewDetails: "Ver detalhes",
      requestProposal: "Solicitar análise",
      talkSpecialist: "Falar com especialista",
      workWithUs: "Trabalhe Conosco",
    },
    home: {
      hero: {
        eyebrow: "Escritório de contabilidade Brasil x Chile",
        title: "Contabilidade estratégica para operar entre Brasil e Chile",
        text:
          "Assessoria contábil, fiscal e financeira para empresas, investidores e brasileiros que precisam operar com segurança nos dois países.",
        primary: "Falar pelo WhatsApp",
        secondary: "Ver soluções",
      },
      proof: [
        { value: "BR + CL", label: "Atuação pensada para dois mercados" },
        { value: "PT / ES / EN", label: "Comunicação trilíngue" },
        { value: "360", label: "Contábil, fiscal, financeiro e tributário" },
      ],
      serviceTitle: "Soluções contábeis para operar com segurança",
      serviceText:
        "Atendimento contábil, fiscal e financeiro organizado para quem atua no Brasil, no Chile ou entre os dois mercados.",
      serviceCards: [
        {
          title: "Contabilidade e Fiscal",
          text: "Rotina contábil, apuração, obrigações acessórias e acompanhamento fiscal para empresas.",
        },
        {
          title: "Planejamento Tributário",
          text: "Estratégia para reduzir riscos, evitar bitributação e tomar decisões com base técnica.",
        },
        {
          title: "BPO Financeiro",
          text: "Organização de contas, fluxo de caixa, conciliação, indicadores e relatórios gerenciais.",
        },
        {
          title: "Abertura e Regularização",
          text: "Suporte para abrir, ajustar ou regularizar empresas e documentação nos mercados atendidos.",
        },
        {
          title: "Consultoria Brasil x Chile",
          text: "Análise de operação, residência fiscal, remessas, lucros, contratos e obrigações binacionais.",
        },
        {
          title: "Gestão e Compliance",
          text: "Calendários, controles, evidências e processos para manter a empresa organizada e segura.",
        },
      ],
      aboutEyebrow: "Quem somos",
      aboutTitle: "Brasil e Chile conectados por estratégia, contabilidade e finanças.",
      aboutParagraphs: [
        "A Brachilenos é uma empresa especializada em soluções contábeis, financeiras e estratégicas para brasileiros no Chile e chilenos no Brasil.",
        "Atuamos conectando pessoas, empresas e profissionais aos dois mercados através de uma estrutura integrada de assessoria empresarial, tributária e financeira, oferecendo suporte para quem deseja empreender, investir, expandir operações ou regularizar sua situação entre Brasil e Chile.",
        "Nossa atuação combina conhecimento técnico, planejamento estratégico e uma rede de profissionais parceiros nos dois países, permitindo um atendimento alinhado às legislações, exigências fiscais e particularidades operacionais de cada mercado.",
        "Oferecemos soluções para pessoa física e jurídica, incluindo abertura e regularização de empresas, planejamento tributário, assessoria contábil, estruturação financeira, organização patrimonial e consultoria internacional para operações binacionais.",
        "Mais do que executar processos, nosso objetivo é proporcionar segurança, organização e eficiência para clientes que buscam crescer de forma estruturada no cenário internacional.",
        "Acreditamos que operações entre países exigem visão estratégica, suporte técnico qualificado e profissionais que compreendam a realidade local e internacional de forma integrada.",
        "Brasil e Chile conectados através de estratégia, contabilidade, finanças e oportunidades.",
      ],
      method: {
        eyebrow: "Como trabalhamos",
        title: "Diagnóstico, execução e acompanhamento sem improviso",
        steps: [
          { title: "Diagnóstico", text: "Entendemos empresa, residência fiscal, faturamento, documentos e riscos." },
          { title: "Plano técnico", text: "Definimos prioridades, obrigações, regime, controles e próximos passos." },
          { title: "Execução", text: "Organizamos entregas contábeis, fiscais, financeiras e societárias." },
          { title: "Acompanhamento", text: "Monitoramos prazos, indicadores, documentos e novas decisões." },
        ],
      },
      workBand: {
        eyebrow: "Rede técnica",
        title: "Trabalhe com uma rede técnica Brasil x Chile",
        text:
          "A BRACHILENOS também recebe profissionais e prestadores de serviço para fortalecer a operação com estrutura e critérios técnicos.",
        cta: "Trabalhe Conosco",
      },
      contact: {
        eyebrow: "Contato comercial",
        title: "Solicite uma análise inicial pelo WhatsApp",
        text:
          "Conte o cenário da sua empresa. A equipe retorna com o caminho mais adequado para diagnóstico, proposta ou atendimento recorrente.",
        highlights: ["Atendimento para Brasil, Chile e operações binacionais", "Contato comercial separado do cadastro profissional", "Base pronta para CRM, planilha ou e-mail"],
      },
    },
    solutions: {
      indexEyebrow: "Soluções",
      title: "Escolha a solução pelo mercado e pelo perfil",
      text:
        "A BRACHILENOS separa os serviços por Brasil, Chile e Brasil x Chile para facilitar a escolha do cliente e deixar a proposta mais clara.",
      groups: {
        brasil: {
          label: "Brasil",
          eyebrow: "Soluções no Brasil",
          title: "Soluções contábeis e financeiras para operações no Brasil",
          description:
            "Apoio para manter a empresa regular, organizada e preparada para decisões fiscais, financeiras e societárias.",
          services: [
            { title: "Contabilidade empresarial", text: "Escrituração, fechamento mensal, demonstrativos e suporte gerencial." },
            { title: "Fiscal e obrigações acessórias", text: "Apuração de impostos, declarações e acompanhamento de prazos." },
            { title: "Abertura e regularização", text: "Constituição, alterações, certidões, pendências e organização documental." },
            { title: "Planejamento tributário", text: "Análise de regime, carga tributária e caminhos legais para eficiência." },
            { title: "BPO financeiro", text: "Contas a pagar e receber, conciliação, fluxo de caixa e relatórios." },
            { title: "Organização patrimonial", text: "Apoio estratégico para separar pessoa física, empresa e patrimônio." },
          ],
        },
        chile: {
          label: "Chile",
          eyebrow: "Soluções no Chile",
          title: "Estrutura contábil e financeira para brasileiros no Chile",
          description:
            "Estrutura para abrir, organizar ou acompanhar operações locais com comunicação próxima e visão empresarial.",
          services: [
            { title: "Orientação para abertura de empresa", text: "Direcionamento documental, societário e operacional para iniciar atividades." },
            { title: "Contabilidade local", text: "Organização de rotina contábil, fiscal e relatórios para acompanhamento." },
            { title: "Gestão financeira", text: "Controle de contas, fluxo de caixa, indicadores e conciliação." },
            { title: "Regularização fiscal", text: "Mapeamento de pendências, prazos, documentos e plano de ajuste." },
            { title: "Suporte para brasileiros", text: "Atendimento em português para reduzir ruído nas decisões empresariais." },
            { title: "Compliance operacional", text: "Processos, evidências e controles para crescer com segurança." },
          ],
        },
        "brasil-chile": {
          label: "Brasil x Chile",
          eyebrow: "Operações binacionais",
          title: "Planejamento internacional para Brasil x Chile",
          description:
            "Consultoria para empresas, investidores e pessoas físicas que precisam organizar decisões entre dois países.",
          services: [
            { title: "Diagnóstico Brasil x Chile", text: "Leitura do cenário, riscos, obrigações e prioridades nos dois mercados." },
            { title: "Planejamento tributário internacional", text: "Estratégia para renda, créditos, tratados, remessas e distribuição de lucros." },
            { title: "Residência fiscal", text: "Análise de residência, comprovação documental e impactos na tributação." },
            { title: "Dupla tributação", text: "Aplicação de regras e documentação para reduzir riscos de pagamento duplicado." },
            { title: "Estruturação de operação", text: "Definição de onde faturar, como comprovar, operar e controlar fluxos." },
            { title: "Dossiê de evidências", text: "Organização de contratos, extratos, notas, declarações e comprovantes." },
          ],
        },
      },
    },
    work: {
      eyebrow: "Trabalhe Conosco",
      title: "Trabalhe ou preste serviço com a BRACHILENOS",
      text:
        "Recebemos profissionais e prestadores com perfil técnico, responsabilidade e interesse em projetos contábeis, fiscais, financeiros e tributários entre Brasil e Chile.",
      cards: [
        {
          id: "quero-trabalhar",
          title: "Quero trabalhar",
          text:
            "Para profissionais que buscam oportunidade em um ambiente técnico, internacional e orientado a crescimento estruturado.",
          items: ["Perfil contábil, fiscal, financeiro ou administrativo", "Visão analítica e compromisso com qualidade", "Interesse em atuação Brasil x Chile"],
          cta: "Enviar candidatura",
        },
        {
          id: "prestador",
          title: "Prestar serviço",
          text:
            "Para especialistas independentes que desejam atuar em demandas específicas com padrão profissional e organização.",
          items: ["Contabilidade, fiscal, BPO ou consultoria", "Atuação por projeto ou demanda recorrente", "Disponibilidade para integração técnica"],
          cta: "Cadastrar perfil",
        },
      ],
      application: {
        eyebrow: "Cadastro profissional",
        title: "Envie seus dados para análise",
        text:
          "As informações entram em uma base separada dos leads comerciais, permitindo organizar candidatos e prestadores por área, país e disponibilidade.",
        groups: ["Candidatos", "Prestadores de serviço"],
      },
    },
  },
  es: {
    routes: {
      work: "trabalhe-conosco",
      solutions: "solucoes",
    },
    labels: {
      solutionsMenu: "Soluciones",
      viewDetails: "Ver detalles",
      requestProposal: "Solicitar propuesta",
      talkSpecialist: "Hablar con especialista",
      workWithUs: "Trabaja con nosotros",
    },
    home: {
      hero: {
        eyebrow: "Estudio contable Brasil x Chile",
        title: "Contabilidad para operaciones Brasil x Chile",
        text:
          "Asesoría contable, fiscal y financiera para empresas, inversionistas y brasileños que necesitan operar con seguridad en ambos países.",
        primary: "Hablar con especialista",
        secondary: "Nuestros servicios",
      },
      proof: [
        { value: "BR + CL", label: "Actuación para dos mercados" },
        { value: "PT / ES / EN", label: "Comunicación trilingüe" },
        { value: "360", label: "Contable, fiscal, financiero y tributario" },
      ],
      serviceTitle: "Conoce nuestros servicios contables",
      serviceText: "Atención contable, fiscal y financiera organizada para quienes actúan en Brasil, Chile o entre ambos mercados.",
      serviceCards: [
        { title: "Contabilidad y fiscal", text: "Rutina contable, impuestos, declaraciones y seguimiento fiscal." },
        { title: "Planificación tributaria", text: "Estrategia para reducir riesgos y evitar doble tributación." },
        { title: "BPO financiero", text: "Cuentas, caja, conciliación, indicadores e informes." },
        { title: "Apertura y regularización", text: "Soporte para abrir, ajustar o regularizar empresas y documentos." },
        { title: "Consultoría Brasil x Chile", text: "Análisis de operación, residencia fiscal, remesas y obligaciones binacionales." },
        { title: "Gestión y compliance", text: "Calendarios, controles, evidencias y procesos para mayor seguridad." },
      ],
      aboutEyebrow: "Quiénes somos",
      aboutTitle: "Brasil y Chile conectados por estrategia, contabilidad y finanzas.",
      aboutParagraphs: [
        "BRACHILENOS es una empresa especializada en soluciones contables, financieras y estratégicas para brasileños en Chile y chilenos en Brasil.",
        "Conectamos personas, empresas y profesionales a ambos mercados mediante una estructura integrada de asesoría empresarial, tributaria y financiera.",
        "Nuestra actuación combina conocimiento técnico, planificación estratégica y una red de profesionales en los dos países.",
        "Ofrecemos soluciones para personas y empresas, incluyendo apertura y regularización, planificación tributaria, contabilidad, estructura financiera y consultoría internacional.",
        "Nuestro objetivo es entregar seguridad, organización y eficiencia para crecer de forma estructurada en el escenario internacional.",
      ],
      method: {
        eyebrow: "Cómo trabajamos",
        title: "Atención en etapas claras",
        steps: [
          { title: "Diagnóstico", text: "Entendemos empresa, residencia fiscal, facturación, documentos y riesgos." },
          { title: "Plan técnico", text: "Definimos prioridades, obligaciones, régimen y próximos pasos." },
          { title: "Ejecución", text: "Organizamos entregas contables, fiscales, financieras y societarias." },
          { title: "Seguimiento", text: "Monitoreamos plazos, indicadores, documentos y nuevas decisiones." },
        ],
      },
      workBand: {
        eyebrow: "Red técnica",
        title: "Profesionales técnicos para la red BRACHILENOS",
        text: "BRACHILENOS recibe profesionales y prestadores para fortalecer la operación con estructura técnica.",
        cta: "Trabaja con nosotros",
      },
      contact: {
        eyebrow: "Contacto comercial",
        title: "Solicita una propuesta",
        text: "Cuenta el escenario de tu empresa y el equipo responderá con el camino más adecuado.",
        highlights: ["Atención para Brasil, Chile y operaciones binacionales", "Contacto comercial separado del registro profesional", "Base lista para CRM, planilla o e-mail"],
      },
    },
    solutions: {
      indexEyebrow: "Soluciones",
      title: "Soluciones contables organizadas por mercado",
      text:
        "BRACHILENOS separa los servicios por Brasil, Chile y Brasil x Chile para facilitar la elección del cliente y hacer la propuesta más clara.",
      groups: {
        brasil: {
          label: "Brasil",
          eyebrow: "Soluciones en Brasil",
          title: "Contabilidad y gestión para empresas y brasileños con operación en Brasil",
          description:
            "Apoyo para mantener la empresa regular, organizada y preparada para decisiones fiscales, financieras y societarias.",
          services: [
            { title: "Contabilidad empresarial", text: "Registro contable, cierre mensual, reportes y soporte gerencial." },
            { title: "Fiscal y obligaciones accesorias", text: "Cálculo de impuestos, declaraciones y seguimiento de plazos." },
            { title: "Apertura y regularización", text: "Constitución, modificaciones, certificados, pendientes y documentos." },
            { title: "Planificación tributaria", text: "Análisis de régimen, carga tributaria y eficiencia legal." },
            { title: "BPO financiero", text: "Cuentas por pagar y cobrar, conciliación, flujo de caja e informes." },
            { title: "Organización patrimonial", text: "Apoyo estratégico para separar persona física, empresa y patrimonio." },
          ],
        },
        chile: {
          label: "Chile",
          eyebrow: "Soluciones en Chile",
          title: "Soporte contable y estratégico para brasileños que emprenden en Chile",
          description:
            "Estructura para abrir, organizar o acompañar operaciones locales con comunicación cercana y visión empresarial.",
          services: [
            { title: "Orientación para apertura de empresa", text: "Dirección documental, societaria y operacional para iniciar actividades." },
            { title: "Contabilidad local", text: "Organización de rutina contable, fiscal e informes de seguimiento." },
            { title: "Gestión financiera", text: "Control de cuentas, flujo de caja, indicadores y conciliación." },
            { title: "Regularización fiscal", text: "Mapeo de pendientes, plazos, documentos y plan de ajuste." },
            { title: "Soporte para brasileños", text: "Atención en portugués para reducir ruido en decisiones empresariales." },
            { title: "Compliance operacional", text: "Procesos, evidencias y controles para crecer con seguridad." },
          ],
        },
        "brasil-chile": {
          label: "Brasil x Chile",
          eyebrow: "Operaciones binacionales",
          title: "Planificación contable, fiscal y financiera entre Brasil y Chile",
          description:
            "Consultoría para empresas, inversionistas y personas que necesitan organizar decisiones entre dos países.",
          services: [
            { title: "Diagnóstico Brasil x Chile", text: "Lectura del escenario, riesgos, obligaciones y prioridades en ambos mercados." },
            { title: "Planificación tributaria internacional", text: "Estrategia para renta, créditos, tratados, remesas y distribución de utilidades." },
            { title: "Residencia fiscal", text: "Análisis de residencia, comprobación documental e impactos tributarios." },
            { title: "Doble tributación", text: "Aplicación de reglas y documentación para reducir riesgos de pago duplicado." },
            { title: "Estructuración de operación", text: "Definición de dónde facturar, cómo comprobar, operar y controlar flujos." },
            { title: "Dossier de evidencias", text: "Organización de contratos, extractos, facturas, declaraciones y comprobantes." },
          ],
        },
      },
    },
    work: {
      eyebrow: "Trabaja con nosotros",
      title: "Actúa con BRACHILENOS",
      text:
        "Recibimos profesionales y prestadores con perfil técnico, responsabilidad e interés en proyectos contables, fiscales, financieros y tributarios entre Brasil y Chile.",
      cards: [
        {
          id: "quero-trabalhar",
          title: "Quiero trabajar",
          text: "Para profesionales que buscan una oportunidad en un ambiente técnico, internacional y orientado al crecimiento estructurado.",
          items: ["Perfil contable, fiscal, financiero o administrativo", "Visión analítica y compromiso con calidad", "Interés en actuación Brasil x Chile"],
          cta: "Enviar postulación",
        },
        {
          id: "prestador",
          title: "Prestar servicio",
          text: "Para especialistas independientes que desean actuar en demandas específicas con estándar profesional y organización.",
          items: ["Contabilidad, fiscal, BPO o consultoría", "Actuación por proyecto o demanda recurrente", "Disponibilidad para integración técnica"],
          cta: "Registrar perfil",
        },
      ],
      application: {
        eyebrow: "Registro profesional",
        title: "Envía tus datos para análisis",
        text:
          "La información entra en una base separada de los leads comerciales, permitiendo organizar candidatos y prestadores por área, país y disponibilidad.",
        groups: ["Candidatos", "Prestadores de servicio"],
      },
    },
  },
  en: {
    routes: {
      work: "trabalhe-conosco",
      solutions: "solucoes",
    },
    labels: {
      solutionsMenu: "Solutions",
      viewDetails: "View details",
      requestProposal: "Request proposal",
      talkSpecialist: "Talk to a specialist",
      workWithUs: "Work with us",
    },
    home: {
      hero: {
        eyebrow: "Brazil x Chile accounting office",
        title: "Accounting for Brazil x Chile operations",
        text:
          "Accounting, tax and financial advisory for companies, investors and Brazilians who need to operate safely across both countries.",
        primary: "Talk to a specialist",
        secondary: "Our services",
      },
      proof: [
        { value: "BR + CL", label: "Designed for two markets" },
        { value: "PT / ES / EN", label: "Trilingual communication" },
        { value: "360", label: "Accounting, tax, finance and advisory" },
      ],
      serviceTitle: "Explore our accounting services",
      serviceText: "Accounting, tax and finance support organized for those operating in Brazil, Chile or across both markets.",
      serviceCards: [
        { title: "Accounting and tax", text: "Accounting routine, tax calculation, filings and fiscal follow-up." },
        { title: "Tax planning", text: "Strategy to reduce risk and avoid double taxation." },
        { title: "Finance BPO", text: "Accounts, cash flow, reconciliation, indicators and reports." },
        { title: "Opening and regularization", text: "Support to open, adjust or regularize companies and documents." },
        { title: "Brazil x Chile advisory", text: "Operation analysis, tax residence, remittances and binational obligations." },
        { title: "Management and compliance", text: "Calendars, controls, evidence and processes for safer growth." },
      ],
      aboutEyebrow: "About us",
      aboutTitle: "Brazil and Chile connected through strategy, accounting and finance.",
      aboutParagraphs: [
        "BRACHILENOS specializes in accounting, financial and strategic solutions for Brazilians in Chile and Chileans in Brazil.",
        "We connect people, companies and professionals to both markets through integrated business, tax and financial advisory.",
        "Our work combines technical knowledge, strategic planning and a professional network in both countries.",
        "We serve individuals and companies with company opening, regularization, tax planning, accounting, financial structuring and international advisory.",
        "Our goal is to provide security, organization and efficiency for structured international growth.",
      ],
      method: {
        eyebrow: "How we work",
        title: "Service in clear stages",
        steps: [
          { title: "Diagnosis", text: "We understand company, tax residence, billing, documents and risks." },
          { title: "Technical plan", text: "We define priorities, obligations, regime, controls and next steps." },
          { title: "Execution", text: "We organize accounting, tax, finance and corporate deliveries." },
          { title: "Follow-up", text: "We monitor deadlines, indicators, documents and new decisions." },
        ],
      },
      workBand: {
        eyebrow: "Technical network",
        title: "Technical professionals for the BRACHILENOS network",
        text: "BRACHILENOS receives professionals and service providers to strengthen the operation with technical standards.",
        cta: "Work with us",
      },
      contact: {
        eyebrow: "Commercial contact",
        title: "Request a proposal",
        text: "Tell us about your company scenario and the team will return with the right path.",
        highlights: ["Support for Brazil, Chile and binational operations", "Commercial contact separated from professional registration", "Base ready for CRM, spreadsheet or e-mail"],
      },
    },
    solutions: {
      indexEyebrow: "Solutions",
      title: "Accounting solutions organized by market",
      text:
        "BRACHILENOS separates services by Brazil, Chile and Brazil x Chile so clients can choose faster and understand the proposal clearly.",
      groups: {
        brasil: {
          label: "Brazil",
          eyebrow: "Solutions in Brazil",
          title: "Accounting and management for companies and Brazilians operating in Brazil",
          description: "Support to keep the company compliant, organized and ready for tax, finance and corporate decisions.",
          services: [
            { title: "Business accounting", text: "Bookkeeping, monthly closing, statements and management support." },
            { title: "Tax and filings", text: "Tax calculations, filings and deadline monitoring." },
            { title: "Company opening and regularization", text: "Formation, amendments, certificates, pending issues and document organization." },
            { title: "Tax planning", text: "Regime analysis, tax burden and legal efficiency paths." },
            { title: "Finance BPO", text: "Accounts payable and receivable, reconciliation, cash flow and reports." },
            { title: "Asset organization", text: "Strategic support to separate individual, company and personal assets." },
          ],
        },
        chile: {
          label: "Chile",
          eyebrow: "Solutions in Chile",
          title: "Accounting and strategic support for Brazilians doing business in Chile",
          description: "Structure to open, organize or monitor local operations with close communication and business vision.",
          services: [
            { title: "Company opening guidance", text: "Document, corporate and operational guidance to start activities." },
            { title: "Local accounting", text: "Organization of accounting routine, tax routine and follow-up reports." },
            { title: "Financial management", text: "Account control, cash flow, indicators and reconciliation." },
            { title: "Tax regularization", text: "Mapping pending items, deadlines, documents and adjustment plan." },
            { title: "Support for Brazilians", text: "Portuguese-language service to reduce friction in business decisions." },
            { title: "Operational compliance", text: "Processes, evidence and controls for safer growth." },
          ],
        },
        "brasil-chile": {
          label: "Brazil x Chile",
          eyebrow: "Binational operations",
          title: "Accounting, tax and financial planning between Brazil and Chile",
          description: "Advisory for companies, investors and individuals who need to organize decisions between two countries.",
          services: [
            { title: "Brazil x Chile diagnosis", text: "Scenario review, risks, obligations and priorities in both markets." },
            { title: "International tax planning", text: "Strategy for income, credits, treaties, remittances and profit distribution." },
            { title: "Tax residence", text: "Residence analysis, supporting documents and tax impacts." },
            { title: "Double taxation", text: "Rule application and documentation to reduce duplicate payment risks." },
            { title: "Operation structuring", text: "Definition of where to bill, how to evidence, operate and control flows." },
            { title: "Evidence dossier", text: "Organization of contracts, statements, invoices, filings and proofs." },
          ],
        },
      },
    },
    work: {
      eyebrow: "Work with us",
      title: "Work with BRACHILENOS",
      text:
        "We receive professionals and service providers with technical profile, responsibility and interest in accounting, tax, finance and advisory projects between Brazil and Chile.",
      cards: [
        {
          id: "quero-trabalhar",
          title: "I want to work",
          text: "For professionals seeking an opportunity in a technical, international and structured-growth environment.",
          items: ["Accounting, tax, finance or administrative profile", "Analytical vision and quality commitment", "Interest in Brazil x Chile work"],
          cta: "Send application",
        },
        {
          id: "prestador",
          title: "Provide services",
          text: "For independent specialists who want to work on specific demands with professional standards and organization.",
          items: ["Accounting, tax, BPO or advisory", "Project-based or recurring demand work", "Availability for technical integration"],
          cta: "Register profile",
        },
      ],
      application: {
        eyebrow: "Professional registration",
        title: "Send your information for review",
        text:
          "The information enters a base separated from commercial leads, allowing candidates and providers to be organized by area, country and availability.",
        groups: ["Candidates", "Service providers"],
      },
    },
  },
} as const;

export function getSiteContent(locale: Locale): typeof content["pt-br"] {
  return content[locale] as typeof content["pt-br"];
}

export function getSolutionGroup(locale: Locale, slug: SolutionSlug) {
  return getSiteContent(locale).solutions.groups[slug];
}

export function isSolutionSlug(slug: string): slug is SolutionSlug {
  return solutionSlugs.includes(slug as SolutionSlug);
}
