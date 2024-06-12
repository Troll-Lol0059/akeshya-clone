import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Open_Sans({ subsets: ["latin"] });

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
      <body suppressHydrationWarning={true} className={inter.className}>
        <div className="lg:w-[85%] mx-auto fixed top-0 right-0 left-0 z-1000 lg:flex items-center py-[22px]">
          <Navbar />
        </div>

        <div className="lg:w-[85%] mx-auto navbar-spacing">
          {children}
        </div>
      </body>
    </html>
  );
}
