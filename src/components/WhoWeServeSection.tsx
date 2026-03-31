import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageTransition } from "./PageTransition";

const markets = [
  { name: "Jordan", nameAr: "الأردن", flag: "🇯🇴" },
  { name: "Iraq", nameAr: "العراق", flag: "🇮🇶" },
  { name: "UAE", nameAr: "الإمارات", flag: "🇦🇪" },
  { name: "Saudi Arabia", nameAr: "السعودية", flag: "🇸🇦" },
  { name: "Egypt", nameAr: "مصر", flag: "🇪🇬" },
  { name: "Libya", nameAr: "ليبيا", flag: "🇱🇾" },
];

const WhoWeServeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t, language } = useLanguage();
  const { navigateWithTransition } = usePageTransition();

  return (
    <section ref={ref} className="bg-card">
      <div className="flex flex-col md:flex-row">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="w-full md:w-[40%] flex flex-col justify-center px-8 md:px-16 py-16 md:py-24"
        >
          <p className="text-accent uppercase text-xs font-semibold tracking-[3px] mb-4">
            {t("serve.label")}
          </p>
          <h2 className="section-heading mb-6">{t("serve.heading")}</h2>
          <p className="body-text mb-8">{t("serve.text")}</p>
          <button
            onClick={() => navigateWithTransition("/contact")}
            className="cta-button self-start rounded-full"
          >
            {t("serve.cta")} <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        {/* Right photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[60%] min-h-[400px] md:min-h-[500px]"
        >
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80"
            alt="Engineering environment"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Markets strip */}
      <div className="bg-[hsl(var(--navy-deep))] py-5 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {markets.map((m, i) => (
            <div key={i} className="flex items-center gap-2 text-primary-foreground/70">
              <span className="text-lg">{m.flag}</span>
              <span className="text-sm font-medium tracking-wide">
                {language === "ar" ? m.nameAr : m.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
