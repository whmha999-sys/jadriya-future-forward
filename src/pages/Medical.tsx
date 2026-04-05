import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MedicalNavbar from "@/components/medical/MedicalNavbar";
import FooterSection from "@/components/FooterSection";
import { usePageTransition } from "@/components/PageTransition";
import { useLanguage } from "@/contexts/useLanguage";

import heroBiomedical from "@/assets/medical/hero-biomedical.jpg";
import heroEquipment from "@/assets/medical/hero-equipment.jpg";
import heroCapacity from "@/assets/medical/hero-capacity.jpg";
import heroTurnkey from "@/assets/medical/hero-turnkey.jpg";
import heroTender from "@/assets/medical/hero-tender.jpg";
import heroAftersales from "@/assets/medical/hero-aftersales.jpg";

import cardBiomedical from "@/assets/medical/card-biomedical.jpg";
import cardEquipment from "@/assets/medical/card-equipment.jpg";
import cardCapacity from "@/assets/medical/card-capacity.jpg";
import cardTurnkey from "@/assets/medical/card-turnkey.jpg";
import cardTender from "@/assets/medical/card-tender.jpg";
import cardAftersales from "@/assets/medical/card-aftersales.jpg";

import case1 from "@/assets/medical/case-1-real.jpg";
import case2 from "@/assets/medical/case-2.jpg";
import case3 from "@/assets/medical/case-3.jpg";

const slides = [
  { image: heroBiomedical, labelKey: "med.hero1.label", headingKey: "med.hero1.heading", tabKey: "med.hero1.tab" },
  { image: heroEquipment, labelKey: "med.hero2.label", headingKey: "med.hero2.heading", tabKey: "med.hero2.tab" },
  { image: heroCapacity, labelKey: "med.hero3.label", headingKey: "med.hero3.heading", tabKey: "med.hero3.tab" },
  { image: heroTurnkey, labelKey: "med.hero4.label", headingKey: "med.hero4.heading", tabKey: "med.hero4.tab" },
  { image: heroTender, labelKey: "med.hero5.label", headingKey: "med.hero5.heading", tabKey: "med.hero5.tab" },
  { image: heroAftersales, labelKey: "med.hero6.label", headingKey: "med.hero6.heading", tabKey: "med.hero6.tab" },
];

const services = [
  { img: cardBiomedical, nameKey: "med.biomedical", descKey: "med.biomedicalDesc", href: "/medical/biomedical-engineering" },
  { img: cardEquipment, nameKey: "med.equipmentSupply", descKey: "med.equipmentSupplyDesc", href: "/medical/equipment-supply" },
  { img: cardCapacity, nameKey: "med.capacityMgmt", descKey: "med.capacityMgmtDesc", href: "/medical/capacity-management" },
  { img: cardTurnkey, nameKey: "med.turnkey", descKey: "med.turnkeyDesc", href: "/medical/turnkey-projects" },
  { img: cardTender, nameKey: "med.tenderMgmt", descKey: "med.tenderMgmtDesc", href: "/medical/tender-management" },
  { img: cardAftersales, nameKey: "med.afterSales", descKey: "med.afterSalesDesc", href: "/medical/after-sales" },
];

const caseStudies = [
  { img: case1, tagKey: "med.caseHospitalEquip", titleKey: "med.case1Title", locKey: "med.case1Loc", descKey: "med.case1Desc", href: "/medical/case/oxygen-plant" },
  { img: case2, tagKey: "med.caseDiagnostics", titleKey: "med.case2Title", locKey: "med.case2Loc", descKey: "med.case2Desc", href: "" },
  { img: case3, tagKey: "med.caseLaboratory", titleKey: "med.case3Title", locKey: "med.case3Loc", descKey: "med.case3Desc", href: "" },
];

const Medical = () => {
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
      <MedicalNavbar />

      {/* Hero */}
      <section
        id="med-hero"
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

        <div className="absolute bottom-0 left-0 right-0 z-10 bg-[hsl(var(--navy-deep))]/50 backdrop-blur-sm" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
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
          <p className="section-label text-accent mb-4">{t("med.whatWeOfferLabel")}</p>
          <h2 className="section-heading mb-16">{t("med.servicesHeading")}</h2>
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
                    {t("med.learnMore")} <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
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
              { num: "6", label: t("med.statMarkets") },
              { num: "2", label: t("med.statOffices") },
              { num: "10+", label: t("med.statYears") },
              { num: "50+", label: t("med.statFacilities") },
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
          <p className="section-label text-accent mb-4">{t("med.caseStudies")}</p>
          <h2 className="section-heading mb-16">{t("med.caseHeading")}</h2>
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
                  <button
                    onClick={() => c.href && navigateWithTransition(c.href)}
                    className={`inline-flex items-center gap-2 text-accent font-semibold text-sm mt-4 hover:gap-3 transition-all ${!c.href ? "opacity-50 cursor-default" : ""}`}
                  >
                    {t("med.readMore")} <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
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
            {t("med.ctaHeading")}
          </h2>
          <p className="text-primary-foreground/60 mb-8">{t("med.ctaText")}</p>
          <button
            onClick={() => navigateWithTransition("/contact", { company: "Medical" })}
            className="cta-button rounded-full"
          >
            {t("med.contactUs")} <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
          </button>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Medical;
