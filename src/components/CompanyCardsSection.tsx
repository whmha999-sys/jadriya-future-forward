import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { usePageTransition } from "./PageTransition";
import { useLanguage } from "@/contexts/useLanguage";
import oilgasCard from "@/assets/oilgas-card.jpg";
import medicalCard from "@/assets/medical-card.jpg";
import roboticsCard from "@/assets/robotics-card.jpg";
import energyCard from "@/assets/energy-card.jpg";

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
    <section className="bg-background py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto" ref={ref}>
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
              onClick={() => navigateWithTransition(card.link)}
              className="group relative h-[475px] rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-shadow duration-500 text-left cursor-pointer"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={card.photo}
                  alt={t(card.headlineKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-[hsl(var(--navy-deep))]/40 group-hover:bg-[hsl(var(--navy-deep))]/55 transition-colors duration-500" />
              
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
                <div className="w-10 h-10 rounded-full border border-primary-foreground/40 group-hover:border-accent flex items-center justify-center transition-colors duration-300">
                  <ArrowRight className="h-4 w-4 text-primary-foreground group-hover:translate-x-0.5 transition-transform duration-300" />
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
