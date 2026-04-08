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
import AchievementsSection from "@/components/AchievementsSection";
import CompaniesSection from "@/components/CompaniesSection";
import CompanyDetailSection from "@/components/CompanyDetailSection";
import ParallaxCTA from "@/components/ParallaxCTA";
import QuoteSection from "@/components/QuoteSection";
import { allProjects } from "@/data/projects";
import { useLanguage } from "@/contexts/useLanguage";

// Featured: Project 29 (Egypt), Project 20 (Iraq open-heart), Project 38 (Oman Royal Hospital)
const featured = [
  allProjects.find((p) => p.id === 29)!,
  allProjects.find((p) => p.id === 20)!,
  allProjects.find((p) => p.id === 38)!,
];

const Index = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero"><HeroSection /></section>
      <CompaniesSection />
      <CompanyCardsSection />
      <PartnersSection />
      <AchievementsSection />
      <CompanyDetailSection />
      <ParallaxCTA />
      <section id="about"><WhoWeServeSection /></section>
      <section id="specializations"><SpecializationsSection /></section>
      <FeaturedProjects
        label={t("feat.selectedProjects")}
        heading={t("feat.trustedRegion")}
        projects={featured}
        ctaText={t("feat.viewAll")}
        ctaHref="/references"
      />
      <section id="finder"><FinderSection /></section>
      <section id="vision"><VisionSection /></section>
      <QuoteSection />
      <FooterSection />
    </div>
  );
};

export default Index;
