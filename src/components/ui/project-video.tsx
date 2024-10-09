import Image from "next/image";
import React from "react";
import HeroImage from "@/../public/hero-light.png";

const ProjectVideo = () => {
  return <Image src={HeroImage} alt="Hero Image" className="max-w-[82rem] rounded-lg" />;
};

export default ProjectVideo;
