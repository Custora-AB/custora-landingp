import { NavBar } from "@/components/landing/v2/NavBar";
import { Hero } from "@/components/landing/v2/Hero";
import { Benefits } from "@/components/landing/v2/Benefits";

const Landing = () => (
  <div className="relative min-h-screen bg-background">
    <NavBar />
    <main>
      <Hero />
      <Benefits />
    </main>
  </div>
);

export default Landing;
