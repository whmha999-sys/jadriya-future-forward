import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/contexts/useLanguage";

interface Props {
  project: Project;
  index: number;
  compact?: boolean;
}

const ProjectBlock = ({ project, index, compact = false }: Props) => {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const isOdd = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${isOdd ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center ${compact ? "py-8" : "py-12 md:py-16"}`}
    >
      {/* Text */}
      <div className={`md:w-1/2 ${isOdd ? "md:border-l-2" : "md:border-l-2"} border-accent md:pl-8`}>
        <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">
          {isAr ? project.labelAr : project.label}
        </span>
        <h3 className={`text-primary font-extrabold mt-2 ${compact ? "text-lg" : "text-xl md:text-2xl"}`} style={{ lineHeight: 1.2 }}>
          {isAr ? project.titleAr : project.title}
        </h3>
        <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
          {isAr ? project.descriptionAr : project.description}
        </p>
        <span className="text-muted-foreground/50 text-xs mt-3 block">{project.year}</span>
      </div>

      {/* Photo */}
      <div className="md:w-1/2">
        <img
          src={project.image}
          alt={isAr ? project.titleAr : project.title}
          loading="lazy"
          className="w-full h-64 md:h-80 object-cover rounded-lg"
        />
      </div>
    </motion.div>
  );
};

export default ProjectBlock;
