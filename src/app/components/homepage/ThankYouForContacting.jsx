"use client"
import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteFormData } from '@/app/redux/reducers/formDataSlice';


function ThankYouForContacting() {

    const dispatch = useDispatch();

    return (
        <div className="fixed inset-0 bg-[rgb(14,30,37)] z-[1001] flex items-center justify-center ">
            <div className="text-white bg-white rounded-md font-openSans space-y-4 px-6 py-4">
                <h1 className='text-[22px] font-semibold text-[#0E1E25]'>
                    Thank You!
                </h1>

                <p className='text-[1rem] text-[#0E1E25]'>
                    Your form submission has been received
                </p>

                <p className='text-[1rem] text-[#007067] space-x-3 cursor-pointer'>
                    <span> 
                        <i class="ri-arrow-left-line"></i>
                    </span>

                    <span onClick={ () => { dispatch(deleteFormData()) } }>
                        Back to Our Site
                    </span>
                </p>
            </div>
        </div>
    )
}

export default ThankYouForContacting;