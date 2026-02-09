import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/landing/TypewriterText";
import { motion } from "framer-motion";
import { modules, ModuleDialog, type ModuleInfo } from "@/components/landing/ModuleDialog";
import { WorkflowIllustration } from "@/components/landing/WorkflowIllustration";

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
                <div className="mb-6 relative">
                  {/* Vertical connecting line */}
                  <div className="absolute left-5 top-3 bottom-3 w-px bg-border" />

                  <div className="space-y-0">
                    {modules.map((m, i) => (
                      <button
                        key={m.title}
                        onClick={() => setActiveModule(m)}
                        className="relative flex items-center gap-4 w-full text-left py-3 px-3 -mx-3 rounded-xl hover:bg-secondary/60 transition-all duration-200 group cursor-pointer"
                      >
                        {/* Node dot on the line */}
                        <div className="relative z-10 w-10 h-10 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-colors duration-200 ring-2 ring-background">
                          <m.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                            {m.title}
                          </span>
                          <span className="block text-xs text-muted-foreground mt-0.5">{m.tagline}</span>
                        </div>
                        <span className="text-muted-foreground/40 group-hover:text-accent transition-colors text-xs">
                          →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <Button variant="hero" size="lg" onClick={onWaitlistClick}>
                  Join waitlist
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center justify-center">
              <WorkflowIllustration animate={subDone} />
            </div>
          </div>
        </div>
      </section>

      <ModuleDialog module={activeModule} onClose={() => setActiveModule(null)} />
    </>
  );
}
