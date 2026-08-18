import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant =
  | "solid-berry"
  | "solid-gold"
  | "solid-cream"
  | "outline-berry"
  | "outline-cream"
  | "text-berry"
  | "text-cream";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
  icon?: ReactNode;
};

const base =
  "group inline-flex items-center justify-center gap-2 font-sans text-[15px] font-semibold transition-all duration-300 ease-out";

const variants: Record<Variant, string> = {
  "solid-berry":
    "rounded-pill bg-berry px-7 py-3.5 text-cream shadow-[var(--shadow-berry-glow)] hover:bg-berry-dark hover:-translate-y-0.5",
  "solid-gold":
    "rounded-pill bg-gold px-7 py-3.5 text-plum shadow-[var(--shadow-gold-glow)] hover:bg-gold-dark hover:-translate-y-0.5",
  "solid-cream":
    "rounded-pill bg-cream px-7 py-3.5 text-plum shadow-[var(--shadow-badge)] hover:bg-white hover:-translate-y-0.5",
  "outline-berry":
    "rounded-pill border border-berry/40 px-7 py-3.5 text-berry hover:bg-berry hover:text-cream hover:border-berry",
  "outline-cream":
    "rounded-pill border border-cream/30 px-7 py-3.5 text-cream hover:bg-cream/10 hover:border-cream/60",
  "text-berry": "text-ink hover:text-berry px-0 py-0 font-semibold",
  "text-cream": "text-cream/90 hover:text-white px-0 py-0 font-semibold",
};

export default function Button({
  children,
  href = "#",
  variant = "solid-berry",
  className = "",
  showArrow = false,
  icon,
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {icon}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2}
        />
      )}
    </Link>
  );
}
