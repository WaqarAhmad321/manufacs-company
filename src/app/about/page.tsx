import React from "react";

import Image from "next/image";
import Navbar from "@/components/navbar";
import WhoWeAre from "@/../public/image.jpg";
import SpeedImage from "@/../public/speed.jpg";
import Companies from "@/components/companies";
import OurProcess from "@/components/our-process";
import Description from "@/components/ui/description";
import HeroSection from "@/components/ui/hero-section";
import AffordableImage from "@/../public/affordable.jpg";
import SatisfactionImage from "@/../public/satisfaction.jpg";

const reasons = [
  {
    id: 1,
    title: "Affordable Solutions",
    description:
      "Our flexible pricing models are designed to suit a range of budgets. We deliver high-quality web, app, and UI/UX solutions at competitive prices, ensuring you get the best value for your investment.",
    image: AffordableImage,
  },
  {
    id: 2,
    title: "Speed and Efficiency",
    description:
      "We understand that time is of the essence. Our agile development process ensures quick turnaround times without compromising on quality, allowing you to launch your projects faster and stay ahead of the competition.",
    image: SpeedImage,
  },
  {
    id: 3,
    title: "Guaranteed satisfaction",
    description:
      "We stand behind our work with a promise of guaranteed satisfaction. Our dedicated team collaborates closely with you throughout the development process to ensure that your vision is realized. If you're not completely happy with the end product, we'll make it right—because your satisfaction is our top priority.",
    image: SatisfactionImage,
  },
];

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection title="About us" />

      <div className="container overflow-hidden">
        <div className="flex flex-col items-center justify-between gap-4 py-16 md:flex-row">
          <div className="w-full space-y-4 md:w-1/2">
            <h3 className="bg-opacity-50 font-lexend text-4xl font-bold text-heading">
              Who we are?
            </h3>

            <p className="font-manrope text-xl font-normal text-paragraph">
              Manufacs is a team of skilled Developers, Designers, and committed
              to fulfilling the needs of our clients to their satisfaction
              level. We work hard to keep up with innovative solutions. We focus
              on unique designs and robust development from start to finish so
              that you remain focused on your core business.
            </p>
          </div>

          <div className="flex w-full justify-end md:w-1/2">
            <Image src={WhoWeAre} alt="Who we are" width={500} height={500} />
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="bg-opacity-50 text-center font-lexend text-4xl font-bold text-heading md:text-6xl">
            What makes us different
          </h3>

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
      </div>

      <OurProcess />

      <section className="py-24">
        <Companies />
      </section>
    </>
  );
};

export default AboutPage;
