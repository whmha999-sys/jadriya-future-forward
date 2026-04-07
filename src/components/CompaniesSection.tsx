import jadriyaMedical from "@/assets/companies/jadriya-medical.png";
import jadriyaOilGas from "@/assets/companies/jadriya-oilgas.png";
import jadriyaRobotics from "@/assets/companies/jadriya-robotics.png";
import jadriyaEnergy from "@/assets/companies/jadriya-energy.png";

const companies = [
  { src: jadriyaMedical, alt: "AL-JADRIYA Medical", className: "h-16 md:h-20" },
  { src: jadriyaOilGas, alt: "AL-JADRIYA Oil & Gas", className: "h-16 md:h-20" },
  { src: jadriyaRobotics, alt: "AL-JADRIYA Robotics", className: "h-16 md:h-20" },
  { src: jadriyaEnergy, alt: "AL-JADRIYA Energy", className: "h-16 md:h-20" },
];

const CompaniesSection = () => {
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

      <div className="relative overflow-hidden py-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }} />

        <div className="animate-scroll-left flex w-max" style={{ gap: "80px" }}>
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div key={index} className="flex items-center justify-center shrink-0">
              <img
                src={company.src}
                alt={company.alt}
                className={`${company.className} w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300`}
              />
            </div>
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
