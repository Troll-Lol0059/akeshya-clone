import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'; 
import Navbar from "./components/common/Navbar";
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

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
        <script src="https://kit.fontawesome.com/60291d3ff4.js" crossOrigin="anonymous"></script>
      </head>

      <body suppressHydrationWarning={true} className={`${openSans.className} ${raleway.className}`}>
        <div className="lg:w-[95%] xl:w-[90%] w-full mx-auto fixed top-0 right-0 left-0 z-[1000] lg:flex items-center md:px-0 md:py-4 py-6 bg-white shadow-b-sm">
          <Navbar />
        </div>

        <div className="lg:w-full mx-auto navbar-spacing z-[0]">
          {children}
        </div>
        
      </body>
    </html>
  );
}
