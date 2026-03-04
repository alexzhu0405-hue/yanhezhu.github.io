"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "scale-in" | "slide-right";
}

export default function Animate({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
}: AnimateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const animationClasses: Record<string, string> = {
    "fade-up": visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8",
    "fade-in": visible ? "opacity-100" : "opacity-0",
    "scale-in": visible
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95",
    "slide-right": visible
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-8",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
}
