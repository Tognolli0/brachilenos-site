import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/dictionaries";
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
          <Link href={`/${lang}`} className="display-serif mb-4 flex items-center gap-3 text-lg font-bold text-white">
            <Image src="/assets/logo-brachilenos.jpeg" width={48} height={48} alt="BRACHILENOS" className="h-12 w-12 object-cover" />
            <span>BRACHILENOS</span>
          </Link>
          <p className="max-w-sm text-sm leading-6">{dict.footer.text}</p>
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
            {lang === "pt-br" ? "Política de Privacidade" : lang === "es" ? "Política de Privacidad" : "Privacy Policy"}
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
