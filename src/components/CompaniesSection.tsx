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
  return (
    <section className="bg-white border-t border-b border-gray-200">
      <div className="overflow-hidden">
        <div
          className="flex animate-companies-scroll"
          style={{ width: "max-content" }}
        >
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0"
              style={{ width: "25vw" }}
            >
              <img
                src={company.src}
                alt={company.alt}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
