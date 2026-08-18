import { ReactNode } from "react";

type Fill = "ink" | "rose" | "gold" | "outline-rose" | "outline-gold" | "blush";
type Size = "sm" | "md" | "lg";

type IconCircleProps = {
  children: ReactNode;
  fill?: Fill;
  size?: Size;
  className?: string;
};

const fillMap: Record<Fill, string> = {
  ink: "bg-ink text-cream-text",
  rose: "bg-rose text-cream-text",
  gold: "bg-gold text-cream-text",
  blush: "bg-blush-card text-rose",
  "outline-rose": "border border-rose/50 text-rose bg-transparent",
  "outline-gold": "border border-gold/50 text-gold bg-transparent",
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
 * Circular icon badge used across cards, the Growth Engine stages,
 * and Success Metrics. Pass a lucide-react icon as children.
 */
export default function IconCircle({
  children,
  fill = "rose",
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
