import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** Use for sections that need the image/content to bleed to the viewport edge. */
  bleed?: boolean;
};

/**
 * Shared content-width wrapper. Keeps every section's max-width and
 * horizontal padding rhythm consistent (max-w-[1220px], responsive px).
 */
export default function Container({ children, className = "", bleed = false }: ContainerProps) {
  if (bleed) {
    return <div className={className}>{children}</div>;
  }
  return (
    <div className={`mx-auto w-full max-w-[1220px] px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
