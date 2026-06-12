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
  "Na Brachilenos, oferecemos soluções estratégicas para brasileiros no Chile e chilenos no Brasil, conectando contabilidade, finanças, organização documental e estruturação empresarial de forma integrada entre os dois países.",
  "Nossa atuação é voltada para pessoas físicas, empresários, investidores, prestadores de serviços e empresas que desejam operar com mais segurança, organização e planejamento no cenário internacional.",
];

export const serviceCatalogBySlug: Record<SolutionSlug, ServiceCatalogBlock[]> = {
  brasil: [
    {
      id: "pessoa-fisica-brasil",
      slug: "brasil",
      eyebrow: "Pessoa Física",
      title: "Pessoa Física — Brasil",
      text: "Regularização documental, planejamento de renda e organização financeira para brasileiros no Brasil ou residentes no exterior.",
      cards: [
        {
          title: "Contabilidade Pessoa Física",
          text:
            "Assessoria contábil e documental para brasileiros no Brasil ou residentes no exterior, com foco em regularização, planejamento e conformidade cadastral.",
          services: [
            "Declaração anual de pessoa física",
            "Carnê-Leão — Apuração mensal de rendimentos recebidos do exterior ou de pessoas físicas",
            "Ganho de Capital — Cálculo sobre venda de bens e direitos",
            "Regularização de CPF — Suporte para CPF irregular, suspenso ou pendente",
            "Declaração de Saída Definitiva — Regularização cadastral para quem deixou o Brasil",
            "Declaração de Bens no Exterior — Organização patrimonial internacional",
            "Planejamento de Renda PF — Estratégias para organização documental e redução de riscos",
            "Regularização Cadastral — Apoio em pendências e atualizações",
            "Consultoria para Residentes no Exterior — Assessoria para brasileiros expatriados",
            "Análise Brasil x Chile — Avaliação documental internacional",
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
      text: "Contabilidade, rotinas societárias e gestão financeira para empresas brasileiras e estruturas com sócios internacionais.",
      cards: [
        {
          title: "Contabilidade Empresarial",
          text:
            "Soluções contábeis, societárias e documentais para empresas brasileiras e operações com sócios ou estruturas internacionais.",
          services: [
            "Abertura de Empresas",
            "Alteração Contratual",
            "Encerramento de Empresas",
            "MEI, ME, LTDA e SLU",
            "Regularização de CNPJ",
            "DAS / Simples Nacional",
            "DASN",
            "Emissão de documentos",
            "Apuração mensal",
            "Folha de Pagamento",
            "Pró-labore",
            "Escrituração Contábil",
            "Escrituração e rotinas",
            "Conciliação Bancária",
            "Balanço Patrimonial",
            "DRE",
            "Distribuição de Lucros",
            "Parcelamentos e pendências",
            "DEFIS",
            "DCTFWeb",
            "SPED",
            "ECD",
            "ECF",
            "Consultoria para Sócios no Exterior",
            "Estruturação Brasil x Chile",
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
      text: "Orientação contábil, documental e financeira para brasileiros residentes no Chile.",
      cards: [
        {
          title: "Contabilidade Pessoa Física Chile",
          text:
            "Assessoria contábil e regularização documental para brasileiros residentes no Chile.",
          services: [
            "Operación Renta (F22)",
            "Declaração Anual de Renda",
            "Regularização no SII",
            "Inicio de Actividades",
            "Emissão de Boletas",
            "Honorarios",
            "Planejamento de renda",
            "Consultoria para Brasileiros no Chile",
            "Regularização de RUT",
            "Residência e vínculos",
            "Declaração de Renda Exterior",
            "Créditos e benefícios aplicáveis",
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
          text: "Estruturação empresarial e assessoria contábil para empresas operando no Chile.",
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
            "Apuração mensal",
            "Planejamento empresarial",
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
      text: "Consultoria financeira, patrimonial e empresarial para pessoas e empresas com renda, operação ou estrutura entre países.",
      cards: [
        {
          title: "Consultoria Internacional Brasil x Chile",
          text: "Estruturação documental, financeira e patrimonial para operações, patrimônio e rendimentos entre Brasil e Chile.",
          services: [
            "Planejamento Internacional",
            "Consultoria Brasil x Chile",
            "Residência e vínculos",
            "Estruturação Patrimonial Internacional",
            "Estruturação Societária",
            "Análise de pagamentos duplicados",
            "Aplicação de regras Brasil-Chile",
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
