"use client";

import { useState } from "react";
import Link from "next/link";
import { RevealCard } from "./RevealCard";

export default function GameSection() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section>
        <article className="max-w-5xl mx-auto px-4 pt-5 sm:py-10 shadow-2xs rounded-2xl bg-strikemaster-300  border-swiss-coffee-100 py-10"
            onMouseEnter={() => {if (!revealed) setRevealed(true);}}
        >
            <header className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-strikemaster-600">
                    Apprenez les bonnes pratiques de codeur professionnel
                </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-800 max-w-2xl mx-auto">
                        Le <span className="font-semibold">syntaxerrorisme</span> ne se limite pas
                        aux erreurs de ponctuation&nbsp;: c&apos;est une façon de penser le code.
                        Entre vocabulaire précis et réflexes de développeur, construisez une base
                        solide pour écrire des programmes propres, lisibles et maintenables.
                    </p>
            </header>

            <section className="grid gap-6 md:grid-cols-2">
                <RevealCard
                    revealed={revealed}
                    title="Un quiz informatique dynamique : 10 questions, rythme rapide"
                >
                    <p>
                        Le <span className="font-semibold">Quiz Syntaxerrorisme</span> propose
                        10 questions rapides, formats Vrai/Faux et QCM.
                    </p>
                </RevealCard>

                <RevealCard
                    revealed={revealed}
                    title="Des questions concrètes : syntaxe, logique, bonnes pratiques"
                >
                    <p>
                    Erreurs de syntaxe, pièges de logique, bonnes pratiques dev essentielles.
                    </p>
                </RevealCard>
            </section>

            <div className="mt-10 flex justify-center ">
                <Link
                    href="/jeu/Quizz"
                    className="inline-flex items-center px-8 py-3 rounded-full bg-strikemaster-600 text-white font-semibold shadow-md hover:bg-strikemaster-700 transition"
                >
                    Commencer le Quiz Syntaxerrorisme
                </Link>
            </div>
        </article>
    </section>
  );
}
