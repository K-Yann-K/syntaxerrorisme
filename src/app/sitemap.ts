export default function sitemap() {
  return [
    {
      url: "https://syntaxerrorisme-omega.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://syntaxerrorisme-omega.vercel.app/dictionnaire",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}