import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hero4 from "@/assets/hero-4.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1920&q=80",
      label: t("hero.slide1.label"),
      heading: t("hero.slide1.heading"),
      link: "/oil-gas",
      tab: t("hero.slide1.tab"),
    },
    {
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&q=80",
      label: t("hero.slide2.label"),
      heading: t("hero.slide2.heading"),
      link: "/medical",
      tab: t("hero.slide2.tab"),
    },
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80",
      label: t("hero.slide3.label"),
      heading: t("hero.slide3.heading"),
      link: "/robotics",
      tab: t("hero.slide3.tab"),
    },
    {
      image: hero4,
      label: t("hero.slide4.label"),
      heading: t("hero.slide4.heading"),
      link: "/energy",
      tab: t("hero.slide4.tab"),
    },
  ];

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrent((c) => (c + 1) % slides.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [paused, slides.length]);

  const slide = slides[current];

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-[hsl(var(--navy-deep))]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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
          <img
            src={slide.image}
            alt={slide.tab}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[hsl(var(--navy-deep))]/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-32 md:pb-40 px-8 md:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-foreground/60 uppercase mb-3" style={{ fontSize: '12px', letterSpacing: '3px', fontWeight: 400 }}>
              {slide.label}
            </p>
            <div className="w-16 h-px bg-primary-foreground/40 mb-6" />
            <h1 className="hero-heading max-w-4xl mb-8">
              {slide.heading}
            </h1>
            <a
              href={slide.link}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300 hover:brightness-110"
            >
              {t("hero.learnMore")} <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right side circle arrow */}
      <div className="absolute right-8 md:right-16 bottom-32 md:bottom-40 z-10">
        <button
          onClick={() => goToSlide((current + 1) % slides.length)}
          className="group w-14 h-14 rounded-full border border-primary-foreground/40 flex items-center justify-center hover:border-accent transition-colors duration-300"
        >
          <ArrowRight className="h-5 w-5 text-primary-foreground/60 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Bottom tab indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="flex">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`flex-1 py-4 px-4 text-left border-t-2 transition-all duration-300 ${
                i === current
                  ? "border-accent bg-[hsl(var(--navy-deep))]/40"
                  : "border-primary-foreground/10 hover:border-primary-foreground/30"
              }`}
            >
              <span className={`text-xs font-semibold uppercase tracking-wider ${
                i === current ? "text-accent" : "text-primary-foreground/40"
              }`}>
                {s.tab}
              </span>
              {i === current && (
                <div className="mt-2 h-0.5 bg-primary-foreground/20 overflow-hidden">
                  <motion.div
                    className="h-full bg-accent"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
