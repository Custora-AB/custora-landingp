import { useState } from "react";
import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { Footer } from "@/components/landing/Footer";
import { WaitlistDialog } from "@/components/landing/WaitlistDialog";
import { PilotDialog } from "@/components/landing/PilotDialog";


const Index = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [pilotOpen, setPilotOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-y-auto">
      <Navigation onWaitlistClick={() => setWaitlistOpen(true)} onPilotClick={() => setPilotOpen(true)} />
      <div className="flex-1">
        <Hero onWaitlistClick={() => setWaitlistOpen(true)} onPilotClick={() => setPilotOpen(true)} />
      </div>
      <Footer />
      <WaitlistDialog open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
      <PilotDialog open={pilotOpen} onClose={() => setPilotOpen(false)} />
    </div>
  );
};

export default Index;
