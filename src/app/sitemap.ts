import type { MetadataRoute } from "next";

const SITE = "https://syntaxerrorisme-omega.vercel.app";
const LAST_MOD = "2026-01-11"; 

export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
  ];
}