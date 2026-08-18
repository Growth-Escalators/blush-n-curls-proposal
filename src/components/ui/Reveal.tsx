"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "span";
};

/**
 * Subtle reveal-on-scroll wrapper. Use around section headings, cards,
 * and rows so content fades/lifts in once as the viewer scrolls to it.
 * Restrained: short duration, small travel distance, no bounce.
 *
 * Visibility is driven explicitly from `useInView` (rather than relying on
 * `whileInView`'s own observer) plus a timed fallback, so content can never
 * get stuck at opacity:0 — e.g. under automated full-page screenshot tools
 * that manipulate scroll/viewport in ways a live IntersectionObserver can miss.
 */
export default function Reveal({ children, className = "", delay = 0, y = 20 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setForceVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const visible = inView || forceVisible;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={visible ? "show" : "hidden"}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
