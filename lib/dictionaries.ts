export const locales = ["pt-br", "es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt-br";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getHtmlLang(locale: Locale) {
  return locale === "pt-br" ? "pt-BR" : locale;
}

export const localeLabels: Record<Locale, string> = {
  "pt-br": "PT",
  es: "ES",
  en: "EN",
};

export const dictionaries = {
  "pt-br": {
    meta: {
      homeTitle: "Contabilidade Brasil x Chile para empresas e pessoas físicas",
      careersTitle: "Trabalhe Conosco",
      homeDescription:
        "Contabilidade, gestão financeira, BPO e estruturação empresarial para brasileiros, empresas e investidores com operações entre Brasil e Chile.",
      careersDescription:
        "Cadastre-se no banco de talentos ou como prestador de serviço da rede técnica Brasil x Chile da BRACHILENOS.",
    },
    nav: {
      solutions: "Soluções",
      audiences: "Perfis",
      process: "Processo",
      careers: "Trabalhe Conosco",
      content: "Conteúdo",
      contact: "Contato",
      commercialCta: "Falar com especialista",
      careersCta: "Enviar cadastro",
    },
    home: {
      hero: {
        eyebrow: "Operação contábil Brasil x Chile",
        title: "BRACHILENOS",
        subtitle:
          "Contabilidade, gestão financeira e planejamento tributário para brasileiros que empreendem, investem ou estruturam operações entre Brasil e Chile.",
        primary: "Solicitar diagnóstico",
        secondary: "Sou profissional ou parceiro",
        trust: [
          "Atendimento em português, espanhol e inglês",
          "Base técnica Brasil x Chile",
          "Clientes, parceiros e talentos em fluxos separados",
        ],
        routeLabel: "Rede técnica internacional",
        routeTitle: "Brasil x Chile",
        routeText:
          "Contabilidade, fiscal, financeiro, societário e tributário conectados em uma só operação.",
        assurances: [
          "Calendário fiscal acompanhado",
          "Documentos e evidências organizados",
          "Diagnóstico antes de qualquer proposta",
          "Rede técnica Brasil x Chile em expansão",
        ],
      },
      authority: {
        metrics: [
          { value: "BR + CL", label: "Operação pensada para dois países" },
          { value: "PT / ES / EN", label: "Comunicação para clientes e parceiros" },
          { value: "2 bases", label: "Leads comerciais e banco de talentos separados" },
          { value: "360°", label: "Contábil, fiscal, financeiro e tributário" },
        ],
      },
      model: {
        eyebrow: "Como o site vai funcionar",
        title: "Duas portas de entrada, uma marca de autoridade",
        text:
          "A experiência separa clientes de profissionais desde o primeiro clique, mantendo comunicação, formulários, base de dados e chamadas adequadas para cada intenção.",
        tracks: [
          {
            title: "Para clientes",
            text:
              "Captar empresários brasileiros, empresas com faturamento entre países e pessoas que precisam organizar obrigações fiscais, financeiras e tributárias.",
            items: [
              "Diagnóstico de estrutura Brasil x Chile",
              "Contratação de contabilidade, BPO e consultoria",
              "Formulário comercial salvo como lead de cliente",
            ],
            cta: "Quero atendimento",
          },
          {
            title: "Para profissionais e parceiros",
            text:
              "Atrair contadores, analistas, BPO financeiro, consultores tributários e prestadores no Brasil e no Chile para formar uma rede técnica especializada.",
            items: [
              "Página própria de carreiras e parceiros",
              "Formulário de candidatura com currículo",
              "Banco de talentos separado por perfil",
            ],
            cta: "Entrar para a rede",
          },
        ],
      },
      audiences: {
        eyebrow: "Perfis atendidos",
        title: "O site fala com quem realmente precisa de contabilidade internacional",
        text:
          "A comunicação foi organizada para atrair leads mais qualificados, reduzindo dúvida inicial e mostrando rapidamente onde a BRACHILENOS consegue ajudar.",
        proofs: ["Empresas com faturamento no Chile", "Brasileiros com empresa no Brasil", "Rede técnica para execução local"],
        cards: [
          {
            title: "Empresa brasileira que fatura no Chile",
            text:
              "Apoio para organizar rotina fiscal, documentação, emissão, fluxo financeiro e planejamento entre os países.",
          },
          {
            title: "Brasileiro no Chile com empresa no Brasil",
            text:
              "Análise de residência fiscal, obrigações acessórias, distribuição de lucros, renda mundial e riscos de dupla tributação.",
          },
          {
            title: "Negócios em expansão internacional",
            text:
              "Estruturação para decidir onde faturar, como comprovar operações e como manter gestão financeira confiável.",
          },
          {
            title: "Profissionais e parceiros contábeis",
            text:
              "Canal próprio para contadores, analistas, BPO financeiro e consultores entrarem na rede Brasil x Chile.",
          },
        ],
      },
      solutions: {
        eyebrow: "Soluções",
        title: "O que a BRACHILENOS entrega",
        text:
          "Serviços pensados para quem precisa de clareza operacional, conformidade fiscal e planejamento entre dois países.",
        items: [
          {
            title: "Contabilidade e fiscal",
            text:
              "Escrituração, obrigações acessórias, apuração de impostos e acompanhamento regular da empresa.",
          },
          {
            title: "Planejamento tributário",
            text:
              "Análise Brasil x Chile, acordo para evitar dupla tributação, créditos e riscos de bitributação.",
          },
          {
            title: "BPO e gestão financeira",
            text: "Organização de contas, fluxo de caixa, conciliação, relatórios e apoio para decisão.",
          },
          {
            title: "Regularização",
            text: "Mapeamento de pendências, documentação, declarações e plano de conformidade fiscal.",
          },
          {
            title: "Estruturação de operação",
            text:
              "Avaliação de onde faturar, como operar e como separar pessoa física, empresa e fluxo internacional.",
          },
          {
            title: "Compliance e segurança",
            text:
              "Rotinas de controle, documentação, evidências e prevenção de multas, juros e fiscalizações.",
          },
        ],
      },
      control: {
        eyebrow: "Rotina contábil profissional",
        title: "Mais do que declarar: organizar a operação para crescer com segurança",
        text:
          "Os melhores sites contábeis não vendem apenas serviço; eles mostram método, controle e previsibilidade. A BRACHILENOS passa a comunicar isso de forma clara.",
        items: [
          {
            tag: "Prazos",
            title: "Calendário fiscal",
            text: "Mapeamento de obrigações, vencimentos, responsáveis e entregas recorrentes no Brasil e no Chile.",
          },
          {
            tag: "Fiscal",
            title: "Apuração e declarações",
            text: "Apoio para impostos, obrigações acessórias, renda mundial, créditos e documentação de suporte.",
          },
          {
            tag: "Documentos",
            title: "Dossiê da operação",
            text: "Organização de comprovantes, contratos, extratos, notas e evidências para reduzir risco de fiscalização.",
          },
          {
            tag: "Processo",
            title: "Onboarding estruturado",
            text: "Entrada com diagnóstico, checklist de documentos, prioridades e plano de regularização quando necessário.",
          },
          {
            tag: "Gestão",
            title: "Indicadores financeiros",
            text: "Relatórios para entender caixa, margem, custos, impostos e decisões de expansão entre países.",
          },
          {
            tag: "Segurança",
            title: "Compliance contínuo",
            text: "Rotina preventiva para reduzir multas, retrabalho, inconsistências e decisões tributárias no escuro.",
          },
        ],
      },
      process: {
        eyebrow: "Método",
        title: "Da análise inicial à gestão contínua",
        steps: [
          {
            title: "Diagnóstico",
            text: "Entendemos residência fiscal, empresa, faturamento, documentos e riscos nos dois países.",
          },
          {
            title: "Plano técnico",
            text: "Definimos regime, obrigações, estratégia tributária, rotinas financeiras e prioridades.",
          },
          {
            title: "Execução",
            text: "Assumimos entregas contábeis, fiscais, financeiras e societárias com responsáveis claros.",
          },
          {
            title: "Acompanhamento",
            text: "Monitoramos prazos, indicadores, documentos e novas decisões da operação.",
          },
        ],
      },
      compliance: {
        eyebrow: "Diagnóstico de risco",
        title: "Pontos fiscais que precisam ser vistos antes de crescer entre Brasil e Chile",
        text:
          "A seção posiciona a marca como consultoria técnica, não apenas escritório operacional. Ela ajuda o cliente a entender que cada decisão fiscal precisa de contexto.",
        cta: "Quero mapear meus riscos",
        secondary: "Ver conteúdos técnicos",
        items: [
          {
            title: "Residência fiscal",
            text: "Entender onde a renda deve ser informada e como comprovar a situação do contribuinte.",
          },
          {
            title: "Dupla tributação",
            text: "Avaliar aplicação de acordo, créditos de imposto e riscos de pagar duas vezes sobre a mesma renda.",
          },
          {
            title: "Lucros e transferências",
            text: "Separar pessoa física, empresa, distribuição de lucros e movimentações internacionais com lastro.",
          },
          {
            title: "Obrigações acessórias",
            text: "Acompanhar declarações, prazos e documentos exigidos por cada jurisdição.",
          },
        ],
      },
      plans: {
        eyebrow: "Formatos de contratação",
        title: "Comece pelo nível de apoio que faz sentido agora",
        featured: "Mais estratégico",
        items: [
          {
            title: "Diagnóstico Brasil x Chile",
            text:
              "Para entender riscos, pendências e melhor estrutura antes de contratar uma operação completa.",
            bullets: ["Mapa de situação fiscal", "Recomendações de regularização", "Plano de próximos passos"],
          },
          {
            title: "Operação contábil internacional",
            text:
              "Para empresas que precisam de rotina contábil, fiscal e financeira acompanhada entre os países.",
            bullets: [
              "Contabilidade e fiscal recorrente",
              "Planejamento tributário aplicado",
              "Gestão de prazos e evidências",
            ],
          },
          {
            title: "BPO financeiro e gestão",
            text:
              "Para organizar contas, caixa, conciliação, indicadores e tomada de decisão com mais clareza.",
            bullets: ["Controle financeiro mensal", "Relatórios gerenciais", "Apoio em decisões de crescimento"],
          },
        ],
      },
      faq: {
        eyebrow: "Dúvidas frequentes",
        title: "Respostas que ajudam o cliente a avançar",
        text:
          "FAQ aumenta confiança, melhora SEO e reduz atrito antes do primeiro contato.",
        items: [
          {
            question: "A BRACHILENOS atende quem mora no Chile e tem empresa no Brasil?",
            answer:
              "Sim. Esse é um dos cenários centrais do site: avaliar residência fiscal, obrigações no Brasil, renda mundial, documentação e risco de dupla tributação.",
          },
          {
            question: "O atendimento é apenas contabilidade mensal?",
            answer:
              "Não. A proposta combina diagnóstico, contabilidade, fiscal, planejamento tributário, BPO financeiro e estruturação de operação conforme o caso.",
          },
          {
            question: "Profissionais contábeis podem se cadastrar?",
            answer:
              "Sim. A página de carreiras separa candidatos, parceiros e prestadores para construir uma rede técnica no Brasil e no Chile.",
          },
          {
            question: "O site já está pronto para CRM?",
            answer:
              "Sim. Os formulários usam APIs separadas para leads comerciais e talentos, prontas para integrar com planilha, CRM, e-mail ou Supabase.",
          },
        ],
      },
      careerBand: {
        eyebrow: "Rede técnica",
        title: "É contador, analista ou consultor e quer atuar conosco?",
        text:
          "Estamos construindo uma operação séria, internacional e colaborativa para atender brasileiros, empresas e projetos entre Brasil e Chile.",
        cta: "Conhecer carreiras",
      },
      content: {
        eyebrow: "Conteúdo e autoridade",
        title: "Temas que educam clientes e atraem especialistas",
        cards: [
          {
            tag: "Fiscalidade internacional",
            title: "Riscos fiscais de morar no Chile e ter empresa no Brasil",
            text: "Conteúdos práticos para gerar demanda qualificada e mostrar domínio técnico.",
            image: "/assets/riscos-fiscais.png",
          },
          {
            tag: "Planejamento tributário",
            title: "Erros que fazem brasileiros pagarem imposto duas vezes",
            text: "Materiais educativos ajudam na busca orgânica e reduzem dúvidas antes do atendimento.",
            image: "/assets/erros-imposto.png",
          },
          {
            tag: "Recrutamento",
            title: "Faça parte da rede Brasil x Chile",
            text: "Chamadas no blog e rodapé levam profissionais para o banco de talentos separado.",
            cta: "Ver oportunidades",
          },
        ],
      },
      contact: {
        eyebrow: "Contato comercial",
        title: "Receba uma análise inicial da sua operação",
        text:
          "Conte o cenário da sua empresa e a equipe retorna com o melhor caminho para atendimento, diagnóstico ou proposta.",
        highlights: [
          "WhatsApp como canal principal",
          "Atendimento PT, ES e EN",
          "Lead comercial separado do banco de talentos",
        ],
      },
    },
    careers: {
      hero: {
        eyebrow: "Trabalhe Conosco",
        title: "Trabalhe Conosco BRACHILENOS",
        titleLine: "Carreiras",
        titleBrand: "BRACHILENOS",
        text:
          "Faça parte de uma consultoria especializada em contabilidade, finanças e planejamento tributário entre Brasil e Chile.",
        primary: "Enviar candidatura",
        secondary: "Prestar serviço",
        networkLabel: "Rede Brasil x Chile",
        networkTitle: "Técnica, estruturada e internacional",
        networkText:
          "Candidatos e prestadores entram por uma base separada para crescimento ordenado da operação.",
      },
      tracks: [
        {
          title: "Trabalhe Conosco",
          text:
            "Buscamos profissionais com perfil técnico, visão estratégica e interesse em atuar em um ambiente internacional, com foco em excelência, estrutura e crescimento.",
          items: [
            "Analista Contábil",
            "Assistente Contábil",
            "Analista Fiscal",
            "Analista Financeiro",
            "BPO Financeiro",
            "Consultor Tributário",
          ],
          cta: "Enviar currículo",
        },
        {
          title: "Prestar serviço",
          text:
            "Recebemos prestadores especializados no Brasil e no Chile para atuação colaborativa em projetos contábeis, tributários, financeiros e societários.",
          items: [
            "Contabilidade, fiscal e folha",
            "Tributário e societário",
            "Financeiro e BPO",
            "Legalização e abertura de empresas",
            "Compliance",
          ],
          cta: "Cadastrar perfil",
        },
        {
          title: "Rede Brasil x Chile",
          text:
            "Conectamos profissionais e especialistas que desejam atuar em operações entre Brasil e Chile, com foco em suporte técnico, execução e crescimento estruturado.",
          items: [
            "Especialistas por área técnica",
            "Prestadores por país e cidade",
            "Prestadores por disponibilidade e perfil",
          ],
          cta: "Entrar para a rede",
        },
      ],
      application: {
        eyebrow: "Banco de talentos",
        title: "Envie seus dados para a área correta",
        text:
          "O formulário separa perfis em candidatos e prestadores para que a operação possa crescer com organização e rastreabilidade.",
        groups: ["Candidatos", "Prestadores"],
      },
    },
    forms: {
      name: "Nome completo",
      country: "País",
      city: "Cidade",
      education: "Formação",
      registry: "CRC / Registro profissional",
      area: "Área de atuação",
      experience: "Tempo de experiência",
      interest: "Tipo de interesse",
      portfolio: "Currículo / portfólio",
      message: "Mensagem",
      choose: "Selecione",
      other: "Outro",
      clientProfile: "Perfil do atendimento",
      clientProfileOptions: ["Pessoa física", "Pessoa jurídica", "Investidor", "Profissional autônomo", "Outro"],
      clientMarket: "Mercado da demanda",
      clientMarketOptions: ["Brasil", "Chile", "Brasil x Chile"],
      clientUrgency: "Urgência",
      clientUrgencyOptions: ["Preciso resolver agora", "Tenho prazo nos próximos dias", "Estou planejando com antecedência"],
      clientNeed: "Qual apoio você procura?",
      clientOptions: ["Diagnóstico Brasil x Chile", "Contabilidade empresarial", "Estruturação estratégica", "BPO financeiro", "Abertura ou regularização", "Organização de documentos", "Gestão financeira", "Outro"],
      clientPlaceholder: "Descreva sua situação, onde mora/opera, se existe prazo e qual é a principal dúvida.",
      clientSubmit: "Enviar pelo WhatsApp",
      commercialEyebrow: "Atendimento comercial",
      commercialText: "Preencha o diagnóstico e o WhatsApp abrirá com a mensagem pronta. Depois é só revisar e enviar.",
      privacyConsent: "Autorizo a BRACHILENOS a usar estes dados para retornar meu contato e conduzir o atendimento solicitado.",
      reopenWhatsapp: "Abrir WhatsApp novamente",
      talentAreas: ["Contábil", "Administrativo", "Financeiro", "BPO financeiro", "Consultoria empresarial", "Outro"],
      talentFormEyebrow: "Cadastro profissional",
      talentFormTitle: "Questionário em 3 etapas",
      talentFormText: "Fluxo separado dos clientes: candidatos e prestadores seguem para análise profissional.",
      talentStepContact: "Contato",
      talentStepContactText: "Dados para retorno",
      talentStepProfile: "Perfil",
      talentStepProfileText: "Formação e atuação",
      talentStepSend: "Envio",
      talentStepSendText: "Interesse e currículo",
      talentBaseCandidates: "Base: candidatos",
      talentBaseProviders: "Base: prestadores",
      talentEmailDestination: "Destino: e-mail da operação",
      operationCountry: "Onde pode atuar?",
      operationCountryOptions: ["Brasil", "Chile", "Brasil x Chile", "Remoto internacional"],
      languages: "Idiomas de atendimento",
      languageOptions: ["Português", "Espanhol", "Inglês", "Português e espanhol", "Português, espanhol e inglês"],
      workMode: "Modelo de atuação",
      workModeOptions: ["Remoto", "Presencial no Brasil", "Presencial no Chile", "Híbrido", "Por projeto"],
      availability: "Disponibilidade",
      availabilityOptions: ["Imediata", "Em até 15 dias", "Em até 30 dias", "Sob demanda", "A combinar"],
      interests: ["Quero trabalhar", "Prestar serviço"],
      talentPlaceholder: "Conte sua experiência, disponibilidade e como deseja atuar.",
      talentSubmit: "Enviar candidatura",
      successClient: "WhatsApp aberto com a mensagem pronta. Revise e toque em enviar para concluir o contato.",
      successTalent: "Cadastro enviado para o fluxo profissional separado.",
      emailDraftReady: "Cadastro preparado para envio ao e-mail temporário da operação.",
      validationRequired: "Revise os campos obrigatórios antes de enviar.",
      contactLegend: "Dados de contato",
      professionalLegend: "Perfil profissional",
      interestLegend: "Interesse e envio",
      back: "Voltar",
      nextStep: "Próxima etapa",
      sending: "Enviando...",
      reopenEmailDraft: "Abrir rascunho de e-mail novamente",
      error: "Não foi possível enviar agora. Os dados foram mantidos localmente para teste.",
    },
    footer: {
      text:
        "Contabilidade, consultoria financeira e estruturação empresarial para brasileiros entre Brasil e Chile.",
      clients: "Clientes",
      professionals: "Trabalhe Conosco",
      partners: "Prestadores",
      talentBank: "Cadastro profissional",
      seo: "Buscas estratégicas",
      keywords:
        "contador brasileiro no Chile, contabilidade Brasil Chile, prestar serviço contábil Chile, BPO financeiro Chile.",
    },
  },
  es: {
    meta: {
      homeTitle: "Contabilidad Brasil x Chile para empresas y personas",
      careersTitle: "Trabaja con nosotros",
      homeDescription:
        "Contabilidad, gestión financiera, BPO y estructuración empresarial para brasileños, empresas e inversionistas con operaciones entre Brasil y Chile.",
      careersDescription:
        "Regístrate en el banco de talentos o como prestador de servicios de la red técnica Brasil x Chile de BRACHILENOS.",
    },
    nav: {
      solutions: "Soluciones",
      audiences: "Perfiles",
      process: "Proceso",
      careers: "Trabaja con nosotros",
      content: "Contenido",
      contact: "Contacto",
      commercialCta: "Hablar con especialista",
      careersCta: "Enviar CV",
    },
    home: {
      hero: {
        eyebrow: "Operación contable Brasil x Chile",
        title: "BRACHILENOS",
        subtitle:
          "Contabilidad, gestión financiera y planificación tributaria para brasileños que emprenden, invierten o estructuran operaciones entre Brasil y Chile.",
        primary: "Solicitar diagnóstico",
        secondary: "Soy profesional o socio",
        trust: [
          "Atención en portugués, español e inglés",
          "Base técnica Brasil x Chile",
          "Clientes, socios y talentos en flujos separados",
        ],
        routeLabel: "Red técnica internacional",
        routeTitle: "Brasil x Chile",
        routeText:
          "Contabilidad, fiscal, financiero, societario y tributario conectados en una sola operación.",
        assurances: [
          "Calendario fiscal acompañado",
          "Documentos y evidencias organizados",
          "Diagnóstico antes de cualquier propuesta",
          "Red técnica Brasil x Chile en expansión",
        ],
      },
      authority: {
        metrics: [
          { value: "BR + CL", label: "Operación pensada para dos países" },
          { value: "PT / ES / EN", label: "Comunicación para clientes y socios" },
          { value: "2 bases", label: "Leads comerciales y banco de talentos separados" },
          { value: "360°", label: "Contable, fiscal, financiero y tributario" },
        ],
      },
      model: {
        eyebrow: "Cómo funcionará el sitio",
        title: "Dos puertas de entrada, una marca de autoridad",
        text:
          "La experiencia separa clientes de profesionales desde el primer clic, con comunicación, formularios, base de datos y llamados adecuados para cada intención.",
        tracks: [
          {
            title: "Para clientes",
            text:
              "Captar empresarios brasileños, empresas con facturación entre países y personas que necesitan organizar obligaciones fiscales, financieras y tributarias.",
            items: [
              "Diagnóstico de estructura Brasil x Chile",
              "Contratación de contabilidad, BPO y consultoría",
              "Formulario comercial guardado como lead de cliente",
            ],
            cta: "Quiero atención",
          },
          {
            title: "Para profesionales y socios",
            text:
              "Atraer contadores, analistas, BPO financiero, consultores tributarios y prestadores en Brasil y Chile para formar una red técnica especializada.",
            items: ["Página propia de carreras y socios", "Formulario de postulación con CV", "Banco de talentos separado por perfil"],
            cta: "Entrar a la red",
          },
        ],
      },
      audiences: {
        eyebrow: "Perfiles atendidos",
        title: "El sitio habla con quienes realmente necesitan contabilidad internacional",
        text:
          "La comunicación fue organizada para atraer leads más calificados, reducir dudas iniciales y mostrar rápidamente dónde BRACHILENOS puede ayudar.",
        proofs: ["Empresas con facturación en Chile", "Brasileños con empresa en Brasil", "Red técnica para ejecución local"],
        cards: [
          {
            title: "Empresa brasileña que factura en Chile",
            text:
              "Apoyo para organizar rutina fiscal, documentación, emisión, flujo financiero y planificación entre países.",
          },
          {
            title: "Brasileño en Chile con empresa en Brasil",
            text:
              "Análisis de residencia fiscal, obligaciones accesorias, distribución de utilidades, renta mundial y riesgos de doble tributación.",
          },
          {
            title: "Negocios en expansión internacional",
            text:
              "Estructuración para decidir dónde facturar, cómo comprobar operaciones y cómo mantener gestión financiera confiable.",
          },
          {
            title: "Profesionales y socios contables",
            text:
              "Canal propio para contadores, analistas, BPO financiero y consultores que quieran entrar a la red Brasil x Chile.",
          },
        ],
      },
      solutions: {
        eyebrow: "Soluciones",
        title: "Lo que entrega BRACHILENOS",
        text: "Servicios pensados para quienes necesitan claridad operativa, cumplimiento fiscal y planificación entre dos países.",
        items: [
          { title: "Contabilidad y fiscal", text: "Registros, obligaciones accesorias, cálculo de impuestos y seguimiento regular de la empresa." },
          { title: "Planificación tributaria", text: "Análisis Brasil x Chile, convenio para evitar doble tributación, créditos y riesgos de doble imposición." },
          { title: "BPO y gestión financiera", text: "Organización de cuentas, flujo de caja, conciliación, reportes y apoyo para decisiones." },
          { title: "Regularización", text: "Mapeo de pendientes, documentación, declaraciones y plan de cumplimiento fiscal." },
          { title: "Estructuración de operación", text: "Evaluación de dónde facturar, cómo operar y cómo separar persona física, empresa y flujo internacional." },
          { title: "Compliance y seguridad", text: "Rutinas de control, documentación, evidencias y prevención de multas, intereses y fiscalizaciones." },
        ],
      },
      control: {
        eyebrow: "Rutina contable profesional",
        title: "Más que declarar: organizar la operación para crecer con seguridad",
        text:
          "Los mejores sitios contables no venden solo servicio; muestran método, control y previsibilidad. BRACHILENOS comunica eso de forma clara.",
        items: [
          {
            tag: "Plazos",
            title: "Calendario fiscal",
            text: "Mapeo de obligaciones, vencimientos, responsables y entregas recurrentes en Brasil y Chile.",
          },
          {
            tag: "Fiscal",
            title: "Cálculo y declaraciones",
            text: "Apoyo para impuestos, obligaciones accesorias, renta mundial, créditos y documentación de respaldo.",
          },
          {
            tag: "Documentos",
            title: "Dossier de la operación",
            text: "Organización de comprobantes, contratos, extractos, facturas y evidencias para reducir riesgo de fiscalización.",
          },
          {
            tag: "Proceso",
            title: "Onboarding estructurado",
            text: "Entrada con diagnóstico, checklist de documentos, prioridades y plan de regularización cuando sea necesario.",
          },
          {
            tag: "Gestión",
            title: "Indicadores financieros",
            text: "Reportes para entender caja, margen, costos, impuestos y decisiones de expansión entre países.",
          },
          {
            tag: "Seguridad",
            title: "Compliance continuo",
            text: "Rutina preventiva para reducir multas, retrabajo, inconsistencias y decisiones tributarias sin claridad.",
          },
        ],
      },
      process: {
        eyebrow: "Método",
        title: "Del análisis inicial a la gestión continua",
        steps: [
          { title: "Diagnóstico", text: "Entendemos residencia fiscal, empresa, facturación, documentos y riesgos en los dos países." },
          { title: "Plan técnico", text: "Definimos régimen, obligaciones, estrategia tributaria, rutinas financieras y prioridades." },
          { title: "Ejecución", text: "Asumimos entregas contables, fiscales, financieras y societarias con responsables claros." },
          { title: "Seguimiento", text: "Monitoreamos plazos, indicadores, documentos y nuevas decisiones de la operación." },
        ],
      },
      compliance: {
        eyebrow: "Diagnóstico de riesgo",
        title: "Puntos fiscales que deben revisarse antes de crecer entre Brasil y Chile",
        text:
          "La sección posiciona la marca como consultoría técnica, no solo oficina operativa. Ayuda al cliente a entender que cada decisión fiscal necesita contexto.",
        cta: "Quiero mapear mis riesgos",
        secondary: "Ver contenidos técnicos",
        items: [
          {
            title: "Residencia fiscal",
            text: "Entender dónde debe informarse la renta y cómo comprobar la situación del contribuyente.",
          },
          {
            title: "Doble tributación",
            text: "Evaluar aplicación de convenio, créditos de impuesto y riesgos de pagar dos veces sobre la misma renta.",
          },
          {
            title: "Utilidades y transferencias",
            text: "Separar persona natural, empresa, distribución de utilidades y movimientos internacionales con respaldo.",
          },
          {
            title: "Obligaciones accesorias",
            text: "Acompañar declaraciones, plazos y documentos exigidos por cada jurisdicción.",
          },
        ],
      },
      plans: {
        eyebrow: "Formatos de contratación",
        title: "Comienza por el nivel de apoyo que tiene sentido ahora",
        featured: "Más estratégico",
        items: [
          { title: "Diagnóstico Brasil x Chile", text: "Para entender riesgos, pendientes y mejor estructura antes de contratar una operación completa.", bullets: ["Mapa de situación fiscal", "Recomendaciones de regularización", "Plan de próximos pasos"] },
          { title: "Operación contable internacional", text: "Para empresas que necesitan rutina contable, fiscal y financiera acompañada entre países.", bullets: ["Contabilidad y fiscal recurrente", "Planificación tributaria aplicada", "Gestión de plazos y evidencias"] },
          { title: "BPO financiero y gestión", text: "Para organizar cuentas, caja, conciliación, indicadores y toma de decisiones con más claridad.", bullets: ["Control financiero mensual", "Reportes gerenciales", "Apoyo en decisiones de crecimiento"] },
        ],
      },
      faq: {
        eyebrow: "Preguntas frecuentes",
        title: "Respuestas que ayudan al cliente a avanzar",
        text:
          "El FAQ aumenta confianza, mejora SEO y reduce fricción antes del primer contacto.",
        items: [
          {
            question: "¿BRACHILENOS atiende a quien vive en Chile y tiene empresa en Brasil?",
            answer:
              "Sí. Es uno de los escenarios centrales del sitio: evaluar residencia fiscal, obligaciones en Brasil, renta mundial, documentación y riesgo de doble tributación.",
          },
          {
            question: "¿La atención es solo contabilidad mensual?",
            answer:
              "No. La propuesta combina diagnóstico, contabilidad, fiscal, planificación tributaria, BPO financiero y estructuración de operación según el caso.",
          },
          {
            question: "¿Profesionales contables pueden registrarse?",
            answer:
              "Sí. La página de carreras separa candidatos, socios y prestadores para construir una red técnica en Brasil y Chile.",
          },
          {
            question: "¿El sitio ya está listo para CRM?",
            answer:
              "Sí. Los formularios usan APIs separadas para leads comerciales y talentos, listas para integrar con planilla, CRM, e-mail o Supabase.",
          },
        ],
      },
      careerBand: {
        eyebrow: "Red técnica",
        title: "¿Eres contador, analista o consultor y quieres actuar con nosotros?",
        text:
          "Estamos construyendo una operación seria, internacional y colaborativa para atender brasileños, empresas y proyectos entre Brasil y Chile.",
        cta: "Ver carreras",
      },
      content: {
        eyebrow: "Contenido y autoridad",
        title: "Temas que educan clientes y atraen especialistas",
        cards: [
          { tag: "Fiscalidad internacional", title: "Riesgos fiscales de vivir en Chile y tener empresa en Brasil", text: "Contenidos prácticos para generar demanda calificada y demostrar dominio técnico.", image: "/assets/riscos-fiscais.png" },
          { tag: "Planificación tributaria", title: "Errores que hacen que brasileños paguen impuestos dos veces", text: "Materiales educativos ayudan en la búsqueda orgánica y reducen dudas antes de la atención.", image: "/assets/erros-imposto.png" },
          { tag: "Reclutamiento", title: "Forma parte de la red Brasil x Chile", text: "Llamados en el blog y pie de página llevan profesionales al banco de talentos separado.", cta: "Ver oportunidades" },
        ],
      },
      contact: {
        eyebrow: "Contacto comercial",
        title: "Recibe un análisis inicial de tu operación",
        text: "Cuéntanos el escenario de tu empresa y el equipo retorna con el mejor camino para atención, diagnóstico o propuesta.",
        highlights: ["WhatsApp como canal principal", "Atención PT, ES y EN", "Lead comercial separado del banco de talentos"],
      },
    },
    careers: {
      hero: {
        eyebrow: "Carreras y socios",
        title: "Carreras BRACHILENOS",
        titleLine: "Carreras",
        titleBrand: "BRACHILENOS",
        text: "Forma parte de una consultoría especializada en contabilidad, finanzas y planificación tributaria entre Brasil y Chile.",
        primary: "Enviar postulación",
        secondary: "Quiero ser socio",
        networkLabel: "Red Brasil x Chile",
        networkTitle: "Técnica, estructurada e internacional",
        networkText: "Candidatos, socios y prestadores ingresan por una base separada para el crecimiento ordenado de la operación.",
      },
      tracks: [
        { title: "Trabaja con nosotros", text: "Buscamos profesionales con perfil técnico, visión estratégica e interés en actuar en un ambiente internacional, con foco en excelencia, estructura y crecimiento.", items: ["Analista Contable", "Asistente Contable", "Analista Fiscal", "Analista Financiero", "BPO Financiero", "Consultor Tributario"], cta: "Enviar CV" },
        { title: "Sé un socio", text: "Estamos formando una red de socios estratégicos en Brasil y Chile para actuar de forma colaborativa en proyectos contables, tributarios, financieros y societarios.", items: ["Contabilidad, fiscal y nómina", "Tributario y societario", "Financiero y BPO", "Legalización y apertura de empresas", "Compliance"], cta: "Quiero ser socio" },
        { title: "Red Brasil x Chile", text: "Conectamos profesionales y especialistas que desean actuar en operaciones entre Brasil y Chile, con foco en soporte técnico, ejecución y crecimiento estructurado.", items: ["Especialistas por área técnica", "Socios por país y ciudad", "Prestadores por disponibilidad y perfil"], cta: "Entrar a la red" },
      ],
      application: {
        eyebrow: "Banco de talentos",
        title: "Envía tus datos al área correcta",
        text: "El formulario separa perfiles en candidatos, socios y prestadores para que la operación pueda crecer con organización y trazabilidad.",
        groups: ["Candidatos", "Socios", "Prestadores"],
      },
    },
    forms: {
      name: "Nombre completo",
      country: "País",
      city: "Ciudad",
      education: "Formación",
      registry: "CRC / Registro profesional",
      area: "Área de actuación",
      experience: "Tiempo de experiencia",
      interest: "Tipo de interés",
      portfolio: "CV / portafolio",
      message: "Mensaje",
      choose: "Selecciona",
      other: "Otro",
      clientProfile: "Perfil de atención",
      clientProfileOptions: ["Persona natural", "Empresa", "Inversionista", "Profesional independiente", "Otro"],
      clientMarket: "Mercado de la demanda",
      clientMarketOptions: ["Brasil", "Chile", "Brasil x Chile"],
      clientUrgency: "Urgencia",
      clientUrgencyOptions: ["Necesito resolver ahora", "Tengo plazo en los próximos días", "Estoy planificando con anticipación"],
      clientNeed: "¿Qué apoyo necesitas?",
      clientOptions: ["Diagnóstico Brasil x Chile", "Contabilidad empresarial", "Estructuración estratégica", "BPO financiero", "Apertura o regularización", "Organización de documentos", "Gestión financiera", "Otro"],
      clientPlaceholder: "Describe tu situación, dónde vives/operas, si existe plazo y cuál es la principal duda.",
      clientSubmit: "Enviar por WhatsApp",
      commercialEyebrow: "Atención comercial",
      commercialText: "Completa el diagnóstico y WhatsApp se abrirá con el mensaje listo. Luego solo revisa y envía.",
      privacyConsent: "Autorizo a BRACHILENOS a usar estos datos para responder mi contacto y conducir la atención solicitada.",
      reopenWhatsapp: "Abrir WhatsApp nuevamente",
      talentAreas: ["Contable", "Administrativo", "Financiero", "BPO financiero", "Consultoría empresarial", "Otro"],
      talentFormEyebrow: "Registro profesional",
      talentFormTitle: "Cuestionario en 3 etapas",
      talentFormText: "Flujo separado de clientes: candidatos y prestadores pasan a análisis profesional.",
      talentStepContact: "Contacto",
      talentStepContactText: "Datos para retorno",
      talentStepProfile: "Perfil",
      talentStepProfileText: "Formación y actuación",
      talentStepSend: "Envío",
      talentStepSendText: "Interés y CV",
      talentBaseCandidates: "Base: candidatos",
      talentBaseProviders: "Base: prestadores",
      talentEmailDestination: "Destino: e-mail de la operación",
      operationCountry: "¿Dónde puede actuar?",
      operationCountryOptions: ["Brasil", "Chile", "Brasil x Chile", "Remoto internacional"],
      languages: "Idiomas de atención",
      languageOptions: ["Portugués", "Español", "Inglés", "Portugués y español", "Portugués, español e inglés"],
      workMode: "Modelo de actuación",
      workModeOptions: ["Remoto", "Presencial en Brasil", "Presencial en Chile", "Híbrido", "Por proyecto"],
      availability: "Disponibilidad",
      availabilityOptions: ["Inmediata", "Hasta 15 días", "Hasta 30 días", "Bajo demanda", "A convenir"],
      interests: ["Quiero trabajar", "Prestar servicio"],
      talentPlaceholder: "Cuenta tu experiencia, disponibilidad y cómo deseas actuar.",
      talentSubmit: "Enviar postulación",
      successClient: "WhatsApp abierto con el mensaje listo. Revisa y toca enviar para concluir el contacto.",
      successTalent: "Registro enviado al flujo profesional separado.",
      emailDraftReady: "Registro preparado para enviar al e-mail temporal de la operación.",
      validationRequired: "Revisa los campos obligatorios antes de enviar.",
      contactLegend: "Datos de contacto",
      professionalLegend: "Perfil profesional",
      interestLegend: "Interés y envío",
      back: "Volver",
      nextStep: "Siguiente etapa",
      sending: "Enviando...",
      reopenEmailDraft: "Abrir borrador de e-mail nuevamente",
      error: "No fue posible enviar ahora. Los datos se mantuvieron localmente para prueba.",
    },
    footer: {
      text:
        "Contabilidad, consultoría financiera y estructuración empresarial para brasileños entre Brasil y Chile.",
      clients: "Clientes",
      professionals: "Trabaja con nosotros",
      partners: "Prestadores",
      talentBank: "Registro profesional",
      seo: "Búsquedas estratégicas",
      keywords: "contador brasileño en Chile, contabilidad Brasil Chile, prestación de servicios contables Chile, BPO financiero Chile.",
    },
  },
  en: {
    meta: {
      homeTitle: "Brazil x Chile accounting for companies and individuals",
      careersTitle: "Work with us",
      homeDescription:
        "Accounting, financial management, finance BPO and business structuring for Brazilians, companies and investors operating between Brazil and Chile.",
      careersDescription:
        "Join the talent bank or register as a service provider for the BRACHILENOS Brazil x Chile technical network.",
    },
    nav: {
      solutions: "Solutions",
      audiences: "Profiles",
      process: "Process",
      careers: "Work with us",
      content: "Content",
      contact: "Contact",
      commercialCta: "Talk to a specialist",
      careersCta: "Send resume",
    },
    home: {
      hero: {
        eyebrow: "Brazil x Chile accounting operation",
        title: "BRACHILENOS",
        subtitle:
          "Accounting, financial management and tax planning for Brazilians building, investing or structuring operations between Brazil and Chile.",
        primary: "Request diagnosis",
        secondary: "I am a professional or partner",
        trust: ["Service in Portuguese, Spanish and English", "Brazil x Chile technical base", "Clients, partners and talents in separate flows"],
        routeLabel: "International technical network",
        routeTitle: "Brazil x Chile",
        routeText: "Accounting, tax, finance, corporate and compliance work connected in one operation.",
        assurances: [
          "Tracked tax calendar",
          "Organized documents and evidence",
          "Diagnosis before any proposal",
          "Growing Brazil x Chile technical network",
        ],
      },
      authority: {
        metrics: [
          { value: "BR + CL", label: "Operation designed for two countries" },
          { value: "PT / ES / EN", label: "Communication for clients and partners" },
          { value: "2 bases", label: "Commercial leads and talent bank separated" },
          { value: "360°", label: "Accounting, tax, finance and advisory" },
        ],
      },
      model: {
        eyebrow: "How the website works",
        title: "Two entry points, one authority brand",
        text:
          "The experience separates clients from professionals from the first click, with communication, forms, data storage and CTAs tailored to each intent.",
        tracks: [
          { title: "For clients", text: "Capture Brazilian entrepreneurs, companies billing across countries and people who need to organize fiscal, financial and tax obligations.", items: ["Brazil x Chile structure diagnosis", "Accounting, BPO and advisory engagement", "Commercial form saved as a client lead"], cta: "Request service" },
          { title: "For professionals and partners", text: "Attract accountants, analysts, finance BPO, tax consultants and providers in Brazil and Chile to build a specialized technical network.", items: ["Dedicated careers and partners page", "Application form with resume upload", "Talent bank separated by profile"], cta: "Join the network" },
        ],
      },
      audiences: {
        eyebrow: "Client profiles",
        title: "The website speaks to those who truly need international accounting",
        text:
          "The messaging was organized to attract more qualified leads, reduce initial doubt and quickly show where BRACHILENOS can help.",
        proofs: ["Companies billing in Chile", "Brazilians with companies in Brazil", "Technical network for local execution"],
        cards: [
          {
            title: "Brazilian company billing in Chile",
            text:
              "Support to organize tax routines, documentation, invoicing, financial flow and planning between countries.",
          },
          {
            title: "Brazilian in Chile with a company in Brazil",
            text:
              "Analysis of tax residence, accessory obligations, profit distribution, worldwide income and double taxation risks.",
          },
          {
            title: "Businesses expanding internationally",
            text:
              "Structuring to decide where to bill, how to evidence operations and how to keep reliable financial management.",
          },
          {
            title: "Accounting professionals and partners",
            text:
              "A dedicated channel for accountants, analysts, finance BPO and consultants to join the Brazil x Chile network.",
          },
        ],
      },
      solutions: {
        eyebrow: "Solutions",
        title: "What BRACHILENOS delivers",
        text: "Services for those who need operational clarity, tax compliance and planning between two countries.",
        items: [
          { title: "Accounting and tax", text: "Bookkeeping, accessory obligations, tax calculation and regular company follow-up." },
          { title: "Tax planning", text: "Brazil x Chile analysis, double taxation treaty, tax credits and double taxation risks." },
          { title: "BPO and financial management", text: "Accounts organization, cash flow, reconciliation, reports and decision support." },
          { title: "Regularization", text: "Pending issues mapping, documentation, filings and tax compliance plan." },
          { title: "Operation structuring", text: "Evaluation of where to bill, how to operate and how to separate individual, company and international flow." },
          { title: "Compliance and security", text: "Control routines, documentation, evidence and prevention of penalties, interest and audits." },
        ],
      },
      control: {
        eyebrow: "Professional accounting routine",
        title: "Beyond filing: organizing the operation to grow with confidence",
        text:
          "The strongest accounting websites sell more than service; they show method, control and predictability. BRACHILENOS now communicates that clearly.",
        items: [
          {
            tag: "Deadlines",
            title: "Tax calendar",
            text: "Mapping obligations, due dates, owners and recurring deliveries in Brazil and Chile.",
          },
          {
            tag: "Tax",
            title: "Calculations and filings",
            text: "Support for taxes, accessory obligations, worldwide income, credits and supporting documentation.",
          },
          {
            tag: "Documents",
            title: "Operation dossier",
            text: "Organization of receipts, contracts, statements, invoices and evidence to reduce audit risk.",
          },
          {
            tag: "Process",
            title: "Structured onboarding",
            text: "Entry with diagnosis, document checklist, priorities and regularization plan when needed.",
          },
          {
            tag: "Management",
            title: "Financial indicators",
            text: "Reports to understand cash, margin, costs, taxes and expansion decisions between countries.",
          },
          {
            tag: "Security",
            title: "Ongoing compliance",
            text: "Preventive routine to reduce penalties, rework, inconsistencies and tax decisions without clarity.",
          },
        ],
      },
      process: {
        eyebrow: "Method",
        title: "From initial analysis to ongoing management",
        steps: [
          { title: "Diagnosis", text: "We understand tax residence, company, billing, documents and risks in both countries." },
          { title: "Technical plan", text: "We define regime, obligations, tax strategy, financial routines and priorities." },
          { title: "Execution", text: "We handle accounting, tax, financial and corporate deliveries with clear owners." },
          { title: "Follow-up", text: "We monitor deadlines, indicators, documents and new operating decisions." },
        ],
      },
      compliance: {
        eyebrow: "Risk diagnosis",
        title: "Tax points to review before growing between Brazil and Chile",
        text:
          "This section positions the brand as a technical advisory, not only an operational office. It helps clients understand that each tax decision needs context.",
        cta: "Map my risks",
        secondary: "View technical content",
        items: [
          {
            title: "Tax residence",
            text: "Understand where income must be reported and how to evidence the taxpayer situation.",
          },
          {
            title: "Double taxation",
            text: "Evaluate treaty application, tax credits and the risk of paying twice on the same income.",
          },
          {
            title: "Profits and transfers",
            text: "Separate individual, company, profit distribution and international movements with evidence.",
          },
          {
            title: "Accessory obligations",
            text: "Track filings, deadlines and documents required by each jurisdiction.",
          },
        ],
      },
      plans: {
        eyebrow: "Engagement formats",
        title: "Start with the support level that makes sense now",
        featured: "Most strategic",
        items: [
          { title: "Brazil x Chile diagnosis", text: "For understanding risks, pending items and the best structure before hiring a full operation.", bullets: ["Fiscal situation map", "Regularization recommendations", "Next-step plan"] },
          { title: "International accounting operation", text: "For companies that need recurring accounting, tax and financial routines between countries.", bullets: ["Recurring accounting and tax", "Applied tax planning", "Deadline and evidence management"] },
          { title: "Finance BPO and management", text: "For organizing accounts, cash, reconciliation, indicators and clearer decisions.", bullets: ["Monthly financial control", "Management reports", "Growth decision support"] },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Answers that help clients move forward",
        text:
          "FAQ builds trust, improves SEO and reduces friction before the first contact.",
        items: [
          {
            question: "Does BRACHILENOS serve people living in Chile with a company in Brazil?",
            answer:
              "Yes. This is one of the core scenarios: evaluating tax residence, Brazilian obligations, worldwide income, documentation and double taxation risk.",
          },
          {
            question: "Is the service only monthly accounting?",
            answer:
              "No. The offer combines diagnosis, accounting, tax, tax planning, finance BPO and operation structuring according to the case.",
          },
          {
            question: "Can accounting professionals register?",
            answer:
              "Yes. The careers page separates candidates, partners and providers to build a technical network in Brazil and Chile.",
          },
          {
            question: "Is the site ready for CRM integration?",
            answer:
              "Yes. Forms use separated APIs for commercial leads and talents, ready to integrate with spreadsheets, CRM, e-mail or Supabase.",
          },
        ],
      },
      careerBand: {
        eyebrow: "Technical network",
        title: "Are you an accountant, analyst or consultant and want to work with us?",
        text:
          "We are building a serious, international and collaborative operation to serve Brazilians, companies and projects between Brazil and Chile.",
        cta: "Explore careers",
      },
      content: {
        eyebrow: "Content and authority",
        title: "Topics that educate clients and attract specialists",
        cards: [
          { tag: "International taxation", title: "Tax risks of living in Chile and owning a company in Brazil", text: "Practical content generates qualified demand and shows technical authority.", image: "/assets/riscos-fiscais.png" },
          { tag: "Tax planning", title: "Mistakes that make Brazilians pay taxes twice", text: "Educational materials support organic search and reduce questions before service.", image: "/assets/erros-imposto.png" },
          { tag: "Recruiting", title: "Join the Brazil x Chile network", text: "Blog and footer CTAs guide professionals to the separated talent bank.", cta: "View opportunities" },
        ],
      },
      contact: {
        eyebrow: "Commercial contact",
        title: "Receive an initial analysis of your operation",
        text: "Tell us about your company scenario and the team will return with the best path for service, diagnosis or proposal.",
        highlights: ["WhatsApp as the main channel", "Service in PT, ES and EN", "Commercial lead separated from talent bank"],
      },
    },
    careers: {
      hero: {
        eyebrow: "Work with us",
        title: "BRACHILENOS Careers",
        titleLine: "Careers",
        titleBrand: "BRACHILENOS",
        text: "Join a consultancy specialized in accounting, finance and tax planning between Brazil and Chile.",
        primary: "Send application",
        secondary: "Provide services",
        networkLabel: "Brazil x Chile network",
        networkTitle: "Technical, structured and international",
        networkText: "Candidates and service providers enter through a separate base for organized operation growth.",
      },
      tracks: [
        { title: "Work With Us", text: "We seek professionals with technical profile, strategic vision and interest in an international environment focused on excellence, structure and growth.", items: ["Accounting Analyst", "Accounting Assistant", "Tax Analyst", "Finance Analyst", "Finance BPO", "Tax Consultant"], cta: "Send resume" },
        { title: "Provide services", text: "We receive specialized service providers in Brazil and Chile for collaborative accounting, tax, finance and corporate projects.", items: ["Accounting, tax and payroll", "Tax and corporate", "Finance and BPO", "Company legalization and opening", "Compliance"], cta: "Register profile" },
        { title: "Brazil x Chile Network", text: "We connect professionals and specialists who want to work in operations between Brazil and Chile, focused on technical support, execution and structured growth.", items: ["Specialists by technical area", "Providers by country and city", "Providers by availability and profile"], cta: "Join the network" },
      ],
      application: {
        eyebrow: "Talent bank",
        title: "Send your data to the correct area",
        text: "The form separates profiles into candidates and providers so the operation can grow with organization and traceability.",
        groups: ["Candidates", "Providers"],
      },
    },
    forms: {
      name: "Full name",
      country: "Country",
      city: "City",
      education: "Education",
      registry: "CRC / Professional registry",
      area: "Area of expertise",
      experience: "Experience length",
      interest: "Interest type",
      portfolio: "Resume / portfolio",
      message: "Message",
      choose: "Select",
      other: "Other",
      clientProfile: "Service profile",
      clientProfileOptions: ["Individual", "Company", "Investor", "Independent professional", "Other"],
      clientMarket: "Market involved",
      clientMarketOptions: ["Brazil", "Chile", "Brazil x Chile"],
      clientUrgency: "Urgency",
      clientUrgencyOptions: ["I need to solve it now", "I have a deadline soon", "I am planning ahead"],
      clientNeed: "What support do you need?",
      clientOptions: ["Brazil x Chile diagnosis", "Business accounting", "Strategic structuring", "Finance BPO", "Opening or regularization", "Document organization", "Financial management", "Other"],
      clientPlaceholder: "Describe your situation, where you live/operate, whether there is a deadline and the main question.",
      clientSubmit: "Send via WhatsApp",
      commercialEyebrow: "Commercial service",
      commercialText: "Complete the diagnosis and WhatsApp will open with the message ready. Then review it and send.",
      privacyConsent: "I authorize BRACHILENOS to use this data to return my contact and conduct the requested service.",
      reopenWhatsapp: "Open WhatsApp again",
      talentAreas: ["Accounting", "Administrative", "Finance", "Finance BPO", "Business consulting", "Other"],
      talentFormEyebrow: "Professional registration",
      talentFormTitle: "3-step questionnaire",
      talentFormText: "Separate flow from clients: candidates and providers go to professional review.",
      talentStepContact: "Contact",
      talentStepContactText: "Return details",
      talentStepProfile: "Profile",
      talentStepProfileText: "Education and expertise",
      talentStepSend: "Submit",
      talentStepSendText: "Interest and resume",
      talentBaseCandidates: "Base: candidates",
      talentBaseProviders: "Base: providers",
      talentEmailDestination: "Destination: operation e-mail",
      operationCountry: "Where can you work?",
      operationCountryOptions: ["Brazil", "Chile", "Brazil x Chile", "International remote"],
      languages: "Service languages",
      languageOptions: ["Portuguese", "Spanish", "English", "Portuguese and Spanish", "Portuguese, Spanish and English"],
      workMode: "Work model",
      workModeOptions: ["Remote", "In person in Brazil", "In person in Chile", "Hybrid", "Project-based"],
      availability: "Availability",
      availabilityOptions: ["Immediate", "Within 15 days", "Within 30 days", "On demand", "To be agreed"],
      interests: ["I want to work", "Service provider"],
      talentPlaceholder: "Tell us about your experience, availability and how you want to work.",
      talentSubmit: "Send application",
      successClient: "WhatsApp opened with the message ready. Review it and tap send to complete the contact.",
      successTalent: "Profile sent to the separated professional flow.",
      emailDraftReady: "Registration prepared to send to the temporary operation e-mail.",
      validationRequired: "Review the required fields before submitting.",
      contactLegend: "Contact details",
      professionalLegend: "Professional profile",
      interestLegend: "Interest and submission",
      back: "Back",
      nextStep: "Next step",
      sending: "Sending...",
      reopenEmailDraft: "Open e-mail draft again",
      error: "It was not possible to send now. The data was kept locally for testing.",
    },
    footer: {
      text: "Accounting, financial advisory and business structuring for Brazilians between Brazil and Chile.",
      clients: "Clients",
      professionals: "Work with us",
      partners: "Service providers",
      talentBank: "Professional registration",
      seo: "Strategic searches",
      keywords: "Brazilian accountant in Chile, Brazil Chile accounting, accounting service provider Chile, finance BPO Chile.",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[typeof defaultLocale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary;
}
