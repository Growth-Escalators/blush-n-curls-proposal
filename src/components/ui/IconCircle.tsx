import { ReactNode } from "react";

type Fill =
  | "berry"
  | "gold"
  | "plum"
  | "blush"
  | "outline-berry"
  | "outline-gold"
  | "outline-cream";
type Size = "sm" | "md" | "lg";

type IconCircleProps = {
  children: ReactNode;
  fill?: Fill;
  size?: Size;
  className?: string;
};

const fillMap: Record<Fill, string> = {
  berry: "bg-berry text-cream",
  gold: "bg-gold text-plum",
  plum: "bg-plum text-cream",
  blush: "bg-blush text-berry-dark",
  "outline-berry": "border border-berry/50 text-berry bg-transparent",
  "outline-gold": "border border-gold/50 text-gold bg-transparent",
  "outline-cream": "border border-cream/40 text-cream bg-transparent",
};

const sizeMap: Record<Size, string> = {
  sm: "h-11 w-11",
  md: "h-14 w-14",
  lg: "h-20 w-20",
};

const iconSizeMap: Record<Size, string> = {
  sm: "[&>svg]:h-5 [&>svg]:w-5",
  md: "[&>svg]:h-6 [&>svg]:w-6",
  lg: "[&>svg]:h-8 [&>svg]:w-8",
};

/**
 * Circular icon badge used across cards, the timeline, and outcomes.
 * Pass a lucide-react icon as children.
 */
export default function IconCircle({
  children,
  fill = "berry",
  size = "md",
  className = "",
}: IconCircleProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full ${fillMap[fill]} ${sizeMap[size]} ${iconSizeMap[size]} ${className}`}
    >
      {children}
    </div>
  );
}
