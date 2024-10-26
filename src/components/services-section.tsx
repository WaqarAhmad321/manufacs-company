import Image from "next/image";
import React from "react";
import WhyUsImage from "@/../public/whyus-reason.png";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Anybody can build a website. We build websites for scale that are fast, secure, and easy to manage. We use the latest technologies to ensure your website is always up to date.",
    icon: "/services/web-dev.png",
    image: "/services/web-dev-service.png",
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "We use advanced technologies like React Native to build apps that work on both Android and IOS, saving your both time and money.",
    icon: "/services/app-dev.png",
    image: "/services/app-dev-service.png",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "We design beautiful and intuitive user interfaces that are easy to use. We use the latest design trends to ensure your app looks great.",
    image: "/services/ui-service.png",
    icon: "/services/ui.png",
  },
];

const ServicesSection = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="section-heading">Services we offer</h2>

      <div className="container mt-8 flex flex-col justify-center gap-8 md:mt-12 md:flex-row">
        {services.map(({ id, description, icon, title, image }, index) => (
          <div
            key={index}
            className="flex max-w-sm flex-col justify-between space-y-8 rounded-xl border-2 border-white bg-[#f7f6fd] shadow-xl"
          >
            <div className="space-y-4 px-4 pt-8">
              <div className="flex items-center justify-center">
                <Image
                  src={icon}
                  alt={`${title} icon`}
                  width={50}
                  height={50}
                  className="mix-blend-multiply"
                />
              </div>

              <h4 className="text-center font-lexend text-3xl font-bold leading-9 tracking-wide text-heading">
                {title}
              </h4>
              <p className="font-regular text-center font-manrope text-lg leading-7 tracking-wide text-heading">
                {description}
              </p>
            </div>

            <div className="-[100px]">
              <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                className="object- rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>

      <Link
        className="mx-auto flex items-center justify-center rounded-full px-4 py-1.5 text-center font-lexend border border-brand-dark mt-16 text-2xl font-semibold text-brand-dark"
        href="/services"
      >
        View All Services
      </Link>
    </div>
  );
};

export default ServicesSection;
