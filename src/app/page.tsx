import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";
import HeroSection from "@/components/ui/hero-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import ClientCompanies from "@/components/ui/client-companies";
import SplashCursor from "../components/ui/SplashCursor";
import WebDesignSection from "@/components/ui/web-design-section";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WebDesignSection />
      <ClientCompanies />
      <TestimonialsSection />
      <FooterSection />
      <SplashCursor />
    </>
  );
}
