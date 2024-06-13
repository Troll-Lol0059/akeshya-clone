import HeroSection from './components/homepage/HeroSection';
import ClientSection from './components/homepage/ClientSection';
import AboutUs from './components/homepage/AboutUs';
import ServiceStats from '../app/components/homepage/ServiceStats'


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
          <AboutUs />
      </div>

      <div className='lg:w-[85%] mx-auto bg-white'>
        <ServiceStats />
      </div>
      
      
      <div className='h-[2000px] min-h-[1500px]'>

      </div>
    </div>
  );
}
