import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ContactFormProps {
  initialCompany: string;
  initialOffice: string;
  initialCountry: string;
  onOfficeSelect: (office: string) => void;
}

const underlineInput =
  "w-full bg-transparent border-0 border-b border-border py-3 text-sm text-primary placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors";

const underlineSelect =
  "w-full bg-transparent border-0 border-b border-border py-3 text-sm text-primary focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer";

const fieldLabel = "block text-xs font-normal text-muted-foreground mb-1 tracking-wide";

const ContactForm = ({ initialCompany, initialOffice, initialCountry, onOfficeSelect }: ContactFormProps) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "office") {
      onOfficeSelect(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg p-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <ArrowRight className="h-6 w-6 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-3">Thank you.</h3>
        <p className="text-muted-foreground">We will get back to you shortly.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 lg:p-10">
      {/* SECTION 1 — Contact Information */}
      <h2 className="text-2xl font-extrabold text-primary mb-8">Contact Information</h2>

      {/* Row 1: First Name, Last Name, Email */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 mb-6">
        <div>
          <label className={fieldLabel}>First Name *</label>
          <input
            name="firstName"
            type="text"
            required
            value={form.firstName}
            onChange={handleChange}
            className={underlineInput}
          />
        </div>
        <div>
          <label className={fieldLabel}>Last Name *</label>
          <input
            name="lastName"
            type="text"
            required
            value={form.lastName}
            onChange={handleChange}
            className={underlineInput}
          />
        </div>
        <div>
          <label className={fieldLabel}>E-mail *</label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={underlineInput}
          />
        </div>
      </div>

      {/* Row 2: Company, Country */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
        <div>
          <label className={fieldLabel}>Company / Organization *</label>
          <input
            name="companyOrg"
            type="text"
            required
            value={form.companyOrg}
            onChange={handleChange}
            className={underlineInput}
          />
        </div>
        <div>
          <label className={fieldLabel}>Country</label>
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className={underlineSelect}
          >
            <option value="">Select country</option>
            <option value="Jordan">Jordan</option>
            <option value="Iraq">Iraq</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="UAE">UAE</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Qatar">Qatar</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Oman">Oman</option>
            <option value="Egypt">Egypt</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Row 3: Phone */}
      <div className="mb-10">
        <label className={fieldLabel}>Phone</label>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-sm">+</span>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={underlineInput + " flex-1"}
          />
        </div>
        <p className="text-xs text-muted-foreground/60 mt-1.5">
          Start with international dialing code. Eg. 962 788310769
        </p>
      </div>

      {/* SECTION 2 — Message */}
      <h2 className="text-2xl font-extrabold text-primary mb-8">Message</h2>

      {/* Row 1: Office, Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
        <div>
          <label className={fieldLabel}>Which office? *</label>
          <select
            name="office"
            required
            value={form.office}
            onChange={handleChange}
            className={underlineSelect}
          >
            <option value="">Select office</option>
            <option value="amman">Amman, Jordan</option>
            <option value="tikrit">Tikrit, Iraq</option>
          </select>
        </div>
        <div>
          <label className={fieldLabel}>Which company? *</label>
          <select
            name="company"
            required
            value={form.company}
            onChange={handleChange}
            className={underlineSelect}
          >
            <option value="">Select company</option>
            <option value="Oil & Gas">Oil & Gas</option>
            <option value="Medical">Medical</option>
            <option value="Robotics">Robotics</option>
            <option value="Energy">Energy</option>
            <option value="General">General</option>
          </select>
        </div>
      </div>

      {/* Row 2: Type of inquiry */}
      <div className="mb-6">
        <label className={fieldLabel}>Type of inquiry *</label>
        <select
          name="inquiryType"
          required
          value={form.inquiryType}
          onChange={handleChange}
          className={underlineSelect}
        >
          <option value="">Select type</option>
          <option value="Request a Quote">Request a Quote</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Partnership">Partnership</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>

      {/* Row 3: Message textarea */}
      <div className="mb-6">
        <label className={fieldLabel}>Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={underlineInput + " resize-none"}
        />
      </div>

      {/* Privacy note */}
      <p className="text-xs text-muted-foreground/60 mb-8">
        Your information is kept private and will only be used to respond to your inquiry.
      </p>

      {/* Submit button */}
      <div className="text-center">
        <button
          type="submit"
          className="inline-flex items-center gap-3 font-semibold text-sm tracking-wider px-10 py-3.5 rounded-full text-white bg-accent hover:bg-accent/90 transition-all duration-300"
        >
          Send Message <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
