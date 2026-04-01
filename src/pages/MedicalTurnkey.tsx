import MedicalServiceSubPage from "@/components/medical/MedicalServiceSubPage";
import heroImg from "@/assets/medical/hero-turnkey.jpg";
import overviewImg from "@/assets/medical/sub-turnkey-overview.jpg";

const MedicalTurnkey = () => (
  <MedicalServiceSubPage
    heroImage={heroImg}
    overviewImage={overviewImg}
    labelKey="med.turnkey"
    headlineKey="med.hero4.heading"
    overviewHeadlineKey="med.turnkeyOverviewHeading"
    overviewP1Key="med.turnkeyOverviewText"
    features={[
      { titleKey: "med.tk.f1.title", descKey: "med.tk.f1.desc" },
      { titleKey: "med.tk.f2.title", descKey: "med.tk.f2.desc" },
      { titleKey: "med.tk.f3.title", descKey: "med.tk.f3.desc" },
      { titleKey: "med.tk.f4.title", descKey: "med.tk.f4.desc" },
    ]}
    metaTitle="Turnkey Medical Projects | AL-JADRIYA Medical"
    metaDescription="End-to-end delivery of fully equipped medical facilities."
  />
);

export default MedicalTurnkey;
