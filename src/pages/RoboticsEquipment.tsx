import RoboticsServiceSubPage from "@/components/robotics/RoboticsServiceSubPage";
import heroImg from "@/assets/robotics/hero-equipment.jpg";
import overviewImg from "@/assets/robotics/sub-equipment-overview.jpg";

const RoboticsEquipment = () => (
  <RoboticsServiceSubPage
    heroImage={heroImg}
    overviewImage={overviewImg}
    labelKey="robo.equipmentName"
    headlineKey="robo.hero3.heading"
    overviewHeadlineKey="robo.equipment.overviewHeading"
    overviewP1Key="robo.equipment.overviewText"
    features={[
      { titleKey: "robo.equipment.f1.title", descKey: "robo.equipment.f1.desc" },
      { titleKey: "robo.equipment.f2.title", descKey: "robo.equipment.f2.desc" },
      { titleKey: "robo.equipment.f3.title", descKey: "robo.equipment.f3.desc" },
      { titleKey: "robo.equipment.f4.title", descKey: "robo.equipment.f4.desc" },
    ]}
    metaTitle="Robotics Equipment Supply | AL-JADRIYA Robotics"
    metaDescription="Professional robotics kits and equipment for schools, training centers, and corporate clients."
  />
);

export default RoboticsEquipment;
