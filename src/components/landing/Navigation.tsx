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
        <div className="flex items-center justify-between gap-3 py-3 sm:h-16 sm:gap-4">
          <a href="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Custora" className="w-7 h-7 block" />
            <span className="text-lg font-semibold text-foreground tracking-tight">Custora</span>
          </a>
          <div className="flex items-center gap-2 text-xs sm:text-sm shrink-0">
            <Button
              variant="default"
              size="sm"
              onClick={onPilotClick}
              className="hidden sm:inline-flex"
            >
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
