import { NavBar } from "@/components/landing/v2/NavBar";
import { Hero } from "@/components/landing/v2/Hero";

const Landing = () => (
  <div className="relative min-h-screen bg-background">
    <NavBar />
    <main>
      <Hero />
    </main>
  </div>
);

export default Landing;
