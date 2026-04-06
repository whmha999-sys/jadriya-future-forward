import { InfiniteSlider } from "@/components/ui/infinite-slider";

const partners = [
  { name: "Leica", src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Leica_Camera_logo.svg" },
  { name: "Stryker", src: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Stryker_Corporation_logo.svg" },
  { name: "Karl Storz", src: "https://www.karlstorz.com/content/dam/karlstorz/master/images/logo/ks-logo.svg" },
  { name: "Midea", src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Midea_logo.svg" },
  { name: "Endomed", src: "" },
  { name: "Oxyworld", src: "" },
  { name: "Sternmed", src: "" },
  { name: "Amnotec", src: "" },
  { name: "Medisam", src: "" },
  { name: "Histo-Line", src: "" },
  { name: "Angelantoni", src: "" },
  { name: "Vertisa", src: "" },
  { name: "Coolex", src: "" },
  { name: "Comeg", src: "" },
];

const PartnersSection = () => {
  return (
    <section className="py-8 md:py-12" style={{ background: "#FFFFFF" }}>
      <div className="container mx-auto px-4 mb-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
          OUR PARTNERS
        </p>
        <p className="text-lg md:text-xl text-gray-400 font-normal leading-snug">
          Trusted by experts.
        </p>
        <p className="text-lg md:text-xl text-gray-600 font-semibold leading-snug">
          Working with the best.
        </p>
      </div>

      <div className="relative w-full">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #FFFFFF 0%, transparent 100%)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #FFFFFF 0%, transparent 100%)" }} />

        <InfiniteSlider gap={56} duration={30} durationOnHover={60}>
          {partners.map((partner) =>
            partner.src ? (
              <img
                key={partner.name}
                src={partner.src}
                alt={partner.name}
                className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
              />
            ) : (
              <span
                key={partner.name}
                className="inline-flex items-center h-8 px-4 text-sm font-semibold tracking-wide text-gray-400 hover:text-gray-700 whitespace-nowrap transition-colors duration-300 shrink-0"
              >
                {partner.name}
              </span>
            )
          )}
        </InfiniteSlider>
      </div>
    </section>
  );
};

export default PartnersSection;
