import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/dictionaries";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const privacyContent: Record<
  Locale,
  {
    title: string;
    description: string;
    sections: Array<{ title: string; text: string }>;
  }
> = {
  "pt-br": {
    title: "Política de Privacidade",
    description:
      "Entenda como a BRACHILENOS trata dados enviados por clientes, candidatos e prestadores nos formulários do site.",
    sections: [
      {
        title: "Dados coletados",
        text:
          "Podemos receber nome, WhatsApp, e-mail, país, cidade, necessidade comercial, área profissional, experiência, LinkedIn, mensagem e informações de currículo ou portfólio.",
      },
      {
        title: "Finalidade",
        text:
          "Os dados são usados para retorno comercial, análise inicial de atendimento, organização de candidaturas, cadastro de prestadores e formação da rede técnica Brasil x Chile.",
      },
      {
        title: "Separação das bases",
        text:
          "Leads comerciais e cadastros profissionais seguem fluxos separados para evitar mistura entre clientes, candidatos e prestadores de serviço.",
      },
      {
        title: "Compartilhamento",
        text:
          "As informações podem ser encaminhadas para ferramentas de e-mail, planilha, CRM ou automação apenas para viabilizar atendimento e gestão interna.",
      },
      {
        title: "Solicitações",
        text:
          "O titular pode solicitar correção, atualização ou exclusão dos dados pelos canais oficiais de contato da BRACHILENOS.",
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    description:
      "Conoce cómo BRACHILENOS trata los datos enviados por clientes, candidatos y prestadores en los formularios del sitio.",
    sections: [
      {
        title: "Datos recopilados",
        text:
          "Podemos recibir nombre, WhatsApp, e-mail, país, ciudad, necesidad comercial, área profesional, experiencia, LinkedIn, mensaje e información de CV o portafolio.",
      },
      {
        title: "Finalidad",
        text:
          "Los datos se usan para contacto comercial, análisis inicial, organización de candidaturas, registro de prestadores y formación de la red técnica Brasil x Chile.",
      },
      {
        title: "Bases separadas",
        text:
          "Los leads comerciales y los registros profesionales siguen flujos separados para no mezclar clientes, candidatos y prestadores.",
      },
      {
        title: "Compartición",
        text:
          "La información puede enviarse a herramientas de e-mail, hojas de cálculo, CRM o automatización solo para atención y gestión interna.",
      },
      {
        title: "Solicitudes",
        text:
          "El titular puede solicitar corrección, actualización o eliminación de datos por los canales oficiales de BRACHILENOS.",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    description:
      "Learn how BRACHILENOS handles data submitted by clients, candidates and service providers through the website forms.",
    sections: [
      {
        title: "Data collected",
        text:
          "We may receive name, WhatsApp, email, country, city, business need, professional area, experience, LinkedIn, message and resume or portfolio information.",
      },
      {
        title: "Purpose",
        text:
          "Data is used for commercial follow-up, initial service analysis, candidate organization, provider registration and the Brazil x Chile technical network.",
      },
      {
        title: "Separated flows",
        text:
          "Commercial leads and professional registrations follow separate flows to avoid mixing clients, candidates and service providers.",
      },
      {
        title: "Sharing",
        text:
          "Information may be sent to email, spreadsheet, CRM or automation tools only to support service delivery and internal management.",
      },
      {
        title: "Requests",
        text:
          "Data subjects may request correction, update or deletion through the official BRACHILENOS contact channels.",
      },
    ],
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: paramLang } = await params;
  const lang = isLocale(paramLang) ? paramLang : "pt-br";
  const content = privacyContent[lang];

  return {
    title: `${content.title} | BRACHILENOS`,
    description: content.description,
    alternates: {
      canonical: `/${lang}/privacidade`,
    },
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = (isLocale(paramLang) ? paramLang : "pt-br") as Locale;
  const dict = getDictionary(lang);
  const content = privacyContent[lang];

  return (
    <>
      <Header lang={lang} dict={dict} page="about" />
      <main>
        <section className="border-b border-[#071f3b]/10 bg-[#f8faf9]">
          <div className="shell py-12 lg:py-16">
            <div className="max-w-3xl min-w-0">
              <p className="eyebrow mb-4">Dados e segurança</p>
              <h1 className="display-serif text-balance text-[clamp(1.85rem,7vw,3rem)] font-bold leading-tight text-[#071f3b]">
                {content.title}
              </h1>
              <p className="mt-5 text-base leading-7 text-[#31465a] sm:text-lg sm:leading-8">{content.description}</p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="shell grid gap-5 md:grid-cols-2">
            {content.sections.map((section) => (
              <article key={section.title} className="min-w-0 border border-[#d9e0e6] bg-white p-6 shadow-[0_12px_32px_rgba(7,31,59,.06)]">
                <ShieldCheck className="mb-4 h-8 w-8 text-[#b88228]" aria-hidden />
                <h2 className="text-xl font-extrabold text-[#071f3b]">{section.title}</h2>
                <p className="mt-3 leading-7 text-[#5c6b78]">{section.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
