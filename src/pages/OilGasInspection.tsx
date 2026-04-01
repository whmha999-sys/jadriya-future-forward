import OilGasServiceSubPage from "@/components/oilgas/OilGasServiceSubPage";
import heroImg from "@/assets/oilgas/hero-inspection.jpg";
import overviewImg from "@/assets/oilgas/sub-inspection-overview.jpg";

const OilGasInspection = () => (
  <OilGasServiceSubPage
    heroImage={heroImg}
    overviewImage={overviewImg}
    labelKey="og.inspection"
    headlineKey="og.hero4.heading"
    overviewHeadlineKey="og.inspectionOverviewHeading"
    overviewP1Key="og.inspectionOverviewText"
    features={[
      { titleKey: "og.inspect.f1.title", descKey: "og.inspect.f1.desc" },
      { titleKey: "og.inspect.f2.title", descKey: "og.inspect.f2.desc" },
      { titleKey: "og.inspect.f3.title", descKey: "og.inspect.f3.desc" },
      { titleKey: "og.inspect.f4.title", descKey: "og.inspect.f4.desc" },
    ]}
    metaTitle="T.C Equipment & Inspection | AL-JADRIYA Oil & Gas"
    metaDescription="Technical control and full inspection services on-site."
  />
);

export default OilGasInspection;
