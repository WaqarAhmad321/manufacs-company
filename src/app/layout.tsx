import type { Metadata } from "next";
import "./globals.css";
import { lexend, manRope } from "@/lib/fonts";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Manufacs",
  description:
    "At Manufacs, we deliver efficient digital solutions that ensure a great user experience, drive business growth, and provide ongoing support for your success.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo/logo-2.png",
        href: "/logo/logo-2.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo/logo.png",
        href: "/logo/logo.png",
      },
    ],
  },
  creator: "Manufacs",
  authors: [{ name: "Manufacs", url: "https://manufacs.com" }],
  keywords: [
    "software engineers",
    "software developers",
    "software company",
    "business software",
    "Web development",
    "application development",
    "software development",
    "software house",
  ],
  metadataBase: new URL("https://manufacs.com"),
  openGraph: {
    type: "website",
    locale: "en_US.utf-8",
    title: "Manufacs",
    description:
      "At Manufacs, we deliver efficient digital solutions that ensure a great user experience, drive business growth, and provide ongoing support for your success.",
    url: "https://manufacs.com",
    siteName: "Manufacs",
    images: "https://www.manufacs.com/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Manufacs",
    title: "https://manufacs.com",
    description:
      "At Manufacs, we deliver efficient digital solutions that ensure a great user experience, drive business growth, and provide ongoing support for your success.",
    images: "https://www.manufacs.com/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white antialiased ${lexend.variable} ${manRope.variable}`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
