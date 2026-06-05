export const fallbackSiteUrl = "https://brachilenos-site.netlify.app";

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/$/, "");
}
