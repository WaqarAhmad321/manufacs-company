import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/ui/hero-section";
import { IconType } from "react-icons";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const ContactCard = ({
  Icon,
  title,
  detail,
}: {
  title: string;
  detail: string;
  Icon: IconType;
}) => (
  <div className="grid place-items-center gap-3 rounded-lg border bg-white py-8 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
    <div className="grid place-items-center gap-2">
      <Icon className="text-4xl text-brand-dark" />
      <h2 className="font-lexend text-2xl font-bold">{title}</h2>
    </div>
    <p className="font-manrope tracking-widest text-gray-600">{detail}</p>
  </div>
);

const ContactPage = () => {
  return (
    <>
      <HeroSection title="Contact Us" />
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 py-10">
        <ContactCard
          Icon={MdLocationOn}
          title="Our Address"
          detail="123 Street, City, Country"
        />

        <ContactCard Icon={MdPhone} title="Call Us" detail="+92 3045889458" />
        <ContactCard
          Icon={MdEmail}
          title="Email Us"
          detail="contact@manufacs.com"
        />
      </div>

      <section className="pb-24">
        <ContactSection title="Get in touch" />
      </section>
    </>
  );
};

export default ContactPage;
