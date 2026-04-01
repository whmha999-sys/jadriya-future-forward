import OilGasServiceSubPage from "@/components/oilgas/OilGasServiceSubPage";
import heroImg from "@/assets/oilgas/hero-exploration.jpg";
import overviewImg from "@/assets/oilgas/sub-exploration-overview.jpg";

const OilGasExploration = () => (
  <OilGasServiceSubPage
    heroImage={heroImg}
    overviewImage={overviewImg}
    labelKey="og.exploration"
    headlineKey="og.hero3.heading"
    overviewHeadlineKey="og.explorationOverviewHeading"
    overviewP1Key="og.explorationOverviewText"
    features={[
      { titleKey: "og.explore.f1.title", descKey: "og.explore.f1.desc" },
      { titleKey: "og.explore.f2.title", descKey: "og.explore.f2.desc" },
      { titleKey: "og.explore.f3.title", descKey: "og.explore.f3.desc" },
      { titleKey: "og.explore.f4.title", descKey: "og.explore.f4.desc" },
    ]}
    metaTitle="Exploration Requirements | AL-JADRIYA Oil & Gas"
    metaDescription="Specialized tools for geological surveys and field exploration."
  />
);

export default OilGasExploration;
