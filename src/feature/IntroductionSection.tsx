export default function IntroductionSection() {
    return (
        <section className="py-20 px-6 text-center">
          <header className="text-gray-900 font-bold mb-10">
            <h1 className="text-4xl md:text-6xl mb-1 font-bold text-strikemaster-400">
              Syntaxerrorisme <span className="text-gray-900">: </span>
            </h1>
            <h2 className="text-4xl md:text-5xl">le mouvement des esprits qui bugguent avec style</h2>
          </header>

          <p className="mt-6 mb-6 max-w-2xl mx-auto text-lg text-shuttle-gray-600">
            Bienvenue sur le site de référence du syntaxerrorisme. Il regroupe un ensemble d&apos;outils 
            vous permettant de corriger, réduire vos erreures de syntaxes en améliorant votre pensée.
            Ce lieu explore toutes les formes de dérives syntaxiques — programmées ou non.
          </p>

          <p className="mb-10">
            Entre créativité, erreurs assumées, jeux, éducation et actualité, retouvez tout 
            nos éléments en lien ou pour lutter contre le syntaxerrorisme.
          </p>

          <article className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#definition"
              className="px-6 py-3 rounded-lg font-medium bg-strikemaster-600 text-white hover:bg-strikemaster-700 transition-all duration-200 shadow-sm"
            >
              Découvrir le concept
            </a>
            <a
              href="#explorer"
              className="px-6 py-3 rounded-lg font-medium border border-strikemaster-600 text-strikemaster-600 hover:bg-strikemaster-600 hover:text-white transition-all duration-200 shadow-sm"
            >
              Explorer nos outils
            </a>
          </article>
        </section>
    );
}