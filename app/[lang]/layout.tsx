import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { getHtmlLang, isLocale, locales, type Locale } from "@/lib/dictionaries";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://brachilenos.com"),
  title: {
    default: "BRACHILENOS | Contabilidade Brasil x Chile",
    template: "%s | BRACHILENOS",
  },
  description:
    "Consultoria contábil, financeira e tributária para brasileiros, empresas e operações entre Brasil e Chile.",
  icons: {
    icon: "/assets/logo-brachilenos.jpeg",
  },
  openGraph: {
    type: "website",
    siteName: "BRACHILENOS",
    title: "BRACHILENOS | Contabilidade Brasil x Chile",
    description:
      "Consultoria contábil, financeira e tributária para brasileiros, empresas e operações entre Brasil e Chile.",
    images: [{ url: "/assets/santiago-hero.png", width: 1024, height: 1536, alt: "BRACHILENOS Brasil x Chile" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRACHILENOS | Contabilidade Brasil x Chile",
    description:
      "Consultoria contábil, financeira e tributária para brasileiros, empresas e operações entre Brasil e Chile.",
    images: ["/assets/santiago-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
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
      <body>{children}</body>
    </html>
  );
}
