import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompanyCardsSection from "@/components/CompanyCardsSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import SpecializationsSection from "@/components/SpecializationsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import FinderSection from "@/components/FinderSection";
import VisionSection from "@/components/VisionSection";
import FooterSection from "@/components/FooterSection";
import PartnersSection from "@/components/PartnersSection";
import CompaniesSection from "@/components/CompaniesSection";
import CompanyDetailSection from "@/components/CompanyDetailSection";
import ParallaxCTA from "@/components/ParallaxCTA";
import { allProjects } from "@/data/projects";

// Featured: Project 29 (Egypt), Project 20 (Iraq open-heart), Project 38 (Oman Royal Hospital)
const featured = [
  allProjects.find((p) => p.id === 29)!,
  allProjects.find((p) => p.id === 20)!,
  allProjects.find((p) => p.id === 38)!,
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero"><HeroSection /></section>
      <PartnersSection />
      <CompanyCardsSection />
      <CompaniesSection />
      <CompanyDetailSection />
      <ParallaxCTA />
      <section id="about"><WhoWeServeSection /></section>
      <section id="specializations"><SpecializationsSection /></section>
      <FeaturedProjects
        label="SELECTED PROJECTS"
        heading="Trusted Across the Region"
        projects={featured}
        ctaText="View All Projects →"
        ctaHref="/references"
      />
      <section id="finder"><FinderSection /></section>
      <section id="vision"><VisionSection /></section>
      <FooterSection />
    </div>
  );
};

export default Index;
