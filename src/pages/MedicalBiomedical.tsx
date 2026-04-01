import MedicalServiceSubPage from "@/components/medical/MedicalServiceSubPage";
import heroImg from "@/assets/medical/hero-biomedical.jpg";
import overviewImg from "@/assets/medical/sub-biomedical-overview.jpg";

const MedicalBiomedical = () => (
  <MedicalServiceSubPage
    heroImage={heroImg}
    overviewImage={overviewImg}
    labelKey="med.biomedical"
    headlineKey="med.hero1.heading"
    overviewHeadlineKey="med.bioOverviewHeading"
    overviewP1Key="med.bioOverviewText"
    features={[
      { titleKey: "med.bio.f1.title", descKey: "med.bio.f1.desc" },
      { titleKey: "med.bio.f2.title", descKey: "med.bio.f2.desc" },
      { titleKey: "med.bio.f3.title", descKey: "med.bio.f3.desc" },
      { titleKey: "med.bio.f4.title", descKey: "med.bio.f4.desc" },
    ]}
    metaTitle="Biomedical Engineering | AL-JADRIYA Medical"
    metaDescription="Engineering consultancy and technical support for biomedical systems across healthcare facilities."
  />
);

export default MedicalBiomedical;
