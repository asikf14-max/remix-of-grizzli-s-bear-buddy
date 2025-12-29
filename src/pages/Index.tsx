import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import CountdownSection from "@/components/CountdownSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FAQSection />
      <ServicesSection />
      <PortfolioSection />
      <CountdownSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
