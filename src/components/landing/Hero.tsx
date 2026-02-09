import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/landing/TypewriterText";
import { motion } from "framer-motion";
import workflowHero from "@/assets/workflow-hero.png";

export function Hero() {
  const [headlineDone, setHeadlineDone] = useState(false);
  const [subDone, setSubDone] = useState(false);

  return (
    <section className="pt-28 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="mb-6 min-h-[2.4em]">
            <TypewriterText
              text="Infrastructure for ownership in private companies"
              speed={35}
              delay={300}
              onComplete={() => setHeadlineDone(true)}
            />
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 min-h-[1.8em]">
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#waitlist">Join waitlist</a>
            </Button>
            <Button variant="heroSecondary" size="xl" asChild>
              <a href="#waitlist">Book a pilot call</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: subDone ? 1 : 0, y: subDone ? 0 : 30 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-xl border border-border bg-card p-2 shadow-lg">
            <img
              src={workflowHero}
              alt="Custora — connected ownership workflows"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
