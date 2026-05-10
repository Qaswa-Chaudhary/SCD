import { Tilt_Neon } from 'next/font/google'
import React from 'react'

function Mycard({image,title, date, lower, button }) {
  return (
    <div className='flex items-center bg-white rounded-xl overflow-hidden w-[900px]'>
      
      {/* Left img */}
      <img 
        src={image}
        alt={title}
        className='w-[250px] h-[150px] object-cover'
      />
      {/* <img src='img.jpeg' className='w-[250px] h-[150px] object-cover'/> */}


      {/* right content */}
      <div className='p-6 flex justify-between items-center w-full'>
        <div>
          <h2 className='text-lg font-bold text-black'>{title}</h2>
          <p className='text-sm text-gray-500 mt-2'>{date}</p>
          <p className='text-sm text-gray-400 mt-1'>{lower}</p>
        </div>
        {/* Button */}
        <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'>{button}</button>

      </div>
      </div>
    
  )
}

export default Mycard