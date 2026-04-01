import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { usePageTransition } from "./PageTransition";
import { useLanguage } from "@/contexts/useLanguage";

type Category = "companies" | "specializations" | "contact";

interface SubItem {
  labelKey: string;
  href: string;
}

interface CompanyGroup {
  titleKey: string;
  href: string;
  items: SubItem[];
}

const companiesLeft: CompanyGroup[] = [
  {
    titleKey: "mega.oilGas",
    href: "/oil-gas",
    items: [
      { labelKey: "mega.pipesSupply", href: "/oil-gas/pipes-supply" },
      { labelKey: "mega.drillingEquipment", href: "/oil-gas/drilling-equipment" },
      { labelKey: "mega.explorationReq", href: "/oil-gas/exploration" },
      { labelKey: "mega.tcInspection", href: "/oil-gas/inspection" },
      { labelKey: "mega.underground", href: "/oil-gas/underground" },
      { labelKey: "mega.ogAfterSales", href: "/oil-gas/after-sales" },
    ],
  },
  {
    titleKey: "mega.medical",
    href: "/medical",
    items: [
      { labelKey: "mega.biomedical", href: "/medical/biomedical-engineering" },
      { labelKey: "mega.hospitalEquip", href: "/medical/equipment-supply" },
      { labelKey: "mega.capacityMgmt", href: "/medical/capacity-management" },
      { labelKey: "mega.turnkey", href: "/medical/turnkey-projects" },
      { labelKey: "mega.tenderMgmt", href: "/medical/tender-management" },
      { labelKey: "mega.medAfterSales", href: "/medical/after-sales" },
    ],
  },
];

const companiesRight: CompanyGroup[] = [
  {
    titleKey: "mega.robotics",
    href: "/robotics",
    items: [
      { labelKey: "mega.roboticsSchools", href: "/robotics/schools" },
      { labelKey: "mega.aiProgramming", href: "/robotics/ai-programming" },
      { labelKey: "mega.roboticsEquip", href: "/robotics/equipment" },
      { labelKey: "mega.corpTraining", href: "/robotics/corporate-training" },
    ],
  },
  {
    titleKey: "mega.energy",
    href: "/energy",
    items: [
      { labelKey: "mega.comingSoon", href: "/energy" },
    ],
  },
];

const specMiddle: SubItem[] = [
  { labelKey: "mega.pipesSupply", href: "/oil-gas/pipes-supply" },
  { labelKey: "mega.drillingEquipment", href: "/oil-gas/drilling-equipment" },
  { labelKey: "mega.explorationReq", href: "/oil-gas/exploration" },
  { labelKey: "mega.tcInspection", href: "/oil-gas/inspection" },
  { labelKey: "mega.underground", href: "/oil-gas/underground" },
];

const specRight: SubItem[] = [
  { labelKey: "mega.biomedical", href: "/medical/biomedical-engineering" },
  { labelKey: "mega.hospitalEquip", href: "/medical/equipment-supply" },
  { labelKey: "mega.capacityMgmt", href: "/medical/capacity-management" },
  { labelKey: "mega.turnkey", href: "/medical/turnkey-projects" },
  { labelKey: "mega.roboticsSchools", href: "/robotics/schools" },
  { labelKey: "mega.aiProgramming", href: "/robotics/ai-programming" },
  { labelKey: "mega.cleanEnergy", href: "/energy" },
];

const categories: { key: Category; labelKey: string }[] = [
  { key: "companies", labelKey: "mega.ourCompanies" },
  { key: "specializations", labelKey: "mega.ourSpecializations" },
  { key: "contact", labelKey: "mega.contactUs" },
];

const MegaMenu = ({ onClose }: { onClose: () => void }) => {
  const [active, setActive] = useState<Category>("companies");
  const { navigateWithTransition } = usePageTransition();
  const { t, isRTL } = useLanguage();

  const handleLink = (href: string) => {
    onClose();
    navigateWithTransition(href);
  };

  const renderCompanyGroup = (group: CompanyGroup) => (
    <div key={group.titleKey} className="mb-8">
      <button
        onClick={() => handleLink(group.href)}
        className="flex items-center gap-1.5 text-[15px] font-bold text-[#1A2B4A] hover:text-[#F5A623] transition-colors mb-3 group"
      >
        {t(group.titleKey)}
        <ChevronRight className={`h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity ${isRTL ? "rotate-180" : ""}`} />
      </button>
      <div className="space-y-2">
        {group.items.map((item) => (
          <button
            key={item.href}
            onClick={() => handleLink(item.href)}
            className="block text-[13px] text-[#6B7280] hover:text-[#F5A623] transition-colors duration-200"
          >
            {t(item.labelKey)}
          </button>
        ))}
      </div>
    </div>
  );

  const renderSubItems = (items: SubItem[]) => (
    <div className="space-y-3">
      {items.map((item) => (
        <button
          key={item.href + item.labelKey}
          onClick={() => handleLink(item.href)}
          className="block text-[13px] text-[#6B7280] hover:text-[#F5A623] transition-colors duration-200"
        >
          {t(item.labelKey)}
        </button>
      ))}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] bg-white overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <style>{`.mega-scroll::-webkit-scrollbar { display: none; }`}</style>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 md:right-12 z-10 text-[#6B7280] hover:text-[#1A2B4A] transition-colors"
      >
        <X className="h-7 w-7" />
      </button>

      {/* Main content */}
      <div className="mega-scroll h-full flex flex-col" style={{ scrollbarWidth: "none" }}>
        <div className="flex-1 flex flex-col md:flex-row pt-20 md:pt-24 px-6 md:px-16 pb-20 overflow-y-auto">
          {/* Left column — categories */}
          <div className="md:w-[220px] shrink-0 md:border-r border-[#E5E7EB] md:pr-10 mb-8 md:mb-0">
            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onMouseEnter={() => setActive(cat.key)}
                  onClick={() => setActive(cat.key)}
                  className={`flex items-center justify-between w-full text-left py-3 text-[15px] font-semibold transition-all duration-200 ${
                    active === cat.key
                      ? "text-[#1A2B4A]"
                      : "text-[#9CA3AF] hover:text-[#6B7280]"
                  }`}
                >
                  {t(cat.labelKey)}
                  {active === cat.key && (
                    <ChevronRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Middle + Right columns */}
          <div className="flex-1 md:pl-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col md:flex-row gap-8 md:gap-16"
              >
                {active === "companies" && (
                  <>
                    <div className="md:w-1/2">
                      {companiesLeft.map(renderCompanyGroup)}
                    </div>
                    <div className="md:w-1/2">
                      {companiesRight.map(renderCompanyGroup)}
                    </div>
                  </>
                )}

                {active === "specializations" && (
                  <>
                    <div className="md:w-1/2">
                      {renderSubItems(specMiddle)}
                    </div>
                    <div className="md:w-1/2">
                      {renderSubItems(specRight)}
                    </div>
                  </>
                )}

                {active === "contact" && (
                  <>
                    <div className="md:w-1/2 space-y-3">
                      <button onClick={() => handleLink("/contact")} className="block text-[13px] text-[#6B7280] hover:text-[#F5A623] transition-colors">
                        {t("mega.contactGeneral")}
                      </button>
                      <button onClick={() => handleLink("/contact?office=amman")} className="block text-[13px] text-[#6B7280] hover:text-[#F5A623] transition-colors">
                        {t("mega.ammanOffice")}
                      </button>
                      <button onClick={() => handleLink("/contact?office=tikrit")} className="block text-[13px] text-[#6B7280] hover:text-[#F5A623] transition-colors">
                        {t("mega.tikritOffice")}
                      </button>
                    </div>
                    <div className="md:w-1/2 space-y-3">
                      <p className="text-[13px] text-[#6B7280]">
                        <span className="font-semibold text-[#1A2B4A]">{t("mega.email")}:</span> info@hy-med.net
                      </p>
                      <p className="text-[13px] text-[#6B7280]">
                        <span className="font-semibold text-[#1A2B4A]">{t("mega.jordan")}:</span> +962 788310769
                      </p>
                      <p className="text-[13px] text-[#6B7280]">
                        <span className="font-semibold text-[#1A2B4A]">{t("mega.iraq")}:</span> +964 7717323273
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E5E7EB] px-6 md:px-16 py-4 flex items-center gap-8">
          <button onClick={() => handleLink("#")} className="text-[12px] text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
            {t("mega.careers")}
          </button>
          <button onClick={() => handleLink("/contact")} className="text-[12px] text-[#9CA3AF] hover:text-[#6B7280] transition-colors">
            {t("mega.contactUs")}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
