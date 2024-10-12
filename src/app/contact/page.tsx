import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/ui/hero-section";

const ContactPage = () => {
  return (
    <>
      <HeroSection title="Contact Us" />

      <section className="py-24">
        <ContactSection title="Get in touch" />
      </section>
    </>
  );
};

export default ContactPage;
