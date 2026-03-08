import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const menuData: Record<string, { items: string[]; href: string }> = {
  "Engineering Consultancy": { items: ["Project Planning", "Feasibility Studies", "Medical Engineering Consultancy", "Technical Design", "Procurement", "Turnkey Projects", "Site Surveys"], href: "#divisions" },
  "Educational Technology": { items: ["Robotics Programs", "AI Training", "School Partnerships", "Online Courses", "Corporate Training"], href: "#divisions" },
  "About Us": { items: ["Our Story", "Leadership", "Careers", "Newsroom"], href: "#about" },
  "Sustainability": { items: ["Our Vision", "Community Impact", "Green Initiatives"], href: "#vision" },
  "Contact Us": { items: ["Amman Office", "Baghdad Office", "General Inquiries"], href: "#contact" },
};

const MegaMenu = ({ onClose }: { onClose: () => void }) => {
  const [active, setActive] = useState("Engineering Consultancy");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 bg-navy-deep/98 backdrop-blur-sm"
    >
      <div className="h-full flex flex-col md:flex-row pt-24 px-8 md:px-16 pb-12 overflow-y-auto">
        {/* Main categories */}
        <div className="md:w-1/3 space-y-1">
          {Object.keys(menuData).map((item) => (
            <a
              key={item}
              href={menuData[item].href}
              onMouseEnter={() => setActive(item)}
              onClick={onClose}
              className={`block w-full text-left text-xl md:text-2xl font-semibold py-3 transition-all duration-300 ${
                active === item
                  ? "text-accent"
                  : "text-primary-foreground/60 hover:text-primary-foreground"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Sub items */}
        <div className="md:w-1/3 mt-8 md:mt-0 md:pl-12 md:border-l md:border-primary-foreground/10">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <p className="section-label text-primary-foreground/40 mb-6">{active}</p>
            {menuData[active]?.items.map((sub) => (
              <a
                key={sub}
                href={menuData[active].href}
                onClick={onClose}
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors duration-200 text-base"
              >
                <ArrowRight className="h-4 w-4" />
                {sub}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
