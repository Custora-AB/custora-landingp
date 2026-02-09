import { useState } from "react";
import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { ModulesGrid } from "@/components/landing/ModulesGrid";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { Footer } from "@/components/landing/Footer";
import { WaitlistDialog } from "@/components/landing/WaitlistDialog";

const Index = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onWaitlistClick={() => setWaitlistOpen(true)} />
      <Hero onWaitlistClick={() => setWaitlistOpen(true)} />
      <ModulesGrid />
      <HowItWorks />
      <TrustStrip />
      <Footer />
      <WaitlistDialog open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  );
};

export default Index;
