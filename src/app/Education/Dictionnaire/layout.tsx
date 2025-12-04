export const metadata = {
  title: "Dictionnaire Syntaxerrorisme — Analyse de Code & Détection d’Erreurs",
  description:
    "Le Dictionnaire Syntaxerrorisme analyse votre code, détecte les erreurs, explique les corrections et vous aide à écrire un code propre, clair et structuré. Compatible JS, TS, Python, C++, Java et plus.",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "analyse code",
    "syntaxerrorisme",
    "erreurs code",
    "javascript",
    "python",
    "c++",
    "java",
    "intelligence artificielle",
    "linter"
  ],
  alternates: {
    canonical: "https://syntaxerrorisme-omega.vercel.app/dictionnaire",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
