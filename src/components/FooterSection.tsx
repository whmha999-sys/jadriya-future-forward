import { ArrowRight } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { label: "Engineering Consultancy", href: "#divisions" },
  { label: "Educational Technology", href: "#divisions" },
  { label: "Equipment Supply", href: "#divisions" },
  { label: "About Us", href: "#about" },
  { label: "Sustainability", href: "#vision" },
  { label: "Careers", href: "#contact" },
  { label: "Newsroom", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

const FooterSection = () => {
  return (
    <footer id="contact" className="dark-section">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left */}
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-bold text-primary-foreground mb-2">Compliance Line</h3>
              <p className="text-primary-foreground/60 text-sm mb-4">
                Report any conduct contrary to AL-JADRIYA's Code of Conduct
              </p>
              <button className="cta-button-outline">
                Report <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary-foreground mb-2">Here to help you</h3>
              <p className="text-primary-foreground/60 text-sm mb-4">
                Any questions? We'd love to hear from you.
              </p>
              <button className="cta-button-outline">
                Contact Us <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors duration-200 text-sm py-2"
              >
                {link.label} <ArrowRight className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-primary-foreground/40 text-xs">
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-primary-foreground transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="AL-JADRIYA" className="h-8 w-8 brightness-0 invert opacity-60" />
            <span className="text-primary-foreground/40 text-xs">
              © 2024 AL-JADRIYA Engineering. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
