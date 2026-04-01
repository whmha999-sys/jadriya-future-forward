import OilGasServiceSubPage from "@/components/oilgas/OilGasServiceSubPage";
import heroImg from "@/assets/oilgas/hero-pipes.jpg";
import overviewImg from "@/assets/oilgas/sub-pipes-overview.jpg";

const OilGasPipesSupply = () => (
  <OilGasServiceSubPage
    heroImage={heroImg}
    overviewImage={overviewImg}
    labelKey="og.pipesSupply"
    headlineKey="og.hero1.heading"
    overviewHeadlineKey="og.pipesOverviewHeading"
    overviewP1Key="og.pipesOverviewText"
    features={[
      { titleKey: "og.pipes.f1.title", descKey: "og.pipes.f1.desc" },
      { titleKey: "og.pipes.f2.title", descKey: "og.pipes.f2.desc" },
      { titleKey: "og.pipes.f3.title", descKey: "og.pipes.f3.desc" },
      { titleKey: "og.pipes.f4.title", descKey: "og.pipes.f4.desc" },
    ]}
    metaTitle="Oil & Gas Pipes Supply | AL-JADRIYA Oil & Gas"
    metaDescription="High-grade steel pipes and fittings for oil and gas infrastructure across Jordan, Iraq, and the wider region."
  />
);

export default OilGasPipesSupply;
