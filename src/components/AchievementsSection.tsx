import { useEffect, useRef, useState } from "react";
import { usePageTransition } from "./PageTransition";
import { useLanguage } from "@/contexts/useLanguage";

interface Stat {
  target: number;
  suffix: string;
  labelKey: string;
  subKey: string;
  format?: (n: number) => string;
}

const stats: Stat[] = [
  { target: 128, suffix: "", labelKey: "ach.hospitalsNum", subKey: "ach.hospitalsSub" },
  { target: 700, suffix: "", labelKey: "ach.turkishNum", subKey: "ach.turkishSub" },
  {
    target: 4200,
    suffix: "+",
    labelKey: "ach.devicesNum",
    subKey: "ach.devicesSub",
    format: (n: number) => n.toLocaleString(),
  },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0);
  const raf = useRef<number>();

  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const elapsed = now - t0;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [start, target, duration]);

  return value;
}

const StatBlock = ({ stat, started, t }: { stat: Stat; started: boolean; t: (k: string) => string }) => {
  const value = useCountUp(stat.target, 2000, started);
  const display = stat.format ? stat.format(value) : String(value);

  return (
    <div className="text-center">
      <span className="block text-[80px] font-[800] leading-none text-white">
        {display}{stat.suffix}
      </span>
      <span className="block mt-3 text-lg font-bold text-white">
        {t(stat.labelKey)}
      </span>
      <span className="block mt-1 text-sm text-white/80">{t(stat.subKey)}</span>
    </div>
  );
};

const AchievementsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const { navigateWithTransition } = usePageTransition();
  const { t } = useLanguage();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full" style={{ background: "#1A2B4A", padding: "80px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((s) => (
            <StatBlock key={s.labelKey} stat={s} started={started} t={t} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
          <button
            onClick={() => navigateWithTransition("/contact")}
            className="px-8 py-3 rounded-full font-semibold text-sm transition-colors"
            style={{ background: "#F5A623", color: "#1A2B4A" }}
          >
            {t("ach.contactBtn")}
          </button>
          <button
            onClick={() => navigateWithTransition("/case-studies")}
            className="text-white underline text-sm font-medium hover:text-[#F5A623] transition-colors"
          >
            {t("ach.caseStudiesLink")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
