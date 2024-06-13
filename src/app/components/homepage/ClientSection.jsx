"use client"
import React from 'react'
import Image from 'next/image'
import clientImages from '../../data/clientImages'


function ClientSection() {
  return (
    <section className='w-[85%] mx-auto flex justify-center items-center lg:py-3 md:py-3 py-3'>
      <div className='lg:w-full w-full mx-auto grid lg:justify-between items-center lg:px-14 lg:gap-28 gap-8
        grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
        {clientImages?.map((image) => (
          <Image
            key={image.id}
            src={image.path}
            width={80}
            height={80}
            alt={image.alt}
            className='filter grayscale h-auto transition-opacity duration-400 ease-in-out hover:grayscale-0'
          />
        ))}
      </div>
    </section>
  );
}


export default ClientSection