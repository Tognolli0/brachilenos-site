import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { assetPath } from "@/lib/assets";
import { getHtmlLang, isLocale, locales, type Locale } from "@/lib/dictionaries";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://brachilenos.com"),
  title: {
    default: "Contabilidade Brachilenos | Brasil x Chile",
    template: "%s | Contabilidade Brachilenos",
  },
  description:
    "Consultoria contábil, financeira e tributária para brasileiros, empresas e operações entre Brasil e Chile.",
  icons: {
    icon: assetPath("/assets/logo-brachilenos.jpeg"),
  },
  openGraph: {
    type: "website",
    siteName: "BRACHILENOS",
    title: "Contabilidade Brachilenos | Brasil x Chile",
    description:
      "Consultoria contábil, financeira e tributária para brasileiros, empresas e operações entre Brasil e Chile.",
    images: [{ url: assetPath("/assets/santiago-hero.webp"), width: 1024, height: 1536, alt: "Contabilidade Brachilenos Brasil x Chile" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contabilidade Brachilenos | Brasil x Chile",
    description:
      "Consultoria contábil, financeira e tributária para brasileiros, empresas e operações entre Brasil e Chile.",
    images: [assetPath("/assets/santiago-hero.webp")],
  },
  robots: {
    index: true,
    follow: true,
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

  return (
    <html lang={getHtmlLang(lang as Locale)} data-scroll-behavior="smooth">
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
