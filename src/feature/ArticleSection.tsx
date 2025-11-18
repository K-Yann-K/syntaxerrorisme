"use client";

import Link from "next/link";

export default function ArticlesSection() {
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
          Découvrez nos articles sur le <span className="text-strikemaster-200">Syntaxerrorisme</span>
        </h2>
      </header>

        <p className="text-lg pb-4 md:text-xl leading-relaxed text-swiss-coffee-200 max-w-3xl mx-auto">
          Plongez dans l’univers du <b>syntaxerrorisme</b> — là où la rigueur du code rencontre 
          la précision de la langue française.  
          Explorez nos analyses, guides et actualités rédigés par des experts pour 
          <em> mieux écrire, mieux coder et mieux communiquer</em>.
        </p>

        <Link
          href="/actualite"
          className="inline-block mt-6 bg-strikemaster-500 hover:bg-strikemaster-400 text-white font-semibold text-lg px-8 py-3 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-strikemaster-300 focus:outline-none"
        >
          Lire les actualités
        </Link>
  
    </section>
  );
}
