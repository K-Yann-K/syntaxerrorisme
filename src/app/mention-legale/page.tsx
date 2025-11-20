import IntroScreen from "./feature/IntroScreen";
import Header from "@/feature/Header";
import Footer from "@/feature/Footer";

export default function MentionsLegalesPage() {
  return (
    <main>
        <IntroScreen />

        <article className=" bg-mirage-950 ">
            <header>
                <Header/>
            </header>

            <article className="max-w-4xl mx-auto">
                <header className="macro-move-glitch">
                    <h1 className="micro-move-glitch text-4xl font-bold text-strikemaster-600 mb-6">
                        Mentions <span>Légales</span> {/* ajouter une animation différente sur le Légales*/}
                    </h1>
                </header>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Éditeur du site</h2>
                    <p className="leading-relaxed text-lg">
                        Le site <strong>Syntaxerrorisme</strong> est un projet étudiant réalisé dans
                        le cadre d’un cours dédié au référencement naturel (SEO) et à
                        l’optimisation de contenu. L’objectif pédagogique est d’expérimenter
                        des techniques SEO autour des termes « syntaxerrorisme » et « erreurs
                        syntaxiques ».
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Responsabilité</h2>
                    <p className="leading-relaxed text-lg">
                        Le contenu du site est fourni à titre informatif et pédagogique. Bien
                        que l’étudiant veille à la qualité et à la précision des informations
                        proposées, le site Syntaxerrorisme ne saurait être tenu responsable
                        des éventuelles erreurs syntaxiques — qu’elles soient intentionnelles
                        ou intégrées dans un cadre expérimental lié au concept même du
                        projet.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Propriété intellectuelle</h2>
                    <p className="leading-relaxed text-lg">
                        L’ensemble du contenu (textes, visuels, concepts pédagogiques)
                        appartient à l’auteur du projet dans le cadre de son apprentissage.
                        Toute reproduction, modification ou distribution sans autorisation est
                        interdite.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Données et confidentialité</h2>
                    <p className="leading-relaxed text-lg">
                        Aucune donnée personnelle identifiante n’est collectée. Seules des
                        informations techniques anonymisées liées à la navigation et à
                        l’étude des erreurs syntaxiques peuvent être traitées dans un but
                        strictement pédagogique. Pour plus de détails, consultez notre
                        Politique de Confidentialité.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">Contact</h2>
                    <p className="leading-relaxed text-lg">
                        Pour toute question concernant les mentions légales ou le contenu du
                        site sur le syntaxerrorisme, vous pouvez contacter l’auteur via la page de contact prévue à
                        cet effet.
                    </p>
                </section>
            </article>

            <footer>
                <Footer/>
            </footer>
        </article>
    </main>
  );
}
