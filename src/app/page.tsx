import Companies from "@/components/companies";
import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ProjectVideo from "@/components/ui/project-video";
import { Spotlight } from "@/components/ui/spotlight-effect";
import WhyUsSection from "@/components/whyus-section";

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
      <ContactSection />
    </>
  );
}
