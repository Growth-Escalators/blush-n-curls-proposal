"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "The Opportunity", href: "#opportunity" },
  { label: "Our Approach", href: "#approach" },
  { label: "Packages", href: "#packages" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Success Metrics", href: "#success-metrics" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-border-beige bg-ivory/95 shadow-card"
          : "border-transparent bg-ivory/90"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        {/* Wordmark */}
        <Link href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-bold text-ink">
            Blush N Curls
          </span>
          <span className="mt-1 text-[10px] font-medium tracking-[0.2em] text-muted">
            LUXURY SALON
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-ink/80 transition-colors hover:text-rose"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            href="#packages"
            variant="solid-rose"
            className="!px-5 !py-2.5 text-sm"
          >
            Let&apos;s Grow Together
          </Button>
        </div>

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-full p-2 text-ink transition-colors hover:text-rose lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="h-6 w-6" strokeWidth={1.75} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.75} />
          )}
        </button>
      </Container>

      {/* Mobile dropdown panel */}
      {isOpen && (
        <div className="border-t border-border-beige bg-ivory lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-2.5 font-sans text-sm text-ink/80 transition-colors hover:text-rose"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2" onClick={() => setIsOpen(false)}>
              <Button
                href="#packages"
                variant="solid-rose"
                className="!px-5 !py-2.5 w-full text-sm"
              >
                Let&apos;s Grow Together
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
