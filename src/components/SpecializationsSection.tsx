import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/useLanguage";

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
      { nameKey: "spec.oilgas.1", descKey: "spec.oilgas.1.desc", photo: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80", link: "/oil-gas/pipes-supply" },
      { nameKey: "spec.oilgas.2", descKey: "spec.oilgas.2.desc", photo: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80", link: "/oil-gas/drilling-equipment" },
      { nameKey: "spec.oilgas.3", descKey: "spec.oilgas.3.desc", photo: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80", link: "/oil-gas/exploration" },
      { nameKey: "spec.oilgas.4", descKey: "spec.oilgas.4.desc", photo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", link: "/oil-gas/tc-equipment" },
      { nameKey: "spec.oilgas.5", descKey: "spec.oilgas.5.desc", photo: "https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?w=800&q=80", link: "/oil-gas/underground" },
    ],
  },
  {
    tabKey: "spec.tab.medical",
    items: [
      { nameKey: "spec.medical.1", descKey: "spec.medical.1.desc", photo: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80", link: "/medical/biomedical-engineering" },
      { nameKey: "spec.medical.2", descKey: "spec.medical.2.desc", photo: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80", link: "/medical/hospital-equipment" },
      { nameKey: "spec.medical.3", descKey: "spec.medical.3.desc", photo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80", link: "/medical/capacity-management" },
      { nameKey: "spec.medical.4", descKey: "spec.medical.4.desc", photo: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80", link: "/medical/turnkey-projects" },
      { nameKey: "spec.medical.5", descKey: "spec.medical.5.desc", photo: "https://images.unsplash.com/photo-1582719471384-894fbb16f461?w=800&q=80", link: "/medical/tender-management" },
    ],
  },
  {
    tabKey: "spec.tab.robotics",
    items: [
      { nameKey: "spec.robotics.1", descKey: "spec.robotics.1.desc", photo: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80", link: "/robotics/schools" },
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
          <div className="w-full md:w-[35%] space-y-1 py-4">
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

          {/* Right panel 65% — photo top, dark overlay bottom */}
          <div className="w-full md:w-[65%] flex flex-col overflow-hidden rounded-lg">
            {/* Photo area */}
            <div className="relative h-[280px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentItem.photo}
                  src={currentItem.photo}
                  alt={t(currentItem.nameKey)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Gradient blur into image */}
            <div className="relative -mt-16 pt-16 bg-gradient-to-t from-[#1A2B4A] from-60% to-transparent"></div>
            {/* Dark overlay panel */}
            <div className="bg-[#1A2B4A] px-8 py-8 min-h-[180px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.nameKey}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-white text-xl font-bold mb-3">
                    {t(currentItem.nameKey)}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {t(currentItem.descKey)}
                  </p>
                </motion.div>
              </AnimatePresence>
              <button
                onClick={() => navigate(currentItem.link)}
                className={`mt-4 self-start ${isRTL ? "rotate-180" : ""}`}
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
