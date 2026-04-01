import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import medLogo from "@/assets/med-logo-icon.png";
import { usePageTransition } from "../PageTransition";
import { useLanguage } from "@/contexts/useLanguage";

const MedicalFooter = () => {
  const { navigateWithTransition } = usePageTransition();
  const { t } = useLanguage();

  return (
    <footer className="bg-[hsl(var(--slate-dark))]">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={medLogo} alt="AL-JADRIYA" className="h-10 w-10 brightness-0 invert" />
              <div>
                <span className="text-primary-foreground font-bold text-sm uppercase tracking-wider block">
                  {t("med.brandFull")}
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm">{t("med.footerTagline")}</p>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="mailto:info@hy-med.net" className="hover:text-accent transition-colors">info@hy-med.net</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span>+962 788310769</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span>+964 7717323273</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-primary-foreground font-bold text-sm uppercase tracking-wider mb-6">
              {t("med.services")}
            </h4>
            <div className="space-y-3">
              {[
                { label: t("med.biomedical"), href: "/medical/biomedical-engineering" },
                { label: t("med.equipmentSupply"), href: "/medical/equipment-supply" },
                { label: t("med.capacityMgmt"), href: "/medical/capacity-management" },
                { label: t("med.turnkey"), href: "/medical/turnkey-projects" },
                { label: t("med.tenderMgmt"), href: "/medical/tender-management" },
                { label: t("med.afterSales"), href: "/medical/after-sales" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => navigateWithTransition(link.href)}
                  className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  <ArrowRight className="h-3 w-3" /> {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-primary-foreground font-bold text-sm uppercase tracking-wider mb-6">
              {t("footer.quickLinks")}
            </h4>
            <div className="space-y-3">
              <button
                onClick={() => navigateWithTransition("/contact", { company: "Medical" })}
                className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors text-sm"
              >
                <ArrowRight className="h-3 w-3" /> {t("footer.contact")}
              </button>
              <button
                onClick={() => navigateWithTransition("/")}
                className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors text-sm"
              >
                <ArrowRight className="h-3 w-3" /> {t("med.backToGroupShort")}
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-primary-foreground font-bold text-sm uppercase tracking-wider mb-6">
              {t("footer.offices")}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-foreground text-sm font-semibold">{t("footer.amman")}</p>
                  <p className="text-primary-foreground/50 text-xs">{t("footer.ammanAddress")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-foreground text-sm font-semibold">{t("footer.tikrit")}</p>
                  <p className="text-primary-foreground/50 text-xs">{t("footer.tikritAddress")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-primary-foreground/40 text-xs">{t("med.rights")}</span>
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

export default MedicalFooter;
