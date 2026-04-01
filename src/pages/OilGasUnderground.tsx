import OilGasServiceSubPage from "@/components/oilgas/OilGasServiceSubPage";
import heroImg from "@/assets/oilgas/hero-underground.jpg";
import overviewImg from "@/assets/oilgas/sub-underground-overview.jpg";

const OilGasUnderground = () => (
  <OilGasServiceSubPage
    heroImage={heroImg}
    overviewImage={overviewImg}
    labelKey="og.underground"
    headlineKey="og.hero5.heading"
    overviewHeadlineKey="og.undergroundOverviewHeading"
    overviewP1Key="og.undergroundOverviewText"
    features={[
      { titleKey: "og.under.f1.title", descKey: "og.under.f1.desc" },
      { titleKey: "og.under.f2.title", descKey: "og.under.f2.desc" },
      { titleKey: "og.under.f3.title", descKey: "og.under.f3.desc" },
      { titleKey: "og.under.f4.title", descKey: "og.under.f4.desc" },
    ]}
    metaTitle="Underground Infrastructure | AL-JADRIYA Oil & Gas"
    metaDescription="Underground pipeline systems built for long-term performance."
  />
);

export default OilGasUnderground;
