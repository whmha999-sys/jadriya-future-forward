import { useEffect, useRef } from "react";
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
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Each logo block width including gap
    const logoWidth = track.scrollWidth / (companies.length * 3);
    let offset = 0;
    let animFrame: number;
    let lastTime = 0;
    const speed = 40; // pixels per second

    const step = (time: number) => {
      if (lastTime) {
        const delta = (time - lastTime) / 1000;
        offset += speed * delta;
        // Reset when we've scrolled one full set
        const oneSetWidth = logoWidth * companies.length;
        if (offset >= oneSetWidth) {
          offset -= oneSetWidth;
        }
        track.style.transform = `translateX(-${offset}px)`;
      }
      lastTime = time;
      animFrame = requestAnimationFrame(step);
    };

    animFrame = requestAnimationFrame(step);

    const pause = () => { cancelAnimationFrame(animFrame); lastTime = 0; };
    const resume = () => { animFrame = requestAnimationFrame(step); };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animFrame);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

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
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }} />

        <div ref={trackRef} className="flex w-max will-change-transform" style={{ gap: "100px" }}>
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div key={index} className="flex items-center justify-center shrink-0" style={{ width: "560px" }}>
              <img
                src={company.src}
                alt={company.alt}
                className="h-40 md:h-56 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
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
