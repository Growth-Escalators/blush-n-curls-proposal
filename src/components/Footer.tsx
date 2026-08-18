import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import Container from "@/components/ui/Container";

const PROPOSAL_LINKS = [
  { label: "Opportunity", href: "#opportunity" },
  { label: "Growth System", href: "#growth-system" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Packages", href: "#packages" },
  { label: "Outcomes", href: "#outcomes" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-dark bg-plum py-14 md:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-berry font-serif text-sm font-semibold text-cream">
                G
              </div>
              <span className="font-serif text-lg font-semibold text-cream">
                Growth Escalators
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-on-dark">
              A connected growth system for premium consumer brands — acquisition,
              conversion, retention and the intelligence to know what&apos;s actually working.
            </p>
          </div>

          {/* Proposal links */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
              Proposal
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {PROPOSAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-on-dark transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
              Contact
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-muted-on-dark">
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-berry" aria-hidden="true" />
                <span>+971 52 123 4567</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-berry" aria-hidden="true" />
                <span>hello@growthescalators.ae</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 text-berry" aria-hidden="true" />
                <span>www.growthescalators.ae</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border-dark pt-6 text-center text-xs text-muted-on-dark">
          © 2026 Growth Escalators. Prepared exclusively for Blush N Curls.
        </div>
      </Container>
    </footer>
  );
}
