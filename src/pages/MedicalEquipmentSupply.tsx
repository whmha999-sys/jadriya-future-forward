import MedicalServiceSubPage from "@/components/medical/MedicalServiceSubPage";
import heroImg from "@/assets/medical/hero-equipment.jpg";
import overviewImg from "@/assets/medical/sub-equipment-overview.jpg";

const MedicalEquipmentSupply = () => (
  <MedicalServiceSubPage
    heroImage={heroImg}
    overviewImage={overviewImg}
    labelKey="med.equipmentSupply"
    headlineKey="med.hero2.heading"
    overviewHeadlineKey="med.equipOverviewHeading"
    overviewP1Key="med.equipOverviewText"
    features={[
      { titleKey: "med.equip.f1.title", descKey: "med.equip.f1.desc" },
      { titleKey: "med.equip.f2.title", descKey: "med.equip.f2.desc" },
      { titleKey: "med.equip.f3.title", descKey: "med.equip.f3.desc" },
      { titleKey: "med.equip.f4.title", descKey: "med.equip.f4.desc" },
    ]}
    metaTitle="Hospital Equipment Supply | AL-JADRIYA Medical"
    metaDescription="Full supply of medical devices from leading international manufacturers."
  />
);

export default MedicalEquipmentSupply;
