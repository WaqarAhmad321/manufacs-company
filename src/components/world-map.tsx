import Image from "next/image";
import React from "react";

const WorldMap = () => {
  return (
    <div className="relative lg:flex w-[600px] flex-shrink-0 -translate-x-10 items-center justify-center [perspective:800px] [transform-style:preserve-3d] sm:-translate-x-0 lg:-translate-x-2 hidden">
      <Image
        alt="world map"
        loading="lazy"
        width="500"
        height="500"
        decoding="async"
        data-nimg="1"
        className="[transform:rotateX(45deg)_translateZ(0px)]"
        src="/world.svg"
        style={{ color: "transparent" }}
      />
    </div>
  );
};

export default WorldMap;
