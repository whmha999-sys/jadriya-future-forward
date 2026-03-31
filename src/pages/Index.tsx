import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import DivisionsSection from "@/components/DivisionsSection";
import FinderSection from "@/components/FinderSection";
import VisionSection from "@/components/VisionSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero"><HeroSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="values"><ValuesSection /></section>
      <section id="divisions"><DivisionsSection /></section>
      <section id="finder"><FinderSection /></section>
      <section id="vision"><VisionSection /></section>
      <FooterSection />
    </div>
  );
};

export default Index;
