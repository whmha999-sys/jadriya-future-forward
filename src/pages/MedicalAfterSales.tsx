import MedicalServiceSubPage from "@/components/medical/MedicalServiceSubPage";
import heroImg from "@/assets/medical/hero-aftersales.jpg";
import overviewImg from "@/assets/medical/sub-aftersales-overview.jpg";

const MedicalAfterSales = () => (
  <MedicalServiceSubPage
    heroImage={heroImg}
    overviewImage={overviewImg}
    labelKey="med.afterSales"
    headlineKey="med.hero6.heading"
    overviewHeadlineKey="med.afterOverviewHeading"
    overviewP1Key="med.afterOverviewText"
    features={[
      { titleKey: "med.as.f1.title", descKey: "med.as.f1.desc" },
      { titleKey: "med.as.f2.title", descKey: "med.as.f2.desc" },
      { titleKey: "med.as.f3.title", descKey: "med.as.f3.desc" },
      { titleKey: "med.as.f4.title", descKey: "med.as.f4.desc" },
    ]}
    metaTitle="After-Sales Support | AL-JADRIYA Medical"
    metaDescription="Ongoing technical support and maintenance after every delivery."
  />
);

export default MedicalAfterSales;
