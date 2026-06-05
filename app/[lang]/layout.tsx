import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { SiteAnalytics } from "@/components/SiteAnalytics";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { assetPath } from "@/lib/assets";
import { getHtmlLang, isLocale, locales, type Locale } from "@/lib/dictionaries";
import { getSiteContent } from "@/lib/site-content";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "BRACHILENOS | Contabilidade Brasil x Chile",
    template: "%s | BRACHILENOS",
  },
  description:
    "Contabilidade, gestão financeira, BPO e planejamento tributário para brasileiros, empresas e operações entre Brasil e Chile.",
  keywords: [
    "contabilidade Brasil Chile",
    "contador brasileiro no Chile",
    "planejamento tributário internacional",
    "BPO financeiro Chile",
    "consultoria tributária Brasil Chile",
  ],
  icons: {
    icon: assetPath("/assets/logo-brachilenos.jpeg"),
  },
  openGraph: {
    type: "website",
    url: getSiteUrl(),
    siteName: "BRACHILENOS",
    title: "BRACHILENOS | Contabilidade Brasil x Chile",
    description:
      "Contabilidade, gestão financeira, BPO e planejamento tributário para brasileiros, empresas e operações entre Brasil e Chile.",
    images: [{ url: assetPath("/assets/santiago-hero.webp"), width: 1024, height: 1536, alt: "Contabilidade Brachilenos Brasil x Chile" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRACHILENOS | Contabilidade Brasil x Chile",
    description:
      "Contabilidade, gestão financeira, BPO e planejamento tributário para brasileiros, empresas e operações entre Brasil e Chile.",
    images: [assetPath("/assets/santiago-hero.webp")],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071f3b",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const content = getSiteContent(locale);

  return (
    <html lang={getHtmlLang(locale)} data-scroll-behavior="smooth">
      <body>
        {children}
        <SiteAnalytics />
        <WhatsAppFloat message={content.labels.talkSpecialist} ariaLabel={content.labels.whatsappAria} />
      </body>
    </html>
  );
}
