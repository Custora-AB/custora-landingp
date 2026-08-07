import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface NavigationProps {
  onPilotClick: () => void;
}

export function Navigation({ onPilotClick }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
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
              className="hidden sm:inline-flex bg-white text-black border border-border hover:bg-white/90"
            >
              Become pilot customer
            </Button>
            <Button
              variant="default"
              size="sm"
              asChild
              className="bg-black text-white hover:bg-black/90"
            >
              <a href="https://app.custora.se">Sign in</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
