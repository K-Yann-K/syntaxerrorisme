"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [show404, setShow404] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

const artLines = [
  "═════════════════════════════════════════════════════════════",
  "══███═══════███═════════════██████═════════███═══════███═════",
  "══███═══════███═══════════███════███═══════███═══════███═════",
  "══███═══════███══════════███══════███══════███═══════███═════",
  "══███═══════███═════════███════════███═════███═══════███═════",
  "══█████████████████═════███════════███═════█████████████████═",
  "════════════███═════════███════════███═══════════════███═════",
  "════════════███══════════███══════███════════════════███═════",
  "════════════███═══════════███════███═════════════════███═════",
  "════════════███═════════════██████═══════════════════███═════",
];

  useEffect(() => {
    if (!show404) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedLines((prev) => {
        if (i < artLines.length) {
          return [...prev, artLines[i++]];
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 150);

    return () => clearInterval(interval);
  }, [show404]);

  return (
    <footer
      className="bg-gray-900 text-gray-200 py-16 px-1"
      role="contentinfo"
      aria-labelledby="footer-title"
    >
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around gap-10 md:gap-80">

        <aside className="md:w-1/3 space-y-4 text-center md:text-left">
          <header className="relative group mb-5">
            <h2 className="text-strikemaster-600 font-black text-xl flex items-center gap-2">
              Syntaxerrorisme
            </h2>
            <p className="w-full text-center italic absolute top-[70%] left-[22%] transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 text-strikemaster-600 text-xxs sm:text-xs font-medium transition-all duration-300">
              Dites adieu aux erreurs de syntaxe
            </p>
          </header>
          
          <p className="text-base text-gray-400 leading-relaxed">
            Syntaxerrorisme éveille votre potentiel d&apos;expression.  
            Utilisez nos outils de correction d&apos;erreurs et découvrez nos
            ressources pour améliorer votre syntaxe.  
            La langue française et la programmation n&apos;auront plus de secret pour vous !
          </p>
        </aside>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center md:text-left flex-1">
          {/* Colonne 1 */}
          <article>
            <h3 className="text-lg font-semibold mb-3 text-white">Nos solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/jeu" className="hover:text-white transition">
                  Jeu interactif
                </Link>
              </li>
            </ul>
          </article>

          {/* Colonne 2 */}
          <article>
            <h3 className="text-lg font-semibold mb-3 text-white">Nos ressources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/dico" className="hover:text-white transition">
                  Mode dico
                </Link>
              </li>
              <li>
                <Link href="/cv-lm" className="hover:text-white transition">
                  CV & Lettres de motivation
                </Link>
              </li>
              <li>
                <Link href="/histoire" className="hover:text-white transition">
                  Histoire
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="hover:text-white transition">
                  Actualités
                </Link>
              </li>
            </ul>
          </article>

          {/* Colonne 3 */}
          <article>
            <h3 className="text-lg font-semibold mb-3 text-white">
              Le code du syntaxerroriste
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/mentions-legales" className="hover:text-white transition">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="hover:text-white transition"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/glossaire" className="hover:text-white transition">
                  Glossaire
                </Link>
              </li>
            </ul>
          </article>
        </section>
      </section>

      {/* --- Bouton secret 404 --- */}
      <aside className="mt-12 flex justify-center">
        <button
          onClick={() => {
            setShow404(true);
            setDisplayedLines([]); 
          }}
          className="relative flex items-center justify-center w-10 h-10 rounded-full bg-strikemaster-600/10 hover:bg-strikemaster-600/20 transition-all"
          aria-label="Révéler le 404 secret"
        >
          <span className="absolute w-2 h-2 bg-strikemaster-600 rounded-full animate-pulse" />
        </button>
      </aside>

      {/* --- Animation ASCII 404 --- */}
      {show404 && (
        <div className="mt-6 font-mono text-strikemaster-600 leading-tight whitespace-pre text-2xl text-center overflow-x-auto">
          {displayedLines.map((line, index) => (
            <p
              key={index}
              className="opacity-0 animate-[fadeIn_0.3s_ease_forwards]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {line}
            </p>
          ))}
        </div>
      )}

      <footer className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        <p>&copy; {new Date().getFullYear()} Syntaxerrorisme — Tous droits réservés</p>
      </footer>

      {/* --- Keyframes --- */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
}