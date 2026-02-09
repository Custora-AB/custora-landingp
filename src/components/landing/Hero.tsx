import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/landing/TypewriterText";
import { motion } from "framer-motion";

export function Hero() {
  const [headlineDone, setHeadlineDone] = useState(false);
  const [subDone, setSubDone] = useState(false);

  return (
    <section className="pt-28 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 min-h-[2.4em]">
            <TypewriterText
              text="Ownership infrastructure for private companies"
              speed={35}
              delay={300}
              onComplete={() => setHeadlineDone(true)}
            />
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 min-h-[1.8em]">
            {headlineDone && (
              <TypewriterText
                text="A system of record for share registers, governance, and compliance."
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
      </div>
    </section>
  );
}
