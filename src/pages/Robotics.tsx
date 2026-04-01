import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, GraduationCap, Users, Heart, Building } from "lucide-react";
import RoboticsNavbar from "@/components/robotics/RoboticsNavbar";
import FooterSection from "@/components/FooterSection";
import { usePageTransition } from "@/components/PageTransition";
import { useLanguage } from "@/contexts/useLanguage";

import heroSchools from "@/assets/robotics/hero-schools.jpg";
import heroAi from "@/assets/robotics/hero-ai.jpg";
import heroEquipment from "@/assets/robotics/hero-equipment.jpg";
import heroCorporate from "@/assets/robotics/hero-corporate.jpg";

import cardSchools from "@/assets/robotics/card-schools.jpg";
import cardAi from "@/assets/robotics/card-ai.jpg";
import cardEquipment from "@/assets/robotics/card-equipment.jpg";
import cardCorporate from "@/assets/robotics/card-corporate.jpg";

const slides = [
  { image: heroSchools, labelKey: "robo.hero1.label", headingKey: "robo.hero1.heading", tabKey: "robo.hero1.tab" },
  { image: heroAi, labelKey: "robo.hero2.label", headingKey: "robo.hero2.heading", tabKey: "robo.hero2.tab" },
  { image: heroEquipment, labelKey: "robo.hero3.label", headingKey: "robo.hero3.heading", tabKey: "robo.hero3.tab" },
  { image: heroCorporate, labelKey: "robo.hero4.label", headingKey: "robo.hero4.heading", tabKey: "robo.hero4.tab" },
];

const services = [
  { img: cardSchools, nameKey: "robo.schoolsName", descKey: "robo.schoolsDesc", href: "/robotics/schools" },
  { img: cardAi, nameKey: "robo.aiName", descKey: "robo.aiDesc", href: "/robotics/ai-programming" },
  { img: cardEquipment, nameKey: "robo.equipmentName", descKey: "robo.equipmentDesc", href: "/robotics/equipment" },
  { img: cardCorporate, nameKey: "robo.corporateName", descKey: "robo.corporateDesc", href: "/robotics/corporate-training" },
];

const Robotics = () => {
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
      <title>AL-JADRIYA Robotics | Robotics & AI Training Programs</title>
      <meta name="description" content="AL-JADRIYA Robotics delivers robotics programs for schools, AI training, equipment supply, and corporate training across Jordan and Iraq." />
      <RoboticsNavbar />

      {/* Hero */}
      <section
        id="robo-hero"
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
          <p className="section-label text-accent mb-4">{t("robo.whatWeOfferLabel")}</p>
          <h2 className="section-heading mb-16">{t("robo.servicesHeading")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img src={svc.img} alt="" className="w-full h-56 object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-primary font-bold text-lg mb-2">{t(svc.nameKey)}</h3>
                  <p className="body-text text-sm mb-4">{t(svc.descKey)}</p>
                  <button
                    onClick={() => navigateWithTransition(svc.href)}
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
                  >
                    {t("robo.learnMore")} <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
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
              { num: "6", label: t("robo.statMarkets") },
              { num: "2", label: t("robo.statOffices") },
              { num: "500+", label: t("robo.statGraduates") },
              { num: "20+", label: t("robo.statPartners") },
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

      {/* Who We Train */}
      <section className="bg-card py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <p className="section-label text-accent mb-4">{t("robo.whoWeServeLabel")}</p>
          <h2 className="section-heading mb-16">{t("robo.whoWeServeHeading")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, titleKey: "robo.serve.schools.title", descKey: "robo.serve.schools.desc" },
              { icon: Users, titleKey: "robo.serve.it.title", descKey: "robo.serve.it.desc" },
              { icon: Heart, titleKey: "robo.serve.women.title", descKey: "robo.serve.women.desc" },
              { icon: Building, titleKey: "robo.serve.institutions.title", descKey: "robo.serve.institutions.desc" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-lg p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-primary font-bold text-lg mb-2">{t(item.titleKey)}</h3>
                <p className="body-text text-sm">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[hsl(var(--slate-dark))] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4" style={{ lineHeight: 1.1 }}>
            {t("robo.ctaHeading")}
          </h2>
          <p className="text-primary-foreground/60 mb-8">{t("robo.ctaText")}</p>
          <button
            onClick={() => navigateWithTransition("/contact", { company: "Robotics" })}
            className="cta-button rounded-full"
          >
            {t("robo.contactUs")} <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
          </button>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Robotics;
