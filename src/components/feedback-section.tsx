import React from "react";
import { Marquee } from "./ui/marquee";
import PlaceholderImage from "@/../public/placeholder.jpg";
import Image, { StaticImageData } from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah L.",
    company: "Influmonitor",
    review:
      "Manufacs really nailed it! The team is super responsive, and my website looks awesome. Totally happy with how everything turned out!",
    photo: "https://avatar.iran.liara.run/public",
  },
  {
    id: 2,
    name: "Mark T.",
    company: "Cambitas",
    review:
      "My new web app is fantastic! It just works so well on every device. Big shoutout to the Manufacs team for this!",
    photo: "https://avatar.iran.liara.run/public",
  },
  {
    id: 3,
    name: "Akira K.",
    company: "Kiwami",
    review:
      "So glad I chose Manufacs! My website runs way better now, and the speed is amazing. I can actually keep people on the site!",
    photo: "https://avatar.iran.liara.run/public",
  },
  {
    id: 4,
    name: "Tom S.",
    company: "Market Genius",
    review:
      "Manufacs has been a great partner in our digital journey. They have helped us in creating a great online presence and we are happy with the results.",
    photo: "https://avatar.iran.liara.run/public",
  },
  {
    id: 5,
    name: "Kyle Hawkins",
    company: "Nil Donor",
    review:
      "I’ve gotta say, working with Manufacs was a breeze. They understood what I wanted, and I just love my landing page. It looks so good!",
    photo: "https://avatar.iran.liara.run/public",
  },
  {
    id: 6,
    name: "Mike F.",
    company: "Strike Finance",
    review:
      "It's has been a great partner in our digital journey. They have helped us in creating a great online presence and we are happy with the results.",
    photo: "https://avatar.iran.liara.run/public",
  },
  {
    id: 7,
    name: "Michael Garrett",
    company: "Honey Comb",
    review:
      "Just wanted to say how impressed I am with Manufacs! They totally got my vision, and it all turned out way better than I imagined.",
    photo: "https://avatar.iran.liara.run/public",
  },
  {
    id: 8,
    name: "Calvin Todd",
    company: "Eden Life",
    review:
      "Manufacs has been awesome for keeping my site in check. They’re quick to help out whenever I need something. Can't recommend them enough!",
    photo: "https://avatar.iran.liara.run/public",
  },
];

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    company: string;
    review: string;
    photo: string;
  };
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }, index) => {
  return (
    <div className="h-[200px w-[450px] space-y-4 rounded-2xl border-2 border-[#efeefb] bg-white px-4 py-4 text-heading">
      <p className="font-manrope">{testimonial.review}</p>

      <div className="justie flex gap-4">
        <Image
          src={`${testimonial.photo}/${testimonial.id}`}
          alt={`${testimonial.name} photo`}
          width={50}
          height={50}
          className="rounded-full"
        />

        <div className="">
          <p className="font-lexend text-lg font-semibold">
            {testimonial.name}
          </p>
          <p className="font-lexend text-sm font-normal">
            {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <>
      <h3 className="section-heading">What our clients say</h3>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} index={index} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {testimonials.slice(4, 8).map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} index={index} />
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Testimonials;
