"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import CompanyLogo from "@/../public/logo/logo.png";
import CompanyLogo2 from "@/../public/logo/logo-2.png";
import { MotionButton } from "./motion-tags";
import { usePathname } from "next/navigation";

const navlinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Portfolio",
    href: "/projects/web-development/Landing%20page",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
        "duration-30 fixed top-0 z-[9999] flex w-full items-center justify-between px-6 py-6 text-white transition-all",
        {
          "bg-white py-4 text-brand-dark/80 shadow-lg":
            isScrolled || pathname !== "/",
          "bg-transparent": !isScrolled && pathname === "/",
        },
      )}
    >
      <Link
        href="/"
        className="flex items-center gap-4 font-lexend text-2xl font-bold uppercase md:text-3xl"
      >
        {isScrolled || pathname !== "/" ? (
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
            className={cn(
              "$ rounded-md px-4 py-2 font-manrope text-base font-bold text-white transition-colors hover:text-brand-light",
              {
                "text-black hover:bg-white": isScrolled || pathname !== href,
                "text-white hover:bg-white": !isScrolled && pathname === "/",
                "bg-gray-200 text-brand-dark": pathname === href,
              },
            )}
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
          className={`rounded-md px-2 py-2 font-manrope text-base font-bold transition-all md:px-4 ${
            isScrolled || pathname !== "/"
              ? "bg-brand-dark/80 text-white"
              : "bg-white text-black"
          }`}
        >
          Contact Now!
        </MotionButton>
      </Link>
    </nav>
  );
};

export default Navbar;
