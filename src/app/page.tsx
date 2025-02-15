import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";
import HeroSection from "@/components/ui/hero-section";
import TestimonialsSection from "@/components/ui/testimonials-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
      <FooterSection />
    </>
  );
}
