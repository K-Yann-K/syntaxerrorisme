"use client";
import { useEffect, useRef } from "react";

type Ball = {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  color: string;
};

export default function AnimatedAsideBalls({
  visible,
  side = "left",
}: {
  visible: boolean;
  side?: "left" | "right";
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ballsRef = useRef<Ball[]>([]);
  const rafRef = useRef<number | null>(null);
  const runningRef = useRef(false);

  const animationClass =
    side === "left"
      ? visible
        ? "animate-fadeSlideIn-left"
        : "animate-fadeSlideOut-left"
      : visible
      ? "animate-fadeSlideIn-right"
      : "animate-fadeSlideOut-right";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const initBalls = (count: number, w: number, h: number) => {
      // 🔹 On crée les balles directement à l’intérieur du canvas
      ballsRef.current = Array.from({ length: count }, () => {
        const r = 8 + Math.random() * 12;
        return {
          x: r + Math.random() * (w - 2 * r),
          y: r + Math.random() * (h - 2 * r),
          r,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          color: `hsl(${Math.random() * 360}, 60%, 65%)`,
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      if (width <= 0 || height <= 0) return;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (ballsRef.current.length === 0) {
        initBalls(14, width, height);
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement!);
    resize();

    const render = () => {
      if (!runningRef.current) return;

      const { width, height } = canvas;
      const w = width / dpr;
      const h = height / dpr;
      ctx.clearRect(0, 0, w, h);

      for (const b of ballsRef.current) {
        b.x += b.dx;
        b.y += b.dy;

        if (b.x + b.r > w) {
          b.x = w - b.r;
          b.dx = -b.dx;
        }
        if (b.x - b.r < 0) {
          b.x = b.r;
          b.dx = -b.dx;
        }
        if (b.y + b.r > h) {
          b.y = h - b.r;
          b.dy = -b.dy;
        }
        if (b.y - b.r < 0) {
          b.y = b.r;
          b.dy = -b.dy;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = b.color;
        ctx.fill();
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(render);
    };

    if (visible) {
      runningRef.current = true;
      cancelAnimationFrame(rafRef.current ?? 0);
      rafRef.current = requestAnimationFrame(render);
    } else {
      runningRef.current = false;
      cancelAnimationFrame(rafRef.current ?? 0);
      rafRef.current = null;
    }

    return () => {
      observer.disconnect();
      runningRef.current = false;
      cancelAnimationFrame(rafRef.current ?? 0);
    };
  }, [visible]);

  return (
    <aside
      className={`relative overflow-hidden bg-strikemaster-600 
        transition-[padding] duration-600 ease-out
        ${animationClass}
        ${visible ? "p-9" : "p-0"}
      `}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full block"
        aria-hidden="true"
      />
      <span className="sr-only">
        Animation décorative d’arrière-plan avec des sphères colorées en
        mouvement.
      </span>
    </aside>
  );
}
