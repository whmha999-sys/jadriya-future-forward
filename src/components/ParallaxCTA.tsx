import parallaxBg from "@/assets/companies/parallax-bg.jpg";
import { useLanguage } from "@/contexts/useLanguage";
import { usePageTransition } from "./PageTransition";

const ParallaxCTA = () => {
  const { t } = useLanguage();
  const { navigateWithTransition } = usePageTransition();

  return (
    <section
      className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${parallaxBg})` }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(26, 43, 74, 0.75)" }} />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {t("cta.heading")}
        </h2>
        <p className="text-white/90 text-base md:text-lg">
          {t("cta.text")}
        </p>
        <button
          onClick={() => navigateWithTransition("/contact")}
          className="inline-block px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-colors"
        >
          {t("cta.button")}
        </button>
      </div>
    </section>
  );
};

export default ParallaxCTA;
