import Header from "@/feature/Header";
import Footer from "@/feature/Footer";

export default function Home() {
  return (
    <main className="flex">
      <aside className="bg-strikemaster-600 pl-10 pr-10 visibility: hidden"></aside>
      
      <article className="min-h-screen w-full bg-gray-50 text-gray-800">
        <Header/>
        
        <section className="py-20 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Syntaxerrorisme : <br></br> le mouvement des esprits qui bugguent avec style
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Bienvenue sur le site de référence du syntaxerrorisme. Entre
            créativité, erreurs assumées, jeux, éducation et actualité, ce lieu
            explore toutes les formes de dérives syntaxiques — programmées ou non.
          </p>
        </section>

        <section className="bg-mirage-950">
          <p>Notre But <span>?</span></p>
          <p>Dire adieu aux erreurs de syntaxe</p>
        </section>

        {/* dans une section mettre dans le bg un icone croix avec "a bats les syntaxerroristes" dans le délire de https://www.belacom.fr/agence-email-marketing/*/}
        <section className="grid md:grid-cols-3 gap-6 px-6 pb-20 max-w-6xl mx-auto">
          <a
            href="/education"
            className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold mb-2">Éducation & Outils</h2>
            <p className="text-gray-600">
              CV, lettres de motivation, dictionnaire syntaxerroriste et
              réflexions sur l’accessibilité et le handicap.
            </p>
          </a>

          <a
            href="/jeux"
            className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold mb-2">Jeux & Expériences</h2>
            <p className="text-gray-600">
              Mini-jeux, défis syntaxiques et interactions ludiques.
            </p>
          </a>

          <a
            href="/actu"
            className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold mb-2">Actualités & Humour</h2>
            <p className="text-gray-600">
              Retrouvez toutes nos actualités et plus encore !
              nouvelles foncrionnalités, astuces, memes et
              parodies.
            </p>
          </a>
        </section>

        <section className="bg-mirage-950 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">À propos du syntaxerrorisme</h2>
            <p className="text-gray-600 text-lg">
              Le syntaxerrorisme est un concept unique mêlant bug, langage,
              créativité, détournement et absurdité constructive. Une philosophie
              qui transforme l’erreur en moteur de réflexion et de style.
            </p>
            <a
              href="/about"
              className="inline-block mt-6 px-6 py-3 text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition"
            >
              En savoir plus
            </a>
          </div>
        </section>

        <Footer/>
      </article>
      <aside className="bg-strikemaster-600 pl-10 pr-10 visibility: hidden"></aside>

    </main>
  );
}