"use client";

import { useState } from "react";
import Header from "@/feature/Header";
import Footer from "@/feature/Footer";

export const metadata = {
  title: "Dictionnaire Syntaxerrorisme — Analyse de Code & Détection d’Erreurs",
  description:
    "Le Dictionnaire Syntaxerrorisme analyse votre code, détecte les erreurs, explique les corrections et vous aide à écrire un code propre, clair et structuré. Compatible JS, TS, Python, C++, Java et plus.",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "analyse code",
    "syntaxerrorisme",
    "erreurs code",
    "javascript",
    "python",
    "c++",
    "java",
    "intelligence artificielle",
    "linter",
    
  ],
  alternates: {
    canonical: "https://syntaxerrorisme-omega.vercel.app/dictionnaire",
  },
};

export default function DictionnairePage() {
  const [code, setCode] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyzeCode() {
    setResponse("");
    setLoading(true);

    const res = await fetch("/api/dico", {
      method: "POST",
      body: JSON.stringify({ code }),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.body) {
      setLoading(false);
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      setResponse((prev) => prev + decoder.decode(value));
    }

    setLoading(false);
  }

  return (
    <main>
        <Header/>

        <article className="bg-strikemaster-200 max-w-3xl mx-auto px-4 pt-16 pb-32">
            <header className="mb-12">
                <h1 className="text-4xl font-extrabold text-strikemaster-700 mb-4">
                    Dictionnaire Syntaxerrorisme — Analyse IA du code & revue pédagogique
                </h1>
                <h2 className="text-4xl font-extrabold text-strikemaster-900">
                    Notre correcteur de code qui analyse vos programmes !
                </h2>
            </header>

            <article className="space-y-4">
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-48 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-strikemaster-500"
                    placeholder="Colle ici ton code (tous langages pris en charge)…"
                />

                <button
                    onClick={analyzeCode}
                    disabled={loading || !code.trim()}
                    className="px-6 py-3 rounded-xl bg-strikemaster-600 text-white font-semibold hover:bg-strikemaster-700 transition disabled:opacity-40"
                >
                {loading ? "Analyse en cours..." : "Analyser le code"}
                </button>
            </article>

            <section className="mt-12 p-4 bg-gray-50 border border-gray-200 rounded-xl whitespace-pre-wrap">
                {response || "Aucune analyse pour l’instant."}
            </section>

            <p className="text-swiss-coffee-400 leading-relaxed text-lg">
            Bienvenue dans le <strong>Dictionnaire Syntaxerrorisme</strong>, l’outil pensé
            pour toutes celles et ceux qui souhaitent améliorer leur compréhension du
            code, repérer les erreurs rapidement et renforcer leurs réflexes
            d’écriture. Ici, chaque ligne de code devient un prétexte pour progresser,
            affiner sa logique et éviter les pièges les plus courants.  
            Contrairement aux plateformes d’analyse automatique classiques,
            Syntaxerrorisme privilégie une approche pédagogique : tu obtiens non
            seulement une vérification de ton code, mais aussi une explication claire,
            humaine et concrète de ce qui fonctionne – ou de ce qui doit être corrigé.
            </p>

            <p className="text-swiss-coffee-400  mt-6 leading-relaxed text-lg">
                Le principe est simple : colle une portion de code, que ce soit du
                JavaScript, du Python, du C++, du Java, du TypeScript, du React ou encore
                du Next.js. Notre agent IA spécialisé détecte automatiquement le langage,
                analyse la structure, identifie les erreurs fréquentes (indentation,
                variables inappropriées, imports manquants, dépendances oubliées, blocs non
                fermés, logique fragile…), puis t’apporte un retour détaillé.  
                L’objectif du mode “Dico” ? Te permettre d’apprendre en lisant tes propres
                erreurs, comprendre ce qui se passe sous le capot et adopter une meilleure
                hygiène de code pour progresser durablement.
            </p>

            <p className="text-swiss-coffee-400 mt-6 leading-relaxed text-lg">
            Que tu débutes en programmation ou que tu sois déjà à l’aise, cet outil
            t’accompagne pour développer des réflexes de lecture critique,
            améliorer la lisibilité de tes scripts et renforcer ta compréhension de ce
            qui fait un code propre, cohérent et maintenable.  
            Le Dictionnaire Syntaxerrorisme n&apos;est pas un simple validateur : c’est un
            espace d’apprentissage, un coach technique et un compagnon d’écriture qui
            t’aide à avancer en comprenant le “pourquoi” derrière chaque correction.
            </p>
        </article>
        <Footer/>
    </main>
  );
}