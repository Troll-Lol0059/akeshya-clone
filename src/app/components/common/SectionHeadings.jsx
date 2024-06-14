import React from 'react'

function SectionHeadings({ heading, subheading='' }) {
    return (
        <div>
            {/* heading div */}
            <div className='flex gap-4 justify-center items-center'>
                <div className='h-[2px] w-14 bg-blueVoilet'></div>
                <h2 className='text-black2 uppercase text-[32px] font-bold font-raleway'>
                    {heading}
                </h2>
                <div className='h-[2px] w-14 bg-blueVoilet rounded-sm'></div>
            </div>

            {/* Subheading div */}
            <div className=''>
                <p className='text-black4 text-[16px] font-openSans'>{subheading}</p>
            </div>
        </div>
    )
}

export default SectionHeadings;