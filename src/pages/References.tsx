import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ProjectBlock from "@/components/ProjectBlock";
import { usePageTransition } from "@/components/PageTransition";
import { allProjects, oilGasProjects, filters, filtersAr, type Project } from "@/data/projects";
import { useLanguage } from "@/contexts/useLanguage";

const allCombined = [...allProjects, ...oilGasProjects];

const References = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const { navigateWithTransition } = usePageTransition();
  const { t, isRTL, language } = useLanguage();

  // Check URL for pre-selected filter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const f = params.get("filter");
    if (f && filters.includes(f)) setActiveFilter(f);
  }, []);

  const filtered: Project[] = activeFilter === "All Projects"
    ? allCombined
    : allCombined.filter((p) => p.filter === activeFilter);

  return (
    <div className="min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      <Navbar />

      {/* HERO */}
      <section className="relative w-full flex items-center bg-[#1A2B4A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full flex flex-col md:flex-row items-center gap-12 py-32">
          {/* Left 55% */}
          <div className="md:w-[55%]">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.3em]">
              {t("ref.trackRecord")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mt-4" style={{ lineHeight: 1.1 }}>
              {t("ref.heroHeading")}
            </h1>
            <div className="flex items-center gap-4 mt-8 text-primary-foreground/80 text-sm font-semibold">
              <span>{t("ref.stat1")}</span>
              <span className="text-accent">|</span>
              <span>{t("ref.stat2")}</span>
              <span className="text-accent">|</span>
              <span>{t("ref.stat3")}</span>
            </div>
          </div>
          {/* Right 45% - Lottie */}
          <div className="md:w-[45%] flex justify-center">
            <DotLottieReact
              src="https://lottie.host/f877ef17-94cb-4b97-a035-4e6c08e90b39/iRbd7Qxjah.lottie"
              loop
              autoplay
              style={{ width: "100%", maxWidth: 500 }}
            />
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-[70px] z-40 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-8 md:px-16 flex items-center gap-2 overflow-x-auto py-4" style={{ scrollbarWidth: "none" }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap px-4 py-2 text-sm font-semibold transition-all ${
                activeFilter === f
                  ? "text-accent border-b-2 border-accent"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {isRTL ? filtersAr[f] : f}
            </button>
          ))}
        </div>
      </div>

      {/* PROJECTS LIST */}
      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-12 divide-y divide-border">
          {filtered.map((project, i) => (
            <ProjectBlock key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#1A2B4A] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4" style={{ lineHeight: 1.1 }}>
            {t("ref.ctaHeading")}
          </h2>
          <p className="text-primary-foreground/60 mb-8">
            {t("ref.ctaText")}
          </p>
          <button
            onClick={() => navigateWithTransition("/contact")}
            className="cta-button rounded-full"
          >
            {t("ref.ctaButton")} <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
          </button>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default References;
