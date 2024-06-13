"use client"
import React from 'react'
import winnerImage from '../../../../public/images/counts-img.png'
import Image from 'next/image'
import statsData from '../../data/statData';
import Counter from '../../components/common/Counter';


function ServiceStatsSection() {
  return (
    <section>
      {/* left winner image section */}
      <div>
        <Image src={winnerImage}
          width={500}
          height={500}
        />
      </div>

      {/* right Stats section */}
      <div>
        {
          statsData?.map((item) => (
            <div key={item.id}>
              {/* icon div */}
              <div>
                <i class={item.iconName}></i>
              </div>

              {/* data and sub - heading */}
              <div>
                {/* for 1st and 3rd - have to show Counter */}
                {
                  (parseInt(item.id) % 2) !== 0 ? (
                    <>
                      <Counter start={parseInt(item.number)/2} end={item.number} />

                      <p>
                        {item.subHeading}
                      </p>
                    </>
                  ) :
                  // for remaining no counter required
                    (
                      <>
                        <div>
                          {item.number}
                        </div>

                        <div>
                          {item.subHeading}
                        </div>
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