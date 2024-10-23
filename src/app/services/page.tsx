import HeroSection from "@/components/ui/hero-section";
import Image from "next/image";
import React from "react";
import WhyUsImage from "@/../public/whyus-reason.png";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Anybody can build a website. We build websites for scale that are fast, secure, and easy to manage. We use the latest technologies to ensure your website is always up to date.",
    image: "/web-dev.png",
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "We design and develop innovative mobile applications that provide seamless experiences for users. Our team utilizes the latest technologies to create engaging, functional apps that meet your business goals and enhance user interaction.",
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
    id: 4,
    title: "Landing pages",
    description:
      "We create compelling landing pages designed to capture attention and drive conversions. By focusing on clear messaging and attractive design, we ensure your landing pages effectively guide users toward taking the desired action.",
    image: "/ui.png",
  },
  {
    id: 5,
    title: "Website Optimization",
    description:
      "We enhance your website's performance through strategic optimization techniques. By improving loading speeds, enhancing user experience, and implementing best SEO practices, we help your site rank higher in search results and attract more visitors.",
    image: "/ui.png",
  },
  {
    id: 6,
    title: "Custom Web App",
    description:
      "We specialize in developing custom web applications that are modern, flexible, and secure. Our user-friendly solutions are designed to handle high traffic and complex scenarios, ensuring your application meets your specific business needs",
    image: "/ui.png",
  },
  // {
  //   id: 3,
  //   title: "UI/UX Design",
  //   description:
  //     "We design beautiful and intuitive user interfaces that are easy to use. We use the latest design trends to ensure your app looks great.",
  //   image: "/ui.png",
  // },
];

const ServicesPage = () => {
  return (
    <>
      <HeroSection title="Services we offer" />

      <div className="container gap-8 py-16 grid grid-cols-1 md:grid-cols-2">
        {services.map(({ id, description, image, title }, index) => (
          <div
            key={index}
            className="h-ful flex flex-col justify-between space-y-8 rounded-xl border-2 border-white bg-[#f7f6fd] shadow-xl py-4"
          >
            <div className="space-y-4 px-4">
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

            {/* <Image
              src={WhyUsImage}
              alt={title}
              width={500}
              height={500}
              className="rounded-t-x"
            /> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesPage;
