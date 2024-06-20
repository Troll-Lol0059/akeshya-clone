"use client"
import HeroSection from './components/homepage/HeroSection';
import ClientSection from './components/homepage/ClientSection';
import AboutUsSection from './components/homepage/AboutUsSection';
import ServicesStatsSection from './components/homepage/ServiceStatsSection';
import ProcessSection from './components/homepage/ProcessSection';
import ServicesSection from './components/homepage/ServicesSection';
import FeaturesSection from './components/homepage/FeaturesSection';
import ContactUsSection from './components/homepage/ContactUsSection';
import ScrollToTopButton from './components/common/scrollToTopButton';
import ThankYourForContacting from './components/homepage/ThankYouForContacting';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';


export default function Home() {

  const { formData } = useSelector((state) => state.formData);
  const showThankYou = formData !== null;

  useEffect(() => {
    if (showThankYou) {
      document.title = 'Thank You - Akeshya';
    } else {
      document.title = 'Akeshya';
    }
  }, [showThankYou]);

  return (
    <div className='w-full'>
      <div id='/#heroSection' className='lg:w-[95%] xl:w-[85%] mx-auto'>
        <HeroSection />
      </div>

      <div className='lg:w-full xl:w-full bg-[#F3F9FD]'>
        <ClientSection />
      </div>

      <div id='aboutUs' className='lg:w-[95%] xl:w-[85%] md:w-[90%] w-[80%] mx-auto bg-white' >
        <AboutUsSection />
      </div>

      <div id='services' className='lg:w-[85%] xl:w-[85%] mx-auto bg-white'>
        <ServicesStatsSection />
      </div>

      <div id='services' className='lg:w-[90%] xl:w-[85%] mx-auto bg-white'>
        <ServicesSection />
      </div>

      <div className='lg:w-[95%] xl:w-[90%] mx-auto bg-white'>
        <ProcessSection />
      </div>

      <div className='lg:w-[85%] xl:w-[85%] mx-auto bg-white'>
        <FeaturesSection />
      </div>

      <div className='lg:w-[85%] mx-auto bg-white'>
        <ContactUsSection />
      </div>

      <ScrollToTopButton />

      {
        formData && (
          <ThankYourForContacting />
        )
      }

    </div>
  );
}
