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
          backgroundSize: "60%",
          maskImage: "linear-gradient(135deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.06) 25%, transparent 55%)",
          WebkitMaskImage: "linear-gradient(135deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.06) 25%, transparent 55%)",
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
