import { Phone, Mail, Globe } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-near-black py-12 md:py-16">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-rose flex items-center justify-center text-cream-text font-serif font-semibold text-sm">
                G
              </div>
              <span className="font-serif text-cream-text text-lg font-semibold">
                Growth Escalators
              </span>
            </div>
            <p className="text-muted-on-dark text-sm max-w-xs pt-3">
              We build growth engines that bring you more customers, more
              bookings and more revenue.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-cream-text/90">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-rose" />
              <span>+971 52 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-rose" />
              <span>hello@growthescalators.ae</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-rose" />
              <span>www.growthescalators.ae</span>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-8 border-t border-border-beige-dark text-xs text-muted-on-dark text-center">
          © 2026 Growth Escalators. Prepared exclusively for Blush N Curls.
        </div>
      </Container>
    </footer>
  );
}
