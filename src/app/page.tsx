import HeroSection from './components/homepage/HeroSection';
import ClientSection from './components/homepage/ClientSection';
import AboutUsSection from './components/homepage/AboutUsSection';
import ServicesStatsSection from './components/homepage/ServiceStatsSection';
import ProcessSection from './components/homepage/ProcessSection';
import ServicesSection from './components/homepage/ServicesSection';
import FeaturesSection from './components/homepage/FeaturesSection';
import ContactUsSection from './components/homepage/ContactUsSection'

export default function Home() {
  return (
    <div className='lg:w-full'>
      <div className='lg:w-[85%] mx-auto'>
        <HeroSection />
      </div>

      <div className='lg:w-full bg-[#F3F9FD]'>
        <ClientSection />
      </div>

      <div className='lg:w-[85%] mx-auto bg-white' >
          <AboutUsSection />
      </div>

      <div className='lg:w-[85%] mx-auto bg-white'>
        <ServicesStatsSection />
      </div>

      <div id='services' className='lg:w-[85%] mx-auto bg-white'>
        <ServicesSection />
      </div>

      <div className='lg:w-[85%] mx-auto bg-white'>
        <ProcessSection />
      </div>

      <div className='lg:w-[85%] mx-auto bg-white'>
        <FeaturesSection />
      </div>

      <div className='lg:w-[85%] mx-auto bg-white'>
        <ContactUsSection />
      </div>
      
      
    </div>
  );
}
