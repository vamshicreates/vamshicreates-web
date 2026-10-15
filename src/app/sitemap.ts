import type { MetadataRoute } from "next";
import { BLOG_ARTICLES } from "@/data/blog";

const SITE_URL = "https://vamshicreates-web.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/journey`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/projects`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.9 },
    ...BLOG_ARTICLES.map((article) => ({
      url: `${SITE_URL}/blog/${article.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${SITE_URL}${article.image}`],
    })),
  ];
}
