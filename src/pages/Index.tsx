import { useState } from "react";
import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { Footer } from "@/components/landing/Footer";
import { PilotDialog } from "@/components/landing/PilotDialog";


const Index = () => {
  const [pilotOpen, setPilotOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-y-auto">
      <Navigation onPilotClick={() => setPilotOpen(true)} />
      <div className="flex-1">
        <Hero onPilotClick={() => setPilotOpen(true)} />
      </div>
      <Footer />
      <PilotDialog open={pilotOpen} onClose={() => setPilotOpen(false)} />
    </div>
  );
};

export default Index;
