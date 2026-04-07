import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const QuoteSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-background py-20 md:py-28" ref={ref}>
      <div className="max-w-3xl mx-auto px-8 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-7xl text-accent/30 font-serif leading-none select-none">"</span>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light italic text-foreground leading-relaxed tracking-tight">
            He who has health has hope, and he who has hope has everything.
          </p>
          <footer className="mt-6 text-muted-foreground text-base md:text-lg tracking-wide">
            ~ Arabian proverb
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
