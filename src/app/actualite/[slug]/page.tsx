// app/actualite/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/feature/Header";
import Footer from "@/feature/Footer";
import { getAllArticles, getArticleBySlug } from "@/data/articles";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const a = getArticleBySlug(params.slug);
  if (!a) return {};

  return {
    title: `${a.title} — Syntaxerrorisme`,
    description: a.excerpt,
    openGraph: {
      title: a.title,
      description: a.excerpt,
      type: "article",
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticleBySlug(params.slug);
  if (!a) return notFound();

  return (
    <main className="min-h-screen bg-gray-50">
        <Header/>
      <article className="max-w-3xl mx-auto px-6 pt-16">
        <Link
          href="/actualite"
          className="inline-block text-strikemaster-600 hover:text-strikemaster-700 font-semibold"
        >
          ← Retour aux actualités
        </Link>

        <p className="mt-6 text-sm text-gray-500">{a.date}</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900">
          {a.title}
        </h1>

        {a.author ? (
          <p className="mt-3 text-gray-600">
            Par <span className="font-semibold">{a.author}</span>
          </p>
        ) : null}

        {a.tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {a.tags.map((tag) => (
              <span
                key={`${a.slug}-${tag}`}
                className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <p className="mt-6 text-lg text-gray-600">{a.excerpt}</p>

        {/* Contenu brut (pour commencer). Plus tard on peut rendre du markdown/MDX */}
        <div className="mt-10 whitespace-pre-wrap leading-relaxed text-gray-900">
          {a.content}
        </div>
      </article>
      <aside aria-label="Pour aller plus loin"
          className=" flex flex-col gap-4  max-w-3xl mx-auto  rounded-2xl border border-gray-200 bg-white p-6 mb-10 shadow-sm">
        <Link
          href="/actualite/raccourcis-astuces-dev-mode-syntaxerroriste"
          className="inline-block text-strikemaster-600 hover:text-strikemaster-700 font-semibold"
        >
          Lire aussi : [Raccourcis & astuces de dev]
        </Link>
        <Link
          href="/jeu/Quizz"
          className="inline-block text-strikemaster-600 hover:text-strikemaster-700 font-semibold"
        >
          Tester vos connaissances : [Quiz Syntaxerrorisme]
        </Link>
        <Link
          href="/Education/Dictionnaire"
          className="inline-block text-strikemaster-600 hover:text-strikemaster-700 font-semibold"
        >
          Consulter le [Dictionnaire du Syntaxerrorisme]
        </Link>
      </aside>
        <footer>
            <Footer />
        </footer>
    </main>
  );
}
