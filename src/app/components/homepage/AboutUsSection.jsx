import React from 'react'
import aboutUsListData from '../../data/aboutUsListData'
import SectionHeadings from '../common/SectionHeadings';
import Button1 from '../common/Button1';


function AboutUsSection() {
    return (
        <section className='flex flex-col items-center justify-center gap-8 my-16'>
            {/* heading Div */}
            <div>
                <SectionHeadings heading={'ABOUT US'} />
            </div>

            {/* content div */}
            <div className='lg:w-full flex lg:flex-row flex-col justify-center text-[1rem] font-openSans text-black4 leading-[1.5] font-[500] tracking-normal lg:gap-2 gap-8'>
                {/* left section */}
                <div className='lg:w-[50%] lg:px-3 lg:space-y-0 space-y-4'>
                    <p>
                        We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.
                    </p>

                    <ul className='lg:py-4'>
                       {
                         aboutUsListData?.map( (item) => (
                            <li key={item.id} className='flex items-start gap-2 lg:py-1'>
                                <div className='text-blueVoilet text-[20px]'>
                                    <i class="ri-check-double-line"></i>
                                </div>

                                <div className='py-1'>
                                    {
                                        item.data
                                    }
                                </div>
                            </li>
                         ) )
                       }
                    </ul>
                </div>

                {/* right section */}
                <div className='lg:w-[50%] lg:px-3 lg:space-y-0 space-y-6'>
                    <div>
                        We're professional, but we're also friendly, and we'll always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you're interested in SEO, have Web Development ideas, or require a graphic designer who can match your goals.
                    </div>

                    <Button1 text={'Learn More'} customClass={'px-8 py-[6px] lg:my-6 xl:my-6'} />
                </div>

            </div>

        </section>
    )
}

export default AboutUsSection;