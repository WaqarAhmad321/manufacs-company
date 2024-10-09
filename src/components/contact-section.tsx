import React from "react";
import { OrbitingCirclesDemo } from "./contact-links";
import ContactForm from "./contact-form";
import WorldImage from "@/../public/world.svg";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="bg-white py-60">
      <div className="container flex gap-12">
        <div className="w-full lg:w-1/2 flex gap-8 flex-col justify-start items-start">
          <h3 className="font-lexend bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent text-4xl font-bold md:text-6xl lg:text-8xl text-brand-dark">
            Contact us
          </h3>

          <p className="font-manrope text-lg text-black">Contact us and let us know how we can help you.</p>

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
