import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const sections = [
  {
    title: "Section 1 -nce of Terms",
    body: "By accessing and using the AL-JADRIYA Engineering website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use this website.",
  },
  {
    title: "Section 2 �-s-f-b-e",
    body: "This website is intended for informational purposes about AL-JADRIYA Engineering's services. You agree not to misuse the website, attempt unauthorized access, or use its content for commercial purposes without written permission.",
  },
  {
    title: "Section 3 — Intellectual Property",
    body: "All content on this website including text, images, logos, and graphics are the property of AL-JADRIYA Engineering and are protected by applicable copyright laws. No content may be reproduced without prior written consent.",
  },
  {
    title: "Section 4 — Services & Proposals",
    body: "Information presented on this website does not constitute a binding offer or contract. All engineering consultancy and educational technology services are subject to separate formal agreements between AL-JADRIYA Engineering and the client.",
  },
  {
    title: "Section 5 — Limitation of Liability",
    body: "AL-JADRIYA Engineering shall not be liable for any direct or indirect damages arising from the use of this website or reliance on its content.",
  },
  {
    title: "Section 6 — Governing Law",
    body: "These Terms and Conditions are governed by the laws of the Hashemite Kingdom of Jordan. Any disputes shall be subject to the jurisdiction of Jordanian courts.",
  },
  {
    title: "Section 7 — Changes to Terms",
    body: "AL-JADRIYA Engineering reserves the right to update these Terms at any time. Continued use of the website following changes constitutes acceptance of the updated Terms.",
  },
  {
    title: "Section 8 — Contact",
    body: (
      <>
        For any questions regarding these Terms, contact us at{" "}
        <a href="mailto:contact@aljadriya.com" className="text-accent hover:underline">
          contact@aljadriya.com
        </a>
      </>
    ),
  },
];

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-8 md:px-16" style={{ backgroundColor: "#2D3A4A" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-4">
              Please Read Carefully
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
            <p className="text-white/60 text-sm">Last updated: March 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-8 md:px-16 bg-card">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
            >
              <h2 className="text-xl font-bold text-primary mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default TermsConditions;
