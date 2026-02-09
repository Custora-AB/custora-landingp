import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CheckCircle } from "lucide-react";

export function WaitlistNewsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [waitlist, setWaitlist] = useState(true);
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground" id="waitlist">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-md mx-auto text-center">
          {isSubmitted ? (
            <div className="space-y-4">
              <CheckCircle className="w-10 h-10 text-accent mx-auto" />
              <h3 className="text-xl font-semibold text-primary-foreground">You're on the list</h3>
              <p className="text-sm text-primary-foreground/70">We'll be in touch soon.</p>
            </div>
          ) : (
            <>
              <h2 className="mb-3 text-primary-foreground">Get early access</h2>
              <p className="text-primary-foreground/70 mb-8">
                Join the waitlist to be first in line for the pilot programme.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3 text-left">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="h-11 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                />
                <Input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company (optional)"
                  className="h-11 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                />
                <Input
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Your role (optional)"
                  className="h-11 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
                />

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="waitlist"
                      checked={waitlist}
                      onCheckedChange={(c) => setWaitlist(c === true)}
                      className="border-primary-foreground/30 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                    />
                    <Label htmlFor="waitlist" className="text-sm text-primary-foreground/80 cursor-pointer">
                      Join the waitlist
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="newsletter"
                      checked={newsletter}
                      onCheckedChange={(c) => setNewsletter(c === true)}
                      className="border-primary-foreground/30 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                    />
                    <Label htmlFor="newsletter" className="text-sm text-primary-foreground/80 cursor-pointer">
                      Subscribe to product updates
                    </Label>
                  </div>
                </div>

                <Button variant="accent" size="lg" className="w-full mt-2">
                  Join waitlist
                </Button>
                <p className="text-xs text-primary-foreground/50 pt-1 text-center">
                  We respect your privacy. Unsubscribe anytime. GDPR-compliant.
                </p>
              </form>
            </>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
