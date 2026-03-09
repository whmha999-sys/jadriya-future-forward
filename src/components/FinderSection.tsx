import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { usePageTransition } from "./PageTransition";

const solutions = [
  "engineering consultancy",
  "robotics training programs",
  "AI workforce solutions",
  "project management",
  "equipment supply",
];

const FinderSection = () => {
  const [current, setCurrent] = useState(0);
  const { navigateWithTransition } = usePageTransition();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % solutions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 px-8 md:px-16 bg-card">
      <div className="max-w-5xl mx-auto">
        <p className="section-label mb-6">Find the right solution for your needs</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
          I'm looking for
        </h2>
        <div className="h-20 md:h-24 flex items-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl lg:text-6xl font-light italic text-muted-foreground/40"
            >
              {solutions[current]}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center gap-6">
          <button className="cta-button">
            Explore Solutions <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-12">
          {solutions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-accent w-6" : "bg-muted-foreground/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinderSection;
