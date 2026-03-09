import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [
  {
    image: hero1,
    label: "COMMITTED TO THE FUTURE OF ENGINEERING & EDUCATION",
    heading: ["This is", "AL-JADRIYA"],
  },
  {
    image: hero2,
    label: "INNOVATION THROUGH EDUCATION AND TECHNOLOGY",
    heading: ["Innovation Through", "Education and Technology"],
  },
  {
    image: hero3,
    label: "COMMITTED TO THE FUTURE OF ENGINEERING & EDUCATION",
    heading: ["No Project Too Complex.", "No Sector Too Demanding."],
  },
  {
    image: hero4,
    label: "COMPREHENSIVE ENGINEERING CONSULTANCY",
    heading: ["Comprehensive", "Engineering Consultancy"],
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-navy-deep">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <motion.img
            src={slide.image}
            alt="Hero"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 6, ease: "linear" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-8 md:px-16">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-primary-foreground/60 text-xs tracking-[0.2em] uppercase mb-2">
            {slide.label}
          </p>
          <div className="w-16 h-px bg-primary-foreground/40 mb-8" />
          <h1 className="hero-heading max-w-4xl">
            {slide.heading[0]}
            <br />
            {slide.heading[1]}
          </h1>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute right-8 md:right-16 bottom-24 md:bottom-32 z-10 flex flex-col items-center gap-2">
        <div className="w-12 h-12 rounded-full border border-primary-foreground/40 flex items-center justify-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-0.5 h-4 bg-primary-foreground/60"
          />
        </div>
        <span className="text-primary-foreground/40 text-[10px] uppercase tracking-widest [writing-mode:vertical-lr]">
          Scroll Down
        </span>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-accent w-8" : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
