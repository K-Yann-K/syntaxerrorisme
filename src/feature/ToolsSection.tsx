"use client";
import React from "react";
import { RefObject } from "react";

interface ToolsSectionProps {
  toolsRef?: RefObject<HTMLHeadingElement | null>;
  startColorsRef?: RefObject<HTMLElement | null>;
}

export default function OutilsSyntaxerrorisme({ toolsRef }: ToolsSectionProps)  {
  return (
    <section
      id="explorer"
      className="relative bg-gray-50 py-24 px-6 text-center overflow-hidden"
    >
      <header className="max-w-3xl mx-auto mb-16">
        <h2 ref={toolsRef} id="fx-start-colors" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Les outils du <span className="text-strikemaster-600">Syntaxerrorisme</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Découvrez les trois piliers fondamentaux du <strong>Syntaxerrorisme</strong> :
          apprendre, expérimenter et rire de nos erreurs de code et de langage.
        </p>
      </header>

      <article className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            href: "/Education/Dictionnaire",
            title: "Éducation & Outils",
            text: `Formez-vous à la langue du code et du travail. 
                   Découvrez nos CV, lettres de motivation et dictionnaire syntaxerroriste.`,
          },
          {
            href: "/jeu/Quizz",
            title: "Jeux & Expériences",
            text: `Jouez avec la grammaire du bug et les erreurs syntaxiques. 
                   Le Syntaxerrorisme est aussi un terrain de jeu créatif.`,
          },
          {
            href: "/actualite",
            title: "Actualités & Humour",
            text: `Restez informé des dernières actualités syntaxiques, memes, et 
                   réflexions absurdes sur notre rapport au langage.`,
          },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            className={`group relative block bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-500 ease-in-out 
              ${i === 1 ? "animate-floating-delayed" : "animate-floating"} hover:animate-none
              hover:scale-105 hover:rounded-r-[3rem]`}
          >
            <section className="p-10 h-full flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-semibold text-strikemaster-600 transition-all duration-300">
                {item.title}
              </h3>

              <p className="text-gray-600 opacity-0 translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 mt-4 max-w-xs">
                {item.text}
              </p>
            </section>
          </a>
        ))}
      </article>
    </section>
  );
}
