import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  ClipboardCheck,
  Globe2,
  Handshake,
  Send,
  UploadCloud,
  UserRoundCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TalentForm } from "@/components/TalentForm";
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
    title: dict.meta.careersTitle,
    description: dict.meta.careersDescription,
    openGraph: {
      title: dict.meta.careersTitle,
      description: dict.meta.careersDescription,
      url: `/${lang}/carreiras`,
      images: [{ url: "/assets/santiago-hero.png", width: 1024, height: 1536, alt: dict.meta.careersTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.careersTitle,
      description: dict.meta.careersDescription,
      images: ["/assets/santiago-hero.png"],
    },
    alternates: {
      canonical: `/${lang}/carreiras`,
      languages: {
        "pt-BR": "/pt-br/carreiras",
        es: "/es/carreiras",
        en: "/en/carreiras",
      },
    },
  };
}

const trackIcons = [BriefcaseBusiness, Handshake, Globe2];
const groupIcons = [UserRoundCheck, Handshake, ClipboardCheck];

export default async function CareersPage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = (isLocale(paramLang) ? paramLang : "pt-br") as Locale;
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} page="careers" />
      <main id="conteudo-principal">
        <section className="overflow-hidden bg-[linear-gradient(120deg,rgba(7,31,59,.96),rgba(11,52,91,.88))] text-white">
          <div className="shell grid min-h-[auto] items-center gap-8 py-10 sm:py-14 lg:min-h-[540px] lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.88fr)] xl:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.82fr)]">
            <div className="min-w-0 max-w-xl">
              <p className="eyebrow mb-3">{dict.careers.hero.eyebrow}</p>
              <h1 className="display-serif font-bold leading-[.96] text-white">
                <span className="block text-balance text-[clamp(2.4rem,8.5vw,4.75rem)]">
                  {dict.careers.hero.titleLine}
                </span>
                <span className="block whitespace-nowrap break-normal text-[clamp(2.05rem,10vw,4.35rem)]">
                  {dict.careers.hero.titleBrand}
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-[clamp(1rem,2vw,1.26rem)] leading-8 text-white/80">
                {dict.careers.hero.text}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={`/${lang}/carreiras#candidatura`} icon={Send} variant="light">
                  {dict.careers.hero.primary}
                </ButtonLink>
                <ButtonLink href={`/${lang}/carreiras#parceiros`} icon={Handshake} variant="outlineLight">
                  {dict.careers.hero.secondary}
                </ButtonLink>
              </div>
            </div>

            <div className="min-w-0 overflow-hidden border border-white/20 bg-white/5 shadow-[0_18px_44px_rgba(0,0,0,.14)]">
              <div className="relative min-h-40 border-b border-white/10 bg-[linear-gradient(135deg,rgba(248,250,249,.08),rgba(31,107,143,.16))] sm:min-h-48">
                <div className="absolute left-[18%] right-[18%] top-1/2 h-1 -translate-y-1/2 bg-[linear-gradient(90deg,#0f6f43,#b88228,#c91f28)]" />
                <div className="display-serif absolute left-[8%] top-1/2 grid h-20 w-20 -translate-y-1/2 place-items-center rounded-full border-[3px] border-white/85 bg-[#0f6f43] text-2xl font-black text-white shadow-lg sm:left-[10%] sm:h-24 sm:w-24 sm:text-3xl">
                  BR
                </div>
                <div className="display-serif absolute right-[8%] top-1/2 grid h-20 w-20 -translate-y-1/2 place-items-center rounded-full border-[3px] border-white/85 bg-[#c91f28] text-2xl font-black text-white shadow-lg sm:right-[10%] sm:h-24 sm:w-24 sm:text-3xl">
                  CL
                </div>
              </div>
              <div className="p-5 sm:p-7">
                <span className="text-xs font-black uppercase text-[#d7aa52]">{dict.careers.hero.networkLabel}</span>
                <strong className="display-serif mt-2 block text-balance text-2xl leading-tight text-white sm:text-3xl">
                  {dict.careers.hero.networkTitle}
                </strong>
                <p className="mt-3 leading-7 text-white/75">{dict.careers.hero.networkText}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-[#eef4f2]">
          <div className="shell grid gap-5 lg:grid-cols-3">
            {dict.careers.tracks.map((track, index) => {
              const Icon = trackIcons[index];
              return (
                <article
                  key={track.title}
                  id={index === 1 ? "parceiros" : undefined}
                  className="min-h-[auto] min-w-0 border border-[#d9e0e6] bg-white p-6 shadow-[0_12px_32px_rgba(7,31,59,.06)] sm:p-7 lg:min-h-[420px]"
                >
                  <Icon className="mb-5 h-9 w-9 text-[#b88228]" />
                  <h2 className="display-serif text-balance text-3xl font-bold text-[#071f3b]">{track.title}</h2>
                  <p className="mt-4 leading-7 text-[#5c6b78]">{track.text}</p>
                  <ul className="my-5 list-disc space-y-2 pl-5 text-[#102235]">
                    {track.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href="#candidatura" className="border-b-2 border-[#b88228] font-extrabold text-[#071f3b]">
                    {track.cta}
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section id="candidatura" className="section-pad bg-white">
          <div className="shell grid gap-9 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
            <div>
              <p className="eyebrow mb-3">{dict.careers.application.eyebrow}</p>
              <h2 className="display-serif text-balance text-[clamp(1.85rem,4vw,3.35rem)] font-bold leading-tight text-[#071f3b]">
                {dict.careers.application.title}
              </h2>
              <p className="mt-4 leading-7 text-[#5c6b78]">{dict.careers.application.text}</p>
              <div className="mt-7 grid gap-3">
                {dict.careers.application.groups.map((group, index) => {
                  const Icon = groupIcons[index];
                  return (
                    <span key={group} className="flex min-h-14 items-center gap-3 border border-[#d9e0e6] bg-[#f8faf9] p-3 font-bold text-[#071f3b]">
                      <Icon className="h-5 w-5 text-[#b88228]" />
                      {group}
                    </span>
                  );
                })}
              </div>
              <div className="mt-8 border border-[#d9e0e6] bg-[#071f3b] p-5 text-white">
                <UploadCloud className="mb-3 h-7 w-7 text-[#d7aa52]" />
                <p className="text-sm leading-6 text-white/75">
                  {dict.footer.keywords}
                </p>
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
