import Image from "next/image";
import React from "react";
import WhyUsImage from "@/../public/whyus-reason.png";
import Description from "./ui/description";

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
    <div className="flex flex-col items-center">
      <h2 className="section-heading">Why choose us?</h2>

      <div className="container mt-8 space-y-12 md:mt-12">
        {reasons.map((reason, index) => (
          <Description
            key={reason.id}
            id={reason.id}
            title={reason.title}
            description={reason.description}
            image={reason.image}
            index={index}
          />
        ))}
      </div>

      <hr className="bg-black text-black" />
    </div>
  );
};

export default WhyUsSection;
