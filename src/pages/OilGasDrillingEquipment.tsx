import OilGasServiceSubPage from "@/components/oilgas/OilGasServiceSubPage";
import heroImg from "@/assets/oilgas/hero-drilling.jpg";
import overviewImg from "@/assets/oilgas/sub-drilling-overview.jpg";

const OilGasDrillingEquipment = () => (
  <OilGasServiceSubPage
    heroImage={heroImg}
    overviewImage={overviewImg}
    labelKey="og.drillingEquipment"
    headlineKey="og.hero2.heading"
    overviewHeadlineKey="og.drillingOverviewHeading"
    overviewP1Key="og.drillingOverviewText"
    features={[
      { titleKey: "og.drilling.f1.title", descKey: "og.drilling.f1.desc" },
      { titleKey: "og.drilling.f2.title", descKey: "og.drilling.f2.desc" },
      { titleKey: "og.drilling.f3.title", descKey: "og.drilling.f3.desc" },
      { titleKey: "og.drilling.f4.title", descKey: "og.drilling.f4.desc" },
    ]}
    metaTitle="Drilling Equipment | AL-JADRIYA Oil & Gas"
    metaDescription="Complete drilling solutions for exploration and extraction operations."
  />
);

export default OilGasDrillingEquipment;
