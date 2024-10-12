import type { Metadata } from "next";
import "./globals.css";
import { lexend, manRope } from "@/lib/fonts";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Manufacs",
  description: "Manufacs",
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
