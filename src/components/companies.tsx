import Image from "next/image";
import React from "react";
import CambitasLogo from "@/../public/logo/cambitas.png";
import InflumonitorLogo from "@/../public/logo/nav-logo.svg";
import Kiwami from "@/../public/logo/kiwami.png";
import MarketGenius from "@/../public/logo/market-genius.webp";
import SmashCode from "@/../public/logo/smashcode-logo.webp";
import NilDonor from "@/../public/logo/nil-donor.webp";
import StrikeFinance from "@/../public/logo/strike-finance.webp";
import HoneyComb from "@/../public/logo/honeycomb.webp";
import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";

const companyImages = [
  {
    src: InflumonitorLogo,
    alt: "Influmonitor",
    width: 350,
    height: 350,
  },
  {
    src: CambitasLogo,
    alt: "Cambitas",
    width: 350,
    height: 350,
  },
  {
    src: Kiwami,
    alt: "Kiwami",
    width: 300,
    height: 300,
  },
  {
    src: MarketGenius,
    alt: "Market Genius",
    width: 350,
    height: 350,
  },
  {
    src: SmashCode,
    alt: "Smash Code",
    width: 300,
    height: 300,
  },
  {
    src: NilDonor,
    alt: "Nil Donor",
    width: 330,
    height: 330,
  },
  {
    src: StrikeFinance,
    alt: "Strike Finance",
    width: 370,
    height: 370,
  },
  {
    src: HoneyComb,
    alt: "Honey Comb",
    width: 350,
    height: 350,
  },
];

// const Companies = () => {
//   return (
//     <div className="bg-white pt-60">
//       <div className="flex flex-wrap items-center justify-center gap-4">
//         {companyImages.map((company, index) => (
//           <Image
//             key={index}
//             src={company.src}
//             alt={company.alt}
//             className={cn("h-[15%] w-[13%] object-contain grayscale filter", {
//               invert:
//                 company.alt === "Kiwami" || company.alt === "Strike Finance",
//             })}
//             style={{
//               aspectRatio: "3/2",
//               //   objectFit: "contain",
//               // filter: "grayscale(100%)",
//               //   mixBlendMode: "lighten",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
function Companies() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-white pt-60">
      <Marquee className="[--duration:20s]">
        {companyImages.slice(0, 4).map((company, index) => (
          <Image
            key={index}
            src={company.src}
            alt={company.alt}
            width={company.width}
            height={company.height}
            className={cn("object-contain grayscale filter", {
              invert:
                company.alt === "Kiwami" || company.alt === "Strike Finance",
            })}
            style={{
              aspectRatio: "3/2",
            }}
          />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {companyImages.slice(4, 8).map((company, index) => (
          <Image
            key={index}
            src={company.src}
            alt={company.alt}
            width={company.width}
            height={company.height}
            className={cn("object-contain grayscale filter", {
              invert:
                company.alt === "Kiwami" || company.alt === "Strike Finance",
            })}
            style={{
              aspectRatio: "3/2",
            }}
          />
        ))}
      </Marquee>
    </div>
  );
}

export default Companies;
