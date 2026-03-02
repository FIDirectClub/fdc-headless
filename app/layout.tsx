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
  description: "Buy firearms, optics, and accessories at true dealer cost. FFL-compliant wholesale marketplace with 37,000+ products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${bangers.variable} font-barlow antialiased bg-zinc-950 text-zinc-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
