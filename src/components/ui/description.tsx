import Image, { StaticImageData } from "next/image";
import React from "react";

interface DescriptionProps {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  index: number;
}

const Description: React.FC<DescriptionProps> = ({
  id,
  title,
  description,
  image,
  index,
}) => {
  return (
    <div
      key={id}
      className={`flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-0 ${
        index % 2 !== 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="rounded-2xl mix-blend-multiply"
          placeholder="blur"
        />
      </div>

      <div className="ml-4 w-full space-y-4 text-center md:w-1/2 md:text-left">
        <div className="space-y-2">
          <p className="font-lexend text-7xl font-bold text-brand-lightest opacity-50">
            #{id}
          </p>
          <h4 className="font-lexend text-3xl font-medium text-heading md:text-4xl">
            {title}
          </h4>
        </div>

        <p className="font-manrope text-base text-heading md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Description;
