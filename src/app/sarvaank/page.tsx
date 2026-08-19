import type { Metadata } from "next";
import SarvaankProposal from "@/components/SarvaankProposal";

export const metadata: Metadata = {
  title: "Sarvaank 30-Day Paid Growth Pilot | Growth Escalators",
  description:
    "A private 30-day paid growth pilot proposal for Sarvaank covering student acquisition, activation, paid conversion, CAC and scale-readiness.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function SarvaankPage() {
  return <SarvaankProposal />;
}
