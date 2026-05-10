import React from 'react'

function Section5() {
    return (
        <div className=''>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex justify-between mt-10 gap-5 px-6 w-full max-w-[1440px] mx-auto'>
            <img
                src='/img1.jpg'
                alt=''
                className='h-[400px] w-[700px]'
            />
            <img
                src='/img2.jpg'
                alt=''
                className='h-[400px] w-[700px]'
            />
        </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex justify-between mt-10 gap-5 px-6 w-full max-w-[1440px] mx-auto'>
                <img
                    src='/img3.jpg'
                    alt=''
                    className='h-[400px] w-[700px]'
                />
                <img
                    src='/img4.jpg'
                    alt=''
                    className='h-[400px] w-[700px]'
                />
            </div></div>
    )
}

export default Section5