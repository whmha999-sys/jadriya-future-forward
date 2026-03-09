import { ArrowRight, MapPin, Mail } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import { usePageTransition } from "./PageTransition";

const navLinks = [
  { label: "Engineering Consultancy", href: "/engineering-consultancy" },
  { label: "Educational Technology", href: "/educational-technology" },
  { label: "Equipment Supply", href: "#divisions" },
  { label: "About Us", href: "#about" },
  { label: "Sustainability", href: "#vision" },
  { label: "Careers", href: "#contact" },
  { label: "Newsroom", href: "#contact" },
  { label: "Contact", href: "/contact" },
];

const FooterSection = () => {
  const { navigateWithTransition } = usePageTransition();

  return (
    <footer id="contact" className="dark-section">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Contact Info & Address */}
          <div className="space-y-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/40 mb-6">Our Offices</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-primary-foreground font-bold text-base">Amman, Jordan</p>
                    <p className="text-primary-foreground/60 text-sm">Headquarters</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-primary-foreground font-bold text-base">Baghdad, Iraq</p>
                    <p className="text-primary-foreground/60 text-sm">Branch Office</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-primary-foreground/60 text-sm">Email</p>
                    <a href="mailto:contact@aljadriya.com" className="text-accent hover:text-accent/80 transition-colors text-base">
                      contact@aljadriya.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Here to help */}
          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-2">Here to help you</h3>
            <p className="text-primary-foreground/60 text-sm mb-4">
              Any questions? We'd love to hear from you.
            </p>
            <button onClick={() => navigateWithTransition("/contact")} className="cta-button-outline">
              Contact Us <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="grid grid-cols-2 gap-3">
            {navLinks.map((link) => (
              link.href.startsWith("/") ? (
                <button
                  key={link.label}
                  onClick={() => navigateWithTransition(link.href)}
                  className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors duration-200 text-sm py-2"
                >
                  {link.label} <ArrowRight className="h-3 w-3" />
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors duration-200 text-sm py-2"
                >
                  {link.label} <ArrowRight className="h-3 w-3" />
                </a>
              )
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-primary-foreground/40 text-xs">
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms & Conditions</a>
            <span>|</span>
            <button onClick={() => navigateWithTransition("/privacy-policy")} className="hover:text-primary-foreground transition-colors">Privacy Policy</button>
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
