import { NavBar } from "@/components/landing/v2/NavBar";
import { Hero } from "@/components/landing/v2/Hero";
import { Benefits } from "@/components/landing/v2/Benefits";
import { EarlyAccess } from "@/components/landing/v2/EarlyAccess";
import { SiteFooter } from "@/components/landing/v2/SiteFooter";

const Landing = () => (
  <div className="relative min-h-screen bg-background">
    <NavBar />
    <main>
      <Hero />
      <Benefits />
      <EarlyAccess />
    </main>
    <SiteFooter />
  </div>
);

export default Landing;
