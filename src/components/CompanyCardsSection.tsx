import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { usePageTransition } from "./PageTransition";
import { useLanguage } from "@/contexts/useLanguage";
import oilgasCard from "@/assets/oilgas-card.jpg";
import medicalCard from "@/assets/medical-card.jpg";
import roboticsCard from "@/assets/robotics-card.jpg";
import energyCard from "@/assets/energy-card.png";

const cards = [
  {
    labelKey: "cards.oilgas.label",
    headlineKey: "cards.oilgas.headline",
    photo: oilgasCard,
    link: "/oil-gas",
  },
  {
    labelKey: "cards.medical.label",
    headlineKey: "cards.medical.headline",
    photo: medicalCard,
    link: "/medical",
  },
  {
    labelKey: "cards.robotics.label",
    headlineKey: "cards.robotics.headline",
    photo: roboticsCard,
    link: "/robotics",
  },
  {
    labelKey: "cards.energy.label",
    headlineKey: "cards.energy.headline",
    photo: energyCard,
    link: "/energy",
  },
];

const CompanyCardsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { navigateWithTransition } = usePageTransition();
  const { t } = useLanguage();

  return (
    <section className="bg-background pt-4 pb-20 px-8 md:px-16">
      <div className="max-w-[88rem] mx-auto" ref={ref}>
        {/* Label */}
        <div className="mb-12">
          <p className="text-accent text-xs font-semibold tracking-[3px] uppercase mb-3">
            {t("cards.sectionLabel")}
          </p>
          <div className="w-12 h-0.5 bg-accent" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => card.link !== "/energy" && navigateWithTransition(card.link)}
              className={`group relative h-[380px] rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-500 text-left ${card.link === "/energy" ? "cursor-default" : "cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"}`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={card.photo}
                  alt={t(card.headlineKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--navy-deep))]/70 via-[hsl(var(--navy-deep))]/20 to-transparent group-hover:from-[hsl(var(--navy-deep))]/80 group-hover:via-[hsl(var(--navy-deep))]/30 transition-all duration-500" />
              
              {/* Top: label + headline */}
              <div className="absolute top-5 left-5 right-5 z-10">
                <span className="text-xs font-semibold uppercase tracking-[2px] text-primary-foreground">
                  {t(card.labelKey)}
                </span>
                <h3 className="text-xl font-bold text-primary-foreground mt-4 leading-tight">
                  {t(card.headlineKey)}
                </h3>
              </div>

              {/* Bottom-right arrow */}
              <div className="absolute bottom-5 right-5 z-10">
                <div className="w-10 h-10 rounded-full border border-primary-foreground/40 hover:border-accent hover:bg-accent/20 flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="h-4 w-4 text-primary-foreground transition-transform duration-300 group-hover:translate-x-0 hover:translate-x-1" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyCardsSection;
