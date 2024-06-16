import React from 'react'
import processData from '../../data/processData'
import SectionHeadings from '../common/SectionHeadings'
import Fade from '../common/Fade';


function ProcessSection() {
    return (
        <Fade initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <section className='w-full md:w-[90%] mx-auto flex flex-col gap-16 my-24'>
                <div className='xl:px-0 lg:px-0 md:px-0 px-20'>
                    <SectionHeadings heading={'OUR PROCESS'} subheading={'Over the years we have evolved a tested method for attaining achievement for each one of our clients.'} />
                </div>

                <div className='w-full grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 md:gap-8'>
                    {
                        processData?.map((item) => (
                            // big container for hover effect
                            <div key={item.id} className='pt-24 pb-4 group xl:px-0 lg:px-0 md:px-0 px-20'>
                                {/* small container for data */}
                                <div className='bg-white6 flex flex-col items-center justify-center gap-4 rounded-xl px-8 py-4 md:px-[44px] group-hover:bg-blueVoilet group-hover:transition-all duration-700'>
                                    {/* heading */}
                                    <h3 className='text-black2 font-raleway text-[20px] font-semibold group-hover:text-white'>
                                        {item.heading}
                                    </h3>

                                    <p className='text-black5 font-openSans text-[1rem] group-hover:text-white'>
                                        {item.para}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>
        </Fade>
    )
}

export default ProcessSection;