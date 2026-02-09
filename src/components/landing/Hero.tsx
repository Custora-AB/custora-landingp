import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/landing/TypewriterText";
import { motion } from "framer-motion";
import productMockup from "@/assets/product-mockup.png";

interface HeroProps {
  onWaitlistClick: () => void;
}

export function Hero({ onWaitlistClick }: HeroProps) {
  const [headlineDone, setHeadlineDone] = useState(false);
  const [subDone, setSubDone] = useState(false);

  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h1 className="mb-6 min-h-[2.4em]">
              <TypewriterText
                text="Infrastructure for ownership in private companies"
                speed={35}
                delay={300}
                onComplete={() => setHeadlineDone(true)}
              />
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg mb-10 min-h-[1.8em]">
              {headlineDone && (
                <TypewriterText
                  text="A single source of truth for share registers, compliance, and stakeholder collaboration across your portfolio."
                  speed={20}
                  delay={100}
                  onComplete={() => setSubDone(true)}
                />
              )}
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: subDone ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <Button variant="hero" size="xl" onClick={onWaitlistClick}>
                Join waitlist
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: subDone ? 1 : 0, y: subDone ? 0 : 30 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
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
  );
}
