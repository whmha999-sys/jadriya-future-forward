import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/useLanguage";

interface ContactFormProps {
  initialCompany: string;
  initialOffice: string;
  initialCountry: string;
  onOfficeSelect: (office: string) => void;
}

const WEBHOOK_URL = "https://n8n.srv971269.hstgr.cloud/webhook-test/7695d962-db6d-40e3-8bab-129d42475d64";

const underlineInput =
  "w-full bg-transparent border-0 border-b border-border py-3 text-sm text-primary placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors";

const underlineSelect =
  "w-full bg-transparent border-0 border-b border-border py-3 text-sm text-primary focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer";

const fieldLabel = "block text-xs font-normal text-muted-foreground mb-1 tracking-wide";

const ContactForm = ({ initialCompany, initialOffice, initialCountry, onOfficeSelect }: ContactFormProps) => {
  const { t, isRTL } = useLanguage();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyOrg: "",
    country: initialCountry,
    phone: "",
    office: initialOffice,
    company: initialCompany,
    inquiryType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "office") {
      onOfficeSelect(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError(t("form.errorMsg") || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg p-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <ArrowRight className={`h-6 w-6 text-accent ${isRTL ? "rotate-180" : ""}`} />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-3">{t("form.thankYou")}</h3>
        <p className="text-muted-foreground">{t("form.thankYouMsg")}</p>
      </motion.div>
    );
  }

  const countries = [
    { value: "Jordan", label: t("form.jordan") },
    { value: "Iraq", label: t("form.iraq") },
    { value: "Saudi Arabia", label: t("form.saudiArabia") },
    { value: "UAE", label: t("form.uae") },
    { value: "Kuwait", label: t("form.kuwait") },
    { value: "Qatar", label: t("form.qatar") },
    { value: "Bahrain", label: t("form.bahrain") },
    { value: "Oman", label: t("form.oman") },
    { value: "Egypt", label: t("form.egypt") },
    { value: "Other", label: t("form.other") },
  ];

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 lg:p-10">
      {/* SECTION 1 — Contact Information */}
      <h2 className="text-2xl font-extrabold text-primary mb-8">{t("form.contactInfo")}</h2>

      {/* Row 1: First Name, Last Name, Email */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 mb-6">
        <div>
          <label className={fieldLabel}>{t("form.firstName")} *</label>
          <input name="firstName" type="text" required value={form.firstName} onChange={handleChange} className={underlineInput} />
        </div>
        <div>
          <label className={fieldLabel}>{t("form.lastName")} *</label>
          <input name="lastName" type="text" required value={form.lastName} onChange={handleChange} className={underlineInput} />
        </div>
        <div>
          <label className={fieldLabel}>{t("form.email")} *</label>
          <input name="email" type="email" required value={form.email} onChange={handleChange} className={underlineInput} />
        </div>
      </div>

      {/* Row 2: Company, Country */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
        <div>
          <label className={fieldLabel}>{t("form.companyOrg")} *</label>
          <input name="companyOrg" type="text" required value={form.companyOrg} onChange={handleChange} className={underlineInput} />
        </div>
        <div>
          <label className={fieldLabel}>{t("form.country")} *</label>
          <select name="country" required value={form.country} onChange={handleChange} className={underlineSelect}>
            <option value="">{t("form.selectCountry")}</option>
            {countries.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 3: Phone */}
      <div className="mb-10">
        <label className={fieldLabel}>{t("form.phone")} *</label>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-sm">+</span>
          <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className={underlineInput + " flex-1"} />
        </div>
        <p className="text-xs text-muted-foreground/60 mt-1.5">{t("form.phoneHint")}</p>
      </div>

      {/* SECTION 2 — Message */}
      <h2 className="text-2xl font-extrabold text-primary mb-8">{t("form.message")}</h2>

      {/* Row 1: Office, Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
        <div>
          <label className={fieldLabel}>{t("form.whichOffice")} *</label>
          <select name="office" required value={form.office} onChange={handleChange} className={underlineSelect}>
            <option value="">{t("form.selectOffice")}</option>
            <option value="amman">{t("form.ammanJordan")}</option>
            <option value="tikrit">{t("form.tikritIraq")}</option>
          </select>
        </div>
        <div>
          <label className={fieldLabel}>{t("form.whichCompany")} *</label>
          <select name="company" required value={form.company} onChange={handleChange} className={underlineSelect}>
            <option value="">{t("form.selectCompany")}</option>
            <option value="Oil & Gas">{t("form.oilGas")}</option>
            <option value="Medical">{t("form.medical")}</option>
            <option value="Robotics">{t("form.robotics")}</option>
            <option value="Energy">{t("form.energy")}</option>
            <option value="General">{t("form.general")}</option>
          </select>
        </div>
      </div>

      {/* Row 2: Type of inquiry */}
      <div className="mb-6">
        <label className={fieldLabel}>{t("form.inquiryType")} *</label>
        <select name="inquiryType" required value={form.inquiryType} onChange={handleChange} className={underlineSelect}>
          <option value="">{t("form.selectType")}</option>
          <option value="Request a Quote">{t("form.requestQuote")}</option>
          <option value="Technical Support">{t("form.techSupport")}</option>
          <option value="Partnership">{t("form.partnership")}</option>
          <option value="General Inquiry">{t("form.generalInquiry")}</option>
        </select>
      </div>

      {/* Row 3: Message textarea */}
      <div className="mb-6">
        <label className={fieldLabel}>{t("form.message")} *</label>
        <textarea name="message" required rows={5} value={form.message} onChange={handleChange} className={underlineInput + " resize-none"} />
      </div>

      {/* Privacy note */}
      <p className="text-xs text-muted-foreground/60 mb-8">{t("form.privacy")}</p>

      {/* Submit button */}
      <div className="text-center">
        <button
          type="submit"
          className="inline-flex items-center gap-3 font-semibold text-sm tracking-wider px-10 py-3.5 rounded-full text-white bg-accent hover:bg-accent/90 transition-all duration-300"
        >
          {t("form.send")} <ArrowRight className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
