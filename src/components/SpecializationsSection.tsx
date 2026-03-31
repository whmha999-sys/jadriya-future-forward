import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/useLanguage";

interface SpecItem {
  nameKey: string;
  photo: string;
}

interface TabData {
  tabKey: string;
  items: SpecItem[];
}

const tabsData: TabData[] = [
  {
    tabKey: "spec.tab.oilgas",
    items: [
      { nameKey: "spec.oilgas.1", photo: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80" },
      { nameKey: "spec.oilgas.2", photo: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80" },
      { nameKey: "spec.oilgas.3", photo: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80" },
      { nameKey: "spec.oilgas.4", photo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
      { nameKey: "spec.oilgas.5", photo: "https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?w=800&q=80" },
    ],
  },
  {
    tabKey: "spec.tab.medical",
    items: [
      { nameKey: "spec.medical.1", photo: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80" },
      { nameKey: "spec.medical.2", photo: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80" },
      { nameKey: "spec.medical.3", photo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" },
      { nameKey: "spec.medical.4", photo: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80" },
      { nameKey: "spec.medical.5", photo: "https://images.unsplash.com/photo-1582719471384-894fbb16f461?w=800&q=80" },
    ],
  },
  {
    tabKey: "spec.tab.robotics",
    items: [
      { nameKey: "spec.robotics.1", photo: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80" },
      { nameKey: "spec.robotics.2", photo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80" },
      { nameKey: "spec.robotics.3", photo: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=800&q=80" },
      { nameKey: "spec.robotics.4", photo: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80" },
    ],
  },
  {
    tabKey: "spec.tab.energy",
    items: [
      { nameKey: "spec.energy.1", photo: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80" },
      { nameKey: "spec.energy.2", photo: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80" },
      { nameKey: "spec.energy.3", photo: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80" },
    ],
  },
];

const SpecializationsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const { t } = useLanguage();

  const currentTab = tabsData[activeTab];
  const currentPhoto = currentTab.items[activeItem]?.photo;

  const handleTabChange = (i: number) => {
    setActiveTab(i);
    setActiveItem(0);
  };

  return (
    <section className="bg-[hsl(var(--navy-deep))] py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <p className="text-accent text-xs font-semibold tracking-[3px] uppercase mb-8">
          {t("spec.label")}
        </p>

        {/* Tabs */}
        <div className="flex gap-8 mb-12 border-b border-primary-foreground/10">
          {tabsData.map((tab, i) => (
            <button
              key={i}
              onClick={() => handleTabChange(i)}
              className={`pb-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 relative ${
                i === activeTab
                  ? "text-primary-foreground"
                  : "text-primary-foreground/40 hover:text-primary-foreground/60"
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
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left list 40% */}
          <div className="w-full md:w-[40%] space-y-1">
            {currentTab.items.map((item, i) => (
              <button
                key={item.nameKey}
                onClick={() => setActiveItem(i)}
                className={`w-full text-left py-4 px-4 transition-all duration-300 flex items-center gap-3 ${
                  i === activeItem
                    ? "text-primary-foreground border-l-2 border-accent bg-primary-foreground/5"
                    : "text-primary-foreground/50 hover:text-primary-foreground/70 border-l-2 border-transparent"
                }`}
              >
                <span className="text-base font-medium">{t(item.nameKey)}</span>
              </button>
            ))}
          </div>

          {/* Right photo 60% */}
          <div className="w-full md:w-[60%] h-[400px] rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentPhoto}
                src={currentPhoto}
                alt=""
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
