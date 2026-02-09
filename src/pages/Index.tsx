import { useState } from "react";
import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { Footer } from "@/components/landing/Footer";
import { WaitlistDialog } from "@/components/landing/WaitlistDialog";
import networkBg from "@/assets/network-bg.png";

const Index = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden relative">
      {/* Background image with fade-out from top-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${networkBg})`,
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "70%",
          maskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.2) 50%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.2) 50%, transparent 70%)",
        }}
      />
      <Navigation onWaitlistClick={() => setWaitlistOpen(true)} />
      <div className="flex-1 relative z-10">
        <Hero onWaitlistClick={() => setWaitlistOpen(true)} />
      </div>
      <Footer />
      <WaitlistDialog open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  );
};

export default Index;
