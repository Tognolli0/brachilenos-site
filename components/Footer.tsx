import Image from "next/image";
import Link from "next/link";
import { contactEmail, contactWhatsAppDisplay } from "@/lib/contact";
import type { Dictionary, Locale } from "@/lib/dictionaries";
import { createWhatsAppUrl } from "@/lib/conversion";
import { getSiteContent, solutionSlugs } from "@/lib/site-content";

type FooterProps = {
  lang: Locale;
  dict: Dictionary;
};

export function Footer({ lang, dict }: FooterProps) {
  const content = getSiteContent(lang);
  const workHref = `/${lang}/${content.routes.work}`;
  const solutionsHref = `/${lang}/${content.routes.solutions}`;

  return (
    <footer className="bg-[#061a30] py-12 text-white/75">
      <div className="shell grid gap-9 md:grid-cols-2 lg:grid-cols-[1.4fr_0.65fr_0.75fr_1fr]">
        <div>
          <Link href={`/${lang}`} className="mb-4 flex items-center gap-3 text-white">
            <Image src="/assets/logo-brachilenos-symbol.webp" width={54} height={54} alt="BRACHILENOS" className="h-[54px] w-[54px] rounded-full object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,.28)]" />
            <span className="grid gap-1 leading-none">
              <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#d7aa52]">Contabilidade</span>
              <span className="display-serif block text-xl font-bold tracking-wide">BRACHILENOS</span>
              <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-white/55">Brasil x Chile</span>
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-6">{dict.footer.text}</p>
          <div className="mt-5 grid gap-2 text-sm">
            <a href={createWhatsAppUrl(dict.nav.commercialCta)} target="_blank" rel="noopener noreferrer" className="font-semibold text-white transition hover:text-[#d7aa52]">
              WhatsApp: {contactWhatsAppDisplay}
            </a>
            <a href={`mailto:${contactEmail}`} className="font-semibold text-white transition hover:text-[#d7aa52]">
              E-mail: {contactEmail}
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-bold text-white">{dict.footer.clients}</h3>
          {solutionSlugs.map((slug) => (
            <FooterLink key={slug} href={`${solutionsHref}/${slug}`}>
              {content.solutions.groups[slug].label}
            </FooterLink>
          ))}
          <FooterLink href={`/${lang}#contato`}>{dict.nav.contact}</FooterLink>
        </div>

        <div>
          <h3 className="mb-3 font-bold text-white">{dict.footer.professionals}</h3>
          <FooterLink href={workHref}>{dict.nav.careers}</FooterLink>
          <FooterLink href={`${workHref}#prestador`}>{dict.footer.partners}</FooterLink>
          <FooterLink href={`${workHref}#candidatura`}>{dict.footer.talentBank}</FooterLink>
        </div>

        <div>
          <h3 className="mb-3 font-bold text-white">{dict.footer.seo}</h3>
          <p className="text-sm leading-6">{dict.footer.keywords}</p>
          <FooterLink href={`/${lang}/privacidade`}>
            {content.labels.privacyPolicy}
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="my-2 block text-sm transition hover:text-[#d7aa52]">
      {children}
    </Link>
  );
}
