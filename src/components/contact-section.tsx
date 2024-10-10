import React from "react";
import { OrbitingCirclesDemo } from "./contact-links";
import ContactForm from "./contact-form";
import WorldImage from "@/../public/world.svg";
import Image from "next/image";
import { Globe } from "./ui/globe";
import WorldMap from "./world-map";

const ContactSection = () => {
  return (
    <section className="bg-[#f7f6fd py-24">
      <div className="container flex flex-col gap-12 lg:flex-row">
        <div className="relative flex w-full flex-col items-start justify-start gap-8 lg:w-1/2">
          <div className="flex items-center justify-center overflow-hidden rounded-[5px] bg-gray-50 p-5">
            <svg
              xmlnsXlink="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-6 w-6 text-brand"
            >
              <path
                d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                fill="currentColor"
                strokeWidth="0"
              ></path>
              <path
                d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                fill="currentColor"
                strokeWidth="0"
              ></path>
            </svg>
          </div>
          <h3 className="section-heading">Contact us</h3>
          <p className="font-manrope text-lg text-black">
            We are always looking for ways to improve products and services.{" "}
            <br className="hidden lg:block" />
            Contact us and let us know how we can help you!
          </p>
          <div className="hidden flex-col items-center gap-4 md:flex-row lg:flex">
            <p className="text-sm text-neutral-500">contact@yoursaas.ai</p>
            <div className="h-1 w-1 rounded-full bg-neutral-500"></div>
            <p className="text-sm text-neutral-500">+1 (800) 123 XX21</p>
            <div className="h-1 w-1 rounded-full bg-neutral-500"></div>
            <p className="text-sm text-neutral-500">support@yoursaas.ai</p>
          </div>

          <WorldMap />
        </div>

        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
