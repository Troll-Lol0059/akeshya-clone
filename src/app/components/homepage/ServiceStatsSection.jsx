"use client"
import React from 'react'
import winnerImage from '../../../../public/images/counts-img.png'
import Image from 'next/image'
import statsData from '../../data/statData';
import Counter from '../../components/common/Counter';


function ServiceStatsSection() {
  return (
    <section className='w-full xl:flex justify-start items-center mb-20'>
      {/* left winner image section */}
      <div className='flex justify-center'>
        <Image src={winnerImage}
          width={520}
          height={500}
          className='xl:min-w-[450px]'
        />
      </div>

      {/* right Stats section */}
      <div className='w-[85%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 sm:gap-y-4 px-5 my-8 md:gap-x-24 md:px-16'>
        {
          statsData?.map((item) => (
            <div key={item.id} className='flex items-start gap-3'>
              {/* icon div */}
              <div className='text-[36px] text-blueVoilet font-openSans'>
                <i class={item.iconName}></i>
              </div>

              {/* data and sub - heading */}
              <div className='text-black2 text-[36px] font-bold font-openSans'>
                {/* for 1st and 3rd - have to show Counter */}
                {
                  (parseInt(item.id) % 2) !== 0 ? (
                    <>
                      <Counter start={parseInt(item.number) / 2} end={item.number} />

                      <p className='text-[14px] font-raleway text-black4a'>
                        <span className='font-semibold'>{item.subHeading}</span>
                        <span className='font-normal'>{item.subheading2}</span>
                      </p>
                    </>
                  ) :
                    // for remaining no counter required
                    (
                      <>
                        <div>
                          {item.number}
                        </div>

                        <p className='text-[14px] font-raleway text-black4a'>
                          <span className='font-[500]'>{item.subHeading}</span>
                          <span className='font-normal'>{item.subheading2}</span>
                        </p>
                      </>
                    )
                }
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ServiceStatsSection;