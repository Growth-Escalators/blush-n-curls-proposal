import { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  color?: "berry" | "gold" | "cream";
  align?: "left" | "center";
  className?: string;
  /** Adds a short horizontal rule before the label — echoes the reference's confident label treatment. */
  rule?: boolean;
};

const colorMap = {
  berry: "text-berry",
  gold: "text-gold",
  cream: "text-cream",
};

const ruleColorMap = {
  berry: "bg-berry",
  gold: "bg-gold",
  cream: "bg-cream",
};

/**
 * Small-caps, wide-tracked label used above every section headline
 * (e.g. "THE OPPORTUNITY", "EVERY GROWTH LEVER").
 */
export default function Eyebrow({
  children,
  color = "berry",
  align = "left",
  className = "",
  rule = false,
}: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-2.5 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.24em] ${colorMap[color]} ${
        align === "center" ? "justify-center text-center" : "justify-start text-left"
      } ${className}`}
    >
      {rule && <span className={`h-px w-6 shrink-0 ${ruleColorMap[color]}`} aria-hidden="true" />}
      {children}
    </p>
  );
}
