import { useState, useEffect, useCallback } from "react";
import jadriyaMedical from "@/assets/companies/jadriya-medical.png";
import jadriyaOilGas from "@/assets/companies/jadriya-oilgas.png";
import jadriyaRobotics from "@/assets/companies/jadriya-robotics.png";
import jadriyaEnergy from "@/assets/companies/jadriya-energy.png";

const companies = [
  { src: jadriyaMedical, alt: "AL-JADRIYA Medical" },
  { src: jadriyaOilGas, alt: "AL-JADRIYA Oil & Gas" },
  { src: jadriyaRobotics, alt: "AL-JADRIYA Robotics" },
  { src: jadriyaEnergy, alt: "AL-JADRIYA Energy" },
];

const CompaniesSection = () => {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % companies.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advance, 3000);
    return () => clearInterval(id);
  }, [advance]);

  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">OUR COMPANIES</h2>
        <span className="text-muted-foreground text-base md:text-lg">Four divisions.</span>
        <br />
        <span className="text-foreground text-base md:text-lg font-semibold">One vision.</span>
      </div>

      <div
        className="mx-auto"
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, hsl(var(--border)) 20%, hsl(var(--border)) 80%, transparent)",
        }}
      />

      <div className="relative overflow-hidden py-8 md:py-12">
        <div className="flex items-center justify-center h-28 md:h-40">
          {companies.map((company, i) => (
            <img
              key={company.alt}
              src={company.src}
              alt={company.alt}
              className={`absolute max-h-28 md:max-h-40 w-auto object-contain transition-all duration-700 ease-in-out ${
                i === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            />
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {companies.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-accent scale-110"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Company ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div
        className="mx-auto"
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, hsl(var(--border)) 20%, hsl(var(--border)) 80%, transparent)",
        }}
      />
    </section>
  );
};

export default CompaniesSection;
