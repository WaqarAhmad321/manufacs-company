import React from "react";
import { Marquee } from "./ui/marquee";
import PlaceholderImage from "@/../public/placeholder.jpg";
import Image, { StaticImageData } from "next/image";
const testimonials = [
  {
    name: "Annie Lawrence",
    company: "Influmonitor",
    review:
      "Manufacs has been a great partner in our digital journey. They have helped us in creating a great online presence and we are happy with the results.",
    photo: PlaceholderImage,
  },
  {
    name: "Bradley Taylor",
    company: "Cambitas",
    review:
      "Manufacs has been a great partner in our digital journey. They have helped us in creating a great online presence and we are happy with the results.",
    photo: PlaceholderImage,
  },
  {
    name: "Virgie Todd",
    company: "Kiwami",
    review:
      "Manufacs has been a great partner in our digital journey. They have helped us in creating a great online presence and we are happy with the results.",
    photo: PlaceholderImage,
  },
  {
    name: "Cameron Clarke",
    company: "Market Genius",
    review:
      "Manufacs has been a great partner in our digital journey. They have helped us in creating a great online presence and we are happy with the results.",
    photo: PlaceholderImage,
  },
  {
    name: "Kyle Hawkins",
    company: "Nil Donor",
    review:
      "Manufacs has been a great partner in our digital journey. They have helped us in creating a great online presence and we are happy with the results.",
    photo: PlaceholderImage,
  },
  {
    name: "Millie Pierce",
    company: "Strike Finance",
    review:
      "Manufacs has been a great partner in our digital journey. They have helped us in creating a great online presence and we are happy with the results.",
    photo: PlaceholderImage,
  },
  {
    name: "Michael Garrett",
    company: "Honey Comb",
    review:
      "Manufacs has been a great partner in our digital journey. They have helped us in creating a great online presence and we are happy with the results.",
    photo: PlaceholderImage,
  },
  {
    name: "Calvin Todd",
    company: "Eden Life",
    review:
      "Manufacs has been a great partner in our digital journey. They have helped us in creating a great online presence and we are happy with the results.",
    photo: PlaceholderImage,
  },
];

interface TestimonialProps {
  testimonial: {
    name: string;
    company: string;
    review: string;
    photo: StaticImageData;
  };
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }, index) => {
  return (
    <div className="h-[200px w-[450px] space-y-4 rounded-2xl border-2 border-[#efeefb] bg-white px-4 py-4 text-heading">
      <p className="font-manrope">{testimonial.review}</p>

      <div className="justie flex gap-4">
        <Image
          src={testimonial.photo}
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
    <div className="bg-white space-y-8 py-24">
      <h3 className="section-heading">
        What our clients say
      </h3>
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
    </div>
  );
};

export default Testimonials;
