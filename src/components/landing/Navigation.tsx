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
              className="text-white bg-gradient-to-r from-[hsl(220,70%,20%)] via-[hsl(225,75%,25%)] to-[hsl(230,80%,30%)] hover:from-[hsl(220,70%,17%)] hover:via-[hsl(225,75%,22%)] hover:to-[hsl(230,80%,27%)]"
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
