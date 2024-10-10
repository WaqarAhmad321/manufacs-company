import Companies from "@/components/companies";
import ContactSection from "@/components/contact-section";
import Testimonials from "@/components/feedback-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services-section";
import { Spotlight } from "@/components/ui/spotlight-effect";
import WhyUsSection from "@/components/whyus-section";
import footer from "@/components/footer";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <HeroSection />
        <Spotlight className="-top-40 left-0 overflow-x-hidden md:-top-20 md:left-60" />
      </div>

      <Companies />
      <WhyUsSection />
      <ServicesSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  );
}
