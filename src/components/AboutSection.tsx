import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-image.jpg";

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
    <section ref={ref} className="py-24 md:py-32 px-8 md:px-16 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-4">Welcome to AL-JADRIYA Engineering</p>
            <h2 className="section-heading mb-6">
              Leading in engineering, education, and innovation
            </h2>
            <p className="body-text">
              We are an integrated engineering and educational technology company, serving Jordan,
              Iraq, and the wider region. From complex engineering consultancy to world-class AI
              and robotics training programs — we build the future on two fronts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden"
          >
            <img
              src={aboutImage}
              alt="Engineers reviewing project plans"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="border-t-2 border-accent pt-6"
            >
              <span className="stat-number">{stat.number}</span>
              <p className="mt-2 text-sm text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
