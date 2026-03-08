import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import logoIconWhite from "@/assets/logo-icon-white.png";

const stats = [
  { number: "2", label: "Specialized Divisions" },
  { number: "2", label: "Countries: Jordan & Iraq" },
  { number: "6", label: "Regional Markets" },
  { number: "101+", label: "Projects & Programs Delivered" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-8 md:px-16 overflow-hidden" style={{ backgroundColor: "#2D3A4A" }}>
      {/* Watermark logo background */}
      <img
        src={logoIconWhite}
        alt=""
        className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[400px] md:w-[550px] opacity-40 pointer-events-none select-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/70 mb-4">
              WHO WE ARE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              An Integrated Engineering & Educational Technology Company
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              AL-JADRIYA Engineering operates across two specialized divisions — Engineering
              Consultancy and Educational Technology — serving Jordan, Iraq, and the wider region.
              Headquartered in Amman with an office in Baghdad, we combine deep technical expertise
              with world-class training programs to build the future on two fronts.
            </p>
            <button
              className="inline-flex items-center gap-2 px-6 py-3 border-2 text-sm font-semibold tracking-wider uppercase transition-colors hover:bg-[#2DB84B] hover:text-white"
              style={{ borderColor: "#2DB84B", color: "#2DB84B" }}
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          {/* Right side stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="p-6 rounded-sm"
                style={{ backgroundColor: "#364657" }}
              >
                <span className="text-4xl md:text-5xl font-bold" style={{ color: "#2DB84B" }}>
                  {stat.number}
                </span>
                <p className="mt-2 text-sm text-white/70 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
