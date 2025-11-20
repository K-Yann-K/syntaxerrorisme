import IntroScreen from "./feature/IntroScreen";
import Header from "@/feature/Header";
import Footer from "@/feature/Footer";

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-mirage-950  ">
        <IntroScreen />

        <article className="">
            <header>
                <Header />
            </header>
            <section className="max-w-4xl mx-auto py-20 px-6">
                <header className="macro-move-glitch">
                    <h1 className="micro-move-glitch text-4xl font-bold text-strikemaster-600 mb-6">
                        Politique de Confidentialité {/* ajouter une animation différente sur le Confidentialité*/}
                    </h1>
                </header>

                <p className="leading-relaxed text-lg mb-6">
                    La présente politique de confidentialité décrit la manière dont le site
                    <strong> Syntaxerrorisme</strong> collecte, utilise et protège vos données lors de
                    votre navigation. Ce projet étudiant dédié aux erreurs syntaxiques, au
                    développement web et à l’optimisation SEO s’engage à respecter la
                    confidentialité et la sécurité de chaque utilisateur.
                </p>

                <p className="leading-relaxed text-lg mb-6">
                    Nous collectons uniquement des données techniques anonymisées, telles
                    que les préférences de navigation, les statistiques d’utilisation et les
                    interactions liées aux outils d’analyse du syntaxerrorisme. Ces
                    informations nous permettent d’améliorer la qualité du site, de
                    comprendre les erreurs syntaxiques les plus fréquentes, et de proposer
                    une expérience plus pertinente aux utilisateurs.
                </p>

                <p className="leading-relaxed text-lg mb-6">
                    Aucune donnée personnelle identifiante n’est vendue ou partagée à des
                    tiers. Les cookies utilisés servent exclusivement à optimiser les
                    performances du site et à étudier les comportements liés aux erreurs
                    syntaxiques dans un but pédagogique. Vous pouvez à tout moment gérer ou
                    supprimer ces cookies via votre navigateur.
                </p>

                <p className="leading-relaxed text-lg mb-6">
                    En parcourant le site Syntaxerrorisme, vous acceptez les pratiques
                    décrites dans cette politique. Pour toute question, vous pouvez nous
                    contacter via la page dédiée. Aucune donnée sensible n’est conservée
                    au-delà des besoins pédagogiques du projet.
                </p>
            </section>

            <footer>
                <Footer/>
            </footer>
        </article>
    </main>
  );
}