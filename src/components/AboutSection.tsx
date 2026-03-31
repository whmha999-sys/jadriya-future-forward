import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-image.jpg";
import logoWatermark from "@/assets/logo-watermark.png";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const stats = [
    { number: t("about.stat1.number"), label: t("about.stat1.label") },
    { number: t("about.stat2.number"), label: t("about.stat2.label") },
    { number: t("about.stat3.number"), label: t("about.stat3.label") },
    { number: t("about.stat4.number"), label: t("about.stat4.label") },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-8 md:px-16 bg-card overflow-hidden">
      <img
        src={logoWatermark}
        alt=""
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[500px] md:w-[700px] opacity-[0.04] pointer-events-none select-none"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-4" style={{ color: '#F5A623' }}>{t("about.label")}</p>
            <h2 className="section-heading mb-6">{t("about.heading")}</h2>
            <p className="body-text">{t("about.text")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden"
          >
            <img
              src={aboutImage}
              alt="Engineers reviewing project plans"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="border-t-2 border-accent pt-6"
            >
              <span className="stat-number">{stat.number}</span>
              <p className="mt-2 text-sm text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
