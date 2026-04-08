import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/useLanguage";

const QuoteSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t, isRTL } = useLanguage();

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
            {t("quote.text")}
          </p>
          <footer className="mt-6 text-muted-foreground text-base md:text-lg tracking-wide">
            ~ {t("quote.author")}
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
