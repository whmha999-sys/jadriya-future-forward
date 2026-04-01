import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MedicalNavbar from "./MedicalNavbar";
import MedicalFooter from "./MedicalFooter";
import { usePageTransition } from "../PageTransition";
import { useLanguage } from "@/contexts/useLanguage";
import case1 from "@/assets/medical/case-1.jpg";
import case2 from "@/assets/medical/case-2.jpg";

interface Feature {
  titleKey: string;
  descKey: string;
}

interface ServiceSubPageProps {
  heroImage: string;
  overviewImage: string;
  labelKey: string;
  headlineKey: string;
  overviewHeadlineKey: string;
  overviewP1Key: string;
  features: Feature[];
  metaTitle: string;
  metaDescription: string;
}

const MedicalServiceSubPage = ({
  heroImage,
  overviewImage,
  labelKey,
  headlineKey,
  overviewHeadlineKey,
  overviewP1Key,
  features,
}: ServiceSubPageProps) => {
  const { navigateWithTransition } = usePageTransition();
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      <MedicalNavbar />

      {/* Hero */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(var(--navy-deep))]/60" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent mb-2" style={{ fontSize: 12, letterSpacing: 3, fontWeight: 400 }}>
              {t(labelKey)}
            </p>
            <div className="w-16 h-px bg-primary-foreground/40 mb-6" />
            <h1 className="hero-heading max-w-4xl">{t(headlineKey)}</h1>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-card py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label text-accent mb-4">{t("med.whatWeOffer")}</p>
              <h2 className="section-heading mb-8">{t(overviewHeadlineKey)}</h2>
              <p className="body-text">{t(overviewP1Key)}</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={overviewImage} alt="" className="w-full h-[400px] object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-[hsl(var(--navy-deep))] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <p className="section-label text-accent mb-4">{t("med.keyFeatures")}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-12" style={{ lineHeight: 1.1 }}>
            {t("med.whyChooseUs")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-primary-foreground/10 rounded-lg p-6"
              >
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                </div>
                <h3 className="text-primary-foreground font-bold text-lg mb-2">{t(f.titleKey)}</h3>
                <p className="text-primary-foreground/60 text-sm">{t(f.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <p className="section-label text-accent mb-4">{t("med.caseStudies")}</p>
          <h2 className="section-heading mb-12">{t("med.relatedProjects")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { img: case1, tag: t("med.caseHospitalEquip"), title: t("med.case1Title"), loc: t("med.case1Loc"), desc: t("med.case1Desc") },
              { img: case2, tag: t("med.caseDiagnostics"), title: t("med.case2Title"), loc: t("med.case2Loc"), desc: t("med.case2Desc") },
            ].map((c, i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden shadow-sm">
                <img src={c.img} alt="" className="w-full h-56 object-cover" loading="lazy" />
                <div className="p-6">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">{c.tag}</span>
                  <h3 className="text-primary font-bold text-lg mt-2">{c.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{c.loc}</p>
                  <p className="body-text text-sm mt-3">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => navigateWithTransition("/medical")}
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
            >
              {t("med.viewAllCases")} <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[hsl(var(--slate-dark))] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4" style={{ lineHeight: 1.1 }}>
            {t("med.ctaHeading")}
          </h2>
          <p className="text-primary-foreground/60 mb-8">{t("med.ctaText")}</p>
          <button
            onClick={() => navigateWithTransition("/contact", { company: "Medical" })}
            className="cta-button rounded-full"
          >
            {t("med.contactUs")} <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
          </button>
        </div>
      </section>

      <MedicalFooter />
    </div>
  );
};

export default MedicalServiceSubPage;
