import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/landing/TypewriterText";
import { motion, useInView } from "framer-motion";
import { modules, ModuleDialog, type ModuleInfo } from "@/components/landing/ModuleDialog";
import { WorkflowIllustration } from "@/components/landing/WorkflowIllustration";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroProps {
  onPilotClick: () => void;
}

export function Hero({ onPilotClick }: HeroProps) {
  const [headlineDone, setHeadlineDone] = useState(false);
  const [subDone, setSubDone] = useState(false);
  const [activeModule, setActiveModule] = useState<ModuleInfo | null>(null);
  const isMobile = useIsMobile();
  const illustrationRef = useRef<HTMLDivElement>(null);
  const illustrationInView = useInView(illustrationRef, { once: true, amount: 0.3 });
  const shouldAnimateIllustration = isMobile ? illustrationInView : subDone;

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

              <motion.p
                className="text-base lg:text-lg text-muted-foreground max-w-lg mb-5"
                initial={{ opacity: 0, y: 12 }}
                animate={headlineDone ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onAnimationComplete={() => {
                  if (headlineDone) setSubDone(true);
                }}
              >
                A single source of truth for share registers, compliance, and stakeholder collaboration.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: subDone ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6 relative bg-primary rounded-2xl p-5">
                  <div className="space-y-0">
                    {modules.map((m, i) => (
                      <motion.button
                        key={m.title}
                        onClick={() => setActiveModule(m)}
                        className="relative flex items-center gap-4 w-full text-left py-3 px-3 -mx-0 rounded-xl hover:bg-primary-foreground/10 transition-all duration-200 group cursor-pointer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={subDone ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.35, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                      >
                        <div className="relative z-10 w-10 h-10 rounded-xl bg-primary-foreground/15 group-hover:bg-primary-foreground/25 flex items-center justify-center shrink-0 transition-colors duration-200">
                          <m.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-medium text-primary-foreground group-hover:text-accent transition-colors">
                            {m.title}
                          </span>
                          <span className="block text-xs text-primary-foreground/60 mt-0.5">{m.tagline}</span>
                        </div>
                        <span className="text-primary-foreground/30 group-hover:text-accent transition-colors text-xs">
                          →
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={subDone ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.1 + modules.length * 0.1, ease: "easeOut" }}
                >
                  <Button
                    variant="default"
                    size="lg"
                    onClick={onPilotClick}
                    className="shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Become pilot customer
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            <div ref={illustrationRef} className="flex items-center justify-center">
              <WorkflowIllustration animate={shouldAnimateIllustration} />
            </div>
          </div>
        </div>
      </section>

      <ModuleDialog module={activeModule} onClose={() => setActiveModule(null)} />
    </>
  );
}
