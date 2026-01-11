// src/feature/HomeClientFXLeft.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedAsideBalls from "@/feature/AnimatedAsideBalls";
import AnimatedAsideColors from "@/feature/AnimatedAsideColors";

type FXRefs = {
  startBalls: HTMLElement | null;
  startColors: HTMLElement | null;
  footer: HTMLElement | null;
};

export default function HomeClientFXLeft() {
  const refs = useRef<FXRefs>({
    startBalls: null,
    startColors: null,
    footer: null,
  });

  const [isDesktop, setIsDesktop] = useState(true);
  const [showBalls, setShowBalls] = useState(false);
  const [showColors, setShowColors] = useState(false);

  const bindRefs = () => {
    refs.current.startBalls = document.getElementById("fx-start-balls");
    refs.current.startColors = document.getElementById("fx-start-colors");
    refs.current.footer = document.getElementById("fx-footer");
  };

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    bindRefs();
    const t1 = setTimeout(bindRefs, 300);
    const t2 = setTimeout(bindRefs, 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setShowBalls(false);
      setShowColors(false);
      return;
    }

  const onScroll = () => {
    const { startBalls, startColors, footer } = refs.current;
    if (!startBalls || !footer) return;

    const vh = window.innerHeight;

    const ballsTop = startBalls.getBoundingClientRect().top;

    const colorsTop = startColors
      ? startColors.getBoundingClientRect().top
      : Number.POSITIVE_INFINITY;

    const footerTop = footer.getBoundingClientRect().top;

    // --- CONDITIONS ---
    const ballsZone =
      ballsTop < vh * 0.6 && colorsTop > vh * 0.3;

    const colorsZone =
      colorsTop < vh * 0.7 && footerTop > vh * 0.9;

    const footerReached = footerTop <= vh * 0.9;

    // --- PRIORITÉS ---
    if (footerReached) {
      // 🛑 Footer = tout s’arrête
      setShowBalls(false);
      setShowColors(false);
      return;
    }

    if (colorsZone) {
      // 🎨 Colors gagne toujours
      setShowBalls(false);
      setShowColors(true);
      return;
    }

    if (ballsZone) {
      setShowBalls(true);
      setShowColors(false);
      return;
    }

    // Zone neutre
    setShowBalls(false);
    setShowColors(false);
  };


    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      {showColors ? (
        <AnimatedAsideColors visible side="left" />
      ) : (
        <AnimatedAsideBalls visible={showBalls} side="left" />
      )}
    </>
  );

}
