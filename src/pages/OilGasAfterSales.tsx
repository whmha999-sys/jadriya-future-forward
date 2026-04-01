import OilGasServiceSubPage from "@/components/oilgas/OilGasServiceSubPage";
import heroImg from "@/assets/oilgas/hero-aftersales.jpg";
import overviewImg from "@/assets/oilgas/sub-aftersales-overview.jpg";

const OilGasAfterSales = () => (
  <OilGasServiceSubPage
    heroImage={heroImg}
    overviewImage={overviewImg}
    labelKey="og.afterSales"
    headlineKey="og.hero6.heading"
    overviewHeadlineKey="og.afterSalesOverviewHeading"
    overviewP1Key="og.afterSalesOverviewText"
    features={[
      { titleKey: "og.after.f1.title", descKey: "og.after.f1.desc" },
      { titleKey: "og.after.f2.title", descKey: "og.after.f2.desc" },
      { titleKey: "og.after.f3.title", descKey: "og.after.f3.desc" },
      { titleKey: "og.after.f4.title", descKey: "og.after.f4.desc" },
    ]}
    metaTitle="After-Sales Support | AL-JADRIYA Oil & Gas"
    metaDescription="Ongoing technical support and maintenance after every delivery."
  />
);

export default OilGasAfterSales;
