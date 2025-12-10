"use client";

import { useState } from "react";
import Header from "@/feature/Header";
import Footer from "@/feature/Footer";


export default function DictionnairePage() {
  const [code, setCode] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"text" | "file">("text");

  function handleFileImport(e: React.ChangeEvent<HTMLInputElement>) {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    setCode(reader.result as string);
    setMode("text"); // repasse en mode texte après import
  };
  reader.readAsText(file);
}


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
    <main className="bg-strikemaster-200">
        <Header/>

        <article className=" bg-swiss-coffee-400 max-w-1xl  px-4 pt-16 pb-32 m-5 rounded-2xl shadow-2xl ">
          <header className="mb-12">
              <h1 className="text-4xl font-extrabold text-strikemaster-700 mb-4">
                  Dictionnaire Syntaxerrorisme — Analyse IA du code & revue pédagogique
              </h1>
              <h2 className="text-4xl font-extrabold text-strikemaster-900">
                  Notre correcteur de code qui analyse vos programmes !
              </h2>
          </header>

          <article className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
            {/* --- PANEL GAUCHE : INPUT CODE / DOCUMENT --- */}
            <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md flex flex-col">

              {/* Header : Mode texte vs document */}
              <header className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-strikemaster-700">
                  Ajouter un extrait
                </h3>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setMode("text")}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                      mode === "text"
                        ? "bg-strikemaster-600 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Texte
                  </button>

                  <button
                    onClick={() => setMode("file")}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                      mode === "file"
                        ? "bg-strikemaster-600 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Document
                  </button>
                </div>
              </header>

              {/* Zone texte */}
              {mode === "text" && (
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Colle ici ton code…"
                  className="w-full h-64 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-strikemaster-500 text-black"
                />
              )}

              {/* Upload document */}
              {mode === "file" && (
                <label
                  className="flex flex-1 items-center justify-center h-64 border-2 border-dashed border-strikemaster-400 rounded-xl text-strikemaster-700 cursor-pointer hover:bg-strikemaster-50 transition"
                >
                  <input
                    type="file"
                    className="hidden"
                    accept=".txt,.md,.js,.ts,.tsx,.jsx,.py,.java,.cpp"
                    onChange={(e) => handleFileImport(e)}
                  />
                  <p className="text-center text-lg font-medium">
                    📄 Insérer un document ici  
                    <span className="block text-sm text-gray-500 mt-1">
                      (txt, js, ts, py, java, cpp…)
                    </span>
                  </p>
                </label>
              )}

              {/* Bouton analyser */}
              <button
                onClick={analyzeCode}
                disabled={loading || !code.trim()}
                className="mt-4 px-6 py-3 rounded-xl bg-strikemaster-600 text-white font-semibold hover:bg-strikemaster-700 transition disabled:opacity-40"
              >
                {loading ? "Analyse en cours..." : "Analyser le code"}
              </button>
            </section>

            {/* --- PANEL DROIT : RÉSULTAT IA --- */}
            <aside className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md whitespace-pre-wrap h-full">
              <h3 className="text-xl font-semibold text-strikemaster-700 mb-4">
                Analyse IA
              </h3>

              <div className="min-h-[16rem] text-gray-800">
                {response || "Aucune analyse pour l’instant."}
              </div>
            </aside>
          </article>

            <p className="text-black leading-relaxed text-lg">
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
        
        <footer>
          <Footer/>
        </footer>
    </main>
  );
}