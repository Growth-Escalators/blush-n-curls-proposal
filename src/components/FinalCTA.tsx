import { Check, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const trustPoints = [
  "Free growth consultation",
  "Custom strategy for your goals",
  "Transparent reporting",
  "A true growth partnership",
];

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-plum py-24 md:py-32">
      <div className="glow-berry pointer-events-none absolute -top-32 left-[-10%] h-[460px] w-[460px] rounded-full" />
      <div className="glow-gold pointer-events-none absolute -bottom-24 right-[-8%] h-[420px] w-[420px] rounded-full" />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
          {/* Left: headline */}
          <Reveal>
            <Eyebrow color="gold" rule>
              Let&apos;s Get Started
            </Eyebrow>
            <h2 className="mt-5 font-serif text-[2.25rem] font-semibold leading-[1.04] tracking-[-0.01em] text-cream sm:text-5xl lg:text-[3.25rem]">
              You Already Built The Brand.
              <br />
              Now Let&apos;s Build The{" "}
              <span className="text-berry">Growth Engine.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-on-dark sm:text-lg">
              Blush N Curls has the brand, the branches and the customers. What&apos;s
              missing is the connected system that turns that momentum into predictable,
              measurable growth — and this is exactly how we build it.
            </p>
          </Reveal>

          {/* Right: floating light card */}
          <Reveal delay={0.15}>
            <div className="rounded-card-lg bg-ivory p-8 shadow-elevated sm:p-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-berry">
                Ready When You Are
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Button href="#packages" variant="solid-berry" className="w-full !py-3.5">
                  Start With the 7-Day Growth Audit
                </Button>
                <Button
                  href="#"
                  variant="outline-berry"
                  className="w-full !py-3.5"
                  icon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
                >
                  Book a Strategy Call
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 border-t border-border-light pt-7 sm:grid-cols-2">
                {trustPoints.map((label) => (
                  <div key={label} className="flex items-center gap-2.5 text-sm text-ink">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/60 text-gold-dark">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <p className="mt-7 border-t border-border-light pt-5 text-xs text-muted">
                Prepared exclusively for Blush N Curls by Growth Escalators.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
