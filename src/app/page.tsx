import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OpportunitySection from "@/components/OpportunitySection";
import GrowthSystemSection from "@/components/GrowthSystemSection";
import InsightSection from "@/components/InsightSection";
import ExecutionTimelineSection from "@/components/ExecutionTimelineSection";
import AuditSection from "@/components/AuditSection";
import PackagesSection from "@/components/PackagesSection";
import CustomerEconomicsSection from "@/components/CustomerEconomicsSection";
import LifecycleSection from "@/components/LifecycleSection";
import SuccessSection from "@/components/SuccessSection";
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
        <GrowthSystemSection />
        <InsightSection />
        <ExecutionTimelineSection />
        <AuditSection />
        <PackagesSection />
        <CustomerEconomicsSection />
        <LifecycleSection />
        <SuccessSection />
        <ScopeSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
