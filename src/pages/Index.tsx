import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import CompanyCardsSection from "@/components/CompanyCardsSection";
import SpecializationsSection from "@/components/SpecializationsSection";
import FinderSection from "@/components/FinderSection";
import VisionSection from "@/components/VisionSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero"><HeroSection /></section>
      <section id="about"><WhoWeServeSection /></section>
      <CompanyCardsSection />
      <SpecializationsSection />
      <section id="finder"><FinderSection /></section>
      <section id="vision"><VisionSection /></section>
      <FooterSection />
    </div>
  );
};

export default Index;
