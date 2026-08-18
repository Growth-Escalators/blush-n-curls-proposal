"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Opportunity", href: "#opportunity" },
  { label: "Growth System", href: "#growth-system" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Packages", href: "#packages" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Contact", href: "#contact" },
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
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border-dark bg-plum/95 shadow-dark-card backdrop-blur-md"
          : "border-transparent bg-plum"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        {/* Wordmark */}
        <Link href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-bold text-cream">
            Blush N Curls
          </span>
          <span className="mt-1 text-[10px] font-semibold tracking-[0.24em] text-gold">
            GROWTH PARTNERSHIP PROPOSAL
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-cream/70 transition-colors hover:text-berry-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            href="#packages"
            variant="solid-berry"
            className="!px-5 !py-2.5 text-sm"
          >
            View Packages
          </Button>
        </div>

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-full p-2 text-cream transition-colors hover:text-berry-light lg:hidden"
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
        <div className="border-t border-border-dark bg-plum lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-2.5 font-sans text-sm text-cream/80 transition-colors hover:text-berry-light"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2" onClick={() => setIsOpen(false)}>
              <Button
                href="#packages"
                variant="solid-berry"
                className="!px-5 !py-2.5 w-full text-sm"
              >
                View Packages
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
