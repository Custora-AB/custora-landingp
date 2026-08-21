import logo from "@/assets/logo-mark.png";

export function SiteFooter() {
  return (
    <footer className="px-6 pb-12 pt-8 sm:px-10 lg:px-14">
      <div className="mx-auto grid max-w-[1600px] gap-6 text-center sm:grid-cols-3 sm:items-center sm:text-left">
        <a href="#" className="flex items-center justify-center gap-2 sm:justify-start">
          <img
            src={logo}
            alt="Custora"
            width={24}
            height={24}
            decoding="async"
            className="h-5 w-5 object-contain"
          />
          <span className="text-base font-semibold tracking-tight text-black">
            Custora
          </span>
        </a>

        <p className="text-sm text-muted-foreground sm:text-center">
          © {new Date().getFullYear()} Custora. All rights reserved.
        </p>

        <span aria-hidden className="hidden sm:block" />
      </div>
    </footer>
  );
}
