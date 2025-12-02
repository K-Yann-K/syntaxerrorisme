// Génère un ID auto-incrémenté
let qid = 1;

// QUESTIONS BRUTES
const rawQuestions = [
  // --- SECTION 1 : ERREURS SYNTAXIQUES / SYNTAXERRORISME ---
  {
    type: "trueFalse",
    question: "Une erreur syntaxique est toujours liée à une mauvaise indentation.",
    answer: false
  },
  {
    type: "trueFalse",
    question: "Le syntaxerrorisme consiste à transformer les erreurs en moteur d’apprentissage.",
    answer: true
  },
  {
    type: "mcq",
    question: "Quelle est la cause la plus fréquente d'une SyntaxError en JavaScript ?",
    options: [
      "Un import mal orthographié",
      "Un crochet ou parenthèse manquant",
      "Une variable trop longue"
    ],
    answer: 1
  },
  {
    type: "mcq",
    question: "Le mot-clé le plus optimisé SEO pour décrire des erreurs est :",
    options: ["Bug", "Syntaxerrorisme", "Crash"],
    answer: 1
  },

  // SECTION PYTHON
  {
    type: "trueFalse",
    question: "En Python, oublier les deux-points après un bloc provoque une erreur syntaxique.",
    answer: true
  },
  {
    type: "mcq",
    question: "Que renvoie print(type([])) en Python ?",
    options: ["list", "<class 'list'>", "[]Type"],
    answer: 1
  },
  {
    type: "trueFalse",
    question: "En Python, les variables doivent obligatoirement être typées.",
    answer: false
  },
  {
    type: "mcq",
    question: "Quel élément génère souvent une SyntaxError en Python ?",
    options: [
      "Une indentation incohérente",
      "Une fonction trop longue",
      "Un commentaire mal rédigé"
    ],
    answer: 0
  },

  // SECTION JAVA
  {
    type: "trueFalse",
    question: "En Java, une classe peut avoir plusieurs méthodes nommées main.",
    answer: true
  },
  {
    type: "mcq",
    question: "Quelle erreur survient si une variable n’est pas initialisée en Java ?",
    options: ["SyntaxError", "NullPointerException", "Compile-time error"],
    answer: 2
  },
  {
    type: "trueFalse",
    question: "Un fichier Java doit porter le même nom que la classe publique qu'il contient.",
    answer: true
  },
  {
    type: "mcq",
    question: "Que signifie le mot-clé 'final' ?",
    options: ["La variable est constante", "La classe doit être héritée", "La méthode est obligatoire"],
    answer: 0
  },

  // SECTION POO
  {
    type: "trueFalse",
    question: "Le polymorphisme permet d'utiliser plusieurs méthodes portant le même nom.",
    answer: true
  },
  {
    type: "trueFalse",
    question: "L’héritage multiple est autorisé nativement en Java.",
    answer: false
  },
  {
    type: "mcq",
    question: "L'encapsulation consiste principalement à :",
    options: ["Cacher les données", "Rendre tout public", "Améliorer les performances"],
    answer: 0
  },
  {
    type: "mcq",
    question: "Quel principe SOLID correspond au 'S' ?",
    options: [
      "Single Responsibility Principle",
      "Simple Object Logic",
      "System Override Layer"
    ],
    answer: 0
  },

  // SECTION HTML
  {
    type: "trueFalse",
    question: "<div> est un élément sémantique.",
    answer: false
  },
  {
    type: "mcq",
    question: "Quel attribut améliore le SEO ?",
    options: ["class", "alt", "style"],
    answer: 1
  },
  {
    type: "trueFalse",
    question: "La balise <title> n’a aucun impact sur le référencement.",
    answer: false
  },
  {
    type: "mcq",
    question: "Quel élément est obligatoire dans une page HTML ?",
    options: ["<main>", "<html>", "<section>"],
    answer: 1
  },

  // SECTION CSS
  {
    type: "trueFalse",
    question: "Une propriété CSS non reconnue est ignorée par le navigateur.",
    answer: true
  },
  {
    type: "mcq",
    question: "Quel sélecteur a la plus forte spécificité ?",
    options: ["#id", ".classe", "balise"],
    answer: 0
  },
  {
    type: "mcq",
    question: "Quelle unité est relative à la taille de police du parent ?",
    options: ["em", "vh", "px"],
    answer: 0
  },
  {
    type: "trueFalse",
    question: "Le flexbox peut remplacer intégralement CSS Grid.",
    answer: false
  },

  // SECTION REACT
  {
    type: "trueFalse",
    question: "Les composants React doivent toujours commencer par une majuscule.",
    answer: true
  },
  {
    type: "mcq",
    question: "useEffect sans dépendances se déclenche :",
    options: ["À chaque rendu", "Une seule fois", "Jamais"],
    answer: 1
  },
  {
    type: "trueFalse",
    question: "Une erreur courante est de modifier l’état directement au lieu d’utiliser setState.",
    answer: true
  },
  {
    type: "mcq",
    question: "Quel hook stocke une valeur persistante sans re-render ?",
    options: ["useMemo", "useRef", "useState"],
    answer: 1
  },

  // SECTION GIT / GITHUB
  {
    type: "trueFalse",
    question: "git push envoie automatiquement vos commits sur main.",
    answer: false
  },
  {
    type: "mcq",
    question: "Quelle commande annule le dernier commit sans effacer les fichiers modifiés ?",
    options: ["git revert HEAD", "git reset --soft HEAD~1", "git rm ."],
    answer: 1
  },
  {
    type: "trueFalse",
    question: "Créer une branche avant une feature est une bonne pratique.",
    answer: true
  },
  {
    type: "mcq",
    question: "Comment fusionner une branche dans main ?",
    options: ["git merge branch", "git combine branch", "git absorb branch"],
    answer: 0
  },

  // SECTION CLEAN ARCHITECTURE
  {
    type: "trueFalse",
    question: "Dans Clean Architecture, le domaine ne dépend d’aucune technologie.",
    answer: true
  },
  {
    type: "mcq",
    question: "Quel élément appartient au domaine ?",
    options: ["Use cases", "Framework", "Controller"],
    answer: 0
  },
  {
    type: "trueFalse",
    question: "Les dépendances doivent aller de l’extérieur vers l’intérieur.",
    answer: true
  },
  {
    type: "mcq",
    question: "Une erreur fréquente est :",
    options: [
      "Faire dépendre le domaine d’une base de données",
      "Ajouter trop de tests",
      "Utiliser TypeScript"
    ],
    answer: 0
  },

  // SECTION TDD
  {
    type: "trueFalse",
    question: "En TDD, on écrit les tests avant le code.",
    answer: true
  },
  {
    type: "trueFalse",
    question: "La phase de refactor consiste à supprimer les tests inutiles.",
    answer: false
  },
  {
    type: "mcq",
    question: "Quel cycle décrit TDD ?",
    options: ["Write → Code → Test", "Red → Green → Refactor", "Green → Blue → Repeat"],
    answer: 1
  },
  {
    type: "mcq",
    question: "Une erreur fréquente en TDD est :",
    options: ["Tester trop tôt", "Écrire des tests trop larges", "Ne pas utiliser les mocks"],
    answer: 1
  },

  // SECTION DEPENDANCES
  {
    type: "trueFalse",
    question: "Installer trop de dépendances peut ralentir une application.",
    answer: true
  },
  {
    type: "mcq",
    question: "Quel fichier contient les dépendances Node.js ?",
    options: ["package.json", "node_modules/", "dependencies.md"],
    answer: 0
  },
  {
    type: "trueFalse",
    question: "Mettre à jour ses dépendances réduit les risques de sécurité.",
    answer: true
  },
  {
    type: "mcq",
    question: "Erreur typique lors de l’installation d’un package :",
    options: ["Utiliser npm install", "Oublier --save", "Conflit de version"],
    answer: 2
  },

  // SECTION GENERAL DEV
  {
    type: "trueFalse",
    question: "Les commentaires doivent expliquer le pourquoi, pas le comment.",
    answer: true
  },
  {
    type: "mcq",
    question: "Quel est le signe d’un mauvais code ?",
    options: ["Variables courtes", "Fichier de 2000 lignes", "Documentation trop riche"],
    answer: 1
  },
  {
    type: "trueFalse",
    question: "Coder sans tests est acceptable en production.",
    answer: false
  },
  {
    type: "mcq",
    question: "Éviter les erreurs syntaxiques exige :",
    options: ["Relire son code", "Coder vite", "Utiliser des couleurs flashy"],
    answer: 0
  }
];

// NORMALISATION + ID
export const questions = rawQuestions.map(q => ({
  id: qid++,
  ...q,
  options:
    q.type === "trueFalse"
      ? ["Vrai", "Faux"] // conversion automatique
      : q.options
}));

export function getRandomQuestion() {
  return questions[Math.floor(Math.random() * questions.length)];
}
