import { useState, useEffect } from "react";
import { Menu, X, Globe, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "@/assets/logo-icon.png";
import MegaMenu from "../MegaMenu";
import { usePageTransition } from "../PageTransition";
import { useLanguage } from "@/contexts/useLanguage";

const RoboticsNavbar = () => {
  const [bgSolid, setBgSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigateWithTransition } = usePageTransition();
  const { language, setLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("robo-hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setBgSolid(window.scrollY > heroBottom - 60);
      } else {
        setBgSolid(window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          bgSolid
            ? "bg-[#2D3A4A] shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
            : "bg-transparent"
        }`}
      >
        <div className={`h-8 flex items-center px-6 md:px-12 transition-colors duration-300 ${
          bgSolid ? "bg-white/10" : "bg-[hsl(var(--navy-deep))]/30"
        }`}>
          <button
            onClick={() => navigateWithTransition("/")}
            className="flex items-center gap-1 text-[11px] font-medium tracking-wide text-accent hover:text-accent/80 transition-colors duration-300"
          >
            <ArrowLeft className={`h-3 w-3 ${isRTL ? "rotate-180" : ""}`} />
            {t("robo.backToGroup")}
          </button>
        </div>

        <div className="flex items-center justify-between px-6 md:px-12 py-1.5 h-[62px]">
          <button onClick={() => navigateWithTransition("/robotics")} className="flex items-center gap-0">
            <div className="relative h-12 w-12 shrink-0">
              <img
                src={logoIcon}
                alt="AL-JADRIYA Robotics"
                className="h-full w-full object-contain transition-all duration-500 brightness-0 invert"
              />
            </div>
            <div className="hidden md:block ml-2 text-primary-foreground transition-colors duration-300">
              <span className="text-xs font-bold tracking-wider uppercase">AL-JADRIYA</span>
              <span className="block text-[9px] font-medium tracking-[0.3em] uppercase opacity-70">{t("robo.robotics")}</span>
            </div>
          </button>

          <div className="flex items-center gap-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-sm font-semibold text-primary-foreground transition-colors duration-300"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "عربي" : "EN"}
            </button>

            <button
              onClick={() => navigateWithTransition("/contact", { company: "Robotics" })}
              className="nav-link hidden md:block text-primary-foreground transition-colors duration-300"
            >
              {t("nav.contact")}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-primary-foreground transition-colors duration-300"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && <MegaMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default RoboticsNavbar;
