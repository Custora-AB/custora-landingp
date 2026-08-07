import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CheckCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistDialogProps {
  open: boolean;
  onClose: () => void;
}

export function WaitlistDialog({ open, onClose }: WaitlistDialogProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [company, setCompany] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [waitlist, setWaitlist] = useState(true);
  const [newsletter, setNewsletter] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email,
          message: `Waitlist signup from ${fullName}${
            company ? ` at ${company}` : ""
          }.

Phone: ${phone || "N/A"}
Role: ${role || "N/A"}
Join waitlist: ${waitlist ? "Yes" : "No"}
Subscribe to product updates: ${newsletter ? "Yes" : "No"}`,
        }),
      });

      const data = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setIsSubmitted(true);
      setSuccessMessage("Thanks! You're on the waitlist.");

      // Optional: clear the form
      setCompany("");
      setFullName("");
      setEmail("");
      setPhone("");
      setRole("");
      setWaitlist(true);
      setNewsletter(false);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unexpected error, please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative z-10 w-full max-w-md mx-4 rounded-2xl border border-border bg-card p-8 shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="space-y-4 text-center py-4">
                <CheckCircle className="w-10 h-10 text-accent mx-auto" />
                <h3 className="text-xl font-semibold text-foreground">You're on the list</h3>
                <p className="text-sm text-muted-foreground">We'll be in touch soon.</p>
                <Button variant="default" size="sm" onClick={onClose} className="mt-2">
                  Close
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-foreground mb-1">Get early access</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Join the waitlist to be first in line.
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-primary mb-1 block">Company name</label>
                    <Input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company name"
                      required
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-primary mb-1 block">Full name</label>
                    <Input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full name"
                      required
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-primary mb-1 block">Email</label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-primary mb-1 block">Phone number</label>
                    <Input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone number"
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-primary mb-1 block">Your role</label>
                    <Input
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="Your role"
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="waitlist-dialog"
                        checked={waitlist}
                        onCheckedChange={(c) => setWaitlist(c === true)}
                      />
                      <Label htmlFor="waitlist-dialog" className="text-sm text-muted-foreground cursor-pointer">
                        Join the waitlist
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="newsletter-dialog"
                        checked={newsletter}
                        onCheckedChange={(c) => setNewsletter(c === true)}
                      />
                      <Label htmlFor="newsletter-dialog" className="text-sm text-muted-foreground cursor-pointer">
                        Subscribe to product updates
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full mt-2"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Join waitlist"}
                  </Button>
                  {error && (
                    <p className="text-xs text-red-500 pt-1 text-center">{error}</p>
                  )}
                  <p className="text-xs text-muted-foreground pt-1 text-center">
                    We respect your privacy. Unsubscribe anytime. GDPR compliant.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
