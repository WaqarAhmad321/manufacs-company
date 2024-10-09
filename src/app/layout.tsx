import type { Metadata } from "next";
import "./globals.css";
import { lexend, manRope } from "@/lib/fonts";

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
      <body className={`antialiased bg-white ${lexend.variable} ${manRope.variable}`}>
        {children}
      </body>
    </html>
  );
}
