import React from "react";
import ContactForm from "./contact-form";
import WorldMap from "./world-map";

const ContactSection = ({ title }: { title?: string }) => {
  return (
    <div className="container flex flex-col gap-12 lg:flex-row">
      <div className="relative flex w-full flex-col items-start justify-start gap-8 lg:w-1/2">
        <div className="flex items-center justify-center overflow-hidden rounded-[5px] bg-gray-50 border  border-gray-200 p-5">
          <svg
            xmlnsXlink="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
        
        <h3 className="section-heading !text-left">{title ? title : "Contact us"}</h3>
        <p className="font-manrope text-lg text-black">
          We are always looking for ways to improve products and services.{" "}
          <br className="hidden lg:block" />
          Contact us and let us know how we can help you!
        </p>
        <div className="hidden flex-col items-center gap-4 md:flex-row lg:flex">
          <p className="text-sm text-neutral-500">contact@manufacs.com</p>
          <div className="h-1 w-1 rounded-full bg-neutral-500"></div>
          <p className="text-sm text-neutral-500">+92 3045889458</p>
          <div className="h-1 w-1 rounded-full bg-neutral-500"></div>
          <p className="text-sm text-neutral-500">support@manufacs.com</p>
        </div>

        <WorldMap />
      </div>

      <div className="w-full lg:w-1/2">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
