import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PilotDialogProps {
  open: boolean;
  onClose: () => void;
}

export function PilotDialog({ open, onClose }: PilotDialogProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [company, setCompany] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
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
                <h3 className="text-xl font-semibold text-foreground">Pilot request received</h3>
                <p className="text-sm text-muted-foreground">We'll reach out shortly to discuss next steps.</p>
                <Button variant="default" size="sm" onClick={onClose} className="mt-2">
                  Close
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-foreground mb-1">Request pilot access</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Be among the first to experience Custora.
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
                      required
                      className="h-11"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-2 text-white shadow-lg bg-gradient-to-r from-[hsl(260,80%,50%)] via-[hsl(230,90%,55%)] to-[hsl(200,100%,50%)] hover:from-[hsl(260,80%,45%)] hover:via-[hsl(230,90%,50%)] hover:to-[hsl(200,100%,45%)]"
                  >
                    Request pilot access
                  </Button>
                  <p className="text-xs text-muted-foreground pt-1 text-center">
                    We respect your privacy. GDPR-compliant.
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
