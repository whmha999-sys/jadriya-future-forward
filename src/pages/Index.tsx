import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompanyCardsSection from "@/components/CompanyCardsSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import SpecializationsSection from "@/components/SpecializationsSection";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import { useLanguage } from "@/contexts/useLanguage";

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
      <CaseStudiesGrid
        label={t("feat.selectedProjects")}
        heading={t("feat.trustedRegion")}
        showViewAll
        viewAllText={t("feat.viewAll")}
      />
      <section id="finder"><FinderSection /></section>
      <section id="vision"><VisionSection /></section>
      <QuoteSection />
      <FooterSection />
    </div>
  );
};

export default Index;
