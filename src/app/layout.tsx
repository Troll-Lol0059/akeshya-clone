import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const openSans = Open_Sans({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akeshya",
  description: "Akeshya is a company specializing in web design, development, and digital marketing. They offer a range of services including web design, custom development, SEO, and marketing strategies to help businesses improve their online presence. Their process involves planning, design, development, and marketing to ensure comprehensive support for their clients. Akeshya is located in Nellore, Andhra Pradesh, India.",
  icons: {
    icon: [
      {
        url: "/icon.ico",
        href: "/icon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>

      <body suppressHydrationWarning={true} className={`${openSans.className} ${raleway.className}`}>
        <div className="lg:w-[88%] mx-auto fixed top-0 right-0 left-0 z-1000 lg:flex items-center py-6 px-6 lg:py-[8px] lg:px-0 md:px-0 md:py-[16px] bg-white shadow-sm">
          <Navbar />
        </div>

        <div className="lg:w-[85%] mx-auto navbar-spacing">
          {children}
        </div>
      </body>
    </html>
  );
}
