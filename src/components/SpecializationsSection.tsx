import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/useLanguage";
import specOilgas1 from "@/assets/spec-oilgas-1.jpg";
import specOilgas2 from "@/assets/spec-oilgas-2.jpg";
import specOilgas3 from "@/assets/spec-oilgas-3.jpg";
import specOilgas4 from "@/assets/spec-oilgas-4.jpg";
import specOilgas5 from "@/assets/spec-oilgas-5.jpg";
import specMedical1 from "@/assets/spec-medical-1.jpg";
import specMedical2 from "@/assets/spec-medical-2.jpg";
import specMedical3 from "@/assets/spec-medical-3.jpg";
import specMedical4 from "@/assets/spec-medical-4.jpg";
import specRobotics1 from "@/assets/spec-robotics-1.jpg";

interface SpecItem {
  nameKey: string;
  descKey: string;
  photo: string;
  link: string;
}

interface TabData {
  tabKey: string;
  items: SpecItem[];
}

const tabsData: TabData[] = [
  {
    tabKey: "spec.tab.oilgas",
    items: [
      { nameKey: "spec.oilgas.1", descKey: "spec.oilgas.1.desc", photo: specOilgas1, link: "/oil-gas/pipes-supply" },
      { nameKey: "spec.oilgas.2", descKey: "spec.oilgas.2.desc", photo: specOilgas2, link: "/oil-gas/drilling-equipment" },
      { nameKey: "spec.oilgas.3", descKey: "spec.oilgas.3.desc", photo: specOilgas3, link: "/oil-gas/exploration" },
      { nameKey: "spec.oilgas.4", descKey: "spec.oilgas.4.desc", photo: specOilgas4, link: "/oil-gas/tc-equipment" },
      { nameKey: "spec.oilgas.5", descKey: "spec.oilgas.5.desc", photo: specOilgas5, link: "/oil-gas/underground" },
    ],
  },
  {
    tabKey: "spec.tab.medical",
    items: [
      { nameKey: "spec.medical.1", descKey: "spec.medical.1.desc", photo: specMedical1, link: "/medical/hospital-equipment" },
      { nameKey: "spec.medical.2", descKey: "spec.medical.2.desc", photo: specMedical2, link: "/medical/capacity-management" },
      { nameKey: "spec.medical.3", descKey: "spec.medical.3.desc", photo: specMedical3, link: "/medical/tender-management" },
      { nameKey: "spec.medical.4", descKey: "spec.medical.4.desc", photo: specMedical4, link: "/medical/turnkey-projects" },
    ],
  },
  {
    tabKey: "spec.tab.robotics",
    items: [
      { nameKey: "spec.robotics.1", descKey: "spec.robotics.1.desc", photo: specRobotics1, link: "/robotics/schools" },
      { nameKey: "spec.robotics.2", descKey: "spec.robotics.2.desc", photo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80", link: "/robotics/ai-programming" },
      { nameKey: "spec.robotics.3", descKey: "spec.robotics.3.desc", photo: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=800&q=80", link: "/robotics/equipment-supply" },
      { nameKey: "spec.robotics.4", descKey: "spec.robotics.4.desc", photo: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", link: "/robotics/corporate-training" },
    ],
  },
  {
    tabKey: "spec.tab.energy",
    items: [
      { nameKey: "spec.energy.1", descKey: "spec.energy.1.desc", photo: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", link: "/energy/clean-manufacturing" },
      { nameKey: "spec.energy.2", descKey: "spec.energy.2.desc", photo: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80", link: "/energy/wind" },
      { nameKey: "spec.energy.3", descKey: "spec.energy.3.desc", photo: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80", link: "/energy/solar" },
    ],
  },
];

const SpecializationsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  const currentTab = tabsData[activeTab];
  const currentItem = currentTab.items[activeItem];

  const handleTabChange = (i: number) => {
    setActiveTab(i);
    setActiveItem(0);
  };

  return (
    <section className="bg-background py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <p className="text-muted-foreground text-xs font-semibold tracking-[3px] uppercase mb-8">
          {t("spec.label")}
        </p>

        {/* Tabs */}
        <div className="flex gap-8 mb-12 border-b border-border">
          {tabsData.map((tab, i) => (
            <button
              key={i}
              onClick={() => handleTabChange(i)}
              className={`pb-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 relative ${
                i === activeTab
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground/70"
              }`}
            >
              {t(tab.tabKey)}
              {i === activeTab && (
                <motion.div
                  layoutId="spec-tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-0">
          {/* Left list 35% */}
          <div className="w-full md:w-[25%] space-y-1 py-4">
            {currentTab.items.map((item, i) => (
              <button
                key={item.nameKey}
                onClick={() => setActiveItem(i)}
                className={`w-full text-left py-4 px-4 transition-all duration-300 flex items-center gap-3 ${
                  i === activeItem
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground/70"
                }`}
              >
                {i === activeItem && (
                  <ArrowRight className={`h-4 w-4 shrink-0 ${isRTL ? "rotate-180" : ""}`} />
                )}
                <span className="text-base">{t(item.nameKey)}</span>
              </button>
            ))}
          </div>

          {/* Right panel 65% — full image with frosted glass overlay */}
          <div className="w-full md:w-[75%] relative overflow-hidden rounded-lg min-h-[460px]">
            {/* Full-cover image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentItem.photo}
                src={currentItem.photo}
                alt={t(currentItem.nameKey)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Frosted glass overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-xl bg-black/40 px-6 py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.nameKey}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-white text-base font-bold mb-1">
                    {t(currentItem.nameKey)}
                  </h3>
                  <p className="text-white/80 text-xs leading-relaxed">
                    {t(currentItem.descKey)}
                  </p>
                </motion.div>
              </AnimatePresence>
              <button
                onClick={() => navigate(currentItem.link)}
                className={`mt-4 ${isRTL ? "rotate-180" : ""}`}
              >
                <ArrowRight className="h-6 w-6 text-white hover:text-accent transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
