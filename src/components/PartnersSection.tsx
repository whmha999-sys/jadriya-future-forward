import karlStorz from "@/assets/partners/karl-storz.png";
import stryker from "@/assets/partners/stryker.png";
import vertisa from "@/assets/partners/vertisa.png";
import comeg from "@/assets/partners/comeg.png";
import coolex from "@/assets/partners/coolex.png";
import angelantoni from "@/assets/partners/angelantoni.png";
import histoLine from "@/assets/partners/histo-line.png";
import medisam from "@/assets/partners/medisam.png";
import amnotec from "@/assets/partners/amnotec.png";
import sternmed from "@/assets/partners/sternmed.png";

const partners = [
  { src: karlStorz, alt: "Karl Storz", className: "h-8" },
  { src: stryker, alt: "Stryker", className: "h-8" },
  { src: vertisa, alt: "Vertisa", className: "h-8" },
  { src: comeg, alt: "COMEG", className: "h-8" },
  { src: coolex, alt: "Coolex", className: "h-12" },
  { src: angelantoni, alt: "Angelantoni", className: "h-12" },
  { src: histoLine, alt: "Histo-Line", className: "h-12" },
  { src: medisam, alt: "Medisam", className: "h-24" },
  { src: amnotec, alt: "Amnotec", className: "h-12" },
  { src: sternmed, alt: "Sternmed", className: "h-10" },
];

const PartnersSection = () => {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="text-center mb-6">
        <span className="text-muted-foreground text-base md:text-lg">Trusted by experts.</span>
        <br />
        <span className="text-foreground text-base md:text-lg font-semibold">Working with the best.</span>
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

        <div className="animate-scroll-left flex w-max" style={{ gap: "42px" }}>
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex items-center justify-center shrink-0">
              <img
                src={partner.src}
                alt={partner.alt}
                className={`${partner.className} w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300`}
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

export default PartnersSection;
