import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "@/assets/logo-icon.png";
import logoDark from "@/assets/logo-dark.png";
import MegaMenu from "./MegaMenu";
import { usePageTransition } from "./PageTransition";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [bgSolid, setBgSolid] = useState(false);
  const [logoSwapped, setLogoSwapped] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { navigateWithTransition } = usePageTransition();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const divisionsSection = document.getElementById("divisions");

      if (aboutSection) {
        setBgSolid(window.scrollY > aboutSection.offsetTop - 80);
      } else {
        setBgSolid(window.scrollY > 50);
      }

      if (divisionsSection) {
        const sectionBottom = divisionsSection.offsetTop + divisionsSection.offsetHeight;
        setLogoSwapped(window.scrollY > sectionBottom);
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
            ? "bg-card/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          {/* Logo - 150% bigger: h-24 -> h-36, w-24 -> w-36 */}
          <button onClick={() => navigateWithTransition("/")} className="flex items-center gap-0">
            <div className="relative h-36 w-36 mt-2 ml-10 shrink-0">
              <img
                src={logoIcon}
                alt="AL-JADRIYA Engineering"
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${logoSwapped ? "opacity-0" : "opacity-100"}`}
              />
              <img
                src={logoDark}
                alt="AL-JADRIYA Engineering"
                className={`absolute inset-[8%] h-[84%] w-[84%] object-contain transition-opacity duration-500 ${logoSwapped ? "opacity-100" : "opacity-0"}`}
              />
            </div>
            <div className={`hidden md:block -ml-4 transition-colors duration-300 ${bgSolid ? "text-primary" : "text-primary-foreground"}`}>
              <span className="text-sm font-bold tracking-wider uppercase">{t("nav.aljadriya")}</span>
              <span className="block text-[10px] font-medium tracking-[0.3em] uppercase opacity-70">{t("nav.engineering")}</span>
            </div>
          </button>

          {/* Right side */}
          <div className="flex items-center gap-6">
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 ${
                bgSolid ? "text-primary" : "text-primary-foreground"
              }`}
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "عربي" : "EN"}
            </button>

            <button
              onClick={() => navigateWithTransition("/contact")}
              className={`nav-link hidden md:block transition-colors duration-300 ${
                bgSolid ? "text-primary" : "text-primary-foreground"
              }`}
            >
              {t("nav.contact")}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`transition-colors duration-300 ${
                bgSolid ? "text-primary" : "text-primary-foreground"
              }`}
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

export default Navbar;
