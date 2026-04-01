import RoboticsServiceSubPage from "@/components/robotics/RoboticsServiceSubPage";
import heroImg from "@/assets/robotics/hero-corporate.jpg";
import overviewImg from "@/assets/robotics/sub-corporate-overview.jpg";

const RoboticsCorporateTraining = () => (
  <RoboticsServiceSubPage
    heroImage={heroImg}
    overviewImage={overviewImg}
    labelKey="robo.corporateName"
    headlineKey="robo.hero4.heading"
    overviewHeadlineKey="robo.corporate.overviewHeading"
    overviewP1Key="robo.corporate.overviewText"
    features={[
      { titleKey: "robo.corporate.f1.title", descKey: "robo.corporate.f1.desc" },
      { titleKey: "robo.corporate.f2.title", descKey: "robo.corporate.f2.desc" },
      { titleKey: "robo.corporate.f3.title", descKey: "robo.corporate.f3.desc" },
      { titleKey: "robo.corporate.f4.title", descKey: "robo.corporate.f4.desc" },
    ]}
    metaTitle="Corporate Training | AL-JADRIYA Robotics"
    metaDescription="Custom AI and robotics training programs for organizations and government institutions."
  />
);

export default RoboticsCorporateTraining;
