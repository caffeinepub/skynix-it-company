import { Heart } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const FOOTER_LINKS = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "Cloud Solutions", href: "#services" },
    { label: "AI & ML", href: "#services" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Careers", href: "#" },
    { label: "Support", href: "#contact" },
  ],
};

const SOCIAL_LINKS = [
  { icon: SiGithub, href: "https://github.com", label: "GitHub" },
  { icon: SiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: SiX, href: "https://x.com", label: "X (Twitter)" },
];

export function Footer() {
  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Diagonal Top Divider */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 30L1440 0V60H0V30Z"
            className="fill-muted/30"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-mono tracking-tight mb-2">
                <span className="text-primary">SKY</span>
                <span className="text-foreground">NIX</span>
              </h3>
              <p className="text-muted-foreground">
                Transforming businesses through innovative technology solutions
                and exceptional software engineering.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <button
                    key={social.label}
                    onClick={() => handleLinkClick(social.href)}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300 flex items-center justify-center group"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold font-mono uppercase tracking-wider text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2026. Built with{" "}
            <Heart className="inline h-4 w-4 text-destructive fill-destructive" />{" "}
            using{" "}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-primary transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
