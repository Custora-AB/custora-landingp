import logo from "@/assets/logo-mark.png";

export function NavBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-14">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Custora"
            width={48}
            height={48}
            decoding="async"
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          />
          <span className="text-2xl font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
            Custora
          </span>
        </a>

        <a
          href="https://app.custora.se"
          className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black/85 sm:text-base"
        >
          Log In
        </a>
      </nav>
    </header>
  );
}
