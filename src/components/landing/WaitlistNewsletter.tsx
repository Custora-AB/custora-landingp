import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CheckCircle } from "lucide-react";

export function WaitlistNewsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    role: "",
    joinWaitlist: false,
    subscribeNewsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="section bg-muted/30" id="waitlist">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <ScrollReveal className="text-center mb-8">
            <h2 className="text-foreground mb-3">Waitlist & Newsletter</h2>
            <p className="text-muted-foreground">
              Get early access and stay informed about product updates.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-card rounded-xl border border-border p-6 lg:p-8 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-teal-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    You're on the list!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@company.com"
                        required
                        className="bg-background border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">
                        Company <span className="text-muted-foreground text-xs">(optional)</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company"
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-foreground">
                      Role <span className="text-muted-foreground text-xs">(optional)</span>
                    </Label>
                    <Select
                      value={formData.role}
                      onValueChange={(value) =>
                        setFormData({ ...formData, role: value })
                      }
                    >
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border z-50">
                        <SelectItem value="founder-ceo">Founder/CEO</SelectItem>
                        <SelectItem value="cfo-finance">CFO/Finance</SelectItem>
                        <SelectItem value="legal">Legal</SelectItem>
                        <SelectItem value="investor-pe">Investor/PE</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3 pt-1">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="joinWaitlist"
                        checked={formData.joinWaitlist}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, joinWaitlist: checked === true })
                        }
                      />
                      <Label
                        htmlFor="joinWaitlist"
                        className="text-sm text-foreground cursor-pointer"
                      >
                        Join waitlist (early access)
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="subscribeNewsletter"
                        checked={formData.subscribeNewsletter}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            subscribeNewsletter: checked === true,
                          })
                        }
                      />
                      <Label
                        htmlFor="subscribeNewsletter"
                        className="text-sm text-foreground cursor-pointer"
                      >
                        Subscribe to newsletter
                      </Label>
                    </div>
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    Sign up
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    No spam. Unsubscribe anytime.{" "}
                    <a href="#" className="underline hover:text-foreground transition-colors">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
