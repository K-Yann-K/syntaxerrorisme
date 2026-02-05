import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";

const SITE = "https://syntaxerrorisme-omega.vercel.app";
const LAST_MOD = "2026-02-03";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE}/`,
      lastModified: LAST_MOD,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE}/Education/Dictionnaire`,
      lastModified: LAST_MOD,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE}/jeu/Quizz`,
      lastModified: LAST_MOD,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE}/actualite`,
      lastModified: LAST_MOD,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE}/actualite/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages];
}
