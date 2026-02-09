import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/landing/TypewriterText";
import { motion } from "framer-motion";
import productMockup from "@/assets/product-mockup.png";
import { modules, ModuleDialog, type ModuleInfo } from "@/components/landing/ModuleDialog";

interface HeroProps {
  onWaitlistClick: () => void;
}

export function Hero({ onWaitlistClick }: HeroProps) {
  const [headlineDone, setHeadlineDone] = useState(false);
  const [subDone, setSubDone] = useState(false);
  const [activeModule, setActiveModule] = useState<ModuleInfo | null>(null);

  return (
    <>
      <section className="pt-20 pb-0 lg:pt-24 lg:pb-0 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 leading-[1.1] min-h-[1.8em]">
                <TypewriterText
                  text="Infrastructure for ownership in private companies"
                  speed={30}
                  delay={300}
                  onComplete={() => setHeadlineDone(true)}
                />
              </h1>

              <p className="text-base lg:text-lg text-muted-foreground max-w-lg mb-5 min-h-[1.4em]">
                {headlineDone && (
                  <TypewriterText
                    text="A single source of truth for share registers, compliance, and stakeholder collaboration."
                    speed={18}
                    delay={100}
                    onComplete={() => setSubDone(true)}
                  />
                )}
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: subDone ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="space-y-2 mb-6">
                  {modules.map((m) => (
                    <li key={m.title}>
                      <button
                        onClick={() => setActiveModule(m)}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
                      >
                        <m.icon className="w-4 h-4 text-accent shrink-0" />
                        <span className="group-hover:underline underline-offset-2">{m.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>

                <Button variant="hero" size="lg" onClick={onWaitlistClick}>
                  Join waitlist
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: subDone ? 1 : 0, y: subDone ? 0 : 20 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="rounded-xl border border-border bg-card p-2 shadow-lg">
                <img
                  src={productMockup}
                  alt="Custora platform — share register and cap table management"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ModuleDialog module={activeModule} onClose={() => setActiveModule(null)} />
    </>
  );
}
