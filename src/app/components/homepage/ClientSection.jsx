"use client"
import React from 'react'
import Image from 'next/image'
import clientImages from '../../data/clientImages'


function ClientSection() {
  return (
    <section className='w-full mx-auto flex justify-center items-center py-4'>
      <div className='w-[85%] mx-auto grid items-center justify-items-center lg:gap-x-8 lg:w-[90%] md:w-[90%] md:gap-y-8 sm:gap-8
        grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
        {clientImages?.map((image) => (
          <Image
            key={image.id}
            src={image.path}
            layout="responsive"
            height={50}
            width={40}
            alt={image.alt}
            className='max-w-[50%] sm:max-w-[35%] min-h-[60px] min-w-[85px] filter grayscale transition-opacity duration-400 ease-in-out hover:grayscale-0'
          />
        ))}
      </div>
    </section>
  );
}


export default ClientSection