import React from 'react'
import { MdDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";


function Section2() {
    return (
        <div className='py-32 bg-gray-200 flex flex-col items-center '>
            {/* TOP Banner */}
            <div className='w-full bg-teal-500 p-15 text-center'>
                <h1 className='text-3xl font-bold text-White'>Programming for Everyone</h1>
            </div>
            {/* Center Card */}

            <div className='bg-slate-700 text-white rounded-xl shadow-lg max-w-3xl w-[90%] flex justify-center items-center -mt-8 p-8'>
                <div className='flex flex-col md:flex-row items-center gap-10 '>
                    {/* Profile image */}
                    <img
                        src='img.jpeg ' className='w-50 h-50 rounded-full object-cover border-4 border-white'
                    />
                    {/* information */}
                    <div className='text-center md:text-left space-y-4'>
                        <MdDateRange className='text-teal-300' />
                        <p className='text-teal-300'>2021-05-12</p>
                        <CiLocationOn className='text-teal-300' />
                        <p className='text-teal-300'>Somerset 25, 12345 San Somewhere</p>

                    </div>
                </div>
            </div>
            {/* About */}
            <p className=' max-w-4xl text-center text-gray-700 mt-10 px-6'>
                Everyone can learn to code! Yes, everyone! In this live event,
                we are going to go through all the key basics and get you started
                with programming as well.
            </p>
        </div>


    )
}

export default Section2