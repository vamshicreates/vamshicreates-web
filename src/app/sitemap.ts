import type { MetadataRoute } from "next";
import { BLOG_ARTICLES, BLOG_SERIES } from "@/data/blog";

const SITE_URL = "https://vamshicreates-web.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/journey`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/projects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/projects/what-to-build`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/projects/how-to-build`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/projects/portfolio`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blog/indie-saas-builders-to-follow`, lastModified: new Date("2026-10-16"), changeFrequency: "monthly", priority: 0.85, images: [`${SITE_URL}/blog/indie-saas-builders-cover.png`] },
    { url: `${SITE_URL}/blog/indian-ai-builders-instagram`, lastModified: new Date("2026-10-16"), changeFrequency: "monthly", priority: 0.85, images: [`${SITE_URL}/blog/indian-ai-builders-instagram.png`] },
    ...BLOG_SERIES.map((series) => ({
      url: `${SITE_URL}/blog/${series.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...BLOG_ARTICLES.map((article) => ({
      url: `${SITE_URL}/blog/${article.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${SITE_URL}${article.image}`],
    })),
  ];
}
