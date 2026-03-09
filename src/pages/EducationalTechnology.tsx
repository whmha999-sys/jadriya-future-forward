import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Bot, Code, TrendingUp, Heart, Building, Globe, GraduationCap, Briefcase, Users, Landmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { usePageTransition } from "@/components/PageTransition";
import heroImg from "@/assets/edu-tech-hero.jpg";
import classroomImg from "@/assets/edu-tech-classroom.jpg";
import trainingCenterImg from "@/assets/edu-tech-training-center.jpg";

const programs = [
  {
    icon: Bot,
    title: "Robotics for Schools",
    description: "Curriculum-aligned robotics programs delivered directly to schools.",
  },
  {
    icon: Code,
    title: "AI & Programming",
    description: "Hands-on coding and artificial intelligence courses for all levels.",
  },
  {
    icon: TrendingUp,
    title: "Professional Upskilling",
    description: "Advanced training for IT professionals entering the AI economy.",
  },
  {
    icon: Heart,
    title: "Women in Tech",
    description: "Dedicated programs supporting women entering or transitioning into technology careers.",
  },
  {
    icon: Building,
    title: "Corporate Training",
    description: "Custom training solutions designed for institutions and organizations at scale.",
  },
  {
    icon: Globe,
    title: "Online Learning",
    description: "Flexible online programs accessible from anywhere in the region.",
  },
];

const stats = [
  { number: "2", label: "Countries" },
  { number: "6", label: "Markets" },
  { number: "500+", label: "Graduates" },
  { number: "20+", label: "School Partners" },
];

const audiences = [
  {
    icon: GraduationCap,
    title: "Schools",
    description: "Curriculum-aligned robotics and AI programs for students of all ages.",
  },
  {
    icon: Briefcase,
    title: "IT Professionals",
    description: "Advance your career into artificial intelligence and automation.",
  },
  {
    icon: Users,
    title: "Women in Tech",
    description: "Start or transition your career into the technology sector.",
  },
  {
    icon: Landmark,
    title: "Institutions",
    description: "Large-scale training solutions for organizations and government bodies.",
  },
];

const EducationalTechnology = () => {
  const { navigateWithTransition } = usePageTransition();
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

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <img src={heroImg} alt="Students working with robotics" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-primary-foreground/60 text-xs tracking-[0.2em] uppercase mb-2">
              Educational Technology Division
            </p>
            <div className="w-16 h-px bg-primary-foreground/40 mb-8" />
            <h1 className="hero-heading max-w-4xl">
              Shaping the
              <br />
              Next Generation.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section ref={whoWeServeRef} className="py-24 md:py-32 px-8 md:px-16 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={whoWeServeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="section-label mb-4">Who We Serve</p>
              <h2 className="section-heading mb-6">
                World-Class Training for the AI Era
              </h2>
              <p className="body-text">
                AL-JADRIYA Educational Technology Division equips schools, professionals, and
                career-shifters with the skills demanded by tomorrow's economy. Through robotics,
                programming, and AI programs delivered in-person and online, we build the workforce
                of the future.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={whoWeServeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={classroomImg}
                alt="Students in a tech classroom"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section ref={programsRef} className="py-24 md:py-32 px-8 md:px-16" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={programsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="section-label mb-4">What We Offer</p>
            <h2 className="section-heading">Our Programs</h2>
            <div className="w-12 h-0.5 bg-accent mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                animate={programsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="bg-card p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">Our Impact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Making a Difference</h2>
            <div className="w-12 h-0.5 bg-accent mt-4 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="text-center p-8 border border-white/10"
              >
                <span className="text-4xl md:text-5xl font-bold" style={{ color: "#F5A623" }}>
                  {stat.number}
                </span>
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
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={trainingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-card p-10 md:p-14 max-w-xl shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              A Fully Equipped Training Center
            </h2>
            <div className="w-10 h-0.5 bg-accent mb-6" />
            <p className="body-text mb-8">
              Our training center in Amman features prepared classrooms, certified trainers, and
              complete technical infrastructure. We deliver programs both in-person and online,
              serving schools, professionals, and institutions across the region.
            </p>
            <button
              onClick={() => navigateWithTransition("/contact")}
              className="cta-button bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Who Can Join */}
      <section ref={audienceRef} className="py-24 md:py-32 px-8 md:px-16 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={audienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-label mb-4">Who Can Join</p>
            <h2 className="section-heading">Who Is This For?</h2>
            <div className="w-12 h-0.5 bg-accent mt-4 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {audiences.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={audienceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-6 p-8 border border-border hover:shadow-lg transition-shadow duration-300"
              >
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
