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
            <Button
              size="sm"
              onClick={onPilotClick}
              className="text-white bg-gradient-to-r from-[hsl(225,90%,45%)] via-[hsl(230,95%,50%)] to-[hsl(220,85%,42%)] hover:from-[hsl(225,90%,40%)] hover:via-[hsl(230,95%,45%)] hover:to-[hsl(220,85%,37%)]"
            >
              Become pilot customer
            </Button>
            <Button
              size="sm"
              onClick={onWaitlistClick}
              className="text-white bg-gradient-to-r from-[hsl(260,60%,25%)] via-[hsl(235,70%,30%)] to-[hsl(215,80%,32%)] hover:from-[hsl(260,60%,22%)] hover:via-[hsl(235,70%,26%)] hover:to-[hsl(215,80%,28%)]"
            >
              Join waitlist
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
