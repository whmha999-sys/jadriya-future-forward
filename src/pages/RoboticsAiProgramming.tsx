import RoboticsServiceSubPage from "@/components/robotics/RoboticsServiceSubPage";
import heroImg from "@/assets/robotics/hero-ai.jpg";
import overviewImg from "@/assets/robotics/sub-ai-overview.jpg";

const RoboticsAiProgramming = () => (
  <RoboticsServiceSubPage
    heroImage={heroImg}
    overviewImage={overviewImg}
    labelKey="robo.aiName"
    headlineKey="robo.hero2.heading"
    overviewHeadlineKey="robo.ai.overviewHeading"
    overviewP1Key="robo.ai.overviewText"
    features={[
      { titleKey: "robo.ai.f1.title", descKey: "robo.ai.f1.desc" },
      { titleKey: "robo.ai.f2.title", descKey: "robo.ai.f2.desc" },
      { titleKey: "robo.ai.f3.title", descKey: "robo.ai.f3.desc" },
      { titleKey: "robo.ai.f4.title", descKey: "robo.ai.f4.desc" },
    ]}
    metaTitle="AI & Programming | AL-JADRIYA Robotics"
    metaDescription="Hands-on coding and AI courses for students and professionals at AL-JADRIYA Robotics."
  />
);

export default RoboticsAiProgramming;
