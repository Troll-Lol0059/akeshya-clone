import React from 'react'
import SectionHeadings from '../common/SectionHeadings';
import featuresDataArray from '../../data/featuresData';

function FeaturesSection() {
  return (
    <section className='md:w-[90%] lg:w-full xl:w-full w-[80%] mx-auto flex flex-col justify-center gap-8 my-24'>
        <div className='px-2'> 
            <SectionHeadings heading={'OUR CORE FEATURES'} subheading={'Akeshya is a forward-thinking and intelligent design firm that is technically and creatively capable of transforming your brand into its best digital self. Our approach to design and development results in compelling, engaging branding and immersive digital experiences that provide a value for money.'} />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 gap-6 px-4'>
            {
                featuresDataArray?.map( (item) => (
                    <div key={item.id} className='flex gap-4 items-center bg-[#f6f6f6] xl:px-4 lg:px-2 py-4 group hover:bg-[#E1F0FA] rounded-sm'>
                        {/* icon div */}
                        <div className='text-[32px] leading-[1] font-normal' style={{ color: item.color }}>
                          <i class={item.iconName}></i>     
                        </div>

                        {/* feature name DIV */}
                        <div className='text-[1rem] font-raleway text-black2 font-[700] group-hover:text-blueVoilet group-hover:cursor-pointer'>
                            {
                                item.feature
                            }
                        </div>
                    </div>
                ) )
            }
        </div>

    </section>
  )
}

export default FeaturesSection;