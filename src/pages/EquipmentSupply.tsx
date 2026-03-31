import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Factory, Hospital, Bot, Blocks, FileCheck, Wrench, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { usePageTransition } from "@/components/PageTransition";
import { useLanguage } from "@/contexts/useLanguage";
import heroImg from "@/assets/equip-supply-hero.jpg";
import warehouseImg from "@/assets/equip-supply-warehouse.jpg";
import promiseImg from "@/assets/equip-supply-promise.jpg";

const markets = [
  { country: "Jordan", countryAr: "الأردن", flag: "🇯🇴" },
  { country: "Iraq", countryAr: "العراق", flag: "🇮🇶" },
  { country: "UAE", countryAr: "الإمارات", flag: "🇦🇪" },
  { country: "Saudi Arabia", countryAr: "السعودية", flag: "🇸🇦" },
  { country: "Egypt", countryAr: "مصر", flag: "🇪🇬" },
  { country: "Libya", countryAr: "ليبيا", flag: "🇱🇾" },
];

const EquipmentSupply = () => {
  const { navigateWithTransition } = usePageTransition();
  const { t, language } = useLanguage();
  const whatWeDoRef = useRef(null);
  const supplyRef = useRef(null);
  const statsRef = useRef(null);
  const promiseRef = useRef(null);
  const marketsRef = useRef(null);
  const whatWeDoInView = useInView(whatWeDoRef, { once: true, margin: "-100px" });
  const supplyInView = useInView(supplyRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const promiseInView = useInView(promiseRef, { once: true, margin: "-100px" });
  const marketsInView = useInView(marketsRef, { once: true, margin: "-100px" });

  const supplies = [
    { icon: Factory, title: t("equip.industrial"), description: t("equip.industrialDesc") },
    { icon: Hospital, title: t("equip.medical"), description: t("equip.medicalDesc") },
    { icon: Bot, title: t("equip.eduTech"), description: t("equip.eduTechDesc") },
    { icon: Blocks, title: t("equip.construction"), description: t("equip.constructionDesc") },
    { icon: FileCheck, title: t("equip.tenders"), description: t("equip.tendersDesc") },
    { icon: Wrench, title: t("equip.afterSales"), description: t("equip.afterSalesDesc") },
  ];

  const stats = [
    { number: "6", label: t("equip.markets") },
    { number: "2", label: t("equip.countries") },
    { number: "100+", label: t("equip.suppliers") },
    { number: "50+", label: t("equip.tendersWon") },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <img src={heroImg} alt="Industrial warehouse" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-8 md:px-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <p className="text-primary-foreground/60 text-xs tracking-[0.2em] uppercase mb-2">{t("equip.heroLabel")}</p>
            <div className="w-16 h-px bg-primary-foreground/40 mb-8" />
            <h1 className="hero-heading max-w-4xl">{t("equip.heroH1")}<br />{t("equip.heroH2")}</h1>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section ref={whatWeDoRef} className="py-24 md:py-32 px-8 md:px-16 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={whatWeDoInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <p className="section-label mb-4">{t("equip.whatWeDo")}</p>
              <h2 className="section-heading mb-6">{t("equip.heading")}</h2>
              <p className="body-text">{t("equip.text")}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={whatWeDoInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
              <img src={warehouseImg} alt="Equipment warehouse" className="w-full h-[400px] md:h-[500px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Supply */}
      <section ref={supplyRef} className="py-24 md:py-32 px-8 md:px-16" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={supplyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
            <p className="section-label mb-4">{t("equip.whatWeOffer")}</p>
            <h2 className="section-heading">{t("equip.whatWeSupply")}</h2>
            <div className="w-12 h-0.5 bg-accent mt-4" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {supplies.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} animate={supplyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }} className="bg-card p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <item.icon className="h-10 w-10 text-accent mb-6" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Reach */}
      <section ref={statsRef} className="py-24 md:py-32 px-8 md:px-16" style={{ backgroundColor: "#2D3A4A" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">{t("equip.ourReach")}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">{t("equip.globalSupply")}</h2>
            <div className="w-12 h-0.5 bg-accent mt-4 mx-auto" />
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }} className="text-center p-8 border border-white/10">
                <span className="text-4xl md:text-5xl font-bold" style={{ color: "#F5A623" }}>{stat.number}</span>
                <p className="mt-3 text-sm text-white/70 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section ref={promiseRef} className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <img src={promiseImg} alt="Industrial site" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/30" />
        <div className="relative z-10 h-full flex items-center px-8 md:px-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={promiseInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="bg-card p-10 md:p-14 max-w-xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">{t("equip.promiseHeading")}</h2>
            <div className="w-10 h-0.5 bg-accent mb-6" />
            <p className="body-text mb-8">{t("equip.promiseText")}</p>
            <button onClick={() => navigateWithTransition("/contact")} className="cta-button bg-primary text-primary-foreground hover:bg-primary/90">
              {t("equip.contactUs")} <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Markets We Serve */}
      <section ref={marketsRef} className="py-24 md:py-32 px-8 md:px-16 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={marketsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="section-label mb-4">{t("equip.marketsWeServe")}</p>
            <h2 className="section-heading">{t("equip.whereWeOperate")}</h2>
            <div className="w-12 h-0.5 bg-accent mt-4 mx-auto" />
          </motion.div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {markets.map((m, i) => (
              <motion.div key={m.country} initial={{ opacity: 0, y: 20 }} animate={marketsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }} className="flex flex-col items-center gap-3 p-6 border border-border hover:shadow-lg transition-shadow duration-300">
                <span className="text-5xl">{m.flag}</span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  <span className="text-sm font-semibold text-primary">{language === "ar" ? m.countryAr : m.country}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default EquipmentSupply;
