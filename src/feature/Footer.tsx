import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <footer className="py-10 text-center text-gray-500 text-sm">
      <h1>Syntaxerrorisme</h1>
      <section>
        Syntaxerrorisme © {new Date().getFullYear()} — Tous droits réservés
      </section>
      {/* en cliquant on a un effet ligne par ligne du footer hut 8 avec écrit "404"*/}
      <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-strikemaster-600/10">
        <span className="absolute w-2 h-2 bg-strikemaster-600 rounded-full animate-pulse"></span>
      </span>
    </footer>
    );
}