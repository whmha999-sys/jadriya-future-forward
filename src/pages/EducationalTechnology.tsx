import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Bot, Code, TrendingUp, Heart, Building, Globe, GraduationCap, Briefcase, Users, Landmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { usePageTransition } from "@/components/PageTransition";
import { useLanguage } from "@/contexts/useLanguage";
import heroImg from "@/assets/hero-2.jpg";
import classroomImg from "@/assets/edu-tech-classroom.jpg";
import trainingCenterImg from "@/assets/edu-tech-training-center.jpg";

const EducationalTechnology = () => {
  const { navigateWithTransition } = usePageTransition();
  const { t } = useLanguage();
  const whoWeServeRef = useRef(null);
  const programsRef = useRef(null);
  const statsRef = useRef(null);
  const trainingRef = useRef(null);
  const audienceRef = useRef(null);
  const whoWeServeInView = useInView(whoWeServeRef, { once: true, margin: "-100px" });
  const programsInView = useInView(programsRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const trainingInView = useInView(trainingRef, { once: true, margin: "-100px" });
  const audienceInView = useInView(audienceRef, { once: true, margin: "-100px" });

  const programs = [
    { icon: Bot, title: t("edu.roboticsSchools"), description: t("edu.roboticsSchoolsDesc") },
    { icon: Code, title: t("edu.aiProgramming"), description: t("edu.aiProgrammingDesc") },
    { icon: TrendingUp, title: t("edu.upskilling"), description: t("edu.upskillingDesc") },
    { icon: Heart, title: t("edu.womenInTech"), description: t("edu.womenInTechDesc") },
    { icon: Building, title: t("edu.corporateTraining"), description: t("edu.corporateTrainingDesc") },
    { icon: Globe, title: t("edu.onlineLearning"), description: t("edu.onlineLearningDesc") },
  ];

  const stats = [
    { number: "2", label: t("edu.countries") },
    { number: "6", label: t("edu.markets") },
    { number: "500+", label: t("edu.graduates") },
    { number: "20+", label: t("edu.schoolPartners") },
  ];

  const audiences = [
    { icon: GraduationCap, title: t("edu.schools"), description: t("edu.schoolsDesc") },
    { icon: Briefcase, title: t("edu.itProfessionals"), description: t("edu.itProfessionalsDesc") },
    { icon: Users, title: t("edu.womenInTechAudience"), description: t("edu.womenInTechAudienceDesc") },
    { icon: Landmark, title: t("edu.institutions"), description: t("edu.institutionsDesc") },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <img src={heroImg} alt="Students working with robotics" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-8 md:px-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <p className="text-primary-foreground/60 text-xs tracking-[0.2em] uppercase mb-2">{t("edu.heroLabel")}</p>
            <div className="w-16 h-px bg-primary-foreground/40 mb-8" />
            <h1 className="hero-heading max-w-4xl">{t("edu.heroH1")}<br />{t("edu.heroH2")}</h1>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section ref={whoWeServeRef} className="py-24 md:py-32 px-8 md:px-16 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={whoWeServeInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <p className="section-label mb-4">{t("edu.whoWeServe")}</p>
              <h2 className="section-heading mb-6">{t("edu.heading")}</h2>
              <p className="body-text">{t("edu.text")}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={whoWeServeInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
              <img src={classroomImg} alt="Students in a tech classroom" className="w-full h-[400px] md:h-[500px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section ref={programsRef} className="py-24 md:py-32 px-8 md:px-16" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={programsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
            <p className="section-label mb-4">{t("edu.whatWeOffer")}</p>
            <h2 className="section-heading">{t("edu.ourPrograms")}</h2>
            <div className="w-12 h-0.5 bg-accent mt-4" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.div key={program.title} initial={{ opacity: 0, y: 40 }} animate={programsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }} className="bg-card p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <program.icon className="h-10 w-10 text-accent mb-6" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-primary mb-3">{program.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section ref={statsRef} className="py-24 md:py-32 px-8 md:px-16" style={{ backgroundColor: "#2D3A4A" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">{t("edu.ourImpact")}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">{t("edu.makingDifference")}</h2>
            <div className="w-12 h-0.5 bg-accent mt-4 mx-auto" />
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }} className="text-center p-8 border border-white/10">
                <span className="text-4xl md:text-5xl font-bold" style={{ color: "#F5A623" }}>{stat.number}</span>
                <p className="mt-3 text-sm text-white/70 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Training Center */}
      <section ref={trainingRef} className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <img src={trainingCenterImg} alt="Modern training center" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/30" />
        <div className="relative z-10 h-full flex items-center px-8 md:px-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={trainingInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="bg-card p-10 md:p-14 max-w-xl shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">{t("edu.trainingCenter")}</h2>
            <div className="w-10 h-0.5 bg-accent mb-6" />
            <p className="body-text mb-8">{t("edu.trainingText")}</p>
            <button onClick={() => navigateWithTransition("/contact")} className="cta-button bg-primary text-primary-foreground hover:bg-primary/90">
              {t("edu.contactUs")} <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Who Can Join */}
      <section ref={audienceRef} className="py-24 md:py-32 px-8 md:px-16 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={audienceInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="section-label mb-4">{t("edu.whoCanJoin")}</p>
            <h2 className="section-heading">{t("edu.whoIsThisFor")}</h2>
            <div className="w-12 h-0.5 bg-accent mt-4 mx-auto" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {audiences.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} animate={audienceInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }} className="flex items-start gap-6 p-8 border border-border hover:shadow-lg transition-shadow duration-300">
                <item.icon className="h-10 w-10 text-accent flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default EducationalTechnology;
