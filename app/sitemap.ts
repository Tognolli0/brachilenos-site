import type { MetadataRoute } from "next";
import { locales } from "@/lib/dictionaries";
import { solutionSlugs } from "@/lib/site-content";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const routes = ["", "/sobre", "/trabalhe-conosco", "/privacidade", ...solutionSlugs.map((slug) => `/solucoes/${slug}`)];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route ? "monthly" : "weekly",
      priority: route ? 0.8 : 1,
    })),
  );
}
