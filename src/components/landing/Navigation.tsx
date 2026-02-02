import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  {
    label: "Product",
    items: ["Share Register", "Corporate Actions", "Governance", "Compliance"],
  },
  {
    label: "Solutions",
    items: ["Private Equity", "Growth Companies", "Law Firms", "Holding Structures"],
  },
  {
    label: "Resources",
    items: ["Documentation", "Case Studies", "Blog", "Support"],
  },
  {
    label: "Company",
    items: ["About", "Careers", "Contact", "Press"],
  },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">Custora</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="nav" className="flex items-center gap-1">
                    {item.label}
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-48 bg-card border border-border shadow-lg z-50"
                >
                  {item.items.map((subItem) => (
                    <DropdownMenuItem
                      key={subItem}
                      className="cursor-pointer hover:bg-secondary focus:bg-secondary"
                    >
                      {subItem}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Watch a video tour
            </Button>
            <Button variant="navCta" size="sm">
              Request a demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.label} className="space-y-2">
                <p className="font-semibold text-foreground">{item.label}</p>
                <div className="pl-4 space-y-1">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block text-muted-foreground hover:text-foreground py-1"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-border space-y-2">
              <Button variant="heroSecondary" className="w-full">
                Watch a video tour
              </Button>
              <Button variant="hero" className="w-full">
                Request a demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
