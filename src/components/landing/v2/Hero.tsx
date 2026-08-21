import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CapTablePreview } from "./CapTablePreview";

interface HeroProps {
  onPilotClick: () => void;
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero({ onPilotClick }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden bg-navy pb-20 pt-28 lg:pb-28 lg:pt-36">
      {/* Ambient field */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
        }}
      />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[120px]" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Now onboarding pilot customers in the Nordics
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease }}
              className="font-display text-4xl leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Ownership infrastructure for private companies
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/60"
            >
              One source of truth for the share register, regulatory reporting, and
              everything your investors need to see — built for European private
              companies and the rules they actually operate under.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                onClick={onPilotClick}
                className="group bg-white text-navy shadow-lg hover:bg-white/90"
              >
                Become pilot customer
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="border border-white/15 text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#platform">See the platform</a>
              </Button>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8"
            >
              {[
                { v: "4", l: "core modules" },
                { v: "EU", l: "data residency" },
                { v: "100%", l: "audit trail" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-2xl text-white">{s.v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.12em] text-white/40">
                    {s.l}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <CapTablePreview />
        </div>
      </div>
    </section>
  );
}
