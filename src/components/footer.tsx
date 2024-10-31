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
import { cn } from "@/lib/utils";

const quickLinks = [
  {
    name: "Home",
    href: "/home",
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
    name: "+92 3045889458",
    href: "tel:923045889458",
    icon: <RiPhoneFill className="fill-black" />,
  },
  {
    name: "Lahore, Pakistan",
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
            Manufacs delivers top-notch web, app development, and design
            services. Our talented team of developers, and designers is
            dedicated to helping businesses thrive with, user-focused digital
            solutions
          </p>
        </div>

        <FooterLinkGroup title="Quick Links" links={quickLinks} />
        <FooterLinkGroup
          title="Social Links"
          links={socialLinks}
          containerStyles=" hidden space-y-6 lg:block"
        />
        <FooterLinkGroup title="Contact us" links={contacts} />
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

type FooterLinksGroup = {
  title: string;
  links: {
    name: string;
    href: string;
    icon?: React.ReactNode;
  }[];
  containerStyles?: string;
};

const FooterLinkGroup: React.FC<FooterLinksGroup> = ({
  title,
  links,
  containerStyles,
}) => {
  return (
    <div className={cn("z-[999] space-y-6", containerStyles)}>
      <h4 className="font-lexend text-2xl font-bold">{title}</h4>

      <ul className="flex flex-col gap-4">
        {links.map((link, index) => (
          <Link
            href={link.href}
            className="flex gap-2 font-lexend text-lg font-semibold hover:cursor-pointer"
            key={index}
          >
            {link.icon && (
              <div className="h-max rounded-full bg-white p-2">{link.icon}</div>
            )}{" "}
            {link.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
