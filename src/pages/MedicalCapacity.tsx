import MedicalServiceSubPage from "@/components/medical/MedicalServiceSubPage";
import heroImg from "@/assets/medical/hero-capacity.jpg";
import overviewImg from "@/assets/medical/sub-capacity-overview.jpg";

const MedicalCapacity = () => (
  <MedicalServiceSubPage
    heroImage={heroImg}
    overviewImage={overviewImg}
    labelKey="med.capacityMgmt"
    headlineKey="med.hero3.heading"
    overviewHeadlineKey="med.capOverviewHeading"
    overviewP1Key="med.capOverviewText"
    features={[
      { titleKey: "med.cap.f1.title", descKey: "med.cap.f1.desc" },
      { titleKey: "med.cap.f2.title", descKey: "med.cap.f2.desc" },
      { titleKey: "med.cap.f3.title", descKey: "med.cap.f3.desc" },
      { titleKey: "med.cap.f4.title", descKey: "med.cap.f4.desc" },
    ]}
    metaTitle="Capacity Management | AL-JADRIYA Medical"
    metaDescription="Optimize hospital capacity, patient flow, and operational efficiency."
  />
);

export default MedicalCapacity;
