import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

interface NavBarProps {
  onPilotClick: () => void;
}

export function NavBar({ onPilotClick }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-white/10 bg-navy/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-2">
          <img src={logo} alt="" className="h-7 w-7" />
          <span className="text-lg font-semibold tracking-tight text-white">Custora</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            onClick={onPilotClick}
            className="hidden bg-white text-navy hover:bg-white/90 sm:inline-flex"
          >
            Become pilot customer
          </Button>
          <Button
            size="sm"
            asChild
            variant="ghost"
            className="text-white hover:bg-white/10 hover:text-white"
          >
            <a href="https://app.custora.se">Sign in</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="p-2 text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy px-4 pb-5 pt-3 md:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <Button
              size="sm"
              onClick={() => {
                setOpen(false);
                onPilotClick();
              }}
              className="mt-3 bg-white text-navy hover:bg-white/90 sm:hidden"
            >
              Become pilot customer
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
