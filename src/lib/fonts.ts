import { Lexend, Manrope } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "600", "500", "700", "800"],
  display: "swap",
  variable: "--font-lexend",
});

const manRope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "500", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export { lexend, manRope };
