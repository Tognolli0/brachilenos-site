import type { SolutionSlug } from "@/lib/site-content";

export type ServiceCatalogCard = {
  title: string;
  text: string;
  services: string[];
};

export type ServiceCatalogBlock = {
  id: string;
  slug: SolutionSlug;
  eyebrow: string;
  title: string;
  text: string;
  cards: ServiceCatalogCard[];
};

export const serviceCatalogIntro = [
  "Na Brachilenos, oferecemos soluções estratégicas para brasileiros no Chile e chilenos no Brasil, conectando contabilidade, finanças, tributação e estruturação empresarial de forma integrada entre os dois países.",
  "Nossa atuação é voltada para pessoas físicas, empresários, investidores, prestadores de serviços e empresas que desejam operar com mais segurança, organização e planejamento no cenário internacional.",
];

export const serviceCatalogBySlug: Record<SolutionSlug, ServiceCatalogBlock[]> = {
  brasil: [
    {
      id: "pessoa-fisica-brasil",
      slug: "brasil",
      eyebrow: "Pessoa Física",
      title: "Pessoa Física — Brasil",
      text: "Regularização, planejamento fiscal e organização financeira para brasileiros no Brasil ou residentes no exterior.",
      cards: [
        {
          title: "Contabilidade Pessoa Física",
          text:
            "Assessoria fiscal e tributária para brasileiros no Brasil ou residentes no exterior, com foco em regularização, planejamento e conformidade junto à Receita Federal.",
          services: [
            "IRPF — Declaração anual do imposto de renda pessoa física",
            "Carnê-Leão — Apuração mensal de rendimentos recebidos do exterior ou de pessoas físicas",
            "Ganho de Capital — Cálculo tributário sobre venda de bens e direitos",
            "Regularização de CPF — Suporte para CPF irregular, suspenso ou pendente",
            "Declaração de Saída Definitiva — Regularização fiscal para quem deixou o Brasil",
            "Declaração de Bens no Exterior — Organização patrimonial internacional",
            "Planejamento Tributário PF — Estratégias para organização fiscal e redução de riscos",
            "Regularização Fiscal — Apoio junto à Receita Federal",
            "Consultoria para Residentes no Exterior — Assessoria para brasileiros expatriados",
            "Análise de Bitributação Brasil x Chile — Avaliação tributária internacional",
          ],
        },
        {
          title: "Finanças Pessoa Física",
          text:
            "Organização financeira e patrimonial para brasileiros que desejam estruturar sua vida financeira no Brasil ou no exterior.",
          services: [
            "Planejamento Financeiro",
            "Diagnóstico Financeiro",
            "Organização Financeira",
            "Controle de Fluxo de Caixa Pessoal",
            "Planejamento Patrimonial",
            "Reserva de Emergência",
            "Organização de Dívidas",
            "Reorganização Financeira",
            "Educação Financeira",
            "Planejamento para Mudança Internacional",
            "Planejamento de Aposentadoria",
            "Consultoria para Investimentos",
            "Estruturação de Carteira",
            "Diversificação Patrimonial",
            "Planejamento Sucessório",
          ],
        },
      ],
    },
    {
      id: "pessoa-juridica-brasil",
      slug: "brasil",
      eyebrow: "Pessoa Jurídica",
      title: "Pessoa Jurídica — Brasil",
      text: "Contabilidade, fiscal, societário e gestão financeira para empresas brasileiras e estruturas com sócios internacionais.",
      cards: [
        {
          title: "Contabilidade Empresarial",
          text:
            "Soluções contábeis, fiscais e societárias para empresas brasileiras e operações com sócios ou estruturas internacionais.",
          services: [
            "Abertura de Empresas",
            "Alteração Contratual",
            "Encerramento de Empresas",
            "MEI, ME, LTDA e SLU",
            "Regularização de CNPJ",
            "DAS / Simples Nacional",
            "DASN",
            "Emissão de Notas Fiscais",
            "Apuração de Impostos",
            "Folha de Pagamento",
            "Pró-labore",
            "Escrituração Contábil",
            "Escrituração Fiscal",
            "Conciliação Bancária",
            "Balanço Patrimonial",
            "DRE",
            "Distribuição de Lucros",
            "Parcelamentos Fiscais",
            "DEFIS",
            "DCTFWeb",
            "SPED",
            "ECD",
            "ECF",
            "Consultoria para Sócios no Exterior",
            "Estruturação Fiscal Brasil x Chile",
          ],
        },
        {
          title: "Finanças Empresariais",
          text: "Estruturação financeira e suporte estratégico para crescimento, gestão e expansão empresarial.",
          services: [
            "BPO Financeiro",
            "Fluxo de Caixa",
            "Controle Financeiro",
            "DRE Gerencial",
            "Planejamento Financeiro Empresarial",
            "Precificação",
            "Margem e Rentabilidade",
            "Contas a Pagar e Receber",
            "Projeção de Caixa",
            "Planejamento de Crescimento",
            "KPIs Financeiros",
            "Diagnóstico Financeiro",
            "Reestruturação Financeira",
            "Valuation Básico",
            "Apoio à Tomada de Decisão",
          ],
        },
      ],
    },
  ],
  chile: [
    {
      id: "pessoa-fisica-chile",
      slug: "chile",
      eyebrow: "Pessoa Física",
      title: "Pessoa Física — Chile",
      text: "Orientação tributária e financeira para brasileiros residentes no Chile e contribuintes perante o SII.",
      cards: [
        {
          title: "Contabilidade Pessoa Física Chile",
          text:
            "Assessoria tributária e regularização fiscal para brasileiros residentes no Chile e contribuintes perante o SII.",
          services: [
            "Operación Renta (F22)",
            "Declaração Anual de Renda",
            "Regularização Tributária no SII",
            "Inicio de Actividades",
            "Emissão de Boletas",
            "Honorarios",
            "Planejamento Tributário",
            "Consultoria para Brasileiros no Chile",
            "Regularização de RUT",
            "Residência Fiscal",
            "Declaração de Renda Exterior",
            "Créditos Tributários",
            "Consultoria sobre APV e DFL2",
          ],
        },
        {
          title: "Finanças Pessoa Física Chile",
          text: "Planejamento financeiro e organização patrimonial para brasileiros vivendo no Chile.",
          services: [
            "Organização Financeira no Chile",
            "Planejamento Financeiro para Expatriados",
            "Educação Financeira",
            "Organização de Orçamento em CLP",
            "Planejamento Patrimonial Internacional",
            "Reserva de Emergência",
            "Organização de Dívidas",
            "Planejamento de Metas",
            "Análise de Custo de Vida",
          ],
        },
      ],
    },
    {
      id: "pessoa-juridica-chile",
      slug: "chile",
      eyebrow: "Pessoa Jurídica",
      title: "Pessoa Jurídica — Chile",
      text: "Estruturação empresarial, contabilidade local e gestão financeira para empresas no mercado chileno.",
      cards: [
        {
          title: "Contabilidade Empresarial Chile",
          text: "Estruturação empresarial e assessoria tributária para empresas operando no Chile.",
          services: [
            "Abertura de Empresa no Chile",
            "Constitución de SpA",
            "EIRL",
            "Persona Natural con Giro",
            "Inicio de Actividades",
            "RUT Empresa",
            "Patente Comercial",
            "Facturas",
            "Boletas",
            "F29 Mensal",
            "F22 Anual",
            "Contabilidade Mensal",
            "Apuração de Impostos",
            "Planejamento Tributário",
            "Escrituração Contábil",
            "Conciliação Bancária",
            "Remunerações",
            "Estrutura Administrativa",
            "Regularização no SII",
            "Encerramento de Empresa",
            "Consultoria para Brasileiros no Chile",
          ],
        },
        {
          title: "Finanças Empresariais Chile",
          text: "Gestão financeira e planejamento estratégico para empresas no mercado chileno.",
          services: [
            "Estruturação Financeira",
            "Fluxo de Caixa",
            "Controle Financeiro",
            "DRE Gerencial",
            "Precificação",
            "Margem e Rentabilidade",
            "Organização de Custos",
            "Planejamento para Expansão",
            "KPIs Financeiros",
            "Diagnóstico Financeiro",
            "Reestruturação Financeira",
            "Apoio Estratégico",
          ],
        },
      ],
    },
  ],
  "brasil-chile": [
    {
      id: "servicos-internacionais",
      slug: "brasil-chile",
      eyebrow: "Operação binacional",
      title: "Serviços Internacionais — Brasil x Chile",
      text: "Consultoria fiscal, financeira e patrimonial para pessoas e empresas com renda, operação ou estrutura entre países.",
      cards: [
        {
          title: "Consultoria Tributária Internacional",
          text: "Estruturação fiscal e tributária para operações, patrimônio e rendimentos entre Brasil e Chile.",
          services: [
            "Planejamento Tributário Internacional",
            "Consultoria Fiscal Brasil x Chile",
            "Residência Fiscal",
            "Estruturação Patrimonial Internacional",
            "Estruturação Societária",
            "Bitributação",
            "Aplicação do Acordo Brasil-Chile",
            "Regularização de Rendimentos no Exterior",
            "Retirada de Lucros",
            "Pró-labore Internacional",
            "Consultoria para Empresas Binacionais",
            "Estruturação para Prestadores Internacionais",
          ],
        },
        {
          title: "Planejamento Financeiro Internacional",
          text: "Organização patrimonial e financeira para pessoas e empresas com operações entre países.",
          services: [
            "Planejamento Financeiro Internacional",
            "Organização Patrimonial",
            "Estruturação Financeira Internacional",
            "Gestão Financeira para Expatriados",
            "Planejamento de Mudança Internacional",
            "Proteção Patrimonial",
            "Remessas Internacionais",
            "Estruturação de Recebimentos",
            "Estratégia Financeira Binacional",
          ],
        },
        {
          title: "Assessoria Financeira & Investimentos",
          text: "Consultoria estratégica para crescimento patrimonial, investimentos e internacionalização de ativos.",
          services: [
            "Planejamento de Investimentos",
            "Perfil de Investidor",
            "Construção de Carteira",
            "Diversificação de Investimentos",
            "Estratégia de Alocação",
            "Internacionalização Patrimonial",
            "Estratégia de Dolarização",
            "Planejamento de Longo Prazo",
            "Organização Financeira do Sócio",
            "Separação PF x PJ",
            "Estratégia de Retirada de Lucros",
            "Estruturação de Capital",
            "Estratégia de Reinvestimento",
          ],
        },
      ],
    },
  ],
};
