import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";
import HeroSection from "@/components/ui/hero-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import TruestedCompanies from "@/components/ui/truested-companies";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TruestedCompanies />
      <TestimonialsSection />
      <FooterSection />
    </>
  );
}
