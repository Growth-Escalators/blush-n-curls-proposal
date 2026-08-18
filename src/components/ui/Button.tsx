import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant =
  | "solid-rose"
  | "solid-gold"
  | "outline-rose"
  | "outline-cream"
  | "text-rose"
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
  "group inline-flex items-center justify-center gap-2 font-sans text-[15px] font-medium transition-all duration-300 ease-out";

const variants: Record<Variant, string> = {
  "solid-rose":
    "rounded-full bg-rose px-7 py-3.5 text-cream-text shadow-[var(--shadow-rose-glow)] hover:bg-rose-dark hover:-translate-y-0.5",
  "solid-gold":
    "rounded-full bg-gold px-7 py-3.5 text-cream-text shadow-[0_16px_40px_-10px_rgb(176_128_56_/_0.4)] hover:bg-gold-dark hover:-translate-y-0.5",
  "outline-rose":
    "rounded-full border border-rose/40 px-7 py-3.5 text-rose hover:bg-rose hover:text-cream-text hover:border-rose",
  "outline-cream":
    "rounded-full border border-white/30 px-7 py-3.5 text-cream-text hover:bg-white/10 hover:border-white/60",
  "text-rose": "text-ink hover:text-rose px-0 py-0",
  "text-cream": "text-cream-text/90 hover:text-white px-0 py-0",
};

export default function Button({
  children,
  href = "#",
  variant = "solid-rose",
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
