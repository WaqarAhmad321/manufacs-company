import Image from "next/image";
import React from "react";
import WhyUsImage from "@/../public/whyus-reason.png";

const reasons = [
  {
    id: 1,
    title: "Affordable solutions",
    description:
      "With Visily, you have all the tools you need to immediately create hi-fidelity wireframes and prototypes—without needing to fuss with plugins, libraries, or design systems.",
    image: WhyUsImage,
  },
  {
    id: 2,
    title: "Expert team",
    description:
      "Our team consists of industry experts with years of experience delivering quality solutions to our clients. We are here to help you achieve your goals.",
    image: WhyUsImage,
  },
  {
    id: 3,
    title: "Guaranteed satisfaction",
    description:
      "Our team consists of industry experts with years of experience delivering quality solutions to provide you with the best experience.",
    image: WhyUsImage,
  },
];

const WhyUsSection = () => {
  return (
    <section className="bg-[#f7f6fd] py-12 md:py-24">
      <div className="flex flex-col items-center">
        <h2 className="section-heading">
          Why choose us?
        </h2>

        <div className="container mt-8 md:mt-12 space-y-12">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              className={`flex flex-col gap-4 md:gap-0 items-center justify-between md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  width={500}
                  height={500}
                />
              </div>

              <div className="ml-4 text-center md:text-left w-full space-y-4 md:w-1/2">
                <div className="space-y-2">
                  <p className="text-brand-lightest font-lexend text-7xl font-bold opacity-50">
                    #{reason.id}
                  </p>
                  <h4 className="text-heading font-lexend text-4xl font-medium">
                    {reason.title}
                  </h4>
                </div>

                <p className="font-manrope text-heading text-lg">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <hr className="bg-black text-black"/>
      </div>
    </section>
  );
};

export default WhyUsSection;
