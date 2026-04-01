import RoboticsServiceSubPage from "@/components/robotics/RoboticsServiceSubPage";
import heroImg from "@/assets/robotics/hero-schools.jpg";
import overviewImg from "@/assets/robotics/sub-schools-overview.jpg";

const RoboticsSchools = () => (
  <RoboticsServiceSubPage
    heroImage={heroImg}
    overviewImage={overviewImg}
    labelKey="robo.schoolsName"
    headlineKey="robo.hero1.heading"
    overviewHeadlineKey="robo.schools.overviewHeading"
    overviewP1Key="robo.schools.overviewText"
    features={[
      { titleKey: "robo.schools.f1.title", descKey: "robo.schools.f1.desc" },
      { titleKey: "robo.schools.f2.title", descKey: "robo.schools.f2.desc" },
      { titleKey: "robo.schools.f3.title", descKey: "robo.schools.f3.desc" },
      { titleKey: "robo.schools.f4.title", descKey: "robo.schools.f4.desc" },
    ]}
    metaTitle="Robotics for Schools | AL-JADRIYA Robotics"
    metaDescription="Curriculum-aligned robotics programs delivered directly to schools across Jordan and Iraq."
  />
);

export default RoboticsSchools;
