"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import WhyUsImage from "@/../public/whyus-reason.png";
import DesigningImage from "@/../public/designing-image.png";
import DeploymentImage from "@/../public/deployment-image.png";

const OurProcess = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 1,
      title: "Design",
      image: DesigningImage,
      icon: "/services/ui.png",
    },
    {
      id: 2,
      title: "Development",
      image: WhyUsImage,
      icon: "/services/web-dev.png",
    },
    {
      id: 3,
      title: "Deployment",
      image: DeploymentImage,
      icon: "/services/app-dev.png",
    },
  ];
  
  // setInterval(() => {
  //   setActiveTab((activeTab + 1) % tabs.length);
  // }, 1500);
  // useEffect(() => {

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="mt-24 bg-light-pink">
      <div className="container space-y-16 py-12 md:py-24">
        <h3 className="text-center font-lexend text-3xl font-bold text-heading sm:text-4xl md:text-6xl">
          Our unified workflow, <br /> from design to deployment
        </h3>

        <div className="space-y-6 rounded-xl bg-white px-4 pt-8">
          <div className="relative mx-auto max-w-2xl border-b-2 border-gray-300">
            <div className="grid grid-cols-3">
              {tabs.map(({ id, image, title, icon }, index) => (
                <button
                  key={index}
                  className={`grid place-content-center place-items-center gap-2 px-4 py-2 font-manrope text-base font-medium md:text-xl ${
                    activeTab === index
                      ? "!font-bold text-brand"
                      : "text-gray-500"
                  } transition-colors duration-300`}
                  onClick={() => setActiveTab(index)}
                >
                  <Image
                    src={icon}
                    alt={`${title} icon`}
                    width={50}
                    height={50}
                    className="mix-blend-multiply"
                  />
                  {title}
                </button>
              ))}
            </div>

            {/* Animated underline */}
            <div
              className="absolute bottom-0 h-[2.10px] bg-brand transition-all duration-300 ease-in-out"
              style={{
                width: `${100 / tabs.length}%`,
                left: `${(100 / tabs.length) * activeTab}%`,
              }}
            />
          </div>

          <Image
            src={tabs[activeTab].image}
            alt={tabs[activeTab].title}
            className="h-[500px] !w-full object-contain"
            // height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
