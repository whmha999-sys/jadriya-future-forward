import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageTransition } from "./PageTransition";

const CompanyCardsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const { navigateWithTransition } = usePageTransition();

  const cards = [
    {
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
      label: t("cards.oilgas.label"),
      headline: t("cards.oilgas.headline"),
      link: "/oil-gas",
    },
    {
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80",
      label: t("cards.medical.label"),
      headline: t("cards.medical.headline"),
      link: "/medical",
    },
    {
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
      label: t("cards.robotics.label"),
      headline: t("cards.robotics.headline"),
      link: "/robotics",
    },
    {
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      label: t("cards.energy.label"),
      headline: t("cards.energy.headline"),
      link: "/energy",
    },
  ];

  return (
    <section ref={ref} className="bg-background py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-accent uppercase text-xs font-semibold tracking-[3px] mb-2">
            {t("cards.label")}
          </p>
          <div className="w-12 h-0.5 bg-accent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => navigateWithTransition(card.link)}
              className="group relative h-[380px] overflow-hidden text-left rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-shadow duration-300"
            >
              <img
                src={card.image}
                alt={card.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[hsl(var(--navy-deep))]/40 group-hover:bg-[hsl(var(--navy-deep))]/55 transition-colors duration-300" />

              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <p className="text-primary-foreground/80 text-xs font-semibold uppercase tracking-[2px]">
                  {card.label}
                </p>
                <div>
                  <h3 className="text-primary-foreground text-xl font-bold mb-4 leading-tight">
                    {card.headline}
                  </h3>
                  <div className="w-10 h-10 rounded-full border border-primary-foreground/40 flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                    <ArrowRight className="h-4 w-4 text-primary-foreground/60 group-hover:translate-x-1 group-hover:text-accent transition-all duration-300" />
                  </div>
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
