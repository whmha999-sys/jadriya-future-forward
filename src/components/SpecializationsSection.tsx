import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface SpecItem {
  name: string;
  image: string;
}

const SpecializationsSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  const tabs = [
    { label: t("spec.tab.oilgas") },
    { label: t("spec.tab.medical") },
    { label: t("spec.tab.robotics") },
    { label: t("spec.tab.energy") },
  ];

  const tabData: SpecItem[][] = [
    [
      { name: t("spec.og.1"), image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80" },
      { name: t("spec.og.2"), image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
      { name: t("spec.og.3"), image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80" },
      { name: t("spec.og.4"), image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&q=80" },
      { name: t("spec.og.5"), image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80" },
    ],
    [
      { name: t("spec.med.1"), image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80" },
      { name: t("spec.med.2"), image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
      { name: t("spec.med.3"), image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80" },
      { name: t("spec.med.4"), image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80" },
      { name: t("spec.med.5"), image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80" },
    ],
    [
      { name: t("spec.rob.1"), image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80" },
      { name: t("spec.rob.2"), image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" },
      { name: t("spec.rob.3"), image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" },
      { name: t("spec.rob.4"), image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" },
    ],
    [
      { name: t("spec.en.1"), image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80" },
      { name: t("spec.en.2"), image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80" },
      { name: t("spec.en.3"), image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80" },
    ],
  ];

  const items = tabData[activeTab];
  const currentImage = items[activeItem]?.image || items[0]?.image;

  const handleTabChange = (i: number) => {
    setActiveTab(i);
    setActiveItem(0);
  };

  return (
    <section className="bg-[hsl(var(--navy-deep))] py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent uppercase text-xs font-semibold tracking-[3px] mb-8">
          {t("spec.label")}
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-0 border-b border-primary-foreground/10 mb-12">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => handleTabChange(i)}
              className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 border-b-2 -mb-px ${
                i === activeTab
                  ? "text-accent border-accent"
                  : "text-primary-foreground/40 border-transparent hover:text-primary-foreground/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left list */}
          <div className="md:w-[40%] space-y-1">
            {items.map((item, i) => (
              <button
                key={`${activeTab}-${i}`}
                onClick={() => setActiveItem(i)}
                className={`w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 border-l-2 ${
                  i === activeItem
                    ? "text-accent border-accent bg-primary-foreground/5"
                    : "text-primary-foreground/50 border-transparent hover:text-primary-foreground/80 hover:border-primary-foreground/20"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right photo */}
          <div className="md:w-[60%] h-[300px] md:h-[400px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={`${activeTab}-${activeItem}`}
                src={currentImage}
                alt={items[activeItem]?.name}
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
