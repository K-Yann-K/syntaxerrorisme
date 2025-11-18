"use client";

import { useEffect, useRef, useState } from "react";

export default function TypingText() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // on ne l’observe plus après le premier déclenchement
        }
      },
      { threshold: 0.3 } // visible à 30%
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);


  return (
    <section className="bg-mirage-950 text-white py-32 overflow-hidden text-center">
      <p className="text-9xl font-bold">
        Notre objectif <span className="animate-blink">?</span>
      </p>

    <p
      ref={ref}
      className={`text-7xl text-center mt-10 font-light whitespace-nowrap border-r-4 border-strikemaster-400 overflow-hidden
        ${isVisible ? "animate-typing" : "opacity-0"}
      `}
    >
      Dire adieu aux erreurs de syntaxe
    </p>
    </section>
  );
}
