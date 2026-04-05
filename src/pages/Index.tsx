import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompanyCardsSection from "@/components/CompanyCardsSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import SpecializationsSection from "@/components/SpecializationsSection";
import FinderSection from "@/components/FinderSection";
import VisionSection from "@/components/VisionSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero"><HeroSection /></section>
      <CompanyCardsSection />
      <section id="about"><WhoWeServeSection /></section>
      <section id="specializations"><SpecializationsSection /></section>
      <section id="finder"><FinderSection /></section>
      <section id="vision"><VisionSection /></section>
      <FooterSection />
    </div>
  );
};

export default Index;
