import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ClipboardList, FileText, Globe2, LineChart, ReceiptText, Scale, ShieldCheck } from "lucide-react";
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
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
    openGraph: {
      title: dict.meta.aboutTitle,
      description: dict.meta.aboutDescription,
      url: `/${lang}/sobre`,
      images: [{ url: "/assets/santiago-hero.png", width: 1024, height: 1536, alt: dict.meta.aboutTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.aboutTitle,
      description: dict.meta.aboutDescription,
      images: ["/assets/santiago-hero.png"],
    },
    alternates: {
      canonical: `/${lang}/sobre`,
      languages: {
        "pt-BR": "/pt-br/sobre",
        es: "/es/sobre",
        en: "/en/sobre",
      },
    },
  };
}

const controlIcons = [ReceiptText, FileText, ClipboardList, CheckCircle2, LineChart, ShieldCheck];
const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyBmaWxsPScjZWVmNGYyJy8+PC9zdmc+";

export default async function AboutPage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = (isLocale(paramLang) ? paramLang : "pt-br") as Locale;
  const dict = getDictionary(lang);
  const copy = aboutPageCopy[lang];

  return (
    <>
      <Header lang={lang} dict={dict} page="about" />
      <main id="conteudo-principal">
        <section className="overflow-hidden border-b border-[#071f3b]/10 bg-[linear-gradient(120deg,#f8faf9,#eef4f2)] py-12 sm:py-16">
          <div className="shell grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.85fr)] lg:items-center">
            <div className="min-w-0">
              <p className="eyebrow mb-3">{dict.home.about.eyebrow}</p>
              <h1 className="display-serif max-w-3xl text-balance text-[clamp(2rem,5vw,3.85rem)] font-bold leading-tight text-[#071f3b]">
                {dict.home.about.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#31465a]">{dict.home.about.subtitle}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {dict.home.about.markers.map((item) => (
                  <span key={item} className="flex min-h-14 items-center gap-3 border border-[#d9e0e6] bg-white p-3 font-extrabold text-[#071f3b]">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0f6f43]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden border border-[#d9e0e6] bg-[#071f3b] shadow-[0_18px_48px_rgba(7,31,59,.14)]">
              <Image
                src={assetPath("/assets/santiago-hero.png")}
                alt={copy.imageAlt}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-top opacity-85"
                placeholder="blur"
                blurDataURL={blurDataURL}
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,31,59,.12),rgba(7,31,59,.82))]" />
              <div className="absolute inset-x-5 bottom-5 border-l-4 border-[#d7aa52] bg-[#071f3b]/92 p-5 text-white">
                <Globe2 className="mb-3 h-7 w-7 text-[#d7aa52]" aria-hidden />
                <strong className="display-serif block text-2xl leading-tight">Brasil x Chile</strong>
                <span className="mt-2 block text-sm leading-6 text-white/75">
                  {copy.imageText}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-3">{copy.sectionEyebrow}</p>
              <h2 className="display-serif text-balance text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight text-[#071f3b]">
                {copy.sectionTitle}
              </h2>
              <p className="mt-4 leading-8 text-[#5c6b78]">
                {copy.sectionText}
              </p>
              <ButtonLink href={`/${lang}#contato`} icon={Scale} className="mt-7">
                {dict.nav.commercialCta}
              </ButtonLink>
            </div>
            <div className="grid gap-4">
              <div className="border border-[#d9e0e6] border-t-4 border-t-[#b88228] bg-[#f8faf9] p-5 shadow-[0_12px_32px_rgba(7,31,59,.06)] sm:p-8">
                {dict.home.about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-5 text-[1rem] leading-8 text-[#31465a] last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-[#eef4f2]">
          <div className="shell">
            <SectionHeading eyebrow={dict.home.control.eyebrow} title={dict.home.control.title} text={dict.home.control.text} />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {dict.home.control.items.map((item, index) => {
                const Icon = controlIcons[index];
                return (
                  <article key={item.title} className="min-w-0 border border-[#d9e0e6] bg-white p-6">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <Icon className="h-8 w-8 text-[#b88228]" />
                      <span className="text-xs font-black uppercase text-[#0f6f43]">{item.tag}</span>
                    </div>
                    <h3 className="text-lg font-extrabold text-[#071f3b]">{item.title}</h3>
                    <p className="mt-3 leading-7 text-[#5c6b78]">{item.text}</p>
                  </article>
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

const aboutPageCopy = {
  "pt-br": {
    imageAlt: "Operação contábil entre Brasil e Chile",
    imageText: "Contabilidade, finanças, tributação e oportunidades conectadas em uma estrutura binacional.",
    sectionEyebrow: "Nossa atuação",
    sectionTitle: "Uma operação pensada para quem vive, empreende ou presta serviços entre países",
    sectionText:
      "A Brachilenos combina visão técnica e comunicação clara para ajudar clientes e parceiros a tomarem decisões melhores antes de abrir, regularizar, expandir ou reorganizar operações.",
  },
  es: {
    imageAlt: "Operación contable entre Brasil y Chile",
    imageText: "Contabilidad, finanzas, tributación y oportunidades conectadas en una estructura binacional.",
    sectionEyebrow: "Nuestra actuación",
    sectionTitle: "Una operación pensada para quienes viven, emprenden o prestan servicios entre países",
    sectionText:
      "Brachilenos combina visión técnica y comunicación clara para ayudar a clientes y socios a tomar mejores decisiones antes de abrir, regularizar, expandir o reorganizar operaciones.",
  },
  en: {
    imageAlt: "Accounting operation between Brazil and Chile",
    imageText: "Accounting, finance, tax and opportunities connected through a binational structure.",
    sectionEyebrow: "How we work",
    sectionTitle: "A structure built for people, companies and partners operating between countries",
    sectionText:
      "Brachilenos combines technical vision and clear communication to help clients and partners make better decisions before opening, regularizing, expanding or reorganizing operations.",
  },
} satisfies Record<Locale, { imageAlt: string; imageText: string; sectionEyebrow: string; sectionTitle: string; sectionText: string }>;

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
