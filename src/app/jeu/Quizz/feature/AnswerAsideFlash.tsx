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

  const animationClass =
    side === "left"
      ? visible
        ? "animate-quizSlideIn-left"
        : "animate-quizSlideOut-left"
      : visible
      ? "animate-quizSlideIn-right"
      : "animate-quizSlideOut-right";

  useEffect(() => {
    if (!ref.current || !visible) return;

    const animation = ref.current.animate(
      success
        ? [
            { transform: "translateX(0%)" },
            { transform: side === "left" ? "translateX(40%)" : "translateX(-40%)" },
            { transform: side === "left" ? "translateX(10%)" : "translateX(-10%)" },
          ]
        : [
            { transform: "translateY(0px)" },
            { transform: "translateY(-40px)" },
            { transform: "translateY(20px)" },
            { transform: "translateY(-20px)" },
            { transform: "translateY(0px)" },
          ],
      {
        duration: 2000,
        easing: "ease-in-out",
      }
    );

    return () => animation.cancel();
  }, [visible, success, side]);

  return (
    <aside
      ref={ref}
      className={`quizAside transition-all duration-700 ${animationClass}`}
      style={{
        backgroundColor: success ? "#47d16c" : "#d14b47",
      }}
    />
  );
}
