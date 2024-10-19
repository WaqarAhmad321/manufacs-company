import Image from "next/image";
import React from "react";
import WhyUsImage from "@/../public/whyus-reason.png";
import Description from "./ui/description";

const reasons = [
  {
    id: 1,
    title: "Affordable Solutions",
    description:
      "Our flexible pricing models are designed to suit a range of budgets. We deliver high-quality web, app, and UI/UX solutions at competitive prices, ensuring you get the best value for your investment.",
    image: WhyUsImage,
  },
  {
    id: 2,
    title: "Speed and Efficiency",
    description:
      "We understand that time is of the essence. Our agile development process ensures quick turnaround times without compromising on quality, allowing you to launch your projects faster and stay ahead of the competition.",
    image: WhyUsImage,
  },
  {
    id: 3,
    title: "Guaranteed satisfaction",
    description:
      "We stand behind our work with a promise of guaranteed satisfaction. Our dedicated team collaborates closely with you throughout the development process to ensure that your vision is realized. If you're not completely happy with the end product, we'll make it right—because your satisfaction is our top priority.",
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
