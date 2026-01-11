"use client";
import { useEffect, useRef, useState } from "react";

import AnimatedAsideBalls from "@/feature/AnimatedAsideBalls";
import AnimatedAsideColors from "@/feature/AnimatedAsideColors";
import IntroductionSection from "@/feature/IntroductionSection";
import ExplicationSection from "@/feature/ExplicationSection";
import Header from "@/feature/Header";
import Footer from "@/feature/Footer";
import GoalSection from "@/feature/GoalSection"
import LangueFRSection from "@/feature/LangueFRSection"
import ToolsSection from "@/feature/ToolsSection"
import DefinitionSection from "@/feature/definitionSection";
import ArticlesSection from "@/feature/ArticleSection";
import SyntaxerrorismeFAQ from "@/feature/FAQSection";
import GameSection from "@/feature/GameSection";
import { BombRain } from "@/feature/BombRain";

import HomeClientFXLeft from "@/feature/HomeClientFXLeft";
import HomeClientFXRight from "@/feature/HomeCLientFXRight";


export default function Home() {
  const startBallsRef = useRef<HTMLSpanElement | null>(null); // début des sphères
  const startColorsRef = useRef<HTMLHeadingElement | null>(null); // début couleurs
  const footerRef = useRef<HTMLElement | null>(null); // fin couleurs

  const [showBalls, setShowBalls] = useState(false);
  const [showColors, setShowColors] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768); // 768px = Tailwind md
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setShowBalls(false);
      setShowColors(false);
      return;
    }

    const handleScroll = () => {
      const startBalls = startBallsRef.current?.getBoundingClientRect();
      const startColors = startColorsRef.current?.getBoundingClientRect();
      const footer = footerRef.current?.getBoundingClientRect();
      const vh = window.innerHeight;

      if (!startBalls || !startColors || !footer) return;

      // Conditions de visibilité relatives à la fenêtre
      const isPastBallsStart = startBalls.top < vh * 0.6; // on a atteint le paragraphe
      const isBeforeColors = startColors.top > vh * 0.3;  // LangueFR pas encore visible
      const isColorsVisible = startColors.top < vh * 0.7 && footer.top > vh * 0.3;
      const isFooterVisible = footer.top < vh * 0.9;

      if (isColorsVisible) {
        setShowColors(true);
        setShowBalls(false);
      } else if (isPastBallsStart && isBeforeColors) {
        setShowBalls(true);
        setShowColors(false);
      } else {
        setShowBalls(false);
        setShowColors(false);
      }

      if (isFooterVisible) {
        setShowColors(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

    useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 200);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.95 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex flex-col md:flex-row">

      {isDesktop && (
        <>
          <AnimatedAsideBalls visible={showBalls} side="left" />
          <AnimatedAsideColors visible={showColors} side="left"/>
        </>
      )}
      
      <article className="min-h-screen w-full  ">
        <Header/>
         
        <IntroductionSection/>

        <ExplicationSection startBallsRef={startBallsRef}/>
        
        <GoalSection />

        <section ref={sectionRef} className={`bg-strikemaster-200 transition-all duration-700 ${ isVisible ? " p-2 sm:p-10 md:p-20" : ""}`}>
          <LangueFRSection  />
        </section>
        {/* faire une section avec h2:Corriger vos codes informatiques (et programmes?), ça redirige vers le mode dico*/}
        {/* faire une section avec h2:Apprenez les bonnes pratiques de codeur professionnel, ça redirige vers le glossaire et le quiz d'où 2 h3: (et programmes?)*/}

        {/* dans une section mettre dans le bg un icone croix avec "a bats les syntaxerroristes" dans le délire de https://www.belacom.fr/agence-email-marketing/*/}
        <ToolsSection toolsRef={startColorsRef}/>

        <DefinitionSection />

        <div className="relative isolate overflow-hidden bg-strikemaster-200 border-t border-b border-swiss-coffee-100 py-10">
          <BombRain count={11} />
          <GameSection />
        </div>

        <SyntaxerrorismeFAQ />

        <ArticlesSection />

        <footer id="fx-footer" ref={footerRef}>
          <Footer />
        </footer>
      </article>

      {isDesktop && (
        <>
          <AnimatedAsideBalls visible={showBalls} side="right"  />
          <AnimatedAsideColors visible={showColors} side="right" />
        </>
      )}
    </main>
  );
}