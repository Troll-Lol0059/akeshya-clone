import React from 'react'
import servicesData from '../../data/servicesData'
import SectionHeadings from '../common/SectionHeadings';


function ServicesSection() {
    return (
        <section className='xl:w-full lg:w-full md:w-[85%] w-[75%] mx-auto flex flex-col gap-8'>
            {/* heading div */}
            <div className=''>
                <SectionHeadings heading={'SERVICES'} subheading={'Akeshya will serve as your consultant and development partner to help you turn your idea into a reality.'} />
            </div>

            <div className='xl:flex lg:flex justify-center grid md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    servicesData?.map((item) => (
                        // outer div (services div class is responsible for hover effect)
                        <div key={item.id} className='services-div services-div group overflow-hidden border relative rounded-lg px-6 py-8 shadow-md'>
                            {/* blob Div */}
                            <div className='shrink-div shrink-div  lg:-top-12 lg:-right-12'></div>

                            {/* inner div */}
                            <div className='flex flex-col gap-4'>
                                {/* for border of icon */}
                                <div className='flex justify-center items-center bg-blueVoilet rounded-full aspect-square h-16 w-16 text-[36px] text-white z-[5] group-hover:bg-white group-hover:text-blueVoilet'>
                                    {/* icon */}
                                    <i class={item.iconName}></i>
                                </div>

                                {/* heading */}
                                <h4 className='text-[18px] text-black1 font-raleway font-semibold z-[5] group-hover:text-white'>
                                    {item.heading}
                                </h4>

                                {/* paragraph */}
                                <p className='text-black-4 text-[15px] font-openSans leading-[28px] tracking-wide z-[5] group-hover:text-white'>
                                    {item.para}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default ServicesSection;