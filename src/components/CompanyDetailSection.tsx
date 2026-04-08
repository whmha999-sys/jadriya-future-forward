import { useState, useEffect, useCallback } from "react";
import { usePageTransition } from "./PageTransition";
import { useLanguage } from "@/contexts/useLanguage";

import oilgas1 from "@/assets/companies/oilgas-slide1.jpg";
import oilgas2 from "@/assets/companies/oilgas-slide2.jpg";
import oilgas3 from "@/assets/companies/oilgas-slide3.jpg";
import medical1 from "@/assets/companies/medical-slide1.jpg";
import medical2 from "@/assets/companies/medical-slide2.jpg";
import medical3 from "@/assets/companies/medical-slide3.jpg";
import robotics1 from "@/assets/companies/robotics-slide1.jpg";
import robotics2 from "@/assets/companies/robotics-slide2.jpg";
import robotics3 from "@/assets/companies/robotics-slide3.jpg";
import energy1 from "@/assets/companies/energy-slide1.jpg";
import energy2 from "@/assets/companies/energy-slide2.jpg";
import energy3 from "@/assets/companies/energy-slide3.jpg";

type CompanyBlock = {
  labelKey: string;
  headlineKey: string;
  bodyKey: string;
  buttonKey: string;
  href?: string;
  disabled?: boolean;
  images: string[];
  imageLeft: boolean;
};

const companies: CompanyBlock[] = [
  {
    labelKey: "detail.oilgas.label",
    headlineKey: "detail.oilgas.headline",
    bodyKey: "detail.oilgas.body",
    buttonKey: "detail.oilgas.button",
    href: "/oil-gas",
    images: [oilgas1, oilgas2, oilgas3],
    imageLeft: false,
  },
  {
    labelKey: "detail.medical.label",
    headlineKey: "detail.medical.headline",
    bodyKey: "detail.medical.body",
    buttonKey: "detail.medical.button",
    href: "/medical",
    images: [medical1, medical2, medical3],
    imageLeft: true,
  },
  {
    labelKey: "detail.robotics.label",
    headlineKey: "detail.robotics.headline",
    bodyKey: "detail.robotics.body",
    buttonKey: "detail.robotics.button",
    href: "/robotics",
    images: [robotics1, robotics2, robotics3],
    imageLeft: false,
  },
  {
    labelKey: "detail.energy.label",
    headlineKey: "detail.energy.headline",
    bodyKey: "detail.energy.body",
    buttonKey: "detail.energy.button",
    disabled: true,
    images: [energy1, energy2, energy3],
    imageLeft: true,
  },
];

function Slideshow({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, 4000);
    return () => clearInterval(id);
  }, [paused, advance]);

  return (
    <div
      className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          width={1280}
          height={864}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-accent scale-110"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function CompanyBlockComponent({ company, t }: { company: CompanyBlock; t: (key: string) => string }) {
  const { navigateWithTransition } = usePageTransition();

  const textContent = (
    <div className="flex flex-col justify-center space-y-5">
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
        {t(company.labelKey)}
      </span>
      <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
        {t(company.headlineKey)}
      </h3>
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
        {t(company.bodyKey)}
      </p>
      {company.disabled ? (
        <button
          disabled
          className="self-start px-8 py-3 rounded-full bg-accent/40 text-accent-foreground/60 font-semibold text-sm cursor-not-allowed"
        >
          {t(company.buttonKey)}
        </button>
      ) : (
        <button
          onClick={() => navigateWithTransition(company.href!)}
          className="self-start px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-colors"
        >
          {t(company.buttonKey)}
        </button>
      )}
    </div>
  );

  const slideshow = <Slideshow images={company.images} />;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {company.imageLeft ? (
          <>
            <div className="order-1">{slideshow}</div>
            <div className="order-2">{textContent}</div>
          </>
        ) : (
          <>
            <div className="order-2 md:order-1">{textContent}</div>
            <div className="order-1 md:order-2">{slideshow}</div>
          </>
        )}
      </div>
    </div>
  );
}

const CompanyDetailSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background space-y-20 md:space-y-28">
      {companies.map((company) => (
        <CompanyBlockComponent key={company.labelKey} company={company} t={t} />
      ))}
    </section>
  );
};

export default CompanyDetailSection;
