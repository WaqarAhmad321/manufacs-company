import HeroSection from "@/components/ui/hero-section";
import Image from "next/image";
import React from "react";
import WhyUsImage from "@/../public/whyus-reason.png";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build websites that are fast, secure, and easy to manage. We use the latest technologies to ensure your website is always up to date.",
    image: "/web-dev.png",
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "We build mobile apps that are fast, secure, and easy to manage. We use the latest technologies to ensure your app is always up to date.",
    image: "/app-dev.png",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "We design beautiful and intuitive user interfaces that are easy to use. We use the latest design trends to ensure your app looks great.",
    image: "/ui.png",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "We design beautiful and intuitive user interfaces that are easy to use. We use the latest design trends to ensure your app looks great.",
    image: "/ui.png",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "We design beautiful and intuitive user interfaces that are easy to use. We use the latest design trends to ensure your app looks great.",
    image: "/ui.png",
  },
];

const ServicesPage = () => {
  return (
    <>
      <HeroSection title="Services we offer" />

      <div className="container py-16 flex flex-col flex-wrap justify-center gap-8 md:flex-row">
        {services.map(({ id, description, image, title }, index) => (
          <div
            key={index}
            className="max-w-sm space-y-8 rounded-xl border-2 border-white bg-[#f7f6fd] shadow-xl"
          >
            <div className="space-y-4 px-4 pt-8">
              <Image
                src={image}
                alt={title}
                width={50}
                height={50}
                className="mix-blend-multiply"
              />
              <h4 className="font-lexend text-3xl font-bold leading-9 tracking-wide text-heading">
                {title}
              </h4>
              <p className="font-regular font-manrope text-lg leading-7 tracking-wide text-heading">
                {description}
              </p>
            </div>

            <Image
              src={WhyUsImage}
              alt={title}
              width={500}
              height={500}
              className="rounded-t-x"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesPage;
