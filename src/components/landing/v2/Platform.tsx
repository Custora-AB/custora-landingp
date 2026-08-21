import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { modules } from "./content";

export function Platform() {
  const [activeId, setActiveId] = useState(modules[0].id);
  const active = modules.find((m) => m.id === activeId) ?? modules[0];

  return (
    <section id="platform" className="scroll-mt-20 bg-secondary/50 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-accent">
            The platform
          </p>
          <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
            Four modules, one connected record
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Each module stands on its own. Together they cover the full ownership
            lifecycle — from the register to the filing.
          </p>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          <div className="flex flex-col gap-2" role="tablist" aria-label="Platform modules">
            {modules.map((m) => {
              const isActive = m.id === active.id;
              return (
                <button
                  key={m.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${m.id}`}
                  id={`tab-${m.id}`}
                  onClick={() => setActiveId(m.id)}
                  className={`group flex items-start gap-4 rounded-xl border p-4 text-left transition-all duration-200 ${
                    isActive
                      ? "border-accent/40 bg-card shadow-card"
                      : "border-transparent hover:border-border hover:bg-card/60"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isActive ? "bg-accent text-accent-foreground" : "bg-accent/10 text-accent"
                    }`}
                  >
                    <m.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-foreground">
                      {m.title}
                    </span>
                    <span className="mt-0.5 block text-sm leading-snug text-muted-foreground">
                      {m.tagline}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-card lg:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                id={`panel-${active.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${active.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <h3 className="font-display text-2xl tracking-tight text-foreground">
                  {active.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{active.tagline}</p>

                <ul className="mt-7 space-y-3.5">
                  {active.details.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                        <Check className="h-3 w-3 text-accent" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
