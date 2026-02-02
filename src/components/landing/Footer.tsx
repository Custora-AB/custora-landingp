const footerLinks = {
  Product: ["Share Register", "Corporate Actions", "Governance", "Compliance", "Investor Portal"],
  Solutions: ["Private Equity", "Growth Companies", "Law Firms", "Holding Structures"],
  Resources: ["Documentation", "Case Studies", "Blog", "Support", "API Reference"],
  Company: ["About", "Careers", "Contact", "Press", "Legal"]
};
export function Footer() {
  return <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Custora. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">​</a>
            <a href="#" className="hover:text-foreground transition-colors">​
 </a>
            <a href="#" className="hover:text-foreground transition-colors">​ </a>
            <a href="#" className="hover:text-foreground transition-colors">​</a>
          </div>
        </div>
      </div>
    </footer>;
}