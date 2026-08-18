import {
  Megaphone,
  AppWindow,
  Search,
  MessageCircle,
  Star,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

type Tile = {
  icon: LucideIcon;
  title: string;
  description: string;
  hero?: boolean;
};

const tiles: Tile[] = [
  {
    icon: Megaphone,
    title: "Paid Acquisition",
    description: "Meta Ads and Google Ads engineered around bookings — not vanity clicks.",
  },
  {
    icon: AppWindow,
    title: "Conversion",
    description: "Website, booking journey and offers built to turn visits into appointments.",
  },
  {
    icon: Search,
    title: "Organic Growth",
    description: "Local SEO and AI search visibility for every branch, in every neighbourhood.",
  },
  {
    icon: MessageCircle,
    title: "Retention",
    description: "WhatsApp, email and memberships that keep clients coming back on schedule.",
  },
  {
    icon: Star,
    title: "Reputation",
    description: "Review generation and referrals that turn happy clients into new ones.",
  },
  {
    icon: LineChart,
    title: "Intelligence",
    description:
      "Tracking, analytics and revenue insight connecting every branch, service and campaign to what it actually earns.",
    hero: true,
  },
];

const THREAD = ["Acquire", "Convert", "Retain", "Advocate"];

export default function GrowthSystemSection() {
  return (
    <section id="growth-system" className="bg-ivory py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Connected Capabilities"
          eyebrowColor="berry"
          align="center"
          size="lg"
          title="Every Growth Lever. One Connected System."
          description="Acquisition, conversion, retention, reputation and intelligence work better when they share one commercial goal. We connect the pieces so growth compounds instead of fragmenting."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {tiles.map((tile, i) => {
            const Icon = tile.icon;
            return (
              <Reveal key={tile.title} delay={0.06 * (i + 1)}>
                <div
                  className={`group h-full rounded-tile p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
                    tile.hero
                      ? "bg-gradient-to-br from-berry via-berry-dark to-wine-soft shadow-elevated"
                      : "border border-border-light bg-blush/50 hover:shadow-card-hover"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      tile.hero ? "bg-white/15 text-cream" : "bg-white text-berry"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3
                    className={`mt-6 font-serif text-xl font-semibold sm:text-2xl ${
                      tile.hero ? "text-cream" : "text-ink"
                    }`}
                  >
                    {tile.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed sm:text-[15px] ${
                      tile.hero ? "text-cream/80" : "text-muted"
                    }`}
                  >
                    {tile.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Connecting thread — the same journey previously shown as a full section, now a compact label */}
        <Reveal delay={0.3} className="mt-12 lg:mt-14">
          <div className="mx-auto flex w-full max-w-xl flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-pill border border-border-light bg-white/60 px-6 py-3.5">
            {THREAD.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                  {step}
                </span>
                {i < THREAD.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-berry/50" aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
