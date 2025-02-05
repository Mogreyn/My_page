"use client";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";
import "@/app/globals.scss";

export default function AnimatedWrapper({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className={`fade-in ${inView ? "visible" : ""}`}>
      {children}
    </div>
  );
}
