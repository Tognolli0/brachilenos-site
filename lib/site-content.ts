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
      home: "Home",
      about: "Quem Somos",
      contact: "Fale Conosco",
      solutionsMenu: "Soluções",
      viewDetails: "Ver detalhes",
      viewSolution: "Ver solução",
      requestProposal: "Solicitar análise",
      talkSpecialist: "Falar com especialista",
      workWithUs: "Trabalhe Conosco",
      openMenu: "Abrir menu",
      chooseMarket: "Escolha por mercado",
      solutionsMenuText: "Separe sua demanda entre Brasil, Chile ou operação internacional.",
      overview: "Visão geral",
      privacyPolicy: "Política de Privacidade",
      whatsappAria: "Falar pelo WhatsApp",
    },
    home: {
      hero: {
        eyebrow: "Contabilidade Brasil x Chile",
        title: "Contabilidade e gestão para operações Brasil x Chile",
        text:
          "Apoio contábil, financeiro e estratégico para brasileiros, empresas e investidores que atuam entre os dois países.",
        primary: "Falar pelo WhatsApp",
        secondary: "Ver soluções",
      },
      proof: [
        { value: "Brasil + Chile", label: "Atuação binacional" },
        { value: "PF e PJ", label: "Pessoas físicas e empresas" },
        { value: "Contábil + Financeiro", label: "Gestão e rotina" },
      ],
      heroPanel: {
        eyebrow: "Primeiro passo",
        title: "Diagnóstico antes da proposta",
        text: "Mapeamos perfil, documentos e prioridades para indicar o atendimento correto.",
        items: ["PF ou PJ", "Brasil x Chile", "Gestão, rotina ou planejamento"],
        cta: "Solicitar análise",
      },
      brandSeal: {
        eyebrow: "Atuação binacional",
        title: "Contabilidade Brasil x Chile",
        text: "Organização contábil e financeira para operar com clareza entre os dois países.",
      },
      serviceTitle: "Conheça nossas soluções contábeis",
      serviceText:
        "Serviços organizados por necessidade para quem quer regularizar, estruturar, controlar ou expandir operações entre Brasil e Chile.",
      serviceCards: [
        {
          title: "Contabilidade Empresarial",
          text: "Rotina contábil, organização documental, demonstrativos e acompanhamento gerencial para empresas.",
        },
        {
          title: "Estruturação Estratégica",
          text: "Organização de cenários, prioridades, documentos e decisões para operar com mais clareza entre países.",
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
          text: "Análise de operação, estrutura, contratos, fluxos, documentação e decisões binacionais.",
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
        "Atuamos conectando pessoas, empresas e profissionais aos dois mercados através de uma estrutura integrada de assessoria empresarial, contábil e financeira, oferecendo suporte para quem deseja empreender, investir, expandir operações ou regularizar sua situação entre Brasil e Chile.",
        "Nossa atuação combina conhecimento técnico, planejamento estratégico e uma rede de profissionais parceiros nos dois países, permitindo um atendimento alinhado às legislações, exigências documentais e particularidades operacionais de cada mercado.",
        "Oferecemos soluções para pessoa física e jurídica, incluindo abertura e regularização de empresas, assessoria contábil, estruturação financeira, organização patrimonial e consultoria internacional para operações binacionais.",
        "Mais do que executar processos, nosso objetivo é proporcionar segurança, organização e eficiência para clientes que buscam crescer de forma estruturada no cenário internacional.",
        "Acreditamos que operações entre países exigem visão estratégica, suporte técnico qualificado e profissionais que compreendam a realidade local e internacional de forma integrada.",
        "Brasil e Chile conectados através de estratégia, contabilidade, finanças e oportunidades.",
      ],
      method: {
        eyebrow: "Como trabalhamos",
        title: "Um processo claro para sair da dúvida e organizar a operação",
        steps: [
          { title: "Diagnóstico", text: "Entendemos perfil, empresa, operação, documentos, prioridades e riscos." },
          { title: "Plano técnico", text: "Definimos prioridades, rotinas, controles e próximos passos." },
          { title: "Execução", text: "Organizamos entregas contábeis, documentais, financeiras e societárias." },
          { title: "Acompanhamento", text: "Monitoramos prazos, indicadores, documentos e novas decisões." },
        ],
      },
      workBand: {
        eyebrow: "Rede técnica",
        title: "Faça parte da rede técnica Brasil x Chile",
        text:
          "A BRACHILENOS também recebe profissionais e prestadores de serviço para fortalecer a operação com estrutura e critérios técnicos.",
        cta: "Trabalhe Conosco",
      },
      contact: {
        eyebrow: "Contato comercial",
        title: "Fale com um especialista e organize o próximo passo",
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
          title: "Contabilidade e gestão para pessoas e empresas no Brasil",
          description:
            "Apoio para organizar rotinas, estruturar finanças, manter a empresa em dia e tomar decisões com mais segurança.",
          services: [
            { title: "Contabilidade empresarial", text: "Escrituração, fechamento mensal, demonstrativos e suporte gerencial." },
            { title: "Rotinas e documentos", text: "Organização de prazos, informações, documentos e acompanhamento operacional." },
            { title: "Abertura e regularização", text: "Constituição, alterações, certidões, pendências e organização documental." },
            { title: "Estruturação empresarial", text: "Análise de cenário, processos e caminhos para operar com mais eficiência." },
            { title: "BPO financeiro", text: "Contas a pagar e receber, conciliação, fluxo de caixa e relatórios." },
            { title: "Organização patrimonial", text: "Apoio estratégico para separar pessoa física, empresa e patrimônio." },
          ],
        },
        chile: {
          label: "Chile",
          eyebrow: "Soluções no Chile",
          title: "Suporte contábil e financeiro para brasileiros no Chile",
          description:
            "Estrutura para abrir, organizar ou acompanhar atividades no Chile com comunicação clara, visão empresarial e rotina financeira.",
          services: [
            { title: "Orientação para abertura de empresa", text: "Direcionamento documental, societário e operacional para iniciar atividades." },
            { title: "Contabilidade local", text: "Organização de rotina contábil, documentos e relatórios para acompanhamento." },
            { title: "Gestão financeira", text: "Controle de contas, fluxo de caixa, indicadores e conciliação." },
            { title: "Regularização documental", text: "Mapeamento de pendências, prazos, documentos e plano de ajuste." },
            { title: "Suporte para brasileiros", text: "Atendimento em português para reduzir ruído nas decisões empresariais." },
            { title: "Compliance operacional", text: "Processos, evidências e controles para crescer com segurança." },
          ],
        },
        "brasil-chile": {
          label: "Brasil x Chile",
          eyebrow: "Operações binacionais",
          title: "Planejamento financeiro e empresarial Brasil x Chile",
          description:
            "Consultoria para pessoas, empresas e investidores que precisam organizar operação, documentação, finanças e patrimônio entre os dois países.",
          services: [
            { title: "Diagnóstico Brasil x Chile", text: "Leitura do cenário, riscos, obrigações e prioridades nos dois mercados." },
            { title: "Estruturação internacional", text: "Organização de renda, documentos, fluxos e decisões entre países." },
            { title: "Comprovação documental", text: "Análise de documentos, vínculos, histórico e evidências necessárias." },
            { title: "Fluxos Brasil x Chile", text: "Organização de entradas, saídas, contratos e comprovantes da operação." },
            { title: "Estruturação de operação", text: "Definição de onde faturar, como comprovar, operar e controlar fluxos." },
            { title: "Dossiê de evidências", text: "Organização de contratos, extratos, notas, declarações e comprovantes." },
          ],
        },
      },
    },
    work: {
      eyebrow: "Trabalhe Conosco",
      title: "Faça parte da rede profissional BRACHILENOS",
      text:
        "Recebemos profissionais e prestadores com perfil técnico para projetos contábeis, financeiros, societários e administrativos entre Brasil e Chile.",
      cards: [
        {
          id: "quero-trabalhar",
          title: "Quero trabalhar",
          text:
            "Para profissionais que buscam oportunidade em um ambiente técnico, internacional e orientado a crescimento estruturado.",
          items: ["Perfil contábil, financeiro ou administrativo", "Visão analítica e compromisso com qualidade", "Interesse em atuação Brasil x Chile"],
          cta: "Enviar candidatura",
        },
        {
          id: "prestador",
          title: "Prestar serviço",
          text:
            "Para especialistas independentes que desejam atuar em demandas específicas com padrão profissional e organização.",
          items: ["Contabilidade, BPO, consultoria ou rotinas empresariais", "Atuação por projeto ou demanda recorrente", "Disponibilidade para integração técnica"],
          cta: "Cadastrar perfil",
        },
      ],
      application: {
        eyebrow: "Cadastro profissional",
        title: "Banco de talentos e prestadores",
        text:
          "As informações entram em uma base separada dos leads comerciais, com classificação por interesse, área, país, disponibilidade e modelo de atuação.",
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
      home: "Inicio",
      about: "Quiénes Somos",
      contact: "Contacto",
      solutionsMenu: "Soluciones",
      viewDetails: "Ver detalles",
      viewSolution: "Ver solución",
      requestProposal: "Solicitar propuesta",
      talkSpecialist: "Hablar con especialista",
      workWithUs: "Trabaja con nosotros",
      openMenu: "Abrir menú",
      chooseMarket: "Elige por mercado",
      solutionsMenuText: "Separa tu demanda entre Brasil, Chile u operación internacional.",
      overview: "Visión general",
      privacyPolicy: "Política de Privacidad",
      whatsappAria: "Hablar por WhatsApp",
    },
    home: {
      hero: {
        eyebrow: "Contabilidad Brasil x Chile",
        title: "Contabilidad y gestión para operaciones Brasil x Chile",
        text:
          "Asesoría contable, financiera y estratégica para empresas, inversionistas y brasileños que actúan entre ambos países.",
        primary: "Hablar con especialista",
        secondary: "Nuestros servicios",
      },
      proof: [
        { value: "BR + CL", label: "Actuación para dos mercados" },
        { value: "PT / ES / EN", label: "Comunicación trilingüe" },
        { value: "360", label: "Contable, financiero y estratégico" },
      ],
      heroPanel: {
        eyebrow: "Primer paso",
        title: "Diagnóstico antes de la propuesta",
        text: "Mapeamos perfil, documentos y prioridades para indicar la atención correcta.",
        items: ["Persona o empresa", "Brasil x Chile", "Gestión, rutina o planificación"],
        cta: "Solicitar propuesta",
      },
      brandSeal: {
        eyebrow: "Actuación binacional",
        title: "Contabilidad Brasil x Chile",
        text: "Organización contable y financiera para operar con claridad entre ambos países.",
      },
      serviceTitle: "Conoce nuestros servicios contables",
      serviceText: "Atención contable, financiera y empresarial organizada para quienes actúan en Brasil, Chile o entre ambos mercados.",
      serviceCards: [
        { title: "Contabilidad empresarial", text: "Rutina contable, organización documental e informes de gestión." },
        { title: "Estructuración estratégica", text: "Organización de escenarios, prioridades y decisiones entre países." },
        { title: "BPO financiero", text: "Cuentas, caja, conciliación, indicadores e informes." },
        { title: "Apertura y regularización", text: "Soporte para abrir, ajustar o regularizar empresas y documentos." },
        { title: "Consultoría Brasil x Chile", text: "Análisis de operación, estructura, documentos y decisiones binacionales." },
        { title: "Gestión y compliance", text: "Calendarios, controles, evidencias y procesos para mayor seguridad." },
      ],
      aboutEyebrow: "Quiénes somos",
      aboutTitle: "Brasil y Chile conectados por estrategia, contabilidad y finanzas.",
      aboutParagraphs: [
        "BRACHILENOS es una empresa especializada en soluciones contables, financieras y estratégicas para brasileños en Chile y chilenos en Brasil.",
        "Conectamos personas, empresas y profesionales a ambos mercados mediante una estructura integrada de asesoría empresarial, contable y financiera.",
        "Nuestra actuación combina conocimiento técnico, planificación estratégica y una red de profesionales en los dos países.",
        "Ofrecemos soluciones para personas y empresas, incluyendo apertura y regularización, contabilidad, estructura financiera y consultoría internacional.",
        "Nuestro objetivo es entregar seguridad, organización y eficiencia para crecer de forma estructurada en el escenario internacional.",
      ],
      method: {
        eyebrow: "Cómo trabajamos",
        title: "Atención en etapas claras",
        steps: [
          { title: "Diagnóstico", text: "Entendemos perfil, empresa, operación, documentos, prioridades y riesgos." },
          { title: "Plan técnico", text: "Definimos prioridades, obligaciones, régimen y próximos pasos." },
          { title: "Ejecución", text: "Organizamos entregas contables, documentales, financieras y societarias." },
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
            "Apoyo para mantener la empresa regular, organizada y preparada para decisiones financieras, operativas y societarias.",
          services: [
            { title: "Contabilidad empresarial", text: "Registro contable, cierre mensual, reportes y soporte gerencial." },
            { title: "Rutinas y documentos", text: "Organización de plazos, información, documentos y seguimiento operativo." },
            { title: "Apertura y regularización", text: "Constitución, modificaciones, certificados, pendientes y documentos." },
            { title: "Estructuración empresarial", text: "Análisis de escenario, procesos y caminos para operar con más eficiencia." },
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
            { title: "Contabilidad local", text: "Organización de rutina contable, documentos e informes de seguimiento." },
            { title: "Gestión financiera", text: "Control de cuentas, flujo de caja, indicadores y conciliación." },
            { title: "Regularización documental", text: "Mapeo de pendientes, plazos, documentos y plan de ajuste." },
            { title: "Soporte para brasileños", text: "Atención en portugués para reducir ruido en decisiones empresariales." },
            { title: "Compliance operacional", text: "Procesos, evidencias y controles para crecer con seguridad." },
          ],
        },
        "brasil-chile": {
          label: "Brasil x Chile",
          eyebrow: "Operaciones binacionales",
          title: "Planificación financiera y empresarial entre Brasil y Chile",
          description:
            "Consultoría para empresas, inversionistas y personas que necesitan organizar decisiones entre dos países.",
          services: [
            { title: "Diagnóstico Brasil x Chile", text: "Lectura del escenario, riesgos, obligaciones y prioridades en ambos mercados." },
            { title: "Estructuración internacional", text: "Organización de ingresos, documentos, flujos y decisiones entre países." },
            { title: "Comprobación documental", text: "Análisis de documentos, vínculos, historial y evidencias necesarias." },
            { title: "Flujos Brasil x Chile", text: "Organización de entradas, salidas, contratos y comprobantes de la operación." },
            { title: "Estructuración de operación", text: "Definición de dónde facturar, cómo comprobar, operar y controlar flujos." },
            { title: "Dossier de evidencias", text: "Organización de contratos, extractos, facturas, declaraciones y comprobantes." },
          ],
        },
      },
    },
    work: {
      eyebrow: "Trabaja con nosotros",
      title: "Forma parte de la red profesional BRACHILENOS",
      text:
        "Recibimos profesionales y prestadores con perfil técnico para proyectos contables, financieros, societarios y administrativos entre Brasil y Chile.",
      cards: [
        {
          id: "quero-trabalhar",
          title: "Quiero trabajar",
          text: "Para profesionales que buscan una oportunidad en un ambiente técnico, internacional y orientado al crecimiento estructurado.",
          items: ["Perfil contable, financiero o administrativo", "Visión analítica y compromiso con calidad", "Interés en actuación Brasil x Chile"],
          cta: "Enviar postulación",
        },
        {
          id: "prestador",
          title: "Prestar servicio",
          text: "Para especialistas independientes que desean actuar en demandas específicas con estándar profesional y organización.",
          items: ["Contabilidad, BPO, consultoría o rutinas empresariales", "Actuación por proyecto o demanda recurrente", "Disponibilidad para integración técnica"],
          cta: "Registrar perfil",
        },
      ],
      application: {
        eyebrow: "Registro profesional",
        title: "Banco de talentos y prestadores",
        text:
          "La información entra en una base separada de los leads comerciales, con clasificación por interés, área, país, disponibilidad y modelo de actuación.",
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
      home: "Home",
      about: "About",
      contact: "Contact",
      solutionsMenu: "Solutions",
      viewDetails: "View details",
      viewSolution: "View solution",
      requestProposal: "Request proposal",
      talkSpecialist: "Talk to a specialist",
      workWithUs: "Work with us",
      openMenu: "Open menu",
      chooseMarket: "Choose by market",
      solutionsMenuText: "Separate your need between Brazil, Chile or international operations.",
      overview: "Overview",
      privacyPolicy: "Privacy Policy",
      whatsappAria: "Talk on WhatsApp",
    },
    home: {
      hero: {
        eyebrow: "Brazil x Chile accounting",
        title: "Accounting and management for Brazil x Chile operations",
        text:
          "Accounting, financial and strategic support for companies, investors and Brazilians operating across both countries.",
        primary: "Talk to a specialist",
        secondary: "Our services",
      },
      proof: [
        { value: "BR + CL", label: "Designed for two markets" },
        { value: "PT / ES / EN", label: "Trilingual communication" },
        { value: "360", label: "Accounting, finance and strategy" },
      ],
      heroPanel: {
        eyebrow: "First step",
        title: "Diagnosis before proposal",
        text: "We map profile, documents and priorities to route the service correctly.",
        items: ["Individual or company", "Brazil x Chile", "Management, routine or planning"],
        cta: "Request proposal",
      },
      brandSeal: {
        eyebrow: "Binational work",
        title: "Brazil x Chile Accounting",
        text: "Accounting and financial organization to operate clearly across both countries.",
      },
      serviceTitle: "Explore our accounting services",
      serviceText: "Accounting, finance and business support organized for those operating in Brazil, Chile or across both markets.",
      serviceCards: [
        { title: "Business accounting", text: "Accounting routine, document organization and management reports." },
        { title: "Strategic structuring", text: "Organization of scenarios, priorities and decisions between countries." },
        { title: "Finance BPO", text: "Accounts, cash flow, reconciliation, indicators and reports." },
        { title: "Opening and regularization", text: "Support to open, adjust or regularize companies and documents." },
        { title: "Brazil x Chile advisory", text: "Operation analysis, structure, documentation and binational decisions." },
        { title: "Management and compliance", text: "Calendars, controls, evidence and processes for safer growth." },
      ],
      aboutEyebrow: "About us",
      aboutTitle: "Brazil and Chile connected through strategy, accounting and finance.",
      aboutParagraphs: [
        "BRACHILENOS specializes in accounting, financial and strategic solutions for Brazilians in Chile and Chileans in Brazil.",
        "We connect people, companies and professionals to both markets through integrated business, accounting and financial advisory.",
        "Our work combines technical knowledge, strategic planning and a professional network in both countries.",
        "We serve individuals and companies with company opening, regularization, accounting, financial structuring and international advisory.",
        "Our goal is to provide security, organization and efficiency for structured international growth.",
      ],
      method: {
        eyebrow: "How we work",
        title: "Service in clear stages",
        steps: [
          { title: "Diagnosis", text: "We understand profile, company, operation, documents, priorities and risks." },
          { title: "Technical plan", text: "We define priorities, obligations, regime, controls and next steps." },
          { title: "Execution", text: "We organize accounting, document, finance and corporate workflows." },
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
          description: "Support to keep the company organized and ready for financial, operational and corporate decisions.",
          services: [
            { title: "Business accounting", text: "Bookkeeping, monthly closing, statements and management support." },
            { title: "Routines and documents", text: "Organization of deadlines, information, documents and operational follow-up." },
            { title: "Company opening and regularization", text: "Formation, amendments, certificates, pending issues and document organization." },
            { title: "Business structuring", text: "Scenario, process and path analysis to operate with more efficiency." },
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
            { title: "Local accounting", text: "Organization of accounting routine, documents and follow-up reports." },
            { title: "Financial management", text: "Account control, cash flow, indicators and reconciliation." },
            { title: "Document regularization", text: "Mapping pending items, deadlines, documents and adjustment plan." },
            { title: "Support for Brazilians", text: "Portuguese-language service to reduce friction in business decisions." },
            { title: "Operational compliance", text: "Processes, evidence and controls for safer growth." },
          ],
        },
        "brasil-chile": {
          label: "Brazil x Chile",
          eyebrow: "Binational operations",
          title: "Financial and business planning between Brazil and Chile",
          description: "Advisory for companies, investors and individuals who need to organize decisions between two countries.",
          services: [
            { title: "Brazil x Chile diagnosis", text: "Scenario review, risks, obligations and priorities in both markets." },
            { title: "International structuring", text: "Organization of income, documents, flows and decisions between countries." },
            { title: "Document evidence", text: "Review of documents, ties, history and supporting evidence." },
            { title: "Brazil x Chile flows", text: "Organization of inflows, outflows, contracts and operation records." },
            { title: "Operation structuring", text: "Definition of where to bill, how to evidence, operate and control flows." },
            { title: "Evidence dossier", text: "Organization of contracts, statements, invoices, filings and proofs." },
          ],
        },
      },
    },
    work: {
      eyebrow: "Work with us",
      title: "Join the BRACHILENOS professional network",
      text:
        "We receive professionals and service providers with technical profiles for accounting, finance, corporate and administrative projects between Brazil and Chile.",
      cards: [
        {
          id: "quero-trabalhar",
          title: "I want to work",
          text: "For professionals seeking an opportunity in a technical, international and structured-growth environment.",
          items: ["Accounting, finance or administrative profile", "Analytical vision and quality commitment", "Interest in Brazil x Chile work"],
          cta: "Send application",
        },
        {
          id: "prestador",
          title: "Provide services",
          text: "For independent specialists who want to work on specific demands with professional standards and organization.",
          items: ["Accounting, BPO, advisory or business routines", "Project-based or recurring demand work", "Availability for technical integration"],
          cta: "Register profile",
        },
      ],
      application: {
        eyebrow: "Professional registration",
        title: "Talent and provider bank",
        text:
          "The information enters a base separated from commercial leads, classified by interest, area, country, availability and work model.",
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
