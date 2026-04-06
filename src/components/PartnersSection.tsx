import { InfiniteSlider } from "@/components/ui/infinite-slider";

const partners = [
  { name: "Leica Microsystems", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Leica_Microsystems_logo.svg/2560px-Leica_Microsystems_logo.svg.png" },
  { name: "Stryker", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Stryker_Corporation_logo.svg/2560px-Stryker_Corporation_logo.svg.png" },
  { name: "Karl Storz", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/KARL_STORZ_Logo.svg/2560px-KARL_STORZ_Logo.svg.png" },
  { name: "Endomed Systems", src: "" },
  { name: "Oxyworld Group", src: "" },
  { name: "Sternmed", src: "" },
  { name: "Amnotec", src: "" },
  { name: "Medisam", src: "" },
  { name: "Histo-Line Laboratories", src: "" },
  { name: "Angelantoni Life Science", src: "" },
  { name: "Vertisa", src: "" },
  { name: "Coolex", src: "" },
  { name: "Comeg Medical Technologies", src: "" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 mb-12">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
          OUR PARTNERS
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Trusted by experts.
            <br />
            Working with the best.
          </h2>
        </div>
      </div>

      <div className="w-full">
        <InfiniteSlider gap={48} duration={30} durationOnHover={60}>
          {partners.map((partner) =>
            partner.src ? (
              <img
                key={partner.name}
                src={partner.src}
                alt={partner.name}
                className="h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ) : (
              <span
                key={partner.name}
                className="inline-flex items-center h-12 px-6 text-lg font-semibold tracking-wide text-muted-foreground/60 hover:text-foreground whitespace-nowrap transition-colors duration-300"
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
