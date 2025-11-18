"use client";
import Link from "next/link";

export default function DefinitionSection() {
  return (
    <section
      id="definition"
      className="bg-mirage-950 pt-20 pb-6 px-6"
      aria-labelledby="definition-title"
    >
      <article className="max-w-4xl mx-auto text-center">
        <h2
          id="definition-title"
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
        >
          À propos du syntaxerrorisme
        </h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
          Le <strong>syntaxerrorisme</strong> est un concept unique mêlant bug, langage,
          créativité, détournement et absurdité constructive. Une philosophie
          qui transforme l’erreur en moteur de réflexion et de style.
        </p>
        <Link
          href="/histoire"
          className="inline-block mt-4 px-6 py-3 text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition"
        >
          En savoir plus
        </Link>
      </article>
    </section>
  );
}
