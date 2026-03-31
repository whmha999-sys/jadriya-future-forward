import { ArrowRight, MapPin, Mail } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import { usePageTransition } from "./PageTransition";
import { useLanguage } from "@/contexts/LanguageContext";

const FooterSection = () => {
  const { navigateWithTransition } = usePageTransition();
  const { t } = useLanguage();

  const navLinks = [
    { label: t("footer.engConsultancy"), href: "/engineering-consultancy" },
    { label: t("footer.eduTech"), href: "/educational-technology" },
    { label: t("footer.equipSupply"), href: "/equipment-supply" },
    { label: t("footer.aboutUs"), href: "#about" },
    { label: t("footer.contact"), href: "/contact" },
  ];

  return (
    <footer id="contact" className="dark-section">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div className="space-y-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/40 mb-6">{t("footer.offices")}</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-primary-foreground font-bold text-base">{t("footer.amman")}</p>
                    <p className="text-primary-foreground/60 text-sm">{t("footer.hq")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-primary-foreground font-bold text-base">{t("footer.baghdad")}</p>
                    <p className="text-primary-foreground/60 text-sm">{t("footer.branch")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-primary-foreground/60 text-sm">{t("footer.email")}</p>
                    <a href="mailto:contact@aljadriya.com" className="text-accent hover:text-accent/80 transition-colors text-base">
                      contact@aljadriya.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-primary-foreground mb-2">{t("footer.helpTitle")}</h3>
            <p className="text-primary-foreground/60 text-sm mb-4">{t("footer.helpText")}</p>
            <button onClick={() => navigateWithTransition("/contact")} className="cta-button-outline">
              {t("footer.contact")} <ArrowRight className="h-4 w-4" />
            </button>
          </div>

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

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-primary-foreground/40 text-xs">
            <button onClick={() => navigateWithTransition("/terms-conditions")} className="hover:text-primary-foreground transition-colors">{t("footer.terms")}</button>
            <span>|</span>
            <button onClick={() => navigateWithTransition("/privacy-policy")} className="hover:text-primary-foreground transition-colors">{t("footer.privacy")}</button>
          </div>

          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="AL-JADRIYA" className="h-8 w-8 brightness-0 invert opacity-60" />
            <span className="text-primary-foreground/40 text-xs">{t("footer.rights")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
