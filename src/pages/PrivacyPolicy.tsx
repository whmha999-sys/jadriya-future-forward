import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { motion } from "framer-motion";
import tornPaper from "@/assets/torn-paper-divider.png";

const sections = [
  {
    title: "1. Information We Collect",
    text: "We collect information you provide directly to us, such as your name, email address, phone number, and any messages submitted through our contact form. We may also collect technical data such as browser type and IP address for analytics purposes.",
  },
  {
    title: "2. How We Use Your Information",
    text: "We use the information collected to respond to your inquiries, improve our services, send relevant updates about AL-JADRIYA Engineering with your consent, and comply with legal obligations.",
  },
  {
    title: "3. Data Sharing",
    text: "AL-JADRIYA Engineering does not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist in operating our website, under strict confidentiality agreements.",
  },
  {
    title: "4. Data Security",
    text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or disclosure.",
  },
  {
    title: "5. Your Rights",
    text: "You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at info@hy-med.net",
  },
  {
    title: "6. Contact",
    text: "For any privacy-related questions, please reach out to us at info@hy-med.net or visit our Contact Us page.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="pt-40 pb-20 px-8 md:px-16 text-center"
        style={{ backgroundColor: "#2D3A4A" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60 mb-4">
            Your Privacy Matters
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-primary-foreground/50 text-sm">
            Last updated: March 2026
          </p>
        </motion.div>
      </section>


      {/* Content */}
      <section className="py-20 px-8 md:px-16 bg-card">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <h2
                className="text-xl md:text-2xl font-bold mb-3"
                style={{ color: "#1A2B4A" }}
              >
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default PrivacyPolicy;
