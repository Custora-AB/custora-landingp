import logo from "@/assets/logo.png";

const columns = [
  {
    heading: "Platform",
    links: [
      { label: "Share register", href: "#platform" },
      { label: "Regulatory reporting", href: "#platform" },
      { label: "KYC collection", href: "#platform" },
      { label: "Investor data room", href: "#platform" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Security", href: "#security" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "mailto:hello@custora.se" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <img src={logo} alt="" className="h-7 w-7" />
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Custora
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Ownership infrastructure for European private companies.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                {c.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Custora. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
            <a
              href="https://app.custora.se"
              className="transition-colors hover:text-foreground"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
