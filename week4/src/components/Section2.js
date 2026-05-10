import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

function Section2() {
  return (
    <div className='sm-w[100%] md-w[70%] lg-w[40%]'>
      {/* Section 2 */}
      <div className='w-[30%] m-auto text-center space-y-[10px] '>
        <h1 className='text-xl font-semibold mb-3'> John Wick</h1>
        <h4 className='text-xl font-semibold mb-3'> Actor and Artist</h4>
        <p>Keanu Reeves, the actor behind John Wick, is a Canadian star known for his calm intensity, humility, and powerful screen presence.
          Born on September 2, 1964, he gained global fame through roles in The Matrix and later redefined the action genre with John Wick,
          where his disciplined performance, emotional depth, and physical commitment turned the character into a modern cinematic icon.
        </p>
        <div className=' flex m-auto justify-between mb-[20px] w-[200px]'>
          <FaFacebook />
          <FaYoutube />
          <BsLinkedin />
        </div>

        <img
          src='/study1.jpg'
          alt=''
          className='h-[150px] w-[150px] rounded-full m-auto'
        ></img>
      </div>
    </div>
  )
}

export default Section2