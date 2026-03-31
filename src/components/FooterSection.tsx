import { ArrowRight } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import { usePageTransition } from "./PageTransition";
import { useLanguage } from "@/contexts/LanguageContext";

const FooterSection = () => {
  const { navigateWithTransition } = usePageTransition();
  const { t } = useLanguage();

  return (
    <footer className="bg-[hsl(var(--slate-dark))]">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoIcon} alt="AL-JADRIYA" className="h-10 w-10 brightness-0 invert opacity-80" />
              <div>
                <span className="text-primary-foreground font-bold text-sm tracking-wider uppercase block">AL-JADRIYA GROUP</span>
              </div>
            </div>
            <p className="text-primary-foreground/50 text-sm">{t("footer.tagline")}</p>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>✉ info@hy-med.net</p>
              <p>🇯🇴 +962 788310769</p>
              <p>🇮🇶 +964 7717323273</p>
            </div>
          </div>

          {/* Column 2 — Companies */}
          <div>
            <h4 className="text-primary-foreground font-bold text-sm uppercase tracking-wider mb-6">{t("footer.companies")}</h4>
            <div className="space-y-3">
              {[
                { label: t("footer.oilgas"), href: "/oil-gas" },
                { label: t("footer.medical"), href: "/medical" },
                { label: t("footer.robotics"), href: "/robotics" },
                { label: t("footer.energy"), href: "/energy" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => navigateWithTransition(link.href)}
                  className="flex items-center gap-2 text-primary-foreground/50 hover:text-accent transition-colors text-sm"
                >
                  {link.label} <ArrowRight className="h-3 w-3" />
                </button>
              ))}
            </div>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h4 className="text-primary-foreground font-bold text-sm uppercase tracking-wider mb-6">{t("footer.quickLinks")}</h4>
            <div className="space-y-3">
              {[
                { label: t("footer.contact"), href: "/contact" },
                { label: t("footer.aboutUs"), href: "#about" },
                { label: t("footer.careers"), href: "#" },
              ].map((link) => (
                link.href.startsWith("/") ? (
                  <button
                    key={link.label}
                    onClick={() => navigateWithTransition(link.href)}
                    className="flex items-center gap-2 text-primary-foreground/50 hover:text-accent transition-colors text-sm"
                  >
                    {link.label} <ArrowRight className="h-3 w-3" />
                  </button>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-primary-foreground/50 hover:text-accent transition-colors text-sm"
                  >
                    {link.label} <ArrowRight className="h-3 w-3" />
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Column 4 — Offices */}
          <div>
            <h4 className="text-primary-foreground font-bold text-sm uppercase tracking-wider mb-6">{t("footer.ourOffices")}</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-primary-foreground font-semibold">{t("footer.amman")}</p>
                <p className="text-primary-foreground/50">{t("footer.ammanAddr")}</p>
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">{t("footer.tikrit")}</p>
                <p className="text-primary-foreground/50">{t("footer.tikritAddr")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-primary-foreground/40 text-xs">
            {t("footer.rights")}
          </span>
          <div className="flex items-center gap-4 text-primary-foreground/40 text-xs">
            <button onClick={() => navigateWithTransition("/terms-conditions")} className="hover:text-primary-foreground transition-colors">
              {t("footer.terms")}
            </button>
            <span>|</span>
            <button onClick={() => navigateWithTransition("/privacy-policy")} className="hover:text-primary-foreground transition-colors">
              {t("footer.privacy")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
