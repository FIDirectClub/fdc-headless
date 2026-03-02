import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bangers } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const bangers = Bangers({
  variable: "--font-bangers",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Firearms Direct Club — Wholesale Firearms at Dealer Prices",
  description: "The ultimate wholesale firearms marketplace. Buy firearms at dealer cost. FFL-compliant, ATF-approved.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${bangers.variable} font-barlow antialiased bg-gradient-to-br from-black via-dark to-[#bdb8af] text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
