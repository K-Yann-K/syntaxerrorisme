export const metadata = {
  title: "Quiz Syntaxerrorisme – Testez vos connaissances en programmation",
  description:
    "Découvrez le Quiz Syntaxerrorisme : un quiz interactif pour améliorer votre compréhension du code, apprendre à repérer les erreurs de syntaxe et progresser en programmation.",
  keywords: [
    "quiz programmation",
    "quiz code",
    "quiz informatique",
    "erreurs de syntaxe",
    "test de code",
    "apprendre à coder",
    "quiz JavaScript",
    "quiz Python",
    "quiz Java",
    "quiz développeur",
    "syntaxerrorisme",
    "quiz informatique débutant",
    "question code",
    "question informatique"
  ],
  openGraph: {
    title: "Quiz Syntaxerrorisme – Testez vos connaissances en programmation",
    description:
      "Challengez vos compétences avec notre quiz interactif dédié aux erreurs de syntaxe et à la logique de programmation.",
    url: "https://syntaxerrorisme-omega.vercel.app/jeu/Quizz",
    siteName: "Syntaxerrorisme",
    type: "website",
  },
  alternates: {
    canonical: "https://syntaxerrorisme-omega.vercel.app/jeu/Quizz",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
