"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { BombRain } from "@/feature/BombRain";
import GameSection from "@/feature/GameSection";

type GameRevealProps = {
  bombCount?: number;
};

export default function GameReveal({ bombCount = 19 }: GameRevealProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [trackW, setTrackW] = useState(0);

  // position du curseur (en px dans le track)
  const [x, setX] = useState(0);
  const [dragging, setDragging] = useState(false);

  // état final : révélé une fois pour toutes
  const [unlocked, setUnlocked] = useState(false);

  // calage responsive du track
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => setTrackW(el.clientWidth));
    ro.observe(el);
    setTrackW(el.clientWidth);

    return () => ro.disconnect();
  }, []);

  // quand unlock -> on met le curseur tout à droite
  useEffect(() => {
    if (!unlocked) return;
    setX(trackW);
  }, [unlocked, trackW]);

  const clamp = (v: number, min: number, max: number) =>
    Math.max(min, Math.min(max, v));

  const percent = useMemo(() => {
    if (!trackW) return 0;
    return clamp(x / trackW, 0, 1);
  }, [x, trackW]);

  // Seuil pour valider (ex: 92% du track)
  const unlockAt = 0.92;

  const setFromClientX = (clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = clientX - rect.left;
    const nextClamped = clamp(next, 0, rect.width);
    setX(nextClamped);

    if (!unlocked && rect.width > 0 && nextClamped / rect.width >= unlockAt) {
      setUnlocked(true);
      setDragging(false);
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (unlocked) return;
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging || unlocked) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    // si pas unlock -> retour à gauche
    if (!unlocked) setX(0);
  };

  return (
    <section className="relative isolate overflow-hidden bg-strikemaster-200 border-t border-b border-swiss-coffee-100 py-10">
      {/* pluie derrière */}
      <BombRain count={bombCount} active />

      {/* CONTENU + cache */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Track + flèche */}
        {!unlocked && (
          <div className="mb-6">
            <div
              ref={trackRef}
              className="relative h-12 w-full rounded-full bg-swiss-coffee-100/70 border border-swiss-coffee-100 shadow-inner overflow-hidden"
            >
              {/* progress léger (optionnel) */}
              <div
                className="absolute inset-y-0 left-0 bg-strikemaster-600/10"
                style={{ width: `${percent * 100}%` }}
              />

              {/* poignée ">" */}
              <button
                type="button"
                className="absolute top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-strikemaster-600 text-white shadow-md select-none touch-none"
                style={{ left: `calc(${percent * 100}% - 20px)` }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                aria-label="Glisser pour révéler"
              >
                <span className="text-lg leading-none">{">"}</span>
              </button>

              {/* hint */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-sm text-strikemaster-700/70">
                  Glisse jusqu’au bout pour révéler
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Zone du GameSection avec “rectangle cache” */}
        <div className="relative">
          {/* Cache rectangle : au début il couvre tout, puis quand unlocked il descend */}
          <div
            className={[
              "absolute inset-0 rounded-3xl",
              "bg-strikemaster-200", // couleur du fond pour “masquer”
              "transition-transform duration-700 ease-out",
              unlocked ? "translate-y-full" : "translate-y-0",
              "z-20",
            ].join(" ")}
          />

          {/* Contenu */}
          <div className="relative z-10">
            <GameSection />
          </div>
        </div>
      </div>
    </section>
  );
}
