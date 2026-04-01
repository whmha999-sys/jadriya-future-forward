import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import { usePageTransition } from "./PageTransition";
import { useLanguage } from "@/contexts/useLanguage";

const FooterSection = () => {
  const { navigateWithTransition } = usePageTransition();
  const { t } = useLanguage();

  const linkClass =
    "flex items-center gap-1.5 text-primary-foreground/50 hover:text-primary-foreground transition-colors text-xs leading-relaxed";
  const headerClass =
    "flex items-center gap-2 text-primary-foreground font-bold text-sm uppercase tracking-wider mb-4 hover:text-primary-foreground/80 transition-colors cursor-pointer";

  return (
    <footer className="bg-[hsl(var(--slate-dark))]">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logoIcon} alt="AL-JADRIYA" className="h-10 w-10 brightness-0 invert" />
              <span className="text-primary-foreground font-bold text-sm uppercase tracking-wider">
                {t("footer.brand")}
              </span>
            </div>
            <p className="text-primary-foreground/60 text-xs">{t("footer.tagline")}</p>
            <div className="space-y-2 text-xs text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#F5A623] flex-shrink-0" />
                <a href="mailto:info@hy-med.net" className="hover:text-[#F5A623] transition-colors">info@hy-med.net</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#F5A623] flex-shrink-0" />
                <span>+962 788310769</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#F5A623] flex-shrink-0" />
                <span>+964 7717323273</span>
              </div>
            </div>
            <div className="space-y-2 text-xs text-primary-foreground/50 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-foreground text-xs font-semibold">{t("footer.amman")}</p>
                  <p>{t("footer.ammanAddress")}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-primary-foreground text-xs font-semibold">{t("footer.tikrit")}</p>
                  <p>{t("footer.tikritAddress")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Oil & Gas */}
          <div>
            <button onClick={() => navigateWithTransition("/oil-gas")} className={headerClass}>
              {t("footer.oilgas")} <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <div className="space-y-2">
              {[
                { label: t("og.pipesSupply"), href: "/oil-gas/pipes-supply" },
                { label: t("og.drillingEquipment"), href: "/oil-gas/drilling-equipment" },
                { label: t("og.exploration"), href: "/oil-gas/exploration" },
                { label: t("og.inspection"), href: "/oil-gas/inspection" },
                { label: t("og.underground"), href: "/oil-gas/underground" },
                { label: t("og.afterSales"), href: "/oil-gas/after-sales" },
              ].map((link) => (
                <button key={link.href} onClick={() => navigateWithTransition(link.href)} className={linkClass}>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Medical */}
          <div>
            <button onClick={() => navigateWithTransition("/medical")} className={headerClass}>
              {t("footer.medical")} <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <div className="space-y-2">
              {[
                { label: t("med.biomedical"), href: "/medical/biomedical-engineering" },
                { label: t("med.equipmentSupply"), href: "/medical/equipment-supply" },
                { label: t("med.capacityMgmt"), href: "/medical/capacity-management" },
                { label: t("med.turnkey"), href: "/medical/turnkey-projects" },
                { label: t("med.tenderMgmt"), href: "/medical/tender-management" },
                { label: t("med.afterSales"), href: "/medical/after-sales" },
              ].map((link) => (
                <button key={link.href} onClick={() => navigateWithTransition(link.href)} className={linkClass}>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 4: Robotics */}
          <div>
            <button onClick={() => navigateWithTransition("/robotics")} className={headerClass}>
              {t("footer.robotics")} <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <div className="space-y-2">
              {[
                { label: t("spec.robotics.1"), href: "/robotics/schools" },
                { label: t("spec.robotics.2"), href: "/robotics/ai-programming" },
                { label: t("spec.robotics.3"), href: "/robotics/equipment" },
                { label: t("spec.robotics.4"), href: "/robotics/corporate-training" },
              ].map((link) => (
                <button key={link.href} onClick={() => navigateWithTransition(link.href)} className={linkClass}>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column 5: Energy + Quick Links */}
          <div>
            <button onClick={() => navigateWithTransition("/energy")} className={headerClass}>
              {t("footer.energy")} <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <p className="text-[#F5A623] text-xs mb-6">{t("footer.comingSoon")}</p>

            <div className="border-t border-primary-foreground/10 pt-4 mb-4" />

            <h4 className="text-[#F5A623] font-bold text-sm uppercase tracking-wider mb-4">
              {t("footer.quickLinks")}
            </h4>
            <div className="space-y-2">
              <button onClick={() => navigateWithTransition("/contact")} className={linkClass}>
                {t("footer.contact")}
              </button>
              <button onClick={() => navigateWithTransition("/contact?office=amman")} className={linkClass}>
                {t("footer.ammanOffice")}
              </button>
              <button onClick={() => navigateWithTransition("/contact?office=tikrit")} className={linkClass}>
                {t("footer.tikritOffice")}
              </button>
              <a href="#" className={linkClass}>
                {t("footer.careers")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-primary-foreground/40 text-xs">{t("footer.rights")}</span>
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
