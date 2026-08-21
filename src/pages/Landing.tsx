import { useState } from "react";
import { NavBar } from "@/components/landing/v2/NavBar";
import { Hero } from "@/components/landing/v2/Hero";
import { TrustBar } from "@/components/landing/v2/TrustBar";
import { Problem } from "@/components/landing/v2/Problem";
import { Platform } from "@/components/landing/v2/Platform";
import { HowItWorks } from "@/components/landing/v2/HowItWorks";
import { Security } from "@/components/landing/v2/Security";
import { FAQSection } from "@/components/landing/v2/FAQSection";
import { CallToAction } from "@/components/landing/v2/CallToAction";
import { SiteFooter } from "@/components/landing/v2/SiteFooter";
import { PilotDialog } from "@/components/landing/PilotDialog";

const Landing = () => {
  const [pilotOpen, setPilotOpen] = useState(false);
  const openPilot = () => setPilotOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <NavBar onPilotClick={openPilot} />
      <main>
        <Hero onPilotClick={openPilot} />
        <TrustBar />
        <Problem />
        <Platform />
        <HowItWorks />
        <Security />
        <FAQSection />
        <CallToAction onPilotClick={openPilot} />
      </main>
      <SiteFooter />
      <PilotDialog open={pilotOpen} onClose={() => setPilotOpen(false)} />
    </div>
  );
};

export default Landing;
