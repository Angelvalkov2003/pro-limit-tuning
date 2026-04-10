"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  delay?: string;
  className?: string;
  variant?: "default" | "strong";
};

export default function AnimateOnScroll({
  children,
  delay = "0s",
  className = "",
  variant = "default",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const strongClass = variant === "strong" ? " animate-on-scroll-strong" : "";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`min-w-0 max-w-full animate-on-scroll${strongClass} ${inView ? "animate-on-scroll-in-view" : ""} ${className}`.trim()}
      style={inView && delay ? { animationDelay: delay } : undefined}
    >
      {children}
    </div>
  );
}
