import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation, useSearchParams } from "react-router-dom";
import { Linkedin, Instagram, Facebook, Twitter, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/contexts/useLanguage";
import logoYellow from "@/assets/logo-yellow-pattern.png";
import logoWhite from "@/assets/logo-white-hero.png";

const companyAutoFillMap: Record<string, string> = {
  "/oil-gas": "Oil & Gas",
  "/medical": "Medical",
  "/robotics": "Robotics",
  "/energy": "Energy",
  "/engineering-consultancy": "Engineering Consultancy",
  "/educational-technology": "Educational Technology",
  "/equipment-supply": "Equipment Supply",
};

function detectCompanyFromReferrer(): string {
  const referrer = document.referrer;
  if (!referrer) return "";
  try {
    const url = new URL(referrer);
    const path = url.pathname;
    for (const [prefix, company] of Object.entries(companyAutoFillMap)) {
      if (path === prefix || path.startsWith(prefix + "/")) {
        return company;
      }
    }
  } catch {
    // invalid referrer
  }
  return "";
}

const Contact = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const officeParam = searchParams.get("office");
  const routerState = location.state as { company?: string } | null;

  const ammanRef = useRef<HTMLDivElement>(null);
  const tikritRef = useRef<HTMLDivElement>(null);

  // Determine initial subject from router state or referrer
  const getInitialCompany = () => {
    if (routerState?.company) return routerState.company;
    return detectCompanyFromReferrer();
  };

  const getInitialOffice = () => {
    if (officeParam === "amman") return "amman";
    if (officeParam === "tikrit") return "tikrit";
    return "";
  };

  const getInitialCountry = () => {
    if (officeParam === "amman") return "Jordan";
    if (officeParam === "tikrit") return "Iraq";
    return "";
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: getInitialCompany(),
    office: getInitialOffice(),
    message: "",
  });

  return (
    <div className="min-h-screen bg-card">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "#2D3A4A" }}>
        <img src={logoWhite} alt="" className="absolute top-8 left-8 w-24 h-24 opacity-20 pointer-events-none" />
        <img src={logoWhite} alt="" className="absolute bottom-6 right-12 w-32 h-32 opacity-[0.15] pointer-events-none" />
        <img src={logoWhite} alt="" className="absolute top-1/2 right-1/4 w-20 h-20 opacity-[0.12] pointer-events-none -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-8 md:px-16 pt-36 pb-20 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60 mb-4"
          >
            {t("contact.heroLabel")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
          >
            {t("contact.heroHeading")}
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative max-w-7xl mx-auto px-8 md:px-16 py-20">
        <img src={logoYellow} alt="" className="absolute top-12 right-0 w-28 h-28 opacity-[0.08] pointer-events-none" />
        <img src={logoYellow} alt="" className="absolute bottom-20 left-0 w-24 h-24 opacity-[0.06] pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <p className="section-label mb-6">{t("contact.offices")}</p>
              <div className="space-y-8">
                {showAmman && (
                  <div
                    ref={ammanRef}
                    className={`flex gap-4 p-4 -m-4 rounded-lg transition-all duration-500 ${
                      highlightedOffice === "amman" ? "bg-accent/10 ring-2 ring-accent/30" : ""
                    }`}
                  >
                    <MapPin className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-primary">{t("contact.amman")}</h3>
                      <p className="text-muted-foreground text-sm">{t("contact.hq")}</p>
                    </div>
                  </div>
                )}
                {showTikrit && (
                  <div
                    ref={tikritRef}
                    className={`flex gap-4 p-4 -m-4 rounded-lg transition-all duration-500 ${
                      highlightedOffice === "tikrit" ? "bg-accent/10 ring-2 ring-accent/30" : ""
                    }`}
                  >
                    <MapPin className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-primary">{t("contact.tikrit")}</h3>
                      <p className="text-muted-foreground text-sm">{t("contact.branch")}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t("contact.email")}</p>
                <a href="mailto:info@aljadriya.com" className="text-primary font-semibold hover:text-accent transition-colors">
                  info@aljadriya.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="section-label mb-4">{t("contact.followUs")}</p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "X" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex justify-center pt-4 opacity-10">
              <img src={logoYellow} alt="" className="w-20 h-20" />
            </div>
          </motion.div>

          {/* Right Column — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Office Selector - only when both offices shown */}
              {showOfficePicker && (
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">{t("contact.whichOffice")}</label>
                  <select
                    name="office"
                    value={form.office}
                    onChange={(e) => handleOfficeSelect(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-sm bg-card text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all appearance-none"
                  >
                    <option value="">{t("contact.selectOffice")}</option>
                    <option value="amman">{t("contact.officeAmman")}</option>
                    <option value="tikrit">{t("contact.officeTikrit")}</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-primary mb-2">{t("contact.fullName")}</label>
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("contact.fullNamePlaceholder")}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-card text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">{t("contact.emailAddress")}</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("contact.emailPlaceholder")}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-card text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">{t("contact.phone")}</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={t("contact.phonePlaceholder")}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-card text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">{t("contact.subject")}</label>
                <select
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-card text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all appearance-none"
                >
                  <option value="" disabled>{t("contact.subjectPlaceholder")}</option>
                  {subjectOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">{t("contact.message")}</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("contact.messagePlaceholder")}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-card text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 font-semibold text-sm uppercase tracking-wider px-10 py-4 text-white transition-all duration-300 hover:brightness-110"
                style={{ background: "#1A2B4A" }}
              >
                {t("contact.send")} <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Contact;
