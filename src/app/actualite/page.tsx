// app/actualite/page.tsx
import Link from "next/link";
import Header from "@/feature/Header";
import Footer from "@/feature/Footer";
import { getAllArticles } from "@/data/articles";

export const metadata = {
  title: "Actualité — Syntaxerrorisme",
  description:
    "Tous les articles Syntaxerrorisme : actus dev, astuces, bases de données, et réflexions entre code et langue française.",
};

export default function ActualitePage() {
  const list = getAllArticles();

  return (
    <main className="min-h-screen bg-mirage-950 text-swiss-coffee-100">
      <Header/>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold ">
            Actualité
          </h1>
          <p className="mt-4 text-lg text-strikemaster-400 max-w-3xl">
            Retrouvez tous nos articles sur le <span className="font-semibold">syntaxerrorisme</span> :
            mises à jour, astuces, bases de données, et culture du code.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {list.map((a) => (
            <Link
              key={a.slug}
              href={`/actualite/${a.slug}`}
              className="group block bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition"
            >
              <p className="text-sm text-gray-500">{a.date}</p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900 group-hover:text-strikemaster-600 transition">
                {a.title}
              </h2>

              <p className="mt-3 text-swiss-coffee-900">{a.excerpt}</p>

              {a.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {a.tags.slice(0, 4).map((tag) => (
                    <span
                      key={`${a.slug}-${tag}`}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-5 font-semibold text-strikemaster-600">
                Lire →
              </div>
            </Link>
          ))}
        </div>
      </section>
      <footer>
          <Footer />
      </footer>
    </main>
  );
}
