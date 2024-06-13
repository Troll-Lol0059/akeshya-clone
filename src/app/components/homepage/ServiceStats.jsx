import React from 'react'
import winnerImage from '../../../../public/images/counts-img.png'
import Image from 'next/image'

function ServiceStats() {
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

        </div>
    </section>
  )
}

export default ServiceStats;