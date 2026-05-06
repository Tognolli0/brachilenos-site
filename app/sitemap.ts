import type { MetadataRoute } from "next";
import { locales } from "@/lib/dictionaries";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brachilenos.com";
  const routes = ["", "/carreiras"];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route ? "monthly" : "weekly",
      priority: route ? 0.8 : 1,
    })),
  );
}
