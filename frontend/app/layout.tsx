import type { Metadata } from "next";
import { Fredoka, Geist, Geist_Mono, Gloria_Hallelujah } from "next/font/google";
import './globals.css';
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const friendlySans = Fredoka({
  variable: "--font-friendly-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const crayonScript = Gloria_Hallelujah({
  variable: "--font-crayon",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "CodeCompass - Your Guide to Programming Mastery",
  description: "Your comprehensive guide to LeetCode patterns, system design, programming languages, frameworks, DevOps, and AI/ML.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${friendlySans.variable} ${crayonScript.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
