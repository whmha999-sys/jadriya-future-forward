import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import logoMenu from "@/assets/logo-menu.png";
import { usePageTransition } from "./PageTransition";
import { useLanguage } from "@/contexts/useLanguage";

const menuData = [
  {
    key: "menu.engConsultancy",
    items: [
      { key: "menu.projectPlanning", href: "/engineering-consultancy" },
      { key: "menu.feasibilityStudies", href: "/engineering-consultancy" },
      { key: "menu.medicalEngConsultancy", href: "/engineering-consultancy" },
      { key: "menu.technicalDesign", href: "/engineering-consultancy" },
      { key: "menu.procurement", href: "/engineering-consultancy" },
      { key: "menu.turnkeyProjects", href: "/engineering-consultancy" },
      { key: "menu.siteSurveys", href: "/engineering-consultancy" },
    ],
  },
  {
    key: "menu.eduTech",
    items: [
      { key: "menu.roboticsPrograms", href: "/educational-technology" },
      { key: "menu.aiTraining", href: "/educational-technology" },
      { key: "menu.schoolPartnerships", href: "/educational-technology" },
      { key: "menu.onlineCourses", href: "/educational-technology" },
      { key: "menu.corporateTraining", href: "/educational-technology" },
    ],
  },
  {
    key: "menu.equipSupply",
    items: [
      { key: "menu.industrialEquipment", href: "/equipment-supply" },
      { key: "menu.medicalEquipment", href: "/equipment-supply" },
      { key: "menu.educationalTechnology", href: "/equipment-supply" },
      { key: "menu.constructionMaterials", href: "/equipment-supply" },
      { key: "menu.tenderManagement", href: "/equipment-supply" },
      { key: "menu.afterSalesSupport", href: "/equipment-supply" },
    ],
  },
  {
    key: "menu.aboutUs",
    items: [
      { key: "menu.ourStory", href: "#about" },
      { key: "menu.leadership", href: "#about" },
      { key: "menu.careers", href: "#about" },
      { key: "menu.newsroom", href: "#about" },
    ],
  },
  {
    key: "menu.contactUs",
    items: [
      { key: "menu.ammanOffice", href: "/contact" },
      { key: "menu.baghdadOffice", href: "/contact" },
      { key: "menu.generalInquiries", href: "/contact" },
    ],
  },
];

const MegaMenu = ({ onClose }: { onClose: () => void }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { navigateWithTransition } = usePageTransition();
  const { t } = useLanguage();

  const handleLink = (href: string) => {
    onClose();
    if (href.startsWith("/")) {
      navigateWithTransition(href);
    } else {
      window.location.hash = href.replace("#", "");
    }
  };

  const activeCategory = menuData[activeIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] overflow-hidden cursor-pointer"
      style={{ backgroundColor: "#2d3a4a" }}
      onClick={onClose}
    >
      {/* Centered logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src={logoMenu} alt="" className="w-[80vw] h-[80vw] md:w-[48rem] md:h-[48rem] max-w-none opacity-10" />
      </div>

      <style>{`.mega-scroll::-webkit-scrollbar { display: none; }`}</style>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 md:right-16 z-10 text-primary-foreground/60 hover:text-primary-foreground transition-colors cursor-pointer"
      >
        <X className="h-8 w-8" />
      </button>

      <div className="mega-scroll relative h-full flex flex-col md:flex-row pt-24 px-8 md:px-16 pb-12 overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} onClick={(e) => e.stopPropagation()}>
        {/* Main categories - NOT clickable, only hover to reveal sub-items */}
        <div className="md:w-1/3 space-y-1">
          {menuData.map((category, index) => (
            <div
              key={category.key}
              onMouseEnter={() => setActiveIndex(index)}
              className={`block w-full text-left text-xl md:text-2xl font-semibold py-3 transition-all duration-300 cursor-default ${
                activeIndex === index
                  ? "text-accent"
                  : "text-primary-foreground/60 hover:text-primary-foreground"
              }`}
            >
              {t(category.key)}
            </div>
          ))}
        </div>

        {/* Sub items - these ARE clickable */}
        <div className="md:w-1/3 mt-8 md:mt-0 md:pl-12 md:border-l md:border-primary-foreground/10">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <p className="section-label text-primary-foreground/40 mb-6">{t(activeCategory.key)}</p>
            {activeCategory.items.map((sub) => (
              <button
                key={sub.key}
                onClick={() => handleLink(sub.href)}
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors duration-200 text-base cursor-pointer"
              >
                <ArrowRight className="h-4 w-4" />
                {t(sub.key)}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
