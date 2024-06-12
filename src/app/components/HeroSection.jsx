import React from 'react'
import Image from 'next/image'
import heroSectionImage from '../../../public/images/hero-img.png'


function HeroSection() {
  return (
    <section className='flex lg:flex-row flex-col-reverse justify-center items-center gap-2'>
        {/* content DIV */}
        <div className=''>
            <h2>
                Grow your business with Akeshya
            </h2>
            <h3>
                We are team of talented website designers, developers & digital marketeers
            </h3>
            <button>
                Get Started
            </button>
        </div>

        {/* image div */}
        <div className='flex justify-center items-center'>
            <Image src={heroSectionImage}
                className="lg:w-full w-1/2 md:w-7/10"
                alt='Hero Section Image'
            />
        </div>
    </section>
  )
}

export default HeroSection