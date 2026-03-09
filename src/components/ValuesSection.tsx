import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const values = [
  "Operational excellence",
  "Tireless experimentation for innovative business solutions",
  "Open and respectful working environment",
  "Trustworthiness in all business relationships",
  "Highest ethical standards",
  "Sustainable financial strength",
];

const ValuesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-8 md:px-16 overflow-hidden"
      style={{ backgroundColor: "#2d3a4a" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-16 md:gap-24">
        {/* VALUES heading - slides from left */}
        <motion.h2
          initial={{ opacity: 0, x: -120 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary-foreground tracking-tight shrink-0"
        >
          VALUES
        </motion.h2>

        {/* Value items - slide from bottom */}
        <div className="space-y-6 md:space-y-8">
          {values.map((value, i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.18, ease: "easeOut" }}
              className="flex items-center gap-4"
            >
              <ArrowRight className="h-4 w-4 shrink-0" style={{ color: "#d4a039" }} />
              <span className="text-primary-foreground text-base md:text-lg font-medium">
                {value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
