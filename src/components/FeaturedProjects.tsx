import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectBlock from "@/components/ProjectBlock";
import { usePageTransition } from "@/components/PageTransition";
import type { Project } from "@/data/projects";

interface Props {
  label: string;
  heading: string;
  projects: Project[];
  ctaText: string;
  ctaHref: string;
}

const FeaturedProjects = ({ label, heading, projects, ctaText, ctaHref }: Props) => {
  const { navigateWithTransition } = usePageTransition();

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        <p className="section-label text-accent mb-4">{label}</p>
        <h2 className="section-heading mb-8">{heading}</h2>

        <div className="divide-y divide-border">
          {projects.map((project, i) => (
            <ProjectBlock key={project.id} project={project} index={i} compact />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => navigateWithTransition(ctaHref)}
            className="cta-button rounded-full"
          >
            {ctaText} <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
