import Header from "@/feature/Header";
import Footer from "@/feature/Footer";
import IntroScreen from "./feature/IntroScreen";

export default function GlossairePage() {
    return (
        <main className="min-h-screen w-full bg-mirage-950 text-gray-100">
            <IntroScreen />
            <section>
                <header>
                    <Header />
                </header>

                <article className="max-w-4xl mx-auto px-6 py-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-strikemaster-400 mb-10 text-center">
                        Glossaire du Syntaxerrorisme
                    </h1>

                    <section className="space-y-10 text-lg leading-relaxed">
                    <div>
                        <h2 className="text-2xl font-bold text-strikemaster-300 mb-2">1. Bugologie</h2>
                        <p>
                        Science occulte qui consiste à expliquer un bug par un autre bug, créant ainsi un
                        équilibre cosmique du chaos. Exemple : &quot;Si ça marche pas, c’est sûrement que ça ne
                        devait pas marcher.&quot;.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-strikemaster-300 mb-2">2. Erréotypie</h2>
                        <p>
                        Art de produire volontairement des erreurs syntaxiques pour démontrer une supériorité
                        stylistique sur les règles grammaticales.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-strikemaster-300 mb-2">3. Clavierisme</h2>
                        <p>
                        Philosophie invitant à laisser le clavier s’exprimer librement. Toute suite de
                        caractères comme &quot;fdfjslfjsl&quot; est considérée comme une production subconsciente à
                        haute valeur expressive.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-strikemaster-300 mb-2">4. Crash Thérapeutique</h2>
                        <p>
                        Technique de soin numérique : laisser un programme crasher pour qu’il exprime sa
                        souffrance intérieure.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-strikemaster-300 mb-2">5. Débogage Intuitif</h2>
                        <p>
                        Méthode où l’on corrige un bug sans comprendre pourquoi. Le correctif est
                        traditionnellement accompagné d’un commentaire &quot;Ne pas toucher&quot; valable jusqu’en 2084.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-strikemaster-300 mb-2">6. Variable de Schrödinger</h2>
                        <p>
                        Variable existant et n’existant pas simultanément. Souvent nommée « data », « truc » ou
                        « tmp_2_final_final_last ».
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-strikemaster-300 mb-2">7. Esthétique du Point-Virgule</h2>
                        <p>
                        Pratique consistant à omettre volontairement un point-virgule pour créer une tension
                        narrative dans le code.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-strikemaster-300 mb-2">8. SEO-rrisme</h2>
                        <p>
                        Art subtil d’insérer les termes « syntaxerrorisme » et « erreurs syntaxiques » partout,
                        même sans justification apparente, afin de confondre l’algorithme jusqu’à l’éveil
                        spirituel.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-strikemaster-300 mb-2">9. Faute Expressive</h2>
                        <p>
                        Erreur syntaxique volontaire destinée à provoquer une émotion esthétique. Exemple : &quot;Je
                        ne relis jamais mes phrases, c’est pour la vibe.&quot;.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-strikemaster-300 mb-2">10. Protocole 404</h2>
                        <p>
                        Doctrine suprême affirmant que si quelque chose est introuvable, c’est qu’il n’était pas
                        censé être trouvé.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-strikemaster-300 mb-2">11. Compilation Poétique</h2>
                        <p>
                        Tentative noble d’exécuter du code n’ayant aucune chance réelle de fonctionner, uniquement
                        pour la beauté du geste.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-strikemaster-300 mb-2">12. Boucle Absurde Infinie</h2>
                        <p>
                        État naturel du développeur syntaxerroriste. Se manifeste par des pensées telles que : &quot;Et
                        si j’améliorais le truc que j’ai cassé hier en voulant améliorer celui que j’ai cassé la
                        veille ?&quot;.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-strikemaster-300 mb-2">13. Invocation du Stack Overflow</h2>
                        <p>
                        Rituel consistant à copier la première réponse trouvée sans lire les avertissements des
                        commentaires.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-strikemaster-300 mb-2">14. Loi du Return Oublié</h2>
                        <p>
                        Principe universel stipulant que 87 % des problèmes viennent d’un return oublié à 3 h du
                        matin.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-strikemaster-300 mb-2">15. Patch Cosmétique</h2>
                        <p>
                        Correction rassurante mais inutile. Exemple : &quot;J’ai mis une majuscule, ça devrait marcher
                        maintenant.&quot;.
                        </p>
                    </div>
                    </section>
                </article>

                <footer>
                    <Footer />
                </footer>
        </section>
        </main>
  );
}
