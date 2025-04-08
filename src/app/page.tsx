import HeroSection from "@/components/ui/hero-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import ClientCompanies from "@/components/ui/client-companies";
import WebDesignSection from "@/components/ui/web-design-section";
import WhyChooseUs from "@/components/ui/why-choose-us";
import BusinessStrategies from "@/components/ui/business-strategies";
import SplashCursor from "../components/ui/SplashCursor";
export default function Home() {
  return (
    <>
      <HeroSection />
      <WebDesignSection />
      <ClientCompanies />
      <TestimonialsSection />
      <WhyChooseUs />
      <BusinessStrategies />
      {/* @todo: implement splash cursor */}
      <SplashCursor />
    </>
  );
}
