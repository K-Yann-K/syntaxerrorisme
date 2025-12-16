"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

type BombRainProps = {
  count?: number;
  active?: boolean;
};

type Bomb = {
  id: number;
  left: number;     // %
  duration: number; // seconds
  delay: number;    // seconds
  size: number;     // px
  drift: number;    // px
};

type BombStyle = CSSProperties & {
  "--drift": string;
};

export function BombRain({ count = 14, active = true }: BombRainProps) {
  const [mounted, setMounted] = useState(false);
  const [bombs, setBombs] = useState<Bomb[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !active) return;

    const next: Bomb[] = Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100;
      const duration = 2.6 + Math.random() * 2.6;
      const delay = Math.random() * 2.5;
      const size = 14 + Math.random() * 16;
      const drift = (Math.random() * 2 - 1) * 18;

      return { id: i, left, duration, delay, size, drift };
    });

    setBombs(next);
  }, [count, active, mounted]);

  // ✅ important: rien côté serveur -> pas de mismatch
  if (!mounted || !active) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {bombs.map((b) => {
        const style: BombStyle = {
          left: `${b.left}%`,
          animationDuration: `${b.duration}s`,
          animationDelay: `${b.delay}s`,
          fontSize: `${b.size}px`,
          "--drift": `${b.drift}px`,
        };

        return (
          <span key={b.id} className="bomb-rain__bomb" style={style} aria-hidden="true">
            💣
          </span>
        );
      })}

      <style jsx>{`
        .bomb-rain__bomb {
          position: absolute;
          top: -48px;
          opacity: 0.9;
          transform: translate3d(0, 0, 0);
          animation-name: bomb-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          filter: drop-shadow(0 10px 14px rgba(0, 0, 0, 0.18));
          will-change: transform, opacity;
          user-select: none;
        }

        @keyframes bomb-fall {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
            opacity: 0;
          }
          8% {
            opacity: 0.9;
          }
          100% {
            transform: translate3d(var(--drift), 115vh, 0) rotate(360deg);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bomb-rain__bomb {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
