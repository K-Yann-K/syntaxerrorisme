"use client";
import { useEffect, useRef } from "react";

export default function AnimatedAsideColors({ visible, side = "left" }: { visible: boolean; side?: "left" | "right";}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const animationClass =
    side === "left"
      ? visible
        ? "animate-fadeSlideIn-left lg:p-3"
        : "animate-fadeSlideOut-left"
      : visible
        ? "animate-fadeSlideIn-right lg:p-3"
        : "animate-fadeSlideOut-right";

  useEffect(() => {
    if (!ref.current || !visible) return;

    const animation = ref.current.animate(
      [
        { backgroundColor: "#c075b1" },
        { backgroundColor: "#9c528b" },
        { backgroundColor: "#864575" },
        { backgroundColor: "#9c528b" },
        { backgroundColor: "#c075b1" },
      ],
      {
        duration: 5000,
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );

    return () => animation.cancel();
  }, [visible]);

  return (
    <aside
      ref={ref}
      className={`transition-all duration-700  ease-in-out 
        ${animationClass}`}
      style={{
        background: "#9c528b",
      }}
    ></aside>
  );
}
