"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

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
 */
export default function Reveal({ children, className = "", delay = 0, y = 20 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
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
