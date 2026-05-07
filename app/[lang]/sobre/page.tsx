import type { Metadata } from "next";
import { CheckCircle2, ClipboardList, FileText, LineChart, ReceiptText, Scale, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
    title: `${dict.nav.about} | ${dict.meta.homeTitle}`,
    description: dict.meta.homeDescription,
  };
}

const controlIcons = [ReceiptText, FileText, ClipboardList, CheckCircle2, LineChart, ShieldCheck];

export default async function AboutPage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = (isLocale(paramLang) ? paramLang : "pt-br") as Locale;
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} page="about" />
      <main id="conteudo-principal">
        <section className="border-b border-[#071f3b]/10 bg-[linear-gradient(120deg,#f8faf9,#eef4f2)] py-14 sm:py-20">
          <div className="shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow mb-3">{dict.home.about.eyebrow}</p>
              <h1 className="display-serif text-balance text-[clamp(2.25rem,6vw,4.4rem)] font-bold leading-tight text-[#071f3b]">
                {dict.home.about.title}
              </h1>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {dict.home.about.markers.map((item) => (
                <span key={item} className="flex min-h-16 items-center gap-3 border border-[#d9e0e6] bg-white p-4 font-extrabold text-[#071f3b]">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0f6f43]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-3">{dict.home.compliance.eyebrow}</p>
              <h2 className="display-serif text-balance text-[clamp(2rem,4vw,3.2rem)] font-bold leading-tight text-[#071f3b]">
                {dict.home.compliance.title}
              </h2>
              <p className="mt-4 leading-8 text-[#5c6b78]">{dict.home.compliance.text}</p>
              <ButtonLink href={`/${lang}#contato`} icon={Scale} className="mt-7">
                {dict.home.compliance.cta}
              </ButtonLink>
            </div>
            <div className="border border-[#d9e0e6] border-t-4 border-t-[#b88228] bg-[#f8faf9] p-5 shadow-[0_12px_32px_rgba(7,31,59,.06)] sm:p-8">
              <div className="columns-1 gap-8 lg:columns-2">
                {dict.home.about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-5 break-inside-avoid text-[1rem] leading-8 text-[#31465a]">
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
