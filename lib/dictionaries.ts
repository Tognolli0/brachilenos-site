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
      homeTitle: "Contabilidade Brachilenos",
      aboutTitle: "Quem Somos | Contabilidade Brachilenos",
      servicesTitle: "Soluções Contábeis Brasil x Chile | Contabilidade Brachilenos",
      careersTitle: "Carreiras e Parceiros",
      homeDescription:
        "Contabilidade, gestão financeira e planejamento tributário para brasileiros que empreendem entre Brasil e Chile.",
      aboutDescription:
        "Conheça a Contabilidade Brachilenos: assessoria contábil, financeira e tributária para pessoas, empresas e operações Brasil x Chile.",
      servicesDescription:
        "Serviços de contabilidade, finanças, regularização fiscal, planejamento tributário e consultoria internacional para Brasil e Chile.",
      careersDescription:
        "Trabalhe conosco, seja parceiro ou entre para a rede técnica Brasil x Chile da BRACHILENOS.",
    },
    nav: {
      home: "Início",
      about: "Quem somos",
      solutions: "Soluções",
      audiences: "Perfis",
      process: "Processo",
      careers: "Carreiras",
      content: "Conteúdo",
      contact: "Contato",
      commercialCta: "Falar com especialista",
      careersCta: "Enviar currículo",
    },
    home: {
      hero: {
        eyebrow: "Operação contábil Brasil x Chile",
        title: "Contabilidade Brachilenos",
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
      about: {
        eyebrow: "Quem somos",
        title: "Contabilidade, finanças e estratégia para Brasil e Chile",
        subtitle:
          "Apoiamos pessoas, empresas, parceiros e profissionais que precisam operar com mais clareza, segurança e planejamento entre os dois países.",
        markers: ["Brasil", "Chile", "Operações binacionais"],
        paragraphs: [
          "A Brachilenos é uma empresa especializada em soluções contábeis, financeiras e estratégicas para brasileiros no Chile e chilenos no Brasil.",
          "Atuamos conectando pessoas, empresas e profissionais aos dois mercados através de uma estrutura integrada de assessoria empresarial, tributária e financeira, oferecendo suporte para quem deseja empreender, investir, expandir operações ou regularizar sua situação entre Brasil e Chile.",
          "Nossa atuação combina conhecimento técnico, planejamento estratégico e uma rede de profissionais parceiros nos dois países, permitindo um atendimento alinhado às legislações, exigências fiscais e particularidades operacionais de cada mercado.",
          "Oferecemos soluções para pessoa física e jurídica, incluindo abertura e regularização de empresas, planejamento tributário, assessoria contábil, estruturação financeira, organização patrimonial e consultoria internacional para operações binacionais.",
          "Mais do que executar processos, nosso objetivo é proporcionar segurança, organização e eficiência para clientes que buscam crescer de forma estruturada no cenário internacional.",
          "Acreditamos que operações entre países exigem visão estratégica, suporte técnico qualificado e profissionais que compreendam a realidade local e internacional de forma integrada.",
          "Brasil e Chile conectados através de estratégia, contabilidade, finanças e oportunidades.",
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
        eyebrow: "Atendimento especializado",
        title: "Duas portas de entrada para uma operação mais segura",
        text:
          "A BRACHILENOS organiza demandas comerciais, profissionais e parcerias em fluxos separados para responder com mais contexto, precisão e velocidade.",
        tracks: [
          {
            title: "Para clientes",
            text:
              "Atendimento para empresários brasileiros, empresas com faturamento entre países e pessoas que precisam organizar obrigações fiscais, financeiras e tributárias.",
            items: [
              "Diagnóstico de estrutura Brasil x Chile",
              "Contabilidade, BPO financeiro e consultoria",
              "Contato comercial direcionado para a necessidade certa",
            ],
            cta: "Quero atendimento",
          },
          {
            title: "Para profissionais e parceiros",
            text:
              "Canal para contadores, analistas, BPO financeiro, consultores tributários e prestadores no Brasil e no Chile entrarem na rede técnica.",
            items: [
              "Cadastro por perfil de atuação",
              "Envio de candidatura, parceria ou prestação de serviço",
              "Banco de talentos organizado por área técnica",
            ],
            cta: "Entrar para a rede",
          },
        ],
      },
      audiences: {
        eyebrow: "Perfis atendidos",
        title: "Atendimento para quem precisa de contabilidade internacional",
        text:
          "A atuação foi organizada para atender pessoas, empresas e profissionais que precisam de orientação clara entre Brasil e Chile.",
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
          "O trabalho combina método, controle e previsibilidade para reduzir riscos, organizar documentos e dar mais clareza às decisões entre Brasil e Chile.",
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
          "Perguntas comuns para quem precisa entender se o atendimento faz sentido antes do primeiro contato.",
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
              "Sim. Os contatos comerciais e o banco de talentos já entram por caminhos separados, o que facilita integração com planilha, CRM, e-mail ou banco de dados.",
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
        eyebrow: "Carreiras e parceiros",
        title: "Carreiras BRACHILENOS",
        titleLine: "Carreiras",
        titleBrand: "BRACHILENOS",
        text:
          "Faça parte de uma consultoria especializada em contabilidade, finanças e planejamento tributário entre Brasil e Chile.",
        primary: "Enviar candidatura",
        secondary: "Quero ser parceiro",
        networkLabel: "Rede Brasil x Chile",
        networkTitle: "Técnica, estruturada e internacional",
        networkText:
          "Candidatos, parceiros e prestadores entram por uma base separada para crescimento ordenado da operação.",
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
          title: "Seja um Parceiro",
          text:
            "Estamos formando uma rede de parceiros estratégicos no Brasil e no Chile para atuação colaborativa em projetos contábeis, tributários, financeiros e societários.",
          items: [
            "Contabilidade, fiscal e folha",
            "Tributário e societário",
            "Financeiro e BPO",
            "Legalização e abertura de empresas",
            "Compliance",
          ],
          cta: "Quero ser parceiro",
        },
        {
          title: "Rede Brasil x Chile",
          text:
            "Conectamos profissionais e especialistas que desejam atuar em operações entre Brasil e Chile, com foco em suporte técnico, execução e crescimento estruturado.",
          items: [
            "Especialistas por área técnica",
            "Parceiros por país e cidade",
            "Prestadores por disponibilidade e perfil",
          ],
          cta: "Entrar para a rede",
        },
      ],
      application: {
        eyebrow: "Banco de talentos",
        title: "Envie seus dados para a área correta",
        text:
          "O formulário separa perfis em candidatos, parceiros e prestadores para que a operação possa crescer com organização e rastreabilidade.",
        groups: ["Candidatos", "Parceiros", "Prestadores"],
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
      clientNeed: "Qual apoio você procura?",
      clientOptions: ["Diagnóstico Brasil x Chile", "Contabilidade e fiscal", "Planejamento tributário", "BPO financeiro"],
      clientPlaceholder: "Descreva sua empresa, onde fatura e qual é a principal dúvida.",
      clientSubmit: "Solicitar contato",
      sending: "Enviando...",
      talentAreas: ["Contábil", "Fiscal", "Financeiro", "BPO financeiro", "Consultoria tributária", "Outro"],
      interests: ["Vaga", "Parceria", "Prestação de serviço"],
      talentPlaceholder: "Conte sua experiência, disponibilidade e como deseja atuar.",
      talentSubmit: "Enviar candidatura",
      successClient: "Recebemos seu contato. Nossa equipe retorna em até 1 dia útil pelo WhatsApp informado.",
      successTalent: "Recebemos seus dados. Se houver aderência com a rede, entraremos em contato pelo WhatsApp ou e-mail informado.",
      error: "Não foi possível concluir o envio agora. Tente novamente em alguns minutos ou fale conosco pelo WhatsApp.",
      requiredField: "Campo obrigatório.",
      invalidEmail: "Informe um e-mail válido.",
      fileTooLarge: "Arquivo muito grande. O limite é 5 MB.",
      fileHint: "PDF, DOC, DOCX, PNG ou JPG até 5 MB.",
      removeFile: "Remover arquivo",
      applicationReceived: "Recebemos seus dados.",
    },
    footer: {
      text:
        "Contabilidade, consultoria financeira e planejamento tributário internacional para brasileiros entre Brasil e Chile.",
      clients: "Clientes",
      professionals: "Profissionais",
      partners: "Parceiros",
      talentBank: "Banco de talentos",
      seo: "Buscas estratégicas",
      keywords:
        "contador brasileiro no Chile, parceria contábil Brasil Chile, vaga analista contábil Chile, BPO financeiro Chile.",
    },
  },
  es: {
    meta: {
      homeTitle: "Contabilidad Brachilenos",
      aboutTitle: "Quiénes Somos | Contabilidad Brachilenos",
      servicesTitle: "Soluciones Contables Brasil x Chile | Contabilidad Brachilenos",
      careersTitle: "Carreras y Socios",
      homeDescription:
        "Contabilidad, gestión financiera y planificación tributaria para brasileños que emprenden entre Brasil y Chile.",
      aboutDescription:
        "Conoce Contabilidad Brachilenos: asesoría contable, financiera y tributaria para personas, empresas y operaciones Brasil x Chile.",
      servicesDescription:
        "Servicios de contabilidad, finanzas, regularización fiscal, planificación tributaria y consultoría internacional para Brasil y Chile.",
      careersDescription:
        "Trabaja con nosotros, sé socio o entra a la red técnica Brasil x Chile de BRACHILENOS.",
    },
    nav: {
      home: "Inicio",
      about: "Quiénes somos",
      solutions: "Soluciones",
      audiences: "Perfiles",
      process: "Proceso",
      careers: "Carreras",
      content: "Contenido",
      contact: "Contacto",
      commercialCta: "Hablar con especialista",
      careersCta: "Enviar CV",
    },
    home: {
      hero: {
        eyebrow: "Operación contable Brasil x Chile",
        title: "Contabilidad Brachilenos",
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
      about: {
        eyebrow: "Quiénes somos",
        title: "Contabilidad, finanzas y estrategia para Brasil y Chile",
        subtitle:
          "Apoyamos a personas, empresas, socios y profesionales que necesitan operar con más claridad, seguridad y planificación entre los dos países.",
        markers: ["Brasil", "Chile", "Operaciones binacionales"],
        paragraphs: [
          "Brachilenos es una empresa especializada en soluciones contables, financieras y estratégicas para brasileños en Chile y chilenos en Brasil.",
          "Conectamos personas, empresas y profesionales con ambos mercados a través de una estructura integrada de asesoría empresarial, tributaria y financiera, apoyando a quienes desean emprender, invertir, expandir operaciones o regularizar su situación entre Brasil y Chile.",
          "Nuestra actuación combina conocimiento técnico, planificación estratégica y una red de profesionales aliados en los dos países, permitiendo una atención alineada con las legislaciones, exigencias fiscales y particularidades operativas de cada mercado.",
          "Ofrecemos soluciones para personas naturales y jurídicas, incluyendo apertura y regularización de empresas, planificación tributaria, asesoría contable, estructuración financiera, organización patrimonial y consultoría internacional para operaciones binacionales.",
          "Más que ejecutar procesos, nuestro objetivo es entregar seguridad, organización y eficiencia a clientes que buscan crecer de forma estructurada en el escenario internacional.",
          "Creemos que las operaciones entre países exigen visión estratégica, soporte técnico calificado y profesionales que comprendan la realidad local e internacional de forma integrada.",
          "Brasil y Chile conectados a través de estrategia, contabilidad, finanzas y oportunidades.",
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
        eyebrow: "Atención especializada",
        title: "Dos puertas de entrada para una operación más segura",
        text:
          "BRACHILENOS organiza demandas comerciales, profesionales y alianzas en flujos separados para responder con más contexto, precisión y velocidad.",
        tracks: [
          {
            title: "Para clientes",
            text:
              "Atención para empresarios brasileños, empresas con facturación entre países y personas que necesitan organizar obligaciones fiscales, financieras y tributarias.",
            items: [
              "Diagnóstico de estructura Brasil x Chile",
              "Contabilidad, BPO financiero y consultoría",
              "Contacto comercial dirigido a la necesidad correcta",
            ],
            cta: "Quiero atención",
          },
          {
            title: "Para profesionales y socios",
            text:
              "Canal para contadores, analistas, BPO financiero, consultores tributarios y prestadores en Brasil y Chile que quieren entrar a la red técnica.",
            items: ["Registro por perfil de actuación", "Postulación, alianza o prestación de servicio", "Banco de talentos organizado por área técnica"],
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
          "El trabajo combina método, control y previsibilidad para reducir riesgos, organizar documentos y dar más claridad a las decisiones entre Brasil y Chile.",
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
          "Preguntas comunes para quienes necesitan entender si la atención tiene sentido antes del primer contacto.",
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
              "Sí. Los contactos comerciales y el banco de talentos entran por caminos separados, lo que facilita la integración con planilla, CRM, e-mail o base de datos.",
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
      clientNeed: "¿Qué apoyo necesitas?",
      clientOptions: ["Diagnóstico Brasil x Chile", "Contabilidad y fiscal", "Planificación tributaria", "BPO financiero"],
      clientPlaceholder: "Describe tu empresa, dónde factura y cuál es la principal duda.",
      clientSubmit: "Solicitar contacto",
      sending: "Enviando...",
      talentAreas: ["Contable", "Fiscal", "Financiero", "BPO financiero", "Consultoría tributaria", "Otro"],
      interests: ["Vacante", "Sociedad", "Prestación de servicio"],
      talentPlaceholder: "Cuenta tu experiencia, disponibilidad y cómo deseas actuar.",
      talentSubmit: "Enviar postulación",
      successClient: "Recibimos tu contacto. Nuestro equipo responde en hasta 1 día hábil por el WhatsApp informado.",
      successTalent: "Recibimos tus datos. Si hay encaje con la red, entraremos en contacto por WhatsApp o e-mail.",
      error: "No fue posible completar el envío ahora. Inténtalo nuevamente en unos minutos o contáctanos por WhatsApp.",
      requiredField: "Campo obligatorio.",
      invalidEmail: "Ingresa un e-mail válido.",
      fileTooLarge: "Archivo demasiado grande. El límite es 5 MB.",
      fileHint: "PDF, DOC, DOCX, PNG o JPG hasta 5 MB.",
      removeFile: "Quitar archivo",
      applicationReceived: "Recibimos tus datos.",
    },
    footer: {
      text:
        "Contabilidad, consultoría financiera y planificación tributaria internacional para brasileños entre Brasil y Chile.",
      clients: "Clientes",
      professionals: "Profesionales",
      partners: "Socios",
      talentBank: "Banco de talentos",
      seo: "Búsquedas estratégicas",
      keywords: "contador brasileño en Chile, sociedad contable Brasil Chile, vacante analista contable Chile, BPO financiero Chile.",
    },
  },
  en: {
    meta: {
      homeTitle: "Brachilenos Accounting",
      aboutTitle: "About Us | Brachilenos Accounting",
      servicesTitle: "Brazil x Chile Accounting Services | Brachilenos Accounting",
      careersTitle: "Careers and Partners",
      homeDescription:
        "Accounting, financial management and tax planning for Brazilians building between Brazil and Chile.",
      aboutDescription:
        "Meet Brachilenos Accounting: accounting, financial and tax advisory for people, companies and Brazil x Chile operations.",
      servicesDescription:
        "Accounting, finance, tax regularization, tax planning and international advisory services for Brazil and Chile.",
      careersDescription:
        "Work with us, become a partner or join the BRACHILENOS Brazil x Chile technical network.",
    },
    nav: {
      home: "Home",
      about: "About us",
      solutions: "Solutions",
      audiences: "Profiles",
      process: "Process",
      careers: "Careers",
      content: "Content",
      contact: "Contact",
      commercialCta: "Talk to a specialist",
      careersCta: "Send resume",
    },
    home: {
      hero: {
        eyebrow: "Brazil x Chile accounting operation",
        title: "Brachilenos Accounting",
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
      about: {
        eyebrow: "About us",
        title: "Accounting, finance and strategy for Brazil and Chile",
        subtitle:
          "We support people, companies, partners and professionals who need to operate with more clarity, security and planning between both countries.",
        markers: ["Brazil", "Chile", "Binational operations"],
        paragraphs: [
          "Brachilenos is a company specialized in accounting, financial and strategic solutions for Brazilians in Chile and Chileans in Brazil.",
          "We connect people, companies and professionals to both markets through an integrated business, tax and financial advisory structure, supporting those who want to start a business, invest, expand operations or regularize their situation between Brazil and Chile.",
          "Our work combines technical knowledge, strategic planning and a network of professional partners in both countries, enabling service aligned with the laws, tax requirements and operational details of each market.",
          "We offer solutions for individuals and companies, including company formation and regularization, tax planning, accounting advisory, financial structuring, asset organization and international consulting for binational operations.",
          "More than executing processes, our goal is to provide security, organization and efficiency for clients seeking structured growth in an international context.",
          "We believe cross-border operations require strategic vision, qualified technical support and professionals who understand both local and international realities in an integrated way.",
          "Brazil and Chile connected through strategy, accounting, finance and opportunities.",
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
        eyebrow: "Specialized service",
        title: "Two entry points for a safer operation",
        text:
          "BRACHILENOS organizes commercial requests, professional profiles and partnerships in separate flows to respond with more context, precision and speed.",
        tracks: [
          { title: "For clients", text: "Service for Brazilian entrepreneurs, companies billing across countries and people who need to organize fiscal, financial and tax obligations.", items: ["Brazil x Chile structure diagnosis", "Accounting, finance BPO and advisory", "Commercial contact routed to the right need"], cta: "Request service" },
          { title: "For professionals and partners", text: "A channel for accountants, analysts, finance BPO, tax consultants and providers in Brazil and Chile who want to join the technical network.", items: ["Registration by work profile", "Application, partnership or service provider flow", "Talent bank organized by technical area"], cta: "Join the network" },
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
          "The work combines method, control and predictability to reduce risks, organize documents and bring more clarity to decisions between Brazil and Chile.",
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
          "Common questions for people who need to understand whether the service makes sense before the first contact.",
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
              "Yes. Commercial contacts and talent bank records already enter through separate paths, which makes integration with spreadsheets, CRM, e-mail or a database easier.",
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
        eyebrow: "Careers and partners",
        title: "BRACHILENOS Careers",
        titleLine: "Careers",
        titleBrand: "BRACHILENOS",
        text: "Join a consultancy specialized in accounting, finance and tax planning between Brazil and Chile.",
        primary: "Send application",
        secondary: "I want to partner",
        networkLabel: "Brazil x Chile network",
        networkTitle: "Technical, structured and international",
        networkText: "Candidates, partners and service providers enter through a separate base for organized operation growth.",
      },
      tracks: [
        { title: "Work With Us", text: "We seek professionals with technical profile, strategic vision and interest in an international environment focused on excellence, structure and growth.", items: ["Accounting Analyst", "Accounting Assistant", "Tax Analyst", "Finance Analyst", "Finance BPO", "Tax Consultant"], cta: "Send resume" },
        { title: "Become a Partner", text: "We are building a network of strategic partners in Brazil and Chile for collaborative accounting, tax, finance and corporate projects.", items: ["Accounting, tax and payroll", "Tax and corporate", "Finance and BPO", "Company legalization and opening", "Compliance"], cta: "I want to partner" },
        { title: "Brazil x Chile Network", text: "We connect professionals and specialists who want to work in operations between Brazil and Chile, focused on technical support, execution and structured growth.", items: ["Specialists by technical area", "Partners by country and city", "Providers by availability and profile"], cta: "Join the network" },
      ],
      application: {
        eyebrow: "Talent bank",
        title: "Send your data to the correct area",
        text: "The form separates profiles into candidates, partners and providers so the operation can grow with organization and traceability.",
        groups: ["Candidates", "Partners", "Providers"],
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
      clientNeed: "What support do you need?",
      clientOptions: ["Brazil x Chile diagnosis", "Accounting and tax", "Tax planning", "Finance BPO"],
      clientPlaceholder: "Describe your company, where it bills and the main question.",
      clientSubmit: "Request contact",
      sending: "Sending...",
      talentAreas: ["Accounting", "Tax", "Finance", "Finance BPO", "Tax consulting", "Other"],
      interests: ["Job", "Partnership", "Service provider"],
      talentPlaceholder: "Tell us about your experience, availability and how you want to work.",
      talentSubmit: "Send application",
      successClient: "We received your request. Our team will reply within 1 business day through the WhatsApp provided.",
      successTalent: "We received your details. If there is a fit with the network, we will contact you by WhatsApp or e-mail.",
      error: "We could not complete the submission now. Please try again in a few minutes or contact us on WhatsApp.",
      requiredField: "Required field.",
      invalidEmail: "Enter a valid e-mail.",
      fileTooLarge: "File too large. The limit is 5 MB.",
      fileHint: "PDF, DOC, DOCX, PNG or JPG up to 5 MB.",
      removeFile: "Remove file",
      applicationReceived: "We received your details.",
    },
    footer: {
      text: "Accounting, financial advisory and international tax planning for Brazilians between Brazil and Chile.",
      clients: "Clients",
      professionals: "Professionals",
      partners: "Partners",
      talentBank: "Talent bank",
      seo: "Strategic searches",
      keywords: "Brazilian accountant in Chile, Brazil Chile accounting partnership, accounting analyst job Chile, finance BPO Chile.",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[typeof defaultLocale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary;
}
