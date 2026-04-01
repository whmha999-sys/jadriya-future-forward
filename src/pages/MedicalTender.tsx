import MedicalServiceSubPage from "@/components/medical/MedicalServiceSubPage";
import heroImg from "@/assets/medical/hero-tender.jpg";
import overviewImg from "@/assets/medical/sub-tender-overview.jpg";

const MedicalTender = () => (
  <MedicalServiceSubPage
    heroImage={heroImg}
    overviewImage={overviewImg}
    labelKey="med.tenderMgmt"
    headlineKey="med.hero5.heading"
    overviewHeadlineKey="med.tenderOverviewHeading"
    overviewP1Key="med.tenderOverviewText"
    features={[
      { titleKey: "med.tender.f1.title", descKey: "med.tender.f1.desc" },
      { titleKey: "med.tender.f2.title", descKey: "med.tender.f2.desc" },
      { titleKey: "med.tender.f3.title", descKey: "med.tender.f3.desc" },
      { titleKey: "med.tender.f4.title", descKey: "med.tender.f4.desc" },
    ]}
    metaTitle="Medical Tender Management | AL-JADRIYA Medical"
    metaDescription="Expert management of medical procurement tenders."
  />
);

export default MedicalTender;
