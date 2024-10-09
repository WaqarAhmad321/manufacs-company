"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

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
  return (
    <nav className="absolute top-0 z-[100] flex w-full items-center justify-between px-6 py-6 text-white">
      <Link href="/" className="font-lexend text-3xl font-bold uppercase">
        Manufacs.
      </Link>

      <ul className="hidden items-center gap-12 lg:flex">
        {navlinks.map(({ name, href }, index) => (
          <Link
            href={href}
            key={index}
            className="font-manrope hover:text-brand-light rounded-md px-4 py-2 text-base font-bold transition-colors hover:bg-white"
          >
            {name}
          </Link>
        ))}
      </ul>

      <Link href="/contact">
        <button className="font-manrope text-brand rounded-md bg-white px-4 py-2 text-base font-bold">
          Contact Now!
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
