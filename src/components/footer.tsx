import Image from "next/image";
import React from "react";
import CompanyLogo from "@/../public/logo/logo.png";
import Link from "next/link";
import {
  RiMailLine,
  RiPhoneFill,
  RiFileWordLine,
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";
import Particles from "./ui/particles";
import { Spotlight } from "./ui/spotlight-effect";

const quickLinks = [
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

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: <RiFacebookFill className="fill-black" />,
  },
  {
    name: "Twitter",
    href: "#",
    icon: <RiTwitterFill className="fill-black" />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: <RiInstagramFill className="fill-black" />,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: <RiLinkedinFill className="fill-black" />,
  },
];

const contacts = [
  {
    name: "contact@manufacs.com",
    href: "mailto:contact@manufacs.com",
    icon: <RiMailLine className="fill-black" />,
  },
  {
    name: "+1 234 567 890",
    href: "tel:+1234567890",
    icon: <RiPhoneFill className="fill-black" />,
  },
  {
    name: "1234 North Avenue, New York",
    href: "#",
    icon: <RiFileWordLine className="fill-black" />,
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-brand-dark text-white">
      <div className="container flex flex-col justify-between gap-12 py-12 lg:flex-row">
        <div className="z-[999] w-full space-y-6 lg:w-[30%]">
          <Link
            href="/"
            className="flex items-center gap-4 font-lexend text-3xl font-bold uppercase"
          >
            <Image
              src={CompanyLogo}
              alt="Manufacs logo"
              width={40}
              height={40}
            />
            Manufacs.
          </Link>

          <p className="font-manrope text-lg">
            Manufacs has been a great partner in our digital journey. They have
            helped us in creating a great online presence and we are happy with
            the results.
          </p>
        </div>

        <div className="z-[999] space-y-6">
          <h4 className="font-lexend text-2xl font-bold">Quick Links</h4>
          <ul className="flex flex-col gap-4">
            {quickLinks.map((link, index) => (
              <Link
                href={link.href}
                className="font-lexend text-lg font-semibold"
                key={index}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>

        <div className="z-[999] hidden space-y-6 lg:block">
          <h4 className="font-lexend text-2xl font-bold">Social Links</h4>
          <ul className="flex flex-col gap-4">
            {socialLinks.map((link, index) => (
              <Link
                href={link.href}
                className="flex gap-2 font-lexend text-lg font-semibold"
                key={index}
              >
                <div className="rounded-full bg-white p-2">{link.icon}</div>{" "}
                {link.name}
              </Link>
            ))}
          </ul>
        </div>

        <div className="z-[999] space-y-6">
          <h4 className="font-lexend text-2xl font-bold">Contact us</h4>

          <ul className="flex flex-col gap-4">
            {contacts.map((link, index) => (
              <Link
                href={link.href}
                className="flex gap-2 font-lexend text-lg font-semibold hover:cursor-pointer"
                key={index}
              >
                <div className="rounded-full bg-white p-2">{link.icon}</div>{" "}
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <Particles
        className="absolute inset-0 overflow-hidden"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
      <Spotlight className="md:left-30 -top-40 left-0 overflow-x-hidden md:-top-20" />
    </footer>
  );
};

export default Footer;
