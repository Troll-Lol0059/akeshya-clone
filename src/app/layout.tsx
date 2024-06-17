// third-party fonts and icons
import type { Metadata } from 'next';
import { Open_Sans, Raleway } from 'next/font/google';
import './globals.css';
import 'remixicon/fonts/remixicon.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

// components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import StoreProvider from './StoreProvider';

const openSans = Open_Sans({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akeshya',
  description: 'Akeshya is a company specializing in web design, development, and digital marketing. They offer a range of services including web design, custom development, SEO, and marketing strategies to help businesses improve their online presence. Their process involves planning, design, development, and marketing to ensure comprehensive support for their clients. Akeshya is located in Nellore, Andhra Pradesh, India.',
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/60291d3ff4.js"
          crossOrigin="anonymous"
          async
        ></script>
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${openSans.className} ${raleway.className}`}
      >
        <div className="w-full mx-auto fixed top-0 right-0 left-0 z-[1000] lg:flex items-center md:px-0 md:py-4 xl:py-0 lg:py-0 bg-white">
          <Navbar />
        </div>

        <StoreProvider>
          <div className="mx-auto navbar-spacing z-[0]">{children}</div>
        </StoreProvider>

        <Footer />
      </body>
    </html>
  );
}
