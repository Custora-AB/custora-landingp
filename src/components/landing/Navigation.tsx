import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface NavigationProps {
  onWaitlistClick: () => void;
  onPilotClick: () => void;
}

export function Navigation({ onWaitlistClick, onPilotClick }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Custora" className="w-7 h-7" />
            <span className="text-lg font-semibold text-foreground tracking-tight">Custora</span>
          </a>
          <div className="flex items-center gap-2">
            <Button variant="default" size="sm" onClick={onPilotClick}>
              Become pilot customer
            </Button>
            <Button variant="hero" size="sm" onClick={onWaitlistClick}>
              Join waitlist
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
