import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import OilGasNavbar from "@/components/oilgas/OilGasNavbar";
import FooterSection from "@/components/FooterSection";
import { usePageTransition } from "@/components/PageTransition";
import { useLanguage } from "@/contexts/useLanguage";

import heroPipes from "@/assets/oilgas/hero-pipes.jpg";
import heroDrilling from "@/assets/oilgas/hero-drilling.jpg";
import heroExploration from "@/assets/oilgas/hero-exploration.jpg";
import heroInspection from "@/assets/oilgas/hero-inspection.jpg";
import heroUnderground from "@/assets/oilgas/hero-underground.jpg";
import heroAftersales from "@/assets/oilgas/hero-aftersales.jpg";

import cardPipes from "@/assets/oilgas/card-pipes.jpg";
import cardDrilling from "@/assets/oilgas/card-drilling.jpg";
import cardExploration from "@/assets/oilgas/card-exploration.jpg";
import cardInspection from "@/assets/oilgas/card-inspection.jpg";
import cardUnderground from "@/assets/oilgas/card-underground.jpg";
import cardAftersales from "@/assets/oilgas/card-aftersales.jpg";

import case1 from "@/assets/oilgas/case-1.jpg";
import case2 from "@/assets/oilgas/case-2.jpg";
import case3 from "@/assets/oilgas/case-3.jpg";

const slides = [
  { image: heroPipes, labelKey: "og.hero1.label", headingKey: "og.hero1.heading", tabKey: "og.hero1.tab" },
  { image: heroDrilling, labelKey: "og.hero2.label", headingKey: "og.hero2.heading", tabKey: "og.hero2.tab" },
  { image: heroExploration, labelKey: "og.hero3.label", headingKey: "og.hero3.heading", tabKey: "og.hero3.tab" },
  { image: heroInspection, labelKey: "og.hero4.label", headingKey: "og.hero4.heading", tabKey: "og.hero4.tab" },
  { image: heroUnderground, labelKey: "og.hero5.label", headingKey: "og.hero5.heading", tabKey: "og.hero5.tab" },
  { image: heroAftersales, labelKey: "og.hero6.label", headingKey: "og.hero6.heading", tabKey: "og.hero6.tab" },
];

const services = [
  { img: cardPipes, nameKey: "og.pipesSupply", descKey: "og.pipesDesc", href: "/oil-gas/pipes-supply" },
  { img: cardDrilling, nameKey: "og.drillingEquipment", descKey: "og.drillingDesc", href: "/oil-gas/drilling-equipment" },
  { img: cardExploration, nameKey: "og.exploration", descKey: "og.explorationDesc", href: "/oil-gas/exploration" },
  { img: cardInspection, nameKey: "og.inspection", descKey: "og.inspectionDesc", href: "/oil-gas/inspection" },
  { img: cardUnderground, nameKey: "og.underground", descKey: "og.undergroundDesc", href: "/oil-gas/underground" },
  { img: cardAftersales, nameKey: "og.afterSales", descKey: "og.afterSalesDesc", href: "/oil-gas/after-sales" },
];

const caseStudies = [
  { img: case1, tagKey: "og.casePipeline", titleKey: "og.case1Title", locKey: "og.case1Loc", descKey: "og.case1Desc" },
  { img: case2, tagKey: "og.caseRefinery", titleKey: "og.case2Title", locKey: "og.case2Loc", descKey: "og.case2Desc" },
  { img: case3, tagKey: "og.caseExtraction", titleKey: "og.case3Title", locKey: "og.case3Loc", descKey: "og.case3Desc" },
];

const OilGas = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const { navigateWithTransition } = usePageTransition();
  const { t, isRTL } = useLanguage();

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { advance(); return 0; }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [paused, advance]);

  const goToSlide = (i: number) => { setCurrent(i); setProgress(0); };
  const slide = slides[current];

  return (
    <div className="min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      <OilGasNavbar />

      {/* Hero */}
      <section
        id="og-hero"
        className="relative w-full overflow-hidden"
        style={{ height: "100vh" }}
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img src={slide.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[hsl(var(--navy-deep))]/60" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex flex-col justify-end pb-32 md:pb-40 px-8 md:px-16">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-primary-foreground/60 mb-2" style={{ fontSize: 12, letterSpacing: 3, fontWeight: 400 }}>
              {t(slide.labelKey)}
            </p>
            <div className="w-16 h-px bg-primary-foreground/40 mb-8" />
            <h1 className="hero-heading max-w-4xl">{t(slide.headingKey)}</h1>
          </motion.div>
        </div>

        <button
          onClick={advance}
          className={`absolute ${isRTL ? "left-8 md:left-16" : "right-8 md:right-16"} bottom-32 md:bottom-40 z-10 w-14 h-14 rounded-full border border-primary-foreground/40 flex items-center justify-center hover:border-accent hover:text-accent text-primary-foreground transition-colors duration-300`}
        >
          <ArrowRight className={`h-5 w-5 ${isRTL ? "rotate-180" : ""}`} />
        </button>

        <div className="absolute bottom-0 left-0 right-0 z-10 bg-[hsl(var(--navy-deep))]/50 backdrop-blur-sm">
          <div className="flex">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`flex-1 py-4 relative text-center transition-colors duration-300 ${
                  i === current ? "text-primary-foreground" : "text-primary-foreground/40 hover:text-primary-foreground/60"
                }`}
              >
                <span className="text-[10px] md:text-xs font-semibold tracking-wider uppercase">{t(s.tabKey)}</span>
                {i === current && (
                  <div className="absolute bottom-0 left-0 h-[3px] bg-accent transition-none" style={{ width: `${progress}%` }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-card py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <p className="section-label text-accent mb-4">{t("og.whatWeOfferLabel")}</p>
          <h2 className="section-heading mb-16">{t("og.servicesHeading")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img src={svc.img} alt="" className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-primary font-bold text-lg mb-2">{t(svc.nameKey)}</h3>
                  <p className="body-text text-sm mb-4">{t(svc.descKey)}</p>
                  <button
                    onClick={() => navigateWithTransition(svc.href)}
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                  >
                    {t("og.learnMore")} <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[hsl(var(--navy-deep))] py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "6", label: t("og.statMarkets") },
              { num: "2", label: t("og.statOffices") },
              { num: "10+", label: t("og.statYears") },
              { num: "100+", label: t("og.statProjects") },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="stat-number">{s.num}</div>
                <p className="text-primary-foreground/60 text-sm mt-2">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <p className="section-label text-accent mb-4">{t("og.caseStudies")}</p>
          <h2 className="section-heading mb-16">{t("og.caseHeading")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-sm"
              >
                <img src={c.img} alt="" className="w-full h-52 object-cover" loading="lazy" />
                <div className="p-6">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">{t(c.tagKey)}</span>
                  <h3 className="text-primary font-bold text-lg mt-2">{t(c.titleKey)}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{t(c.locKey)}</p>
                  <p className="body-text text-sm mt-3">{t(c.descKey)}</p>
                  <button className="inline-flex items-center gap-2 text-accent font-semibold text-sm mt-4 hover:gap-3 transition-all">
                    {t("og.readMore")} <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[hsl(var(--slate-dark))] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4" style={{ lineHeight: 1.1 }}>
            {t("og.ctaHeading")}
          </h2>
          <p className="text-primary-foreground/60 mb-8">{t("og.ctaText")}</p>
          <button
            onClick={() => navigateWithTransition("/contact", { company: "Oil & Gas" })}
            className="cta-button rounded-full"
          >
            {t("og.contactUs")} <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
          </button>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default OilGas;
