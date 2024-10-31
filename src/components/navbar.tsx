"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import CompanyLogo from "@/../public/logo/logo.png";
import CompanyLogo2 from "@/../public/logo/logo-2.png";
import { MotionButton } from "./motion-tags";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navlinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/projects/web-development/Landing%20page" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setIsScrolled(position > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-[9999] flex w-full justify-between px-6 py-6 text-white transition-all duration-300",
        {
          "bg-white py-4 text-brand-dark/80 shadow-lg":
            isScrolled || pathname !== "/",
          "bg-transparent": !isScrolled && pathname === "/",
        },
      )}
    >
      <nav className="mx-auto flex w-full max-w-screen-2xl justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-lexend text-xl font-bold uppercase md:gap-4 md:text-3xl"
        >
          {isScrolled || pathname !== "/" ? (
            <Image
              src={CompanyLogo2}
              alt="Manufacs logo"
              // width={40}
              // height={40}
              className="h-8 w-8 md:h-10 md:w-10"
            />
          ) : (
            <Image
              src={CompanyLogo}
              alt="Manufacs logo"
              // width={40}
              // height={40}
              className="h-8 w-8 md:h-10 md:w-10"
            />
          )}
          Manufacs.
        </Link>

        {/* Mobile Menu */}
        <ul
          className={cn(
            "absolute left-0 top-[70px] w-full overflow-hidden bg-white text-brand-dark transition-all duration-500 ease-in-out lg:hidden",
            {
              "max-h-[500px]": isMenuOpen, // Expands smoothly
              "max-h-0": !isMenuOpen, // Collapses smoothly
            },
          )}
          style={{ height: isMenuOpen ? "100vh" : "0", zIndex: 999 }}
        >
          {navlinks.map(({ name, href }, index) => (
            <li key={index} className="border-b border-gray-300">
              <Link
                href={href}
                className="block px-4 py-6 font-manrope text-lg font-bold transition-colors hover:bg-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-12 lg:flex">
          {navlinks.map(({ name, href }, index) => (
            <Link
              href={href}
              key={index}
              className={cn(
                "rounded-md px-4 py-2 font-manrope text-base font-bold text-white transition-colors hover:bg-gray-200 hover:text-brand-dark",
                {
                  "bg-gray-200 text-brand-dark": pathname === href,
                  "!text-black": isScrolled && pathname === "/",
                  "text-black": pathname !== "/",
                },
              )}
            >
              {name}
            </Link>
          ))}
        </ul>

        <div className="inline-flex items-center gap-2">
          <Link href="/contact">
            <MotionButton
              whileHover={{ scale: 1.05 }}
              className={`hidden rounded-md px-2 py-2 font-manrope text-base font-bold transition-all min-[390px]:block md:px-4 ${
                isScrolled || pathname !== "/"
                  ? "bg-brand-dark/80 text-white"
                  : "bg-white text-black"
              }`}
            >
              Contact Now!
            </MotionButton>
          </Link>

          <div className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-8 w-8 transition-all" />
            ) : (
              <Menu className="h-8 w-8 transition-all" />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
