"use client"
import React from 'react'
import SectionHeadings from '../common/SectionHeadings';
import Fade from '../common/Fade';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setFormData } from '@/app/redux/reducers/formDataSlice';


function ContactUsSection() {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    const dispatch = useDispatch();

    const submitHandler = (data) => {
        dispatch(setFormData(data));
        reset();
    }

    return (
        <Fade initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <section className='flex flex-col gap-8 my-6 mb-12'>
                {/* heading div */}
                <div>
                    <SectionHeadings heading={'CONTACT US'} />
                </div>

                {/* content div */}
                <div className='xl:w-full lg:w-full md:w-[85%] w-[80%] mx-auto grid xl:flex lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center justify-items-center gap-3'>
                    {/* left sub - section */}
                    <div className='xl:w-fit space-y-3'>
                        <h3 className='text-[28px] font-raleway text-blueVoilet font-[700] tracking-wide'>
                            Akeshya
                        </h3>

                        <p className='text-[#888888] text-[14px] font-raleway'>
                            Designers, developers & marketeers capable of delivering solutions according to your needs,
                        </p>
                    </div>

                    {/* center sub - section */}
                    <div className='xl:w-fit w-full flex flex-col gap-4 '>
                        {/* address div */}
                        <div className='flex items-center gap-4'>
                            {/* icon */}
                            <div className='text-[32px] text-blueVoilet'>
                                <i class="ri-map-pin-line"></i>
                            </div>

                            {/* address */}
                            <div className='text-[14px] text-black4 font-openSans'>
                                26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004
                            </div>
                        </div>


                        {/* email div */}
                        <div className='flex items-center gap-4'>
                            {/* icon */}
                            <div className='text-[32px] text-blueVoilet'>
                                <i class="ri-mail-send-line"></i>
                            </div>

                            {/* email */}
                            <div className='text-[14px] text-black4 font-openSans'>
                                info@akeshya.com
                            </div>
                        </div>


                        {/* phone div */}
                        <div className='flex items-center gap-4'>
                            {/* icon */}
                            <div className='text-[32px] text-blueVoilet'>
                                <i class="ri-phone-line"></i>
                            </div>

                            {/* phone */}
                            <div className='text-[14px] text-black4 font-openSans'>
                                +91 94942 40922
                            </div>
                        </div>
                    </div>

                    {/* right sub - section */}
                    <div className="xl:w-fit md:w-full md:col-span-2 xl:px-4 lg:col-span-1 bg-white">
                        <form className="space-y-4 w-full" onSubmit={handleSubmit(submitHandler)}>
                            {/* name input */}
                            <input type="text" placeholder="Your Name" className="w-full p-2.5 text-sm border border-gray-300 rounded-none shadow-none focus:outline-none focus:ring-0 focus:border-blueVoilet"
                                {...register('name', { required: true })} required />

                            {/* email input */}
                            <input type="email" placeholder="Your Email" className="w-full p-2.5 text-sm border border-gray-300 rounded-none shadow-none focus:outline-none focus:ring-0 focus:border-blueVoilet"
                                {...register('email', { required: true })} required />

                            {/* Subject Input */}
                            <input type="text" placeholder="Subject" className="w-full p-2.5 text-sm border border-gray-300 rounded-none shadow-none focus:outline-none focus:ring-0 focus:border-blueVoilet"
                                {...register('subject', { required: true })} required />

                            {/* comments input */}
                            <textarea rows={5} placeholder="Message" className="h-fit text-area w-full p-2.5 text-sm border border-gray-300 rounded-none shadow-none focus:outline-none focus:ring-0 focus:border-blueVoilet"
                                {...register('comment', { required: true })} required>

                            </textarea>

                            {/* Form Submit Button */}
                            <div className='w-full flex justify-center'>
                                <button type="submit" className="bg-[#14279B] px-6 py-3 rounded-full text-white text-[15px] font-medium hover:bg-[#0d6efd] transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </section>
        </Fade>
    )
}

export default ContactUsSection; 