// src/data/articles.ts

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string; // "2026-01-11"
  author?: string;
  tags?: string[];
  cover?: string;
};

export const articles: Article[] = [
  {
    slug: "ouverture-syntaxerrorisme-manifeste",
    title: "Ouverture : bienvenue dans le Syntaxerrorisme",
    excerpt:
      "Le site est lancé. Ici, on transforme l’erreur en style, et le bug en méthode de pensée.",
    content: `
  ## Pourquoi “Syntaxerrorisme” ?
  Parce qu’on connaît tous cette sensation :
  tu relis ton code, ton texte, ton message… et tu sens qu’il manque *un truc*.
  Un point-virgule imaginaire. Une virgule. Une logique. Une intention.

  Le syntaxerrorisme, c’est ce moment où l’erreur devient un signal.
  Pas une honte. Un indicateur.

  ## Ce que tu trouveras ici
  - des outils pour mieux écrire et mieux coder
  - des jeux et expériences (parce que l’apprentissage sans plaisir, c’est un linter sans règles)
  - des articles, des guides, des idées
  - une culture : être rigoureux sans perdre le style

  ## Le post LinkedIn de lancement
  Je pose ici le point d’origine.
  Tu peux le lire via ce lien de redirection interne :

  👉 /r/linkedin-lancement

  (Ça te permet de changer l’URL LinkedIn plus tard sans modifier l’article.)

  ## Mot de la fin
  Ce site est une invitation :
  corriger, structurer, exprimer.
  Et parfois, rire un peu du cerveau quand il refuse la complétion automatique.

    ## Pour aller plus loin
  - Lire aussi : [Raccourcis & astuces de dev](/actualite/raccourcis-astuces-dev-mode-syntaxerroriste)
  - Tester vos connaissances : [Quiz Syntaxerrorisme](/jeu/Quizz)
  - Consulter le [Dictionnaire du Syntaxerrorisme](/Education/Dictionnaire)

  `,
    date: "2026-02-03",
    author: "Syntaxerrorisme",
    tags: ["annonce", "manifeste", "histoire"],
  },
  {
    slug: "mises-a-jour-frameworks-langages-2026",
    title: "Mises à jour langages & frameworks : ce qui change (sans panique)",
    excerpt:
      "Tour d’horizon neutre des évolutions fréquentes : performance, typage, tooling, sécurité, et pourquoi ça compte vraiment.",
    content: `
  ## Pourquoi on parle “mises à jour” tout le temps ?
  Les langages et frameworks évoluent pour répondre à des besoins très concrets : meilleure performance, meilleure DX (developer experience), sécurité renforcée, et compatibilité avec des usages modernes (edge, SSR, mobile, IA, etc.).

  L’objectif n’est pas de “courir après la dernière version”, mais de comprendre *ce que les mises à jour cherchent à résoudre*.

  ## Tendances qu’on observe souvent
  ### 1) Performance et rendu
  - Optimisations du runtime (moins de travail au navigateur / serveur)
  - Rendu plus intelligent (streaming, SSR/SSG hybrides, caching plus fin)
  - Réduction du JS côté client quand ce n’est pas nécessaire

  ### 2) Typage et fiabilité
  - Meilleure inférence (TypeScript ou systèmes de types plus stricts)
  - Erreurs attrapées plus tôt (build-time plutôt que runtime)
  - APIs plus explicites (moins de “magie” implicite)

  ### 3) Tooling et DX (Developer Experience)
  - Bundlers plus rapides, builds incrémentaux
  - Lint/format/test plus intégrés
  - Debugging amélioré et logs plus utiles

  ### 4) Sécurité par défaut
  - Durcissement des dépendances
  - Meilleure gestion des secrets
  - Defaults plus sûrs (CSP, headers, sandboxing selon les contextes)

  ## Ce que tu peux faire sans te noyer
  - Mets à jour par “paliers” : dépendances mineures régulièrement, majeures à part.
  - Lis *le pourquoi* dans les release notes (breaking changes, migration guide).
  - Vérifie ton pipeline : tests + lint + build doivent être le filet de sécurité.
  - Mesure avant/après : performance, bundle size, temps de build.

  ## À retenir
  Une mise à jour n’est pas un caprice : c’est souvent une réponse à des limites réelles.
  La bonne stratégie, c’est d’être régulier, outillé, et pragmatique.

    ## Pour aller plus loin
  - Lire aussi : [Raccourcis & astuces de dev](/actualite/raccourcis-astuces-dev-mode-syntaxerroriste)
  - Tester vos connaissances : [Quiz Syntaxerrorisme](/jeu/Quizz)
  - Consulter le [Dictionnaire du Syntaxerrorisme](/Education/Dictionnaire)
  - ← Retour à [toutes les actualités](/actualite)


  `,
    date: "2026-02-02",
    author: "Syntaxerrorisme",
    tags: ["actualité", "frameworks", "outils"],
  },
  {
    slug: "raccourcis-astuces-dev-mode-syntaxerroriste",
    title: "Raccourcis & astuces de dev : le guide (un peu) syntaxerroriste",
    excerpt:
      "Recherche au milieu, raccourcis de code, petites recettes SQL : des gains de temps qui font du bien au cerveau.",
    content: `
  ## Avertissement
  Cet article contient des raccourcis. Ils peuvent provoquer :
  - un sourire involontaire,
  - une réduction du temps perdu,
  - un ego qui compile plus vite.

  ## 1) Fouiller une liste triée en commençant par le milieu (aka la recherche binaire)
  Quand une liste est triée, tu n’as aucune raison de la parcourir de gauche à droite comme un personnage secondaire.

  ### Idée
  - Tu regardes le milieu
  - Tu élimines la moitié inutile
  - Tu recommences
  C’est propre, c’est net, c’est efficace.

  ### Exemple (pseudo)
  1. mid = (left + right) / 2  
  2. si target < arr[mid] → right = mid - 1  
  3. sinon → left = mid + 1  

  Résultat : tu passes de “je lis tout” à “je tranche dans le tas”.

  ## 2) Raccourcis de code qui sauvent des journées
  ### Early return
  Au lieu d’imbriquer 12 niveaux de if :
  - tu gères les cas d’erreur tôt
  - et tu laisses le code principal respirer

  ### Guard clauses
  Même vibe que l’early return mais en mode “barrière de sécurité”.
  Si la condition n’est pas bonne : sortie immédiate.

  ### Nommer ce qui compte
  Une variable bien nommée, c’est une doc qui s’exécute.
  Une variable mal nommée, c’est un ticket Jira qui naît quelque part.

  ## 3) Astuces base de données qui évitent les sueurs froides
  ### Index : pas magique, mais vital
  Si tu filtres / joins souvent sur une colonne : index.
  Si tu fais ça sur une table massive sans index : tu lances un marathon à ton serveur.

  ### LIMIT / pagination : “je veux 20 résultats, pas la Bible”
  Rappelle-toi que l’utilisateur ne lit pas 8 000 lignes.
  Ta DB non plus.

  ### EXPLAIN : la boule de cristal
  Quand une requête est lente : EXPLAIN / EXPLAIN ANALYZE.
  C’est là que tu vois si tu es en “index scan” ou en “table scan de l’enfer”.

  ## Conclusion
  La productivité, ce n’est pas “taper plus vite”.
  C’est “penser plus clair”, couper le bruit, et laisser ton code respirer.
  Et oui : fouiller au milieu, c’est la vie.
  `,
    date: "2026-02-01",
    author: "Syntaxerrorisme",
    tags: ["astuces", "bases-de-donnees", "productivite", "humour"],
  },
  {
    slug: "bienvenue-dans-le-syntaxerrorisme",
    title: "Bienvenue dans le syntaxerrorisme",
    excerpt:
      "Entre code, langue française et bugs stylés : pourquoi ce mot existe et ce qu’il raconte.",
    content: `
## L’idée
Le syntaxerrorisme, c’est l’art de transformer l’erreur en méthode.

## Ce que vous trouverez ici
- des outils
- des exemples
- des guides
`,
    date: "2026-01-11",
    author: "Syntaxerrorisme",
    tags: ["culture", "définition"],
  },
  {
    slug: "3-erreurs-classiques-en-js",
    title: "3 erreurs classiques en JavaScript (et comment les éviter)",
    excerpt:
      "Undefined, coercition implicite, et callbacks : le trio qui fait bugger même les esprits stylés.",
    content: `Contenu à écrire…`,
    date: "2026-01-20",
    author: "Syntaxerrorisme",
    tags: ["javascript", "débutant"],
  },
  {
    slug: "la-langue-francaise-du-dev",
    title: "La langue française du dev : écrire comme on code",
    excerpt:
      "Ponctuation, précision, structure : les mêmes réflexes sauvent ton texte et ton programme.",
    content: `Contenu à écrire…`,
    date: "2026-01-25",
    author: "Syntaxerrorisme",
    tags: ["français", "communication"],
  },


];

export const getAllArticles = () =>
  [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));

export const getLatestArticles = (limit = 3) =>
  getAllArticles().slice(0, limit);

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);
