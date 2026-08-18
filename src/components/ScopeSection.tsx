import { CheckCircle2, Check, Info } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const included = [
  "Marketing strategy",
  "Campaign management",
  "Creative design",
  "Video editing using supplied footage",
  "Reporting",
  "Website / CRO improvements under relevant package scope",
  "SEO and lifecycle marketing work under relevant package scope",
];

const thirdParty = [
  "Paid media spend",
  "Professional photo/video production",
  "Raw content production",
  "WhatsApp / API charges",
  "Email platform charges",
  "Software / CRM tools",
  "Premium plugins or apps",
  "Major custom development outside agreed optimisation scope",
];

export default function ScopeSection() {
  return (
    <section id="scope" className="bg-ivory py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Scope & Investment"
          eyebrowColor="berry"
          align="center"
          size="lg"
          title="Clear Scope. No Surprises."
          description="Complete transparency on what Growth Escalators builds and manages, and what runs as a separate, pass-through cost."
        />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          <Reveal delay={0.05}>
            <div className="h-full rounded-card border border-border-light bg-white/70 p-8 shadow-card">
              <h3 className="flex items-center gap-2.5 font-serif text-base font-semibold text-ink">
                <CheckCircle2 className="h-5 w-5 text-berry" aria-hidden="true" />
                Included
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-berry" strokeWidth={2.5} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full rounded-card border border-border-light bg-blush/30 p-8">
              <h3 className="flex items-center gap-2.5 font-serif text-base font-semibold text-ink">
                <Info className="h-5 w-5 text-gold-dark" aria-hidden="true" />
                Separate / Third-Party Costs
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                {thirdParty.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-dark/70" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
