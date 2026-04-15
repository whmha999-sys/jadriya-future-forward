import { useEffect, useRef, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
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

/* ── Auto-scrolling image slider ── */
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

  return (
    <div className="relative w-full h-[320px] md:h-[400px] rounded-xl overflow-hidden shadow-lg group">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${alt} ${i + 1}`}
          loading={i === current ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          style={{ WebkitBackfaceVisibility: "hidden" }}
        />
      ))}
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-[#F5A623]" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

const caseStudyKeys = [
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

const achievementKeys = [
  { stat: "128", headlineKey: "cs.ach1.headline", descKey: "cs.ach1.desc" },
  { stat: "6", headlineKey: "cs.ach2.headline", descKey: "cs.ach2.desc" },
  { stat: "FULL", headlineKey: "cs.ach3.headline", descKey: "cs.ach3.desc" },
  { stat: "DUBAI", headlineKey: "cs.ach4.headline", descKey: "cs.ach4.desc" },
  { stat: "9", headlineKey: "cs.ach5.headline", descKey: "cs.ach5.desc" },
  { stat: "AL-HUSAYNIYYA", headlineKey: "cs.ach6.headline", descKey: "cs.ach6.desc" },
];

const CaseStudies = () => {
  const { navigateWithTransition } = usePageTransition();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="w-full" style={{ background: "#1A2B4A", height: 300 }}>
        <div className="max-w-5xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">{t("cs.heroTitle")}</h1>
          <div className="w-16 h-1 rounded-full mt-4" style={{ background: "#F5A623" }} />
          <p className="text-white/70 mt-4 text-sm max-w-lg">{t("cs.heroSub")}</p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white">
        {caseStudyKeys.map((cs, i) => {
          const isOdd = i % 2 === 0;
          return (
            <div key={i} className={`${i > 0 ? "border-t border-gray-100" : ""}`}>
              <div
                className={`max-w-6xl mx-auto px-6 py-20 flex flex-col ${isOdd ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}
              >
                <div className="md:w-1/2">
                  {cs.images.length > 1 ? (
                    <ImageSlider images={cs.images} alt={t(cs.titleKey)} />
                  ) : (
                    <img
                      src={cs.images[0]}
                      alt={t(cs.titleKey)}
                      loading="lazy"
                      width={1280}
                      height={864}
                      className="w-full h-[320px] md:h-[400px] object-cover rounded-xl shadow-lg"
                    />
                  )}
                </div>
                <div className="md:w-1/2" style={{ padding: "0 24px" }}>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#F5A623" }}>
                    {t(cs.labelKey)}
                  </span>
                  <h2 className="text-xl md:text-2xl font-extrabold mt-2" style={{ color: "#1A2B4A" }}>
                    {t(cs.titleKey)}
                  </h2>
                  <p className="text-sm mt-1" style={{ color: "#9CA3AF" }}>{t(cs.locationKey)}</p>
                  <p className="text-sm mt-4 leading-relaxed" style={{ color: "#6B7280" }}>{t(cs.bodyKey)}</p>
                  <button
                    onClick={() => navigateWithTransition(cs.cta)}
                    className="mt-6 text-sm font-semibold hover:underline transition-colors"
                    style={{ color: "#F5A623" }}
                  >
                    {t("cs.contactSimilar")}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Achievements */}
      <section style={{ background: "#1A2B4A", padding: "80px 0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">{t("cs.achievementsTitle")}</h2>
            <div className="w-16 h-1 rounded-full mt-4 mx-auto" style={{ background: "#F5A623" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievementKeys.map((a, i) => (
              <div key={i} className="rounded-xl p-10" style={{ background: "#1E3459" }}>
                <span className="block text-[28px] sm:text-[40px] md:text-[60px] font-[800] leading-none break-all" style={{ color: "#F5A623" }}>
                  {a.stat}
                </span>
                <h3 className="text-white font-bold text-lg mt-4">{t(a.headlineKey)}</h3>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: "#9CA3AF" }}>{t(a.descKey)}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => navigateWithTransition("/contact")}
              className="px-8 py-3 rounded-full font-semibold text-sm transition-colors"
              style={{ background: "#F5A623", color: "#1A2B4A" }}
            >
              {t("cs.contactProject")}
            </button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default CaseStudies;
