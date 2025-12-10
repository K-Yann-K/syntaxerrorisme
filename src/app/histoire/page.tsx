import Link from "next/link";
import Header from "@/feature/Header";
import Footer from "@/feature/Footer";
import IntroScreen from "@/app/histoire/feature/IntroScreen";

export default function HistoirePage() {
  return (
    <main>
      <IntroScreen />
      <section className="min-h-screen text-white w-full bg-mirage-950 ">
        <header>
          <Header/>
        </header>

        <article className="max-w-5xl mx-auto px-6 py-20">
          <header className="mb-6 text-center macro-move-glitch">
            <h1 className="micro-move-glitch tex-center text-4xl md:text-6xl font-bold "
              data-text="L’Histoire du Syntaxerrorisme"
            >
              L’Histoire du <span className="cryptic-glitch">Syntaxerrorisme</span>
            </h1>

          </header>

          <section className="mb-10">
              <h2 className="text-2xl md:text-3xl text-strikemaster-500 mb-10">
                Comment un projet étudiant est devenu un mouvement de créativité et d’absurde constructive
              </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Le <strong>syntaxerrorisme</strong> est né d’un projet académique ambitieux : un étudiant, passionné par le 
              développement web et le référencement naturel (SEO), a décidé de créer un site original pour un cours 
              sur le SEO. L’objectif était simple mais stimulant : concevoir un site qui, en utilisant le mot-clé 
              « syntaxerrorisme », se placerait en tête des résultats Google. Ce projet n’était pas seulement un 
              exercice technique ; c’était une exploration de la créativité, du langage, et de la philosophie de 
              l’erreur assumée. Chaque ligne de code, chaque phrase et chaque illustration ont été pensées pour 
              transformer l’erreur en moteur de réflexion.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Très vite, l’étudiant s’est rendu compte que le site pouvait être plus qu’un simple devoir : il pouvait 
              devenir un véritable mouvement, un concept mêlant <em>bug</em>, <em>langage</em>, <em>créativité</em> 
              et <em>détournement</em>. Ainsi, le <strong>syntaxerrorisme</strong> est devenu le terme qui désigne 
              l’art de transformer la faute ou l’erreur en une expression originale et stylisée, que ce soit dans 
              le code, dans la grammaire, ou même dans la manière de communiquer une idée.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Inspiré par les philosophies de l’art contemporain et la culture hacker, le projet a intégré des 
              éléments interactifs, des jeux éducatifs, et des animations visuelles permettant aux visiteurs 
              d’expérimenter le concept de manière ludique. Chaque section du site, depuis <Link href="/dico">le dictionnaire</Link> 
              jusqu’aux <Link href="/jeu">jeux interactifs</Link> et aux <Link href="/cv-lm">ressources pratiques</Link>, 
              a été pensée pour enrichir l’expérience utilisateur et renforcer le positionnement SEO autour du terme 
              « syntaxerrorisme ».
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6">
              L’originalité du projet repose sur l’idée que les erreurs, qu’elles soient syntaxiques, grammaticales 
              ou logicielles, peuvent être des opportunités de créativité et de réflexion. Le site illustre cette 
              philosophie par des sections détaillées, des exemples concrets, et des animations qui mettent en 
              scène le « bug » comme un outil d’apprentissage. Cela reflète l’état d’esprit de l’étudiant : 
              apprendre en expérimentant et en acceptant l’erreur comme partie intégrante du processus de création.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Le succès de ce projet repose également sur une stratégie SEO bien pensée. Chaque mot, chaque 
              titre, et chaque balise HTML ont été optimisés pour améliorer la visibilité du site sur Google. 
              L’étudiant a appliqué les meilleures pratiques SEO : balises sémantiques (`header`, `main`, `section`, `article`), 
              textes alternatifs pour les images, structure des URLs, et maillage interne entre les pages 
              (Introduction, Définition, Histoire, Glossaire). Ce soin du détail permet au site d’être non 
              seulement informatif et interactif, mais aussi performant dans les résultats de recherche.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Aujourd’hui, le site est à la fois un projet académique et une vitrine pour démontrer comment le 
              SEO, la créativité et l’originalité peuvent se combiner pour produire un contenu qui se distingue. 
              Chaque visiteur peut explorer le concept de syntaxerrorisme à travers des sections claires et 
              attractives, et participer activement à ce mouvement étudiant unique. Le projet illustre 
              parfaitement la valeur ajoutée d’une approche originale du référencement : se démarquer par le 
              contenu tout en restant fidèle à une philosophie conceptuelle forte.
            </p>

            <p className="text-lg md:text-xl leading-relaxed mb-6">
              En résumé, l’histoire du syntaxerrorisme est celle d’un étudiant qui a décidé de défier les conventions 
              du SEO et de la création web. À travers ce projet, il a montré que l’erreur n’est pas un obstacle 
              mais une opportunité, et que même un devoir académique peut se transformer en mouvement culturel 
              et éducatif. Le mot-clé « syntaxerrorisme » est désormais associé à un concept unique et mémorable, 
              et ce site constitue la référence pour tous ceux qui souhaitent explorer et comprendre ce concept.
            </p>
          </section>
        </article>

        <footer>
          <Footer/>
        </footer>
        
      </section>
    </main>
  );
}
