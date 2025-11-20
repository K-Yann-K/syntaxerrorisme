"use client";
import { useEffect, useState, useCallback } from "react";

export default function IntroScreen() {
  const wrongText = "L’istoier du S1taerrorism";
  const correctText = "L’Histoire du Syntaxerrorisme";

  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<
    "typingWrong" | "deleting" | "typingCorrect" | "fadeOut" | "hidden"
  >("typingWrong");

  const skip = useCallback(() => {
    setPhase("hidden");
  }, []);

  useEffect(() => {
    // permet de skip avec n’importe quel clic
    window.addEventListener("click", skip);
    return () => window.removeEventListener("click", skip);
  }, [skip]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let i = 0;

    const speedWrong = 55;
    const speedDelete = 25;
    const speedCorrect = 50;

    if (phase === "typingWrong") {
      interval = setInterval(() => {
        i++;
        setDisplayed(wrongText.slice(0, i));
        if (i >= wrongText.length) {
          clearInterval(interval);
          setTimeout(() => setPhase("deleting"), 500);
        }
      }, speedWrong);
    }

    if (phase === "deleting") {
      interval = setInterval(() => {
        setDisplayed((prev) => {
          const next = prev.slice(0, -1);
          if (next.length === 0) {
            clearInterval(interval);
            setPhase("typingCorrect");
          }
          return next;
        });
      }, speedDelete);
    }

    if (phase === "typingCorrect") {
      interval = setInterval(() => {
        i++;
        setDisplayed(correctText.slice(0, i));
        if (i >= correctText.length) {
          clearInterval(interval);
          setTimeout(() => setPhase("fadeOut"), 600);
        }
      }, speedCorrect);
    }

    if (phase === "fadeOut") {
      setTimeout(() => setPhase("hidden"), 500);
    }

    return () => clearInterval(interval);
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black text-white 
      transition-opacity duration-500 z-[9999]
      ${phase === "fadeOut" ? "opacity-0" : "opacity-100"}`}
    >
      <h1 className="text-3xl md:text-5xl font-bold border-r-4 pr-2 border-white animate-cursor">
        {displayed}
      </h1>
    </div>
  );
}
