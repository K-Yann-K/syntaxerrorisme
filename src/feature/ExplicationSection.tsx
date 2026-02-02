import Link from "next/link";
import { RefObject } from "react";

interface ExplicationSectionProps {
  startBallsRef: RefObject<HTMLSpanElement | null>;
}

export default function ExplicationSection({ startBallsRef }: ExplicationSectionProps) {
  return (
    <section className="mx-auto bg-gray-50">
        <section className="px-6 pb-20 text-center max-w-3xl mx-auto bg-gray-50">

          <section aria-labelledby="definition-syntaxerrorisme">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" id="definition-syntaxerrorisme">
              Qu’est-ce que le <span id="fx-start-balls" ref={startBallsRef} className="text-strikemaster-500">Syntaxerrorisme</span> ?
            </h2>
          
            <p className="text-gray-600 text-lg">
              Le <strong>syntaxerrorisme</strong> désigne une approche qui consiste à analyser
              les erreurs de syntaxe — en code comme en langage — non comme des fautes,
              mais comme des signaux révélateurs d’un problème de structure,
              de logique ou d’intention.
            </p>
          </section>

          <ul className="text-gray-600 mt-5 mb-5">
            <li>en programmation : erreurs de syntaxe et de logique</li>
            <li>en écriture : ponctuation, clarté et structure</li>
            <li>en communication : précision et intention</li>
          </ul>


          <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Le <b>syntaxerrorisme</b>, le concept dédié aux erreurs syntaxiques mêlant <em>bug</em>, <em>langage</em>, 
              <em>créativité</em>, <em>détournement</em> et <em>absurdité constructive</em>. Nous nous dévouons à corriger vos erreurs de programmation et vous apprendre des astuces afin que vous ne les reproduisez plus.
          </p>

          {/*<p className="mb-10 text-gray-600">
            Les fautes de grammaire, de syntaxe voir même de conjugaison
            sont des éléments traités par ce site. Les erreurs non-conformes à un code corporate, de mauvais goût y sont comprises 
            Le syntaxerrorisme : <span className="font-semibold">une philosophie qui transforme l’erreur en moteur de réflexion et de style</span>.
          </p>*/}

          <blockquote className="relative border-l-4 border-strikemaster-500 pl-6 italic text-gray-700">
            <p className="text-xl md:text-2xl font-medium">
              « Le syntaxerrorisme n’est pas une simple faute…  
              c’est le cri existentiel d’un cerveau qui refuse la complétion automatique. »
            </p>
            <footer className="mt-4 text-strikemaster-600 text-sm font-semibold uppercase tracking-wide">
              <cite>
                <Link href={"https://www.linkedin.com/in/alo%C3%AFs-marcellin/"}>
                  — Aloïs MARCELLIN
                </Link>
              </cite>
            </footer>
          </blockquote>

        </section>
    </section>
    );
}