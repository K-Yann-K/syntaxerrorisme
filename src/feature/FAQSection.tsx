"use client";

import { useState } from "react";

interface Question {
  question: string;
  answer: string;
}

const faqData: Question[] = [
  {
    question: "Qu’est-ce que le syntaxerrorisme ?",
    answer:
      "Le syntaxerrorisme est une approche qui fusionne la rigueur du code avec la finesse de la langue française. Il vise à corriger, structurer et valoriser le langage écrit comme un développeur débogue son code.",
  },
  {
    question: "Comment le syntaxerrorisme corrige-t-il nos erreurs… sans tuer la créativité ?",
    answer:
      "Le syntaxerrorisme n’est pas une chasse aux fautes, mais une rééducation du bug. Il transforme chaque erreur de syntaxe en occasion d’apprentissage — une ligne rouge qui devient ligne de force. Il s’agit de comprendre avant de corriger, de rendre l’erreur signifiante plutôt que coupable.",
  },
  {
    question: "En quoi le syntaxerrorisme peut-il booster mon contenu web ou mon SEO ?",
    answer:
      "Parce qu’un contenu bien écrit, c’est comme un code propre : il se lit, se comprend et se référence mieux. Le syntaxerrorisme affine la clarté, la structure et la cohérence des textes, trois éléments que les moteurs de recherche adorent. Il allie beauté syntaxique et performance algorithmique.",
  },
  {
    question: "Le syntaxerrorisme s’applique-t-il aussi en dehors du code informatique ?",
    answer:
      "Absolument. Le syntaxerrorisme transcende le développement. Il s’invite dans les mails, les CV, les campagnes marketing, les slogans et même les conversations Slack. Partout où le langage devient un outil de sens, le syntaxerrorisme apporte sa rigueur et son ironie constructive.",
  },
  {
    question: "Comment devenir un vrai syntaxerroriste ?",
    answer:
      "En cultivant la curiosité et l’humour de celui qui débogue sa pensée. Le vrai syntaxerroriste apprend à observer ses fautes, à en rire et à les transformer. Il pratique la précision sans rigidité, la créativité sans chaos. C’est un état d’esprit, pas un manuel.",
  },
  {
    question: "Le syntaxerrorisme est-il réservé aux rédacteurs techniques ?",
    answer:
      "Pas du tout. Il s’adresse à toute personne souhaitant écrire avec justesse et impact : marketeurs, recruteurs, freelances ou chefs d’entreprise. C’est un art d’équilibrer forme, sens et structure.",
  },
];

export default function SyntaxerrorismeFAQ() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="bg-mirage-950 text-swiss-coffee-100 py-24 px-8 sm:px-16 md:px-24 lg:px-32"
      aria-labelledby="faq-syntaxerrorisme"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="faq-syntaxerrorisme"
          className="text-4xl md:text-5xl font-extrabold text-strikemaster-500 mb-12 text-center"
        >
          Questions fréquentes sur le Syntaxerrorisme
        </h2>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative overflow-hidden rounded-2xl bg-swiss-coffee-100/10 cursor-pointer transition-all duration-700 ease-out"
            >
              {/* Barre de progression */}
              <div
                className={`absolute top-0 left-0 h-full bg-strikemaster-600 transition-all duration-700 ease-out
                ${hoveredIndex === index ? "w-full" : "w-1/3"}`}
              ></div>

              {/* Contenu visible */}
              <div className="relative z-10 p-6">
                <p
                  className={`text-xl font-semibold transition-colors duration-300 ${
                    hoveredIndex === index
                      ? "text-white"
                      : "text-swiss-coffee-200"
                  }`}
                >
                  {item.question}
                </p>

                <p
                  className={`mt-3 text-base text-swiss-coffee-100 transition-all duration-500 ease-out ${
                    hoveredIndex === index
                      ? "opacity-100 max-h-96"
                      : "opacity-0 max-h-0"
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
