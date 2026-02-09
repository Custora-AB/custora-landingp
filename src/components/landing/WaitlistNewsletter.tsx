import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CheckCircle } from "lucide-react";

export function WaitlistNewsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-28" id="waitlist">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-md mx-auto text-center">
          {isSubmitted ? (
            <div className="space-y-4">
              <CheckCircle className="w-10 h-10 text-accent mx-auto" />
              <h3 className="text-xl font-semibold text-foreground">You're on the list</h3>
              <p className="text-sm text-muted-foreground">We'll be in touch soon.</p>
            </div>
          ) : (
            <>
              <h2 className="mb-3">Get early access</h2>
              <p className="text-muted-foreground mb-8">
                Join the waitlist to be first in line.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="h-11"
                />
                <Input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company (optional)"
                  className="h-11"
                />
                <Button variant="hero" size="lg" className="w-full">
                  Join waitlist
                </Button>
                <p className="text-xs text-muted-foreground pt-1">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
