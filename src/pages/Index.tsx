import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { ModulesGrid } from "@/components/landing/ModulesGrid";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { FAQ } from "@/components/landing/FAQ";
import { CTAForm } from "@/components/landing/CTAForm";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <ModulesGrid />
      <HowItWorks />
      <TrustStrip />
      <FAQ />
      <CTAForm />
      <Footer />
    </div>
  );
};

export default Index;
