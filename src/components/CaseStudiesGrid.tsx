import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePageTransition } from "@/components/PageTransition";
import { useLanguage } from "@/contexts/useLanguage";

import hussein1 from "@/assets/case-studies/hussein-1.jpg";
import hussein2 from "@/assets/case-studies/hussein-2.jpg";
import hussein3 from "@/assets/case-studies/hussein-3.jpg";
import hussein4 from "@/assets/case-studies/hussein-4.jpg";

import ana1 from "@/assets/case-studies/ana-1.jpg";
import ana2 from "@/assets/case-studies/ana-2.jpg";
import ana3 from "@/assets/case-studies/ana-3.jpg";
import ana4 from "@/assets/case-studies/ana-4.jpg";
import ana5 from "@/assets/case-studies/ana-5.jpg";
import ana6 from "@/assets/case-studies/ana-6.jpg";

import baghdad1 from "@/assets/case-studies/baghdad-1.jpg";
import baghdad2 from "@/assets/case-studies/baghdad-2.jpg";
import baghdad3 from "@/assets/case-studies/baghdad-3.jpg";
import baghdad4 from "@/assets/case-studies/baghdad-4.jpg";

import salahuddin1 from "@/assets/case-studies/salahuddin-1.jpg";
import salahuddin2 from "@/assets/case-studies/salahuddin-2.jpg";
import salahuddin3 from "@/assets/case-studies/salahuddin-3.jpg";

/* ── Safari-safe image slider — renders only the active image ── */
const ImageSlider = ({ images, alt }: { images: string[]; alt: string }) => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  }, [images.length]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const goTo = (i: number) => {
    setCurrent(i);
    clearInterval(timerRef.current);
    startTimer();
  };

  // Preload the next image
  const nextIdx = (current + 1) % images.length;

  return (
    <div className="relative w-full h-[260px] md:h-[320px] rounded-xl overflow-hidden shadow-lg bg-muted">
      {/* Active image */}
      <img
        key={current}
        src={images[current]}
        alt={`${alt} ${current + 1}`}
        className="w-full h-full object-cover"
        style={{ display: "block" }}
      />
      {/* Preload next image (hidden) */}
      {nextIdx !== current && (
        <link rel="preload" as="image" href={images[nextIdx]} />
      )}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

const cases = [
  {
    labelKey: "cs.block1.label", titleKey: "cs.block1.title", locationKey: "cs.block1.location", bodyKey: "cs.block1.body",
    cta: "/contact?ref=hussein-hospital",
    images: [hussein1, hussein2, hussein3, hussein4],
  },
  {
    labelKey: "cs.block2.label", titleKey: "cs.block2.title", locationKey: "cs.block2.location", bodyKey: "cs.block2.body",
    cta: "/contact?ref=ana-hospital",
    images: [ana1, ana2, ana3, ana4, ana5, ana6],
  },
  {
    labelKey: "cs.block3.label", titleKey: "cs.block3.title", locationKey: "cs.block3.location", bodyKey: "cs.block3.body",
    cta: "/contact?ref=baghdad-water",
    images: [baghdad1, baghdad2, baghdad3, baghdad4],
  },
  {
    labelKey: "cs.block4.label", titleKey: "cs.block4.title", locationKey: "cs.block4.location", bodyKey: "cs.block4.body",
    cta: "/contact?ref=salahuddin-oxygen",
    images: [salahuddin1, salahuddin2, salahuddin3],
  },
];

interface Props {
  label: string;
  heading: string;
  showViewAll?: boolean;
  viewAllText?: string;
}

const CaseStudiesGrid = ({ label, heading, showViewAll, viewAllText }: Props) => {
  const { navigateWithTransition } = usePageTransition();
  const { t } = useLanguage();

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <p className="section-label text-accent mb-4">{label}</p>
        <h2 className="section-heading mb-16">{heading}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cases.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col"
            >
              <ImageSlider images={cs.images} alt={t(cs.titleKey)} />
              <div className="mt-5">
                <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                  {t(cs.labelKey)}
                </span>
                <h3 className="text-primary font-bold text-lg mt-2">{t(cs.titleKey)}</h3>
                <p className="text-muted-foreground text-xs mt-1">{t(cs.locationKey)}</p>
                <p className="body-text text-sm mt-3 line-clamp-3">{t(cs.bodyKey)}</p>
                <button
                  onClick={() => navigateWithTransition(cs.cta)}
                  className="text-accent font-semibold text-sm mt-4 hover:underline transition-colors"
                >
                  {t("cs.contactSimilar")}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {showViewAll && viewAllText && (
          <div className="text-center mt-12">
            <button
              onClick={() => navigateWithTransition("/case-studies")}
              className="cta-button rounded-full"
            >
              {viewAllText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
