import { Button } from "@/components/ui/button";
import productMockup from "@/assets/product-mockup.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="mb-6">
            Ownership infrastructure for private companies
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            One platform for share registers, compliance, and stakeholder collaboration.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="#waitlist">Join waitlist</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-4xl mx-auto"
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
    </section>
  );
}
