"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import CompanyLogo from "@/../public/logo/logo.png";
import CompanyLogo2 from "@/../public/logo/logo-2.png";
import { MotionButton } from "./motion-tags";

const navlinks = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Portfolio",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setIsScrolled(position > 50); // Adjust scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-[100] flex w-full items-center justify-between px-6 py-6 text-white transition-all duration-300",
        {
          "bg-white py-4 text-brand-dark/80 shadow-lg": isScrolled,
          "bg-transparent": !isScrolled,
        },
      )}
    >
      <Link
        href="/"
        className="flex items-center gap-4 font-lexend text-3xl font-bold uppercase"
      >
        {isScrolled ? (
          <Image
            src={CompanyLogo2}
            alt="Manufacs logo"
            width={40}
            height={40}
          />
        ) : (
          <Image src={CompanyLogo} alt="Manufacs logo" width={40} height={40} />
        )}
        Manufacs.
      </Link>

      <ul className="hidden items-center gap-12 lg:flex">
        {navlinks.map(({ name, href }, index) => (
          <Link
            href={href}
            key={index}
            className={`rounded-md px-4 py-2 font-manrope text-base font-bold transition-colors hover:text-brand-light ${
              isScrolled
                ? "text-black hover:bg-gray-200"
                : "text-white hover:bg-white"
            }`}
          >
            {name}
          </Link>
        ))}
      </ul>

      <Link href="/contact">
        <MotionButton
          whileHover={{
            scale: 1.05,
          }}
          className={`rounded-md px-4 py-2 font-manrope text-base font-bold transition-all ${
            isScrolled ? "bg-brand-dark/80 text-white" : "bg-white text-black"
          }`}
        >
          Contact Now!
        </MotionButton>
      </Link>
    </nav>
  );
};

export default Navbar;
