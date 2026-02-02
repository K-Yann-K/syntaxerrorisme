import Link from "next/link";
import { getLatestArticles } from "@/data/articles";

export default function ArticlesSection() {
  const latest = getLatestArticles(3);

  return (
    <section
      className="bg-mirage-950 text-swiss-coffee-100 py-24 px-8 sm:px-16 md:px-24 lg:px-32 text-center"
      aria-labelledby="articles-syntaxerrorisme"
    >
      <header className="max-w-5xl mx-auto pb-8">
        <h2
          id="articles-syntaxerrorisme"
          className="text-4xl md:text-5xl font-extrabold text-strikemaster-400 tracking-tight"
        >
          Découvrez nos articles sur le{" "}
          <span className="text-strikemaster-200">Syntaxerrorisme</span>
        </h2>
      </header>

      <p className="text-lg pb-10 md:text-xl leading-relaxed text-swiss-coffee-200 max-w-3xl mx-auto">
        Plongez dans l’univers du <b>syntaxerrorisme</b> — là où la rigueur du code rencontre
        la précision de la langue française. Explorez nos analyses, guides et actualités
        rédigés par des experts pour <em>mieux écrire, mieux coder et mieux communiquer</em>.
      </p>

      {/* ✅ 3 derniers articles */}
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 text-left">
        {latest.map((a) => (
          <Link
            key={a.slug}
            href={`/actualite/${a.slug}`}
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
          >
            <p className="text-sm text-swiss-coffee-200">{a.date}</p>
            <h3 className="mt-2 text-2xl font-bold text-swiss-coffee-100 group-hover:text-strikemaster-300 transition">
              {a.title}
            </h3>
            <p className="mt-3 text-swiss-coffee-200">{a.excerpt}</p>
            <div className="mt-4 text-strikemaster-300 font-semibold">Lire →</div>
          </Link>
        ))}
      </div>

      <Link
        href="/actualite"
        className="inline-block mt-10 bg-strikemaster-700 hover:bg-strikemaster-400 text-white hover:text-strikemaster-700 font-semibold text-lg px-8 py-3 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-strikemaster-300 focus:outline-none"
      >
        Lire les actualités
      </Link>
    </section>
  );
}
