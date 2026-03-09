import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Factory, Hospital, Bot, Blocks, FileCheck, Wrench, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { usePageTransition } from "@/components/PageTransition";
import heroImg from "@/assets/equip-supply-hero.jpg";
import warehouseImg from "@/assets/equip-supply-warehouse.jpg";
import promiseImg from "@/assets/equip-supply-promise.jpg";

const supplies = [
  { icon: Factory, title: "Industrial Equipment", description: "Heavy machinery and industrial tools for infrastructure and pipeline projects." },
  { icon: Hospital, title: "Medical Equipment", description: "Specialized medical devices and hospital infrastructure equipment." },
  { icon: Bot, title: "Educational Technology", description: "Robotics kits, coding hardware, and AI learning tools for schools and training centers." },
  { icon: Blocks, title: "Construction Materials", description: "High-quality materials sourced from trusted international suppliers." },
  { icon: FileCheck, title: "Tender Management", description: "Full capability to prepare, submit, and manage government and private sector tenders." },
  { icon: Wrench, title: "After-Sales Support", description: "Installation, maintenance, and technical support for all supplied equipment." },
];

const stats = [
  { number: "6", label: "Markets" },
  { number: "2", label: "Countries" },
  { number: "100+", label: "Suppliers" },
  { number: "50+", label: "Tenders Won" },
];

const markets = [
  { country: "Jordan", flag: "🇯🇴" },
  { country: "Iraq", flag: "🇮🇶" },
  { country: "UAE", flag: "🇦🇪" },
  { country: "Saudi Arabia", flag: "🇸🇦" },
  { country: "Egypt", flag: "🇪🇬" },
  { country: "Libya", flag: "🇱🇾" },
];

const EquipmentSupply = () => {
  const { navigateWithTransition } = usePageTransition();
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

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <img src={heroImg} alt="Industrial warehouse" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-8 md:px-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <p className="text-primary-foreground/60 text-xs tracking-[0.2em] uppercase mb-2">Equipment Supply & Tenders</p>
            <div className="w-16 h-px bg-primary-foreground/40 mb-8" />
            <h1 className="hero-heading max-w-4xl">The Right Equipment.<br />Delivered on Time.</h1>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section ref={whatWeDoRef} className="py-24 md:py-32 px-8 md:px-16 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={whatWeDoInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <p className="section-label mb-4">What We Do</p>
              <h2 className="section-heading mb-6">End-to-End Equipment Supply Solutions</h2>
              <p className="body-text">
                AL-JADRIYA Engineering provides comprehensive equipment supply services for engineering, industrial, medical, and educational technology projects. We manage the full procurement cycle, from sourcing and tendering to delivery and after-sales support,ing our clients receive the right equipment at the right time.
              </p>
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
            <p className="section-label mb-4">What We Offer</p>
            <h2 className="section-heading">What We Supply</h2>
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">Our Reach</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Global Supply Network</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Quality You Can Trust</h2>
            <div className="w-10 h-0.5 bg-accent mb-6" />
            <p className="body-text mb-8">
              Every piece of equipment we supply meets strict quality and safety standards. We work exclusively with certified international partners and manufacturers to ensure our clients receive only the best — b,d by full after-sales support and technical expertise.
            </p>
            <button onClick={() => navigateWithTransition("/contact")} className="cta-button bg-primary text-primary-foreground hover:bg-primary/90">
              Contact Us <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Markets We Serve */}
      <section ref={marketsRef} className="py-24 md:py-32 px-8 md:px-16 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={marketsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="section-label mb-4">Markets We Serve</p>
            <h2 className="section-heading">Where We Operate</h2>
            <div className="w-12 h-0.5 bg-accent mt-4 mx-auto" />
          </motion.div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {markets.map((m, i) => (
              <motion.div key={m.country} initial={{ opacity: 0, y: 20 }} animate={marketsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }} className="flex flex-col items-center gap-3 p-6 border border-border hover:shadow-lg transition-shadow duration-300">
                <span className="text-5xl">{m.flag}</span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  <span className="text-sm font-semibold text-primary">{m.country}</span>
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
