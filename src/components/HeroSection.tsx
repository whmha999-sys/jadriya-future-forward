import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import eduHero from "@/assets/edu-tech-hero.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { useLanguage } from "@/contexts/useLanguage";

const slides = [
  {
    image: hero1,
    labelKey: "hero.slide1.label",
    headingKey: "hero.slide1.heading",
    link: "/about",
    tabKey: "hero.slide1.tab",
  },
  {
    image: eduHero,
    labelKey: "hero.slide2.label",
    headingKey: "hero.slide2.heading",
    link: "/robotics",
    tabKey: "hero.slide2.tab",
  },
  {
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&q=80",
    labelKey: "hero.slide3.label",
    headingKey: "hero.slide3.heading",
    link: "/medical",
    tabKey: "hero.slide3.tab",
  },
  {
    image: hero3,
    labelKey: "hero.slide4.label",
    headingKey: "hero.slide4.heading",
    link: "/oil-gas",
    tabKey: "hero.slide4.tab",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const { t, isRTL } = useLanguage();

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          advance();
          return 0;
        }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [paused, advance]);

  const goToSlide = (i: number) => {
    setCurrent(i);
    setProgress(0);
  };

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
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
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[hsl(var(--navy-deep))]/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-32 md:pb-40 px-8 md:px-16">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-primary-foreground/60 mb-2" style={{ fontSize: 12, letterSpacing: 3, fontWeight: 400 }}>
            {t(slide.labelKey)}
          </p>
          <div className="w-16 h-px bg-primary-foreground/40 mb-8" />
          <h1 className="hero-heading max-w-4xl whitespace-pre-line">
            {t(slide.headingKey)}
          </h1>
          <button
            className="mt-8 inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300"
          >
            {t("hero.learnMore")} <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>

      {/* Circle arrow button - right side */}
      <button
        onClick={advance}
        className={`absolute ${isRTL ? 'left-8 md:left-16' : 'right-8 md:right-16'} bottom-32 md:bottom-40 z-10 w-14 h-14 rounded-full border border-primary-foreground/40 flex items-center justify-center hover:border-accent hover:text-accent text-primary-foreground transition-colors duration-300`}
      >
        <ArrowRight className={`h-5 w-5 ${isRTL ? 'rotate-180' : ''}`} />
      </button>

      {/* Bottom tab bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-[hsl(var(--navy-deep))]/50 backdrop-blur-sm" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="flex">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`flex-1 py-4 relative text-center transition-colors duration-300 ${
                i === current ? "text-primary-foreground" : "text-primary-foreground/40 hover:text-primary-foreground/60"
              }`}
            >
              <span className="text-xs font-semibold tracking-wider uppercase">
                {t(s.tabKey)}
              </span>
              {i === current && (
                <div className="absolute bottom-0 left-0 h-[3px] bg-[#F5A623] transition-none" style={{ width: `${progress}%` }} />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
