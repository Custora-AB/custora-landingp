import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ModulesGrid } from "@/components/landing/ModulesGrid";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { WaitlistNewsletter } from "@/components/landing/WaitlistNewsletter";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProblemSection />
      <ModulesGrid />
      <HowItWorks />
      <TrustStrip />
      <WaitlistNewsletter />
      <Footer />
    </div>
  );
};

export default Index;
