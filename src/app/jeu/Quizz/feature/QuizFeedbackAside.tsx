"use client";
import { useEffect, useRef } from "react";

export default function QuizFeedbackAside({
  visible,
  success,
  side = "left",
}: {
  visible: boolean;
  success: boolean;
  side?: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const animationClass = visible
    ? side === "left"
      ? success
        ? "animate-success-left"
        : "animate-error-left"
      : success
        ? "animate-success-right"
        : "animate-error-right"
    : "opacity-0";

  useEffect(() => {
    if (!ref.current || !visible) return;

    const keyframes = success
      ? [
          { backgroundColor: "#4ade80" }, // vert clair
          { backgroundColor: "#22c55e" },
          { backgroundColor: "#16a34a" },
          { backgroundColor: "#4ade80" },
        ]
      : [
          { backgroundColor: "#f87171" },
          { backgroundColor: "#ef4444" },
          { backgroundColor: "#dc2626" },
          { backgroundColor: "#b91c1c" },
          { backgroundColor: "#ef4444" },
        ];

    ref.current.animate(keyframes, {
      duration: 2000,
      easing: "ease-in-out",
    });
  }, [visible, success]);

  return (
    <aside
      ref={ref}
      className={`quizAside ${animationClass}`}
      style={{
      [side]: 0, 
      }}
    />
  );
}
