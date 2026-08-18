import { CheckCircle2, Check, Info } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const included = [
  "Marketing strategy",
  "Campaign management",
  "Creative design",
  "Video editing using supplied footage",
  "Reporting",
  "Agreed website/CRO updates under Growth Partnership",
  "Agreed SEO and lifecycle marketing work",
];

const thirdParty = [
  "Paid media budget",
  "Professional photo/video shoots",
  "Raw content production",
  "WhatsApp/API charges",
  "Email platform costs",
  "CRM/software subscriptions",
  "Premium Shopify/WordPress plugins if required",
  "Large custom development projects outside optimisation scope",
];

export default function ScopeSection() {
  return (
    <section id="scope" className="bg-ivory py-20 md:py-28">
      <Container>
        <Reveal>
          <h2 className="font-serif text-ink text-3xl sm:text-4xl font-semibold text-center">
            Clear Scope. No Surprises.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto pt-10">
          <Reveal delay={0.05}>
            <div>
              <h3 className="text-ink font-semibold text-base mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-rose h-5 w-5" />
                Included
              </h3>
              <ul className="space-y-2.5 text-sm text-muted">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="text-rose h-4 w-4 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h3 className="text-ink font-semibold text-base mb-4 flex items-center gap-2">
                <Info className="text-gold h-5 w-5" />
                Separate / Third-Party Costs
              </h3>
              <ul className="space-y-2.5 text-sm text-muted">
                {thirdParty.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold/60 mt-2 shrink-0" />
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
