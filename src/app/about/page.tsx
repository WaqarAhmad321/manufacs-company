import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";
import WhyUsImage from "@/../public/whyus-reason.png";
import Companies from "@/components/companies";
import Description from "@/components/ui/description";
import { Spotlight } from "@/components/ui/spotlight-effect";
import Particles from "@/components/ui/particles";
import Footer from "@/components/footer";
import OurProcess from "@/components/our-process";
import HeroSection from "@/components/ui/hero-section";

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

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection title="About us" />

      <div className="container">
        <div className="flex items-center justify-between gap-4 py-16">
          <div className="w-full space-y-4 md:w-1/2">
            <h3 className="bg-opacity-50 font-lexend text-4xl font-bold text-heading">
              Who we are?
            </h3>

            <p className="font-manrope text-xl font-normal text-paragraph">
              Manufacs is a team of skilled Developers, Graphic Designers, and
              Copy Writers committed to fulfilling the needs of our clients to
              their satisfaction level. We work hard to keep up with innovative
              solutions. We focus on unique designs and robust development from
              start to finish so that you remain focused on your core business.
            </p>
          </div>

          <div className="flex w-full justify-end md:w-1/2">
            <Image
              src={WhyUsImage}
              alt="About us"
              width={500}
              height={500}
              className="rounded-lg"
            />
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
