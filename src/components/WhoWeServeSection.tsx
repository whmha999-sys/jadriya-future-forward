import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/useLanguage";

const markets = [
  { nameKey: "serve.jordan", flag: "🇯🇴" },
  { nameKey: "serve.iraq", flag: "🇮🇶" },
  { nameKey: "serve.uae", flag: "🇦🇪" },
  { nameKey: "serve.saudi", flag: "🇸🇦" },
  { nameKey: "serve.egypt", flag: "🇪🇬" },
  { nameKey: "serve.libya", flag: "🇱🇾" },
];

const WhoWeServeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="bg-card">
      <div className="flex flex-col md:flex-row" ref={ref}>
        {/* Left 40% */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[40%] py-20 px-8 md:px-16 flex flex-col justify-center"
        >
          <p className="text-accent text-xs font-semibold tracking-[3px] uppercase mb-4">
            {t("serve.label")}
          </p>
          <h2 className="section-heading mb-6">{t("serve.heading")}</h2>
          <p className="body-text mb-8">{t("serve.text")}</p>
          <div>
            <button className="cta-button rounded-full">
              {t("serve.cta")} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Right 60% */}
        <div className="w-full md:w-[60%] min-h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80"
            alt="Who we serve"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Markets strip */}
      <div className="bg-[hsl(var(--navy-deep))] py-5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-wrap justify-center md:justify-between gap-4 md:gap-0">
          {markets.map((m) => (
            <span key={m.nameKey} className="text-primary-foreground/70 text-sm font-medium flex items-center gap-2">
              <span className="text-lg">{m.flag}</span> {t(m.nameKey)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
