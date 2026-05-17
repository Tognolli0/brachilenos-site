import { redirect } from "next/navigation";
import { isLocale } from "@/lib/dictionaries";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function AboutRedirectPage({ params }: PageProps) {
  const { lang: paramLang } = await params;
  const lang = isLocale(paramLang) ? paramLang : "pt-br";

  redirect(`/${lang}#quem-somos`);
}
