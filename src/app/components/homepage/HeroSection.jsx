import React from 'react'
import Image from 'next/image'
import heroSectionImage from '../../../../public/images/hero-img.png';
import Button1 from '../common/Button1';


function HeroSection() {
  return (
    <section className='lg:w-full flex lg:flex-row flex-col-reverse justify-center lg:gap-0 gap-6 lg:py-4'>
        {/* content DIV */}
        <div className='lg:w-[50%] font-raleway lg:px-3 px-16 md:px-10 lg:my-7 xl:mb-0 xl:mt-8 lg:block flex flex-col items-start md:mb-40'>
            <h2 className='lg:text-[48px] text-[28px] text-blueVoilet font-bold lg:leading-[3.5rem]'>
                Grow your business with Akeshya
            </h2>

            <h3 className='lg:text-[24px] opacity-[0.9] text-[18px] text-black4 lg:w-[90%] tracking-none lg:py-[9px] py-[6px] font-[500] lg:leading-[1.2]'>
                We are team of talented website designers, developers & digital marketeers
            </h3>

            <Button1 text={'Get Started'} customClass={'px-8 py-[10px] my-6 lg:my-11'} />
        </div>

        {/* image div */}
        <div className='lg:w-[50%] flex lg:justify-start justify-center lg:overflow-y-hidden my-[22px] lg:px-16 lg:my-0 xl:my-0 md:mt-36 md:mb-4'>
            <Image src={heroSectionImage}
                className="imageAnimation lg:w-[420px] w-[57%] md:w-[70%] lg:h-[300px]"
                alt='Hero Section Image'
            />
        </div>
    </section>
  )
}

export default HeroSection