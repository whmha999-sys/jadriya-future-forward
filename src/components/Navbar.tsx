import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "@/assets/logo-icon.png";
import logoDark from "@/assets/logo-dark.png";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-0">
            <div className="relative h-24 w-24 mt-2 ml-10 shrink-0">
              <img
                src={logoIcon}
                alt="AL-JADRIYA Engineering"
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"}`}
              />
              <img
                src={logoDark}
                alt="AL-JADRIYA Engineering"
                className={`absolute inset-[8%] h-[84%] w-[84%] object-contain transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
              />
            </div>
            <div className={`hidden md:block -ml-4 transition-colors duration-300 ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
              <span className="text-sm font-bold tracking-wider uppercase">AL-JADRIYA</span>
              <span className="block text-[10px] font-medium tracking-[0.3em] uppercase opacity-70">Engineering</span>
            </div>
          </a>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className={`nav-link hidden md:block transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-primary-foreground"
              }`}
            >
              Client Hub
            </a>
            <a
              href="#contact"
              className={`nav-link hidden md:block transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-primary-foreground"
              }`}
            >
              Contact Us
            </a>
            <button
              className={`transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-primary-foreground"
              }`}
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-primary-foreground"
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
