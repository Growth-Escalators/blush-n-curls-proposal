import { Magnet, MousePointerClick, RefreshCw, BarChart3, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const HERO_STATS = [
  { value: "187+", label: "Brands Scaled" },
  { value: "97%", label: "Client Retention" },
  { value: "₹10Cr+", label: "Ad Spend Managed" },
  { value: "4.9/5", label: "Google Rating" },
];

const TRUSTED_BY = [
  "Paraiso Comfortwears",
  "Elixzor",
  "Dr. Dheeraj Dubay",
  "SN Herbals",
  "Credo World",
  "Yellow Diaries",
];

const SATELLITES = [
  { icon: Magnet, label: "Acquisition", pos: "left-0 top-[2%] -translate-x-[8%]" },
  { icon: MousePointerClick, label: "Conversion", pos: "right-0 top-[2%] translate-x-[8%]" },
  { icon: RefreshCw, label: "Retention", pos: "left-0 bottom-[2%] -translate-x-[8%]" },
  { icon: BarChart3, label: "Intelligence", pos: "right-0 bottom-[2%] translate-x-[8%]" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-plum">
      {/* Ambient glows */}
      <div className="glow-berry pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full" />
      <div className="glow-gold pointer-events-none absolute bottom-[-10%] left-[-10%] h-[480px] w-[480px] rounded-full" />

      <Container className="relative pt-16 pb-14 sm:pt-20 lg:pt-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.12fr_1fr] lg:items-center lg:gap-10">
          {/* Left: copy */}
          <Reveal>
            <div className="max-w-[600px]">
              <Eyebrow color="gold" rule>
                Proposal for Blush N Curls
              </Eyebrow>

              <h1 className="mt-6 font-serif text-[2.75rem] font-semibold leading-[0.98] tracking-[-0.015em] text-cream sm:text-6xl lg:text-[4.2rem]">
                Growth,
                <br />
                Engineered For
                <br />
                <span className="text-berry">Blush N Curls.</span>
              </h1>

              <p className="mt-7 max-w-[480px] text-base leading-relaxed text-muted-on-dark sm:text-lg">
                A connected growth system engineered to acquire better
                customers, convert more bookings, grow repeat revenue — and
                show you exactly what&apos;s driving it, branch by branch.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Button href="#growth-system" variant="solid-berry" className="!px-8 !py-4">
                  Explore the Proposal
                </Button>
                <Button href="#contact" variant="text-cream" showArrow>
                  Book a Strategy Call
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Right: abstract growth-system composition — no photography, no faces */}
          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-[420px]">
              <div className="absolute inset-0 rounded-full border border-berry/20" />
              <div className="absolute inset-[13%] rounded-full border border-gold/20" />

              {/* Center node */}
              <div className="absolute inset-[27%] flex flex-col items-center justify-center rounded-tile bg-gradient-to-br from-berry via-berry-dark to-wine-soft p-4 text-center shadow-elevated">
                <span className="font-serif text-xl font-bold leading-tight text-cream sm:text-2xl">
                  Growth
                  <br />
                  System
                </span>
              </div>

              {/* Satellite capability chips */}
              {SATELLITES.map(({ icon: Icon, label, pos }) => (
                <div
                  key={label}
                  className={`absolute ${pos} flex items-center gap-2 rounded-2xl border border-border-dark bg-plum-soft/95 px-3 py-2.5 shadow-dark-card sm:px-3.5 sm:py-3`}
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold sm:h-8 sm:w-8">
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <span className="text-[11px] font-semibold text-cream sm:text-xs">{label}</span>
                </div>
              ))}
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-4 left-1/2 flex h-28 w-28 -translate-x-1/2 flex-col items-center justify-center rounded-full border-2 border-gold bg-ivory text-center shadow-elevated sm:h-32 sm:w-32 lg:-left-6 lg:translate-x-0">
              <MapPin className="h-4 w-4 text-berry" strokeWidth={2} aria-hidden="true" />
              <span className="mt-1 font-serif text-2xl font-bold leading-none text-ink">3</span>
              <span className="mt-1 text-[10px] font-semibold leading-tight text-muted">
                Branches
                <br />
                in Dubai
              </span>
            </div>
          </Reveal>
        </div>

        {/* Stat row */}
        <Reveal delay={0.25} className="mt-20 lg:mt-24">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border-dark pt-10 sm:grid-cols-4 sm:gap-x-8">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-bold text-cream sm:text-4xl">{stat.value}</p>
                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-on-dark sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Trust strip */}
        <Reveal delay={0.32} className="mt-10">
          <div className="flex flex-col gap-4 border-t border-border-dark pt-6 sm:flex-row sm:items-center sm:justify-between">
            <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              The team behind this proposal has scaled
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {TRUSTED_BY.map((name) => (
                <span key={name} className="text-xs font-medium text-muted-on-dark sm:text-sm">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
