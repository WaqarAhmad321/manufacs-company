import Companies from "@/components/companies";
import HeroSection from "@/components/home-hero";
import WhyUsSection from "@/components/whyus-section";
import Testimonials from "@/components/feedback-section";
import ContactSection from "@/components/contact-section";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="pt-12 md:pb-24 md:pt-60">
        <Companies />
      </section>

      <section className="pb-24 md:pb-36">
        <ServicesSection />
      </section>

      <section className="bg-light-pink py-12 md:py-24">
        <WhyUsSection />
      </section>

      <section className="space-y-8 bg-white pt-24">
        <Testimonials />
      </section>

      <section className="py-24">
        <ContactSection title="Get in Touch" />
      </section>
    </>
  );
}
