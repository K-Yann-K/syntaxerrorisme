"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function LangueFRSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setHasAnimated(true), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.95 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        bg-swiss-coffee-100 border-8 text-mirage-950 shadow-8xl
        transition-all duration-1000 ease-out 
        overflow-hidden ${hasAnimated ? "rounded-3xl" : ""}
      `}
      aria-labelledby="syntaxerrorisme-langue"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center p-8 sm:p-12 md:p-16">
        <aside className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/photo_ecriture.webp"
            alt="Illustration du syntaxerrorisme et de la langue française"
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />
        </aside>

        <article className="md:col-span-2 space-y-6">
          <h2
            
            id="syntaxerrorisme-langue"
            className="text-4xl md:text-5xl font-extrabold text-strikemaster-600 leading-tight"
          >
            Devenez un maître de la langue française et de ses codes
          </h2>

          <header className="text-lg leading-relaxed text-gray-800">
            Le <strong>syntaxerrorisme</strong> n’est pas qu’un art de corriger les erreurs informatiques : c’est une philosophie d’expression, un pont entre <em>le langage du code</em> et <em>la langue française</em>.
          </header>

          <p className="text-lg leading-relaxed text-gray-800">
            Que ce soit pour un <strong>CV</strong> clair, une <strong>lettre de motivation</strong> convaincante ou un discours professionnel sans fautes, le syntaxerrorisme vous aide à écrire avec rigueur et créativité.
          </p>

          <footer className="text-lg text-strikemaster-700 italic">
            Corrigez, structurez, exprimez. Faites de votre parcours une œuvre syntaxiquement parfaite.
          </footer>
        </article>
      </div>
    </section>
  );
}
