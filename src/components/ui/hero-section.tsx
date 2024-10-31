import React from "react";
import { Spotlight } from "./spotlight-effect";
import Particles from "./particles";

const HeroSection = ({ title }: { title: string }) => {
  return (
    <div className="relative mt-12 flex h-[14rem] w-full items-center justify-center bg-brand-dark px-4 bg-grid-white/[0.2] lg:h-[20rem]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-brand-dark [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <h3 className="bg-opacity-50 text-center font-lexend text-4xl font-bold text-white md:text-6xl lg:text-8xl">
        {title}
      </h3>

      <Spotlight className="-top-40 left-0 overflow-x-hidden md:-top-20 md:left-60" />
      <Particles
        className="absolute inset-0 overflow-hidden"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
    </div>
  );
};

export default HeroSection;
