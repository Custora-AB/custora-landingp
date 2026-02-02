import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import productMockup from "@/assets/product-mockup.png";

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
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
            <h1 className="text-foreground">
                Infrastructure for ownership management in European companies
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
                A single source of truth for share registers, compliance, and stakeholder collaboration across your portfolio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Request a demo
              </Button>
              <Button variant="heroSecondary" size="xl">
                <Play className="w-5 h-5 mr-2" />
                Watch a video tour
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Trusted by leading firms</p>
              <div className="flex flex-wrap gap-6 items-center opacity-60">
                <span className="text-sm font-medium text-foreground">PE Partners</span>
                <span className="text-sm font-medium text-foreground">Nordic Growth</span>
                <span className="text-sm font-medium text-foreground">LegalTech AG</span>
                <span className="text-sm font-medium text-foreground">HoldCo Group</span>
              </div>
            </div>
          </div>

          {/* Right: Product Mockup */}
          <div className="relative animate-slide-in-right delay-200">
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
              <div className="absolute -bottom-4 -left-4 card-glass px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">Live sync enabled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
