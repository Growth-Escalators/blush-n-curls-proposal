import { ReactNode } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  eyebrowColor?: "berry" | "gold" | "cream";
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Text color for the headline — defaults to ink (light bg). Use "cream" on dark sections. */
  tone?: "ink" | "cream";
  size?: "md" | "lg" | "xl";
  className?: string;
};

const sizeMap = {
  md: "text-3xl sm:text-4xl lg:text-[2.75rem]",
  lg: "text-4xl sm:text-5xl lg:text-[3.25rem]",
  xl: "text-4xl sm:text-5xl lg:text-6xl",
};

/**
 * Consistent eyebrow + serif headline + optional description block used to
 * open every one of the 12 proposal sections. Keeping this in one place is
 * what makes the type scale and rhythm feel like one system end to end.
 */
export default function SectionHeading({
  eyebrow,
  eyebrowColor = "berry",
  title,
  description,
  align = "left",
  tone = "ink",
  size = "md",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Reveal className={`${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}>
      <Eyebrow color={eyebrowColor} align={align} rule={!isCenter}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={`mt-4 font-serif font-semibold leading-[1.05] tracking-[-0.01em] ${sizeMap[size]} ${
          tone === "cream" ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-[15px] leading-relaxed sm:text-base ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-xl"
          } ${tone === "cream" ? "text-muted-on-dark" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
