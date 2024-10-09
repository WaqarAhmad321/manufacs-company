import Image, { StaticImageData } from "next/image";
import React from "react";
import CambitasLogo from "@/../public/logo/cambitas.png";
import InflumonitorLogo from "@/../public/logo/nav-logo.svg";
import Kiwami from "@/../public/logo/kiwami.png";
import MarketGenius from "@/../public/logo/market-genius.webp";
import EdenLife from "@/../public/logo/edenlife.png";
import NilDonor from "@/../public/logo/nil-donor.webp";
import StrikeFinance from "@/../public/logo/strike-finance.webp";
import HoneyComb from "@/../public/logo/honeycomb.webp";
import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";

const companyImages = [
  {
    src: InflumonitorLogo,
    alt: "Influmonitor",
    width: 250,
    height: 250,
  },
  {
    src: CambitasLogo,
    alt: "Cambitas",
    width: 250,
    height: 250,
  },
  {
    src: Kiwami,
    alt: "Kiwami",
    width: 270,
    height: 270,
  },
  {
    src: MarketGenius,
    alt: "Market Genius",
    width: 250,
    height: 250,
  },
  {
    src: NilDonor,
    alt: "Nil Donor",
    width: 250,
    height: 250,
  },
  {
    src: StrikeFinance,
    alt: "Strike Finance",
    width: 330,
    height: 330,
  },
  {
    src: HoneyComb,
    alt: "Honey Comb",
    width: 250,
    height: 250,
  },
  {
    src: EdenLife,
    alt: "Eden Life",
    width: 190,
    height: 190,
  },
];

interface CompanyProps {
  company: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
  index: number;
}

const Company: React.FC<CompanyProps> = ({ company }, index) => {
  return (
    <Image
      key={index}
      src={company.src}
      alt={company.alt}
      width={company.width}
      height={company.height}
      className={cn("object-contain grayscale filter", {
        "invert": company.alt === "Kiwami" || company.alt === "Strike Finance",
      })}
      style={{
        aspectRatio: "3/2",
      }}
    />
  );
};

const Companies = () => {
  return (
    <div className="relative flex h-[200px] md:h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-white pt-12 md:pt-60">
      <Marquee className="[--duration:20s]">
        {companyImages.slice(0, 4).map((company, index) => (
          <Company key={index} company={company} index={index} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {companyImages.slice(4, 8).map((company, index) => (
          <Company key={index} company={company} index={index} />
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
