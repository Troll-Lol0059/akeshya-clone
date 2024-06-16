import React from 'react';
import AboutUsSection from '../components/homepage/AboutUsSection';
import ServiceStatsSection from '../components/homepage/ServiceStatsSection';


const AboutUsPage = () => {
  return (
    <div className='xl:w-[85%] lg:w-[95%] w-[85%] mx-auto py-2 xl:py-0 lg:py-0'>
        <AboutUsSection />
        <ServiceStatsSection />
    </div>
  );
};

export default AboutUsPage;