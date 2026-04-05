import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import MedicalNavbar from "@/components/medical/MedicalNavbar";
import FooterSection from "@/components/FooterSection";
import { usePageTransition } from "@/components/PageTransition";
import { useLanguage } from "@/contexts/useLanguage";

import heroImg from "@/assets/medical/case-1-real.jpg";
import img1 from "@/assets/medical/case1-oxygen-plant.jpg";
import img2 from "@/assets/medical/case1-cylinders.jpg";
import img3 from "@/assets/medical/case1-compressor.jpg";
import img4 from "@/assets/medical/case1-atlas.jpg";
import img5 from "@/assets/medical/case1-medisam.jpg";
import img6 from "@/assets/medical/case1-oxyworld.jpg";
import img7 from "@/assets/medical/case1-inspection.jpg";
import img8 from "@/assets/medical/case1-filling.jpg";
import img9 from "@/assets/medical/case1-electrical.jpg";

const gallery = [heroImg, img1, img2, img3, img5, img6, img7, img8, img4, img9];

const MedicalCaseOxygen = () => {
  const { t, isRTL } = useLanguage();
  const { navigateWithTransition } = usePageTransition();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => setLightbox((prev) => (prev !== null ? (prev + 1) % gallery.length : 0));
  const prevImage = () => setLightbox((prev) => (prev !== null ? (prev - 1 + gallery.length) % gallery.length : 0));

  return (
    <div className="min-h-screen" dir={isRTL ? "rtl" : "ltr"}>
      <MedicalNavbar />

      {/* Hero */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img src={heroImg} alt="Ana Hospital Oxygen Plant" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(var(--navy-deep))]/70" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-8 md:px-16 max-w-7xl mx-auto">
          <button
            onClick={() => navigateWithTransition("/medical")}
            className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-accent text-sm mb-6 transition-colors"
          >
            <ArrowLeft className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
            {isRTL ? "العودة إلى القسم الطبي" : "Back to Medical"}
          </button>
          <p className="text-accent text-xs font-semibold tracking-[3px] uppercase mb-3">
            {isRTL ? "دراسة حالة" : "Case Study"}
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight max-w-3xl">
            {isRTL
              ? "محطة أوكسجين طبي في مستشفى عنة"
              : "Ana Hospital Medical Oxygen Plant"}
          </h1>
          <p className="text-primary-foreground/60 text-sm mt-3">
            {isRTL ? "الأنبار، العراق — بالتعاون مع المنظمة الدولية للهجرة" : "Anbar, Iraq — IOM Partnership"}
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="bg-card py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main description */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {isRTL ? "نظرة عامة على المشروع" : "Project Overview"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {isRTL
                  ? "مشروع توريد وتركيب محطة توليد أوكسجين طبي ونظام تعبئة ٣٠ أسطوانة في مستشفى عنة بمحافظة الأنبار، بالتعاون مع المنظمة الدولية للهجرة (IOM). يتضمن المشروع توفير محطة أوكسجين طبي متكاملة تعمل بتقنية PSA لتوليد الأوكسجين عالي النقاء، بالإضافة إلى ضاغط هواء صناعي، ومنظومة تعبئة أسطوانات بسعة ٣٠ أسطوانة، ولوحة تحكم كهربائية متقدمة."
                  : "A comprehensive project to supply and install a medical oxygen generation plant and a 30-cylinder filling system at Ana Hospital in Anbar Governorate, in cooperation with the International Organization for Migration (IOM). The project includes a complete PSA oxygen generation plant for high-purity medical oxygen, an industrial air compressor, a 30-cylinder filling manifold system, and an advanced electrical control panel."}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {isRTL
                  ? "تم تنفيذ المشروع وفقاً لأعلى المعايير الدولية لضمان توفير إمدادات أوكسجين طبي آمنة وموثوقة لخدمة المرضى في المستشفى والمنطقة المحيطة."
                  : "The project was executed to the highest international standards, ensuring safe and reliable medical oxygen supply to serve patients at the hospital and the surrounding area."}
              </p>
            </div>

            {/* Project info sidebar */}
            <div className="space-y-6">
              {[
                { label: isRTL ? "العميل" : "Client", value: isRTL ? "مستشفى عنة العام" : "Ana General Hospital" },
                { label: isRTL ? "الموقع" : "Location", value: isRTL ? "الأنبار، العراق" : "Anbar, Iraq" },
                { label: isRTL ? "الشريك" : "Partner", value: isRTL ? "المنظمة الدولية للهجرة (IOM)" : "International Organization for Migration (IOM)" },
                { label: isRTL ? "النطاق" : "Scope", value: isRTL ? "توريد وتركيب وتشغيل" : "Supply, Installation & Commissioning" },
              ].map((item, i) => (
                <div key={i} className="border-b border-border pb-4">
                  <p className="text-accent text-xs font-semibold tracking-wider uppercase mb-1">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-foreground mb-6">
              {isRTL ? "المخرجات الرئيسية" : "Key Deliverables"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🏭", title: isRTL ? "محطة توليد أوكسجين PSA" : "PSA Oxygen Generation Plant", desc: isRTL ? "محطة متكاملة لتوليد أوكسجين طبي عالي النقاء" : "Complete plant for high-purity medical oxygen generation" },
                { icon: "⚙️", title: isRTL ? "ضاغط هواء صناعي" : "Industrial Air Compressor", desc: isRTL ? "ضاغط هواء بمواصفات صناعية عالية الأداء" : "High-performance industrial-grade air compressor" },
                { icon: "🔧", title: isRTL ? "نظام تعبئة ٣٠ أسطوانة" : "30-Cylinder Filling System", desc: isRTL ? "منظومة تعبئة أسطوانات أوكسجين متكاملة" : "Complete oxygen cylinder filling manifold system" },
                { icon: "🔌", title: isRTL ? "لوحة تحكم كهربائية" : "Electrical Control Panel", desc: isRTL ? "لوحة تحكم متقدمة لإدارة المنظومة بالكامل" : "Advanced control panel for full system management" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background rounded-lg p-6 shadow-sm"
                >
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h4 className="text-foreground font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <p className="text-accent text-xs font-semibold tracking-[3px] uppercase mb-4">
            {isRTL ? "معرض الصور" : "Project Gallery"}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
            {isRTL ? "صور من الموقع" : "Photos from the Field"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={img}
                  alt={`Project photo ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                    {isRTL ? "عرض" : "View"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white z-50">
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white z-50"
            >
              <ArrowLeft className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white z-50"
            >
              <ArrowRight className="h-8 w-8" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={gallery[lightbox]}
              alt=""
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 text-white/50 text-sm">
              {lightbox + 1} / {gallery.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="bg-[hsl(var(--slate-dark))] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-4">
            {isRTL ? "هل لديك مشروع مشابه؟" : "Have a Similar Project?"}
          </h2>
          <p className="text-primary-foreground/60 mb-8">
            {isRTL
              ? "تواصل معنا لمناقشة احتياجاتك من الغازات الطبية والمعدات المتخصصة"
              : "Get in touch to discuss your medical gas and specialized equipment needs"}
          </p>
          <button
            onClick={() => navigateWithTransition("/contact", { company: "Medical" })}
            className="cta-button rounded-full"
          >
            {isRTL ? "تواصل معنا" : "Contact Us"} <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
          </button>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default MedicalCaseOxygen;
