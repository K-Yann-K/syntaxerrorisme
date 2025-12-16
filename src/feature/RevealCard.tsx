type RevealCardProps = {
  revealed: boolean;
  title: string;
  children: React.ReactNode;
};

export function RevealCard({ revealed, title, children }: RevealCardProps) {
  return (
    <article
      className={[
        "bg-swiss-coffee-100 border border-strikemaster-100 shadow-xl overflow-hidden",
        "transition-[width] duration-500 ease-out",
        revealed ? "w-full rounded-4xl " : "w-6 rounded-full",
      ].join(" ")}
    >
      {/* DOT (avant révélation) */}
      {!revealed && (
        <div className="h-6 flex items-center justify-center">
          <aside className="relative flex items-center justify-center w-6 h-6 rounded-full bg-strikemaster-600/10">
            <span className="absolute w-2 h-2 bg-strikemaster-600 rounded-full animate-pulse" />
          </aside>
        </div>
      )}

      {/* CONTENU */}
      <div
        className={[
          "px-6 transition-all duration-500 ease-out",
          revealed
            ? "max-h-[520px] opacity-100 translate-y-0 py-6"
            : "max-h-0 opacity-0 -translate-y-1 py-0",
        ].join(" ")}
      >
        <h3 className="text-xl font-semibold text-strikemaster-800 mb-2">
          {title}
        </h3>
        <div className="text-gray-700">{children}</div>
      </div>
    </article>
  );
}