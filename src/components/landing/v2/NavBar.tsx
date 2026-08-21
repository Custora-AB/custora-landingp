import { useEffect, useState } from "react";
import logo from "@/assets/logo-mark.png";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-background/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-14">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Custora"
            width={36}
            height={36}
            decoding="async"
            className="h-8 w-8 object-contain sm:h-9 sm:w-9"
          />
          <span className="text-xl font-semibold tracking-tight text-black sm:text-2xl">
            Custora
          </span>
        </a>

        <a
          href="https://app.custora.se"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-[0_4px_20px_rgba(5,28,44,0.10)] transition-shadow hover:shadow-[0_6px_24px_rgba(5,28,44,0.16)] sm:text-base"
        >
          Log In
        </a>
      </nav>
    </header>
  );
}
