import React from "react";
import { OrbitingCirclesDemo } from "./contact-links";
import ContactForm from "./contact-form";
import WorldImage from "@/../public/world.svg";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container flex flex-col gap-12 lg:flex-row">
        <div className="flex w-full flex-col items-start justify-start gap-8 lg:w-1/2">
          <h3 className="section-heading">
            Contact us
          </h3>

          <p className="font-manrope text-lg text-black">
            Contact us and let us know how we can help you.
          </p>

          <Image src={WorldImage} className="fill-black" alt="World image" />
          {/* <OrbitingCirclesDemo /> */}
        </div>

        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
