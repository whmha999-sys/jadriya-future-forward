import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { usePageTransition } from "@/components/PageTransition";

import husseinImg from "@/assets/case-studies/hussein-hospital.jpg";
import anaImg from "@/assets/case-studies/ana-oxygen.jpg";
import baghdadImg from "@/assets/case-studies/baghdad-water.jpg";
import salahuddinImg from "@/assets/case-studies/salahuddin-oxygen.jpg";

const caseStudies = [
  {
    label: "REHABILITATION PROJECT",
    title: "Al-Hussein Teaching Hospital — Al-Samawa",
    location: "Al-Muthanna Governorate, Iraq",
    body: "Complete rehabilitation of Al-Hussein Teaching Hospital, a 500-bed facility in Al-Samawa. The project covered full wall rehabilitation using HPL medical wall panels, crash barriers, and fire and antimicrobial resistant medical doors. Scope also included complete ceiling rehabilitation, full fire suppression system overhaul, complete HVAC system rehabilitation including cooling towers, air distribution systems and ductwork, and full flooring replacement across all departments.",
    cta: "/contact?ref=hussein-hospital",
    image: husseinImg,
  },
  {
    label: "MEDICAL OXYGEN",
    title: "Ana Hospital Medical Oxygen Plant — Al-Anbar",
    location: "Al-Anbar Governorate, Iraq · In Partnership with IOM",
    body: "Supply and installation of a medical oxygen production plant for Ana Hospital in Al-Anbar, with a filling system capacity of 30 cylinders. Project delivered in collaboration with the International Organization for Migration (IOM) to support healthcare infrastructure in underserved areas.",
    cta: "/contact?ref=ana-hospital",
    image: anaImg,
  },
  {
    label: "WATER INFRASTRUCTURE",
    title: "Baghdad Water Authority — High-Capacity Pumping Station",
    location: "Baghdad, Iraq",
    body: "Supply and installation of industrial water pumps for the Baghdad Water Authority, with a total combined capacity of 12,000 cubic meters per hour. Project delivered to support the city's core water distribution infrastructure.",
    cta: "/contact?ref=baghdad-water",
    image: baghdadImg,
  },
  {
    label: "MEDICAL OXYGEN · 5 HOSPITALS",
    title: "Salah Al-Din Health Directorate — Medical Oxygen Plants",
    location: "Salah Al-Din Governorate, Iraq",
    body: "Supply and installation of medical oxygen production plants with a capacity of 42 cubic meters per hour for five hospitals across Salah Al-Din Governorate: Al-Alam Hospital, Balad Hospital, Al-Dhuluiya Hospital, Amerli Hospital, and Al-Dauz Hospital. All five plants were delivered and commissioned as part of a single coordinated project.",
    cta: "/contact?ref=salahuddin-oxygen",
    image: salahuddinImg,
  },
];

const achievements = [
  { stat: "128", headline: "Hospitals Equipped", desc: "Full medical equipment supply including blood refrigerators, ultra-cold freezers (-80°C to -96°C), maternity beds, forensic medicine departments, and dissection tables — across Iraq and Kurdistan." },
  { stat: "6", headline: "Turkish Hospitals Equipped", desc: "Complete turnkey equipment supply for six hospitals with 700 beds each, including blood laboratories, anatomy laboratories, and microbiology laboratories." },
  { stat: "FULL", headline: "Al Ain Hospital — UAE", desc: "Complete hospital equipment supply in partnership with VAMED, including all patient room refrigeration, laboratory and forensic medicine departments, and hazardous waste treatment." },
  { stat: "DUBAI", headline: "Dubai Main Blood Center — UAE", desc: "Supply of Shouk Freeze plasma blood freezers for the main blood center in Dubai." },
  { stat: "9", headline: "Operating Rooms Equipped — Iraq", desc: "5 operating rooms for Salah Al-Din Health Directorate and 4 operating rooms for Al-Muthanna Directorate (build and equip)." },
  { stat: "AL-HUSAYNIYYA", headline: "Al-Husayniyya — Iraq", desc: "Complete supply of premature infant (NICU) departments and urodynamics laboratory equipment." },
];

const CaseStudies = () => {
  const { navigateWithTransition } = usePageTransition();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="w-full" style={{ background: "#1A2B4A", height: 300 }}>
        <div className="max-w-5xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Our Case Studies &amp; Achievements</h1>
          <div className="w-16 h-1 rounded-full mt-4" style={{ background: "#F5A623" }} />
          <p className="text-white/70 mt-4 text-sm max-w-lg">Real projects. Real impact. Across the region.</p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white">
        {caseStudies.map((cs, i) => {
          const isOdd = i % 2 === 0;
          return (
            <div key={i} className={`${i > 0 ? "border-t border-gray-100" : ""}`}>
              <div
                className={`max-w-6xl mx-auto px-6 py-20 flex flex-col ${isOdd ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}
              >
                <div className="md:w-1/2">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    loading="lazy"
                    width={1280}
                    height={864}
                    className="w-full h-[320px] md:h-[400px] object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="md:w-1/2" style={{ padding: "0 24px" }}>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#F5A623" }}>
                    {cs.label}
                  </span>
                  <h2 className="text-xl md:text-2xl font-extrabold mt-2" style={{ color: "#1A2B4A" }}>
                    {cs.title}
                  </h2>
                  <p className="text-sm mt-1" style={{ color: "#9CA3AF" }}>{cs.location}</p>
                  <p className="text-sm mt-4 leading-relaxed" style={{ color: "#6B7280" }}>{cs.body}</p>
                  <button
                    onClick={() => navigateWithTransition(cs.cta)}
                    className="mt-6 text-sm font-semibold hover:underline transition-colors"
                    style={{ color: "#F5A623" }}
                  >
                    Contact Us for a Similar Project →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Achievements */}
      <section style={{ background: "#1A2B4A", padding: "80px 0" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Achievements</h2>
            <div className="w-16 h-1 rounded-full mt-4 mx-auto" style={{ background: "#F5A623" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="rounded-xl p-10"
                style={{ background: "#1E3459" }}
              >
                <span className="block text-[60px] font-[800] leading-none" style={{ color: "#F5A623" }}>
                  {a.stat}
                </span>
                <h3 className="text-white font-bold text-lg mt-4">{a.headline}</h3>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: "#9CA3AF" }}>{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => navigateWithTransition("/contact")}
              className="px-8 py-3 rounded-full font-semibold text-sm transition-colors"
              style={{ background: "#F5A623", color: "#1A2B4A" }}
            >
              Contact Us for a Similar Project →
            </button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default CaseStudies;
