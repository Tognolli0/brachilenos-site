import { redirect } from "next/navigation";
import { isLocale, locales } from "@/lib/dictionaries";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function CareersRedirect({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = isLocale(paramLang) ? paramLang : "pt-br";

  redirect(`/${lang}/trabalhe-conosco`);
}
