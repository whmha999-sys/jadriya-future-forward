const partners = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Leica_Camera_logo.svg", alt: "Leica" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Stryker_Corporation_logo.svg", alt: "Stryker" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Midea_logo.svg", alt: "Midea" },
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Endomed" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Oxyworld" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "Sternmed" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Amnotec" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "Medisam" },
];

const PartnersSection = () => {
  return (
    <section className="py-8 md:py-12" style={{ background: "#FFFFFF" }}>
      <div className="text-center mb-6">
        <span className="text-gray-400 text-base md:text-lg">Trusted by experts.</span>
        <br />
        <span className="text-gray-800 text-base md:text-lg font-semibold">Working with the best.</span>
      </div>

      <div
        className="mx-auto"
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, #e5e7eb 20%, #e5e7eb 80%, transparent)",
        }}
      />

      <div className="relative overflow-hidden py-6">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #FFFFFF, transparent)" }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #FFFFFF, transparent)" }} />

        <div className="animate-scroll-left flex w-max" style={{ gap: "42px" }}>
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex items-center justify-center shrink-0">
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-5 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="mx-auto"
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, #e5e7eb 20%, #e5e7eb 80%, transparent)",
        }}
      />
    </section>
  );
};

export default PartnersSection;
