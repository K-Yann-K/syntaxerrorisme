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
      { threshold: 0.6 } 
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);


  return (
    <section className="bg-mirage-950 text-white py-20 md:py-32 overflow-hidden text-center">
      <p className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-tight">
        Notre objectif <span className="animate-blink">?</span>
      </p>

    <p
      ref={ref}
      className={`text-3xl sm:text-4xl lg:text-6xl xl:text-7xl text-center mt-10 font-light whitespace-nowrap border-r-4 border-strikemaster-400 overflow-hidden
        ${isVisible ? "animate-typing" : "opacity-0"}
      `}
    >
      Dire adieu aux erreurs de syntaxe
    </p>
    </section>
  );
}
