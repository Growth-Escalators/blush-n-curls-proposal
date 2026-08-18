import { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  color?: "rose" | "gold";
  align?: "left" | "center";
  className?: string;
};

const colorMap = {
  rose: "text-rose",
  gold: "text-gold",
};

/**
 * Small-caps label used above every section headline
 * (e.g. "THE OPPORTUNITY", "OUR APPROACH").
 */
export default function Eyebrow({
  children,
  color = "rose",
  align = "left",
  className = "",
}: EyebrowProps) {
  return (
    <p
      className={`text-xs sm:[13px] font-semibold uppercase tracking-[0.18em] ${colorMap[color]} ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {children}
    </p>
  );
}
