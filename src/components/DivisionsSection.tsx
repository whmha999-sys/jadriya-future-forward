import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import divEngineering from "@/assets/div-engineering.jpg";
import divEducation from "@/assets/div-education.jpg";
import divEquipment from "@/assets/div-equipment.jpg";
import divPartnerships from "@/assets/div-partnerships.jpg";

const divisions = [
  {
    title: "Engineering Consultancy Division",
    description: "End-to-end engineering consultancy: feasibility studies, project design, procurement, and turnkey project management for public and private sector clients across Jordan and Iraq.",
    image: divEngineering,
  },
  {
    title: "Educational Technology Division",
    description: "World-class robotics, programming, and AI training programs delivered to schools, professionals, and career-shifters — in-person and online.",
    image: divEducation,
  },
  {
    title: "Equipment Supply & Tenders",
    description: "Full capability to supply technical equipment, manage government tenders, and place trained graduates into the workforce.",
    image: divEquipment,
  },
  {
    title: "International Partnerships",
    description: "Backed by established relationships with leading international partners, operating across Jordan, Iraq, UAE, KSA, Egypt, and Libya.",
    image: divPartnerships,
  },
];

const DivisionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 px-8 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-heading">Our Divisions & Services</h2>
          <div className="w-12 h-0.5 bg-accent mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {divisions.map((div, i) => (
            <motion.div
              key={div.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group relative overflow-hidden h-[380px] cursor-pointer"
            >
              <img
                src={div.image}
                alt={div.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy-deep/60 group-hover:bg-navy-deep/75 transition-colors duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-3">
                  {div.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4 max-w-lg">
                  {div.description}
                </p>
                <div className="flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionsSection;
