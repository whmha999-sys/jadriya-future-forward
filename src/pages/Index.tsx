import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DivisionsSection from "@/components/DivisionsSection";
import FinderSection from "@/components/FinderSection";
import VisionSection from "@/components/VisionSection";
import FooterSection from "@/components/FooterSection";
import logoIcon from "@/assets/logo-icon.png";

const LogoDivider = () => (
  <div className="flex items-center px-6 md:px-12 py-4 bg-background">
    <img src={logoIcon} alt="" className="h-12 w-12 shrink-0" />
    <div className="flex-1 h-px bg-border mx-4" />
    <img src={logoIcon} alt="" className="h-12 w-12 shrink-0" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero"><HeroSection /></section>
      <LogoDivider />
      <section id="about"><AboutSection /></section>
      <section id="divisions"><DivisionsSection /></section>
      <section id="finder"><FinderSection /></section>
      <section id="vision"><VisionSection /></section>
      <FooterSection />
    </div>
  );
};

export default Index;
