"use client";

import Image from "next/image";
import React, { useState } from "react";
import WhyUsImage from "@/../public/whyus-reason.png";

const OurProcess = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 1,
      title: "Design",
      image: WhyUsImage,
      icon: "/ui.png",
    },
    {
      id: 2,
      title: "Development",
      image: WhyUsImage,
      icon: "/web-dev.png",
    },
    {
      id: 3,
      title: "Deployment",
      image: WhyUsImage,
      icon: "/app-dev.png",
    },
  ];

  return (
    <div className="bg-light-pink mt-24">
      <div className="container space-y-16 py-12 md:py-24">
        <h3 className="text-center font-lexend sm:text-4xl font-bold text-heading text-3xl md:text-6xl">
          Our unified workflow, <br /> from design to deployment
        </h3>

        <div className="space-y-6 rounded-xl bg-white px-4 pt-8">
          <div className="relative mx-auto max-w-2xl border-b-2 border-gray-300">
            <div className="grid grid-cols-3">
              {tabs.map(({ id, image, title, icon }, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 gap-2 place-items-center grid place-content-center font-manrope text-base md:text-xl font-medium ${
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
            className="!w-full h-[500px] object-contain"
            // height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
