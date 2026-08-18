import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OpportunitySection from "@/components/OpportunitySection";
import GrowthEngine from "@/components/GrowthEngine";
import PricingSection from "@/components/PricingSection";
import GrowthEconomicsSection from "@/components/GrowthEconomicsSection";
import BranchIntelligenceSection from "@/components/BranchIntelligenceSection";
import LifecycleSection from "@/components/LifecycleSection";
import Roadmap from "@/components/Roadmap";
import SuccessMetrics from "@/components/SuccessMetrics";
import ScopeSection from "@/components/ScopeSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <OpportunitySection />
        <GrowthEngine />
        <PricingSection />
        <GrowthEconomicsSection />
        <BranchIntelligenceSection />
        <LifecycleSection />
        <Roadmap />
        <SuccessMetrics />
        <ScopeSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
