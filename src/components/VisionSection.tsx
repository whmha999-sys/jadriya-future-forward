import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { usePageTransition } from "./PageTransition";
import visionBg from "@/assets/vision-bg.jpg";

const VisionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { navigateWithTransition } = usePageTransition();

  return (
    <section ref={ref} className="relative h-[80vh] min-h-[600px] overflow-hidden">
      <img
        src={visionBg}
        alt="Amman cityscape"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy-deep/30" />

      <div className="relative z-10 h-full flex items-center px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-card p-10 md:p-14 max-w-xl shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Our Vision for the Region
          </h2>
          <div className="w-10 h-0.5 bg-accent mb-6" />
          <p className="body-text mb-8">
            Since its founding, AL-JADRIYA Engineering has been guided by a firm philosophy: a
            company's greatest asset is the trust it builds with its clients, partners, trainees,
            and community. We aim to be the most trusted engineering and education provider in the
            Middle East.
          </p>
          <button onClick={() => navigateWithTransition("/contact")} className="cta-button bg-primary text-primary-foreground hover:bg-primary/90">
            Learn More <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
