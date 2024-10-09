"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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
          "bg-white py-4 text-black shadow-lg": isScrolled,
          "bg-transparent": !isScrolled,
        },
      )}
    >
      <Link href="/" className="font-lexend text-3xl font-bold uppercase">
        Manufacs.
      </Link>

      <ul className="hidden items-center gap-12 lg:flex">
        {navlinks.map(({ name, href }, index) => (
          <Link
            href={href}
            key={index}
            className={`font-manrope hover:text-brand-light rounded-md px-4 py-2 text-base font-bold transition-colors ${
              isScrolled ? "text-black hover:bg-gray-200" : "text-white hover:bg-white"
            }`}
          >
            {name}
          </Link>
        ))}
      </ul>

      <Link href="/contact">
        <button
          className={`font-manrope rounded-md px-4 py-2 text-base font-bold transition-all ${
            isScrolled ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          Contact Now!
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
