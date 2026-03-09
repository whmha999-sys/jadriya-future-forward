import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ClipboardCheck, PenTool, Package, Pipette, Hospital, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { usePageTransition } from "@/components/PageTransition";
import heroImg from "@/assets/eng-consultancy-hero.jpg";
import aboutImage from "@/assets/about-image.jpg";
import visionBg from "@/assets/vision-bg.jpg";

const services = [
  {
    icon: ClipboardCheck,
    title: "Feasibility Studies",
    description: "In-depth technical and financial analysis before project launch.",
  },
  {
    icon: PenTool,
    title: "Project Design",
    description: "Complete architectural and engineering design solutions.",
  },
  {
    icon: Package,
    title: "Procurement",
    description: "Strategic sourcing of equipment and materials from trusted suppliers.",
  },
  {
    icon: Pipette,
    title: "Pipeline Engineering",
    description: "Design and execution of industrial pipeline systems.",
  },
  {
    icon: Hospital,
    title: "Medical Facility Engineering",
    description: "Specialized consultancy for hospitals and healthcare infrastructure.",
  },
  {
    icon: Settings,
    title: "Turnkey Projects",
    description: "Full project management from concept to handover.",
  },
];

const stats = [
  { number: "2", label: "Countries" },
  { number: "6", label: "Markets" },
  { number: "10+", label: "Years Experience" },
  { number: "100+", label: "Projects Delivered" },
];

const EngineeringConsultancy = () => {
  const { navigateWithTransition } = usePageTransition();
  const whatWeDoRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const visionRef = useRef(null);
  const whatWeDoInView = useInView(whatWeDoRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const visionInView = useInView(visionRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <img src={heroImg} alt="Engineers on construction site" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-primary-foreground/60 text-xs tracking-[0.2em] uppercase mb-2">
              Engineering Consultancy Division
            </p>
            <div className="w-16 h-px bg-primary-foreground/40 mb-8" />
            <h1 className="hero-heading max-w-4xl">
              Built to Last.
              <br />
              Engineered to Excel.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section ref={whatWeDoRef} className="py-24 md:py-32 px-8 md:px-16 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={whatWeDoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="section-label mb-4">What We Do</p>
              <h2 className="section-heading mb-6">
                Comprehensive Engineering Solutions
              </h2>
              <p className="body-text">
                AL-JADRIYA Engineering Consultancy Division delivers end-to-end technical solutions
                across multiple sectors. From initial feasibility studies to full project execution,
                our qualified team of engineers ensures every project meets the highest standards of
                quality and safety.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={whatWeDoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={aboutImage}
                alt="Engineers reviewing blueprints"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section ref={servicesRef} className="py-24 md:py-32 px-8 md:px-16" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="section-label mb-4">What We Offer</p>
            <h2 className="section-heading">Our Services</h2>
            <div className="w-12 h-0.5 bg-accent mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="bg-card p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <service.icon className="h-10 w-10 text-accent mb-6" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={statsRef} className="py-24 md:py-32 px-8 md:px-16" style={{ backgroundColor: "#2D3A4A" }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Proven Track Record</h2>
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

      {/* Vision */}
      <section ref={visionRef} className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <img src={visionBg} alt="Amman cityscape" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/30" />
        <div className="relative z-10 h-full flex items-center px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={visionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-card p-10 md:p-14 max-w-xl shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Your Project, Our Commitment
            </h2>
            <div className="w-10 h-0.5 bg-accent mb-6" />
            <p className="body-text mb-8">
              We combine deep regional knowledge with international engineering standards to deliver
              projects that stand the test of time. Every client, every project, every sector, we
              bring the same level of dedication and precision.
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

      <FooterSection />
    </div>
  );
};

export default EngineeringConsultancy;
