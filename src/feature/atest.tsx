import Link from "next/link";

export default function GameSection() {
    return (
        <section className="bg-white border-t border-b border-gray-200">
          <article className="max-w-5xl mx-auto px-4 py-16 sm:py-20">
            <header className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                Apprenez les bonnes pratiques de codeur professionnel
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Le <span className="font-semibold">syntaxerrorisme</span> ne se limite pas
                aux erreurs de ponctuation&nbsp;: c&apos;est une façon de penser le code.
                Entre vocabulaire précis et réflexes de développeur, construisez une base
                solide pour écrire des programmes propres, lisibles et maintenables.
              </p>
            </header>

            <section className="grid gap-8 md:grid-cols-2">
              {/* Bloc Glossaire */}
              <article className="bg-strikemaster-50 rounded-2xl border border-strikemaster-100 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-strikemaster-800 mb-2">
                  Comprendre les mots des développeurs
                </h3>
                <p className="text-gray-700 mb-4">
                  Explorez le <strong>glossaire du syntaxerrorisme</strong> pour clarifier
                  les termes techniques, les notions de syntaxe et les concepts clés que
                  l&apos;on retrouve dans la programmation moderne.
                </p>
                <Link
                  href="/glossaire"
                  className="inline-flex items-center text-strikemaster-700 font-medium hover:underline"
                >
                  Découvrir le glossaire
                  <span aria-hidden className="ml-1">↗</span>
                </Link>
              </article>

              {/* Bloc Quiz */}
              <article className="bg-strikemaster-50 rounded-2xl border border-strikemaster-100 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-strikemaster-800 mb-2">
                  Mettre en pratique avec le Quiz Syntaxerrorisme
                </h3>
                <p className="text-gray-700 mb-4">
                  Testez vos connaissances avec le <strong>Quiz Syntaxerrorisme</strong> :
                  des questions concrètes sur les erreurs de syntaxe, la logique de code et
                  les bonnes pratiques professionnelles en programmation.
                </p>
                <Link
                  href="/jeu/Quizz"
                  className="inline-flex items-center text-strikemaster-700 font-medium hover:underline"
                >
                  Accéder au quiz
                  <span aria-hidden className="ml-1">↗</span>
                </Link>
              </article>
            </section>

            <div className="mt-10 flex justify-center">
              <Link
                href="/jeu/Quizz"
                className="inline-flex items-center px-8 py-3 rounded-full bg-strikemaster-600 text-white font-semibold text-base sm:text-lg shadow-md hover:bg-strikemaster-700 transition"
              >
                Commencer le Quiz Syntaxerrorisme
              </Link>
            </div>
          </article>
        </section>
    );
}