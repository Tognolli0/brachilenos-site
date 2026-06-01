import type { Metadata } from "next";
import { BriefcaseBusiness, CheckCircle2, ClipboardCheck, Send, UploadCloud } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TalentForm } from "@/components/TalentForm";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/dictionaries";
import { getSiteContent } from "@/lib/site-content";

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
    title: dict.meta.careersTitle,
    description: dict.meta.careersDescription,
    alternates: {
      canonical: `/${lang}/trabalhe-conosco`,
      languages: {
        "pt-BR": "/pt-br/trabalhe-conosco",
        es: "/es/trabalhe-conosco",
        en: "/en/trabalhe-conosco",
      },
    },
  };
}

const cardIcons = [BriefcaseBusiness, ClipboardCheck];
const groupIcons = [CheckCircle2, UploadCloud];

export default async function WorkWithUsPage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = (isLocale(paramLang) ? paramLang : "pt-br") as Locale;
  const dict = getDictionary(lang);
  const content = getSiteContent(lang);

  return (
    <>
      <Header lang={lang} dict={dict} page="work" />
      <main>
        <section className="border-b border-[#071f3b]/10 bg-[#f8faf9]">
          <div className="shell py-10 lg:py-14">
            <div className="max-w-4xl min-w-0">
              <p className="eyebrow mb-4">{content.work.eyebrow}</p>
              <h1 className="text-balance text-[clamp(1.8rem,4vw,3rem)] font-black leading-tight text-[#071f3b]">
                {content.work.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[#31465a] sm:text-lg sm:leading-8">{content.work.text}</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-10 sm:py-12">
          <div className="shell grid gap-5 lg:grid-cols-2">
            {content.work.cards.map((card, index) => {
              const Icon = cardIcons[index] || BriefcaseBusiness;
              return (
                <article key={card.id} id={card.id} className="min-w-0 border border-[#d9e0e6] bg-white p-6 shadow-[0_12px_32px_rgba(7,31,59,.06)] sm:p-7">
                  <Icon className="mb-5 h-9 w-9 text-[#b88228]" />
                  <h2 className="text-balance text-[clamp(1.35rem,4vw,1.7rem)] font-black leading-tight text-[#071f3b]">{card.title}</h2>
                  <p className="mt-4 leading-7 text-[#5c6b78]">{card.text}</p>
                  <ul className="my-6 grid gap-3 text-[#102235]">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0f6f43]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#candidatura" className="inline-flex max-w-full items-center gap-2 border-b-2 border-[#b88228] font-extrabold text-[#071f3b]">
                    <Send className="h-4 w-4" />
                    <span className="min-w-0 break-words">{card.cta}</span>
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section id="candidatura" className="section-pad scroll-mt-24 bg-[#eef4f2]">
          <div className="shell grid gap-9 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
            <div>
              <p className="eyebrow mb-3">{content.work.application.eyebrow}</p>
              <h2 className="text-balance text-[clamp(1.55rem,4vw,2.4rem)] font-black leading-tight text-[#071f3b]">
                {content.work.application.title}
              </h2>
              <p className="mt-4 leading-7 text-[#5c6b78]">{content.work.application.text}</p>
              <div className="mt-7 grid gap-3">
                {content.work.application.groups.map((group, index) => {
                  const Icon = groupIcons[index] || CheckCircle2;
                  return (
                    <span key={group} className="flex min-h-14 items-center gap-3 border border-[#d9e0e6] bg-white p-3 font-bold text-[#071f3b]">
                      <Icon className="h-5 w-5 text-[#b88228]" />
                      {group}
                    </span>
                  );
                })}
              </div>
            </div>
            <TalentForm dict={dict} />
          </div>
        </section>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
