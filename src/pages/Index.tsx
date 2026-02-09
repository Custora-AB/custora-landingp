import { useState } from "react";
import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { Footer } from "@/components/landing/Footer";
import { WaitlistDialog } from "@/components/landing/WaitlistDialog";

const Index = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <Navigation onWaitlistClick={() => setWaitlistOpen(true)} />
      <div className="flex-1">
        <Hero onWaitlistClick={() => setWaitlistOpen(true)} />
      </div>
      <Footer />
      <WaitlistDialog open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  );
};

export default Index;
