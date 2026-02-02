import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import productMockup from "@/assets/product-mockup.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-gradient-subtle">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-teal-light to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-foreground">
                Infrastructure for ownership management in European companies
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
                A single source of truth for share registers, compliance, and stakeholder collaboration across your portfolio.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="xl">
                Request a demo
              </Button>
              <Button variant="heroSecondary" size="xl">
                <Play className="w-5 h-5 mr-2" />
                Watch a video tour
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 border-t border-border"
            >
              <p className="text-sm text-muted-foreground mb-3">Trusted by leading firms</p>
              <div className="flex flex-wrap gap-6 items-center opacity-60">
                <span className="text-sm font-medium text-foreground">PE Partners</span>
                <span className="text-sm font-medium text-foreground">Nordic Growth</span>
                <span className="text-sm font-medium text-foreground">LegalTech AG</span>
                <span className="text-sm font-medium text-foreground">HoldCo Group</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Product Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal/20 to-accent/10 rounded-2xl blur-2xl" />
              
              {/* Main image container */}
              <div className="relative card-elevated p-2 lg:p-3">
                <img
                  src={productMockup}
                  alt="Custora platform interface showing connected ownership workflows"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute -bottom-4 -left-4 card-glass px-4 py-2 flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Live sync enabled</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
