import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { GiSpiderWeb } from "react-icons/gi";
import { MdLocalPostOffice } from "react-icons/md";
import { SiMediapipe } from "react-icons/si";



export default function index() {
  return (
    <div className='bg-blue-950 h-screen text-white'>

      {/* Section 1 */}
      <div className='flex justify-between py-[20px] px-[80x]'>
        <h1 className='text-[20px] ml-10'>Nxt.js </h1>
        <button className=' mr-10 bg-blue-300 px-[80px] rounded-2xl'>OK</button >
      </div>

      {/* Section 2 */}
      <div className='w-[30%] m-auto text-center space-y-[10px]'>
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

      {/* SEection 3 */}
      <div className='mt-20 mx-10'>
        <h1 className='text-xl font-semibold mb-3'>Service I Offer</h1>
        <p>Keanu Reeves, the actor behind John Wick, is a Canadian star known for his calm intensity, humility, and powerful screen presence.
          Born on September 2, 1964, he gained global fame through roles in The Matrix and later redefined the action genre with John Wick,
          where his disciplined performance, emotional depth, and physical commitment turned the character into a modern cinematic icon.</p>
      </div>

      {/* SEection 4 */}
      <div className='bg-blue-950 flex justify-center  mt-10 gap-8 px-6 text-black'>

        {/*1*/} <div className=' bg-white rounded-xl p-8'>
          <GiSpiderWeb className='text-4xl mx-auto mb-4' />
          <h1 className='text-xl font-semibold mb-3 text-center'>Web Development</h1>
          <p className='text-center mb-4'>I design and develop fast, responsive, and user-friendly websites using modern technologies.
            From simple landing pages to full-stack web applications, I focus on clean code, performance,
            and scalability to deliver reliable digital solutions.</p>
          <p className='text-sm font-medium text-gray-500 text-center'>Frontend · Backend · Performance</p>
        </div>

        {/*2*/}  <div className='bg-white rounded-xl p-8'>
          <MdLocalPostOffice className='text-4xl mx-auto mb-4' />
          <h1 className='text-xl font-semibold mb-3 text-center'>AI & Automation Solutions</h1>
          <p className='text-center mb-4'>I build intelligent systems using Artificial Intelligence and automation to solve real-world problems.
            This includes chatbots, resume generators, interview assistants, and workflow automation that improve
            efficiency and decision-making.</p>
          <p className='text-sm font-medium text-gray-500 text-center'>Chatbots · NLP · Machine Learning</p>
        </div>

        {/*3*/}  <div className='bg-white rounded-xl p-8'>
          <SiMediapipe className='text-4xl mx-auto mb-4' />
          <h1 className='text-xl font-semibold mb-3 text-center'>Backend & API Development</h1>
          <p className='text-center mb-4'>I develop secure and scalable backend systems and REST APIs using Node.js and Python.
            My solutions ensure smooth data flow, authentication, and integration with databases and third-party services.</p>
          <p className='text-sm font-medium text-gray-500 text-center'>Node.js · Flask · REST APIs</p>
        </div>
      </div>

      {/*Pg-2 */}
      <div className='bg-blue-950 min-h-screen text-white mt-5'>
        <div className='mt-20 mx-10 px-6'>
          <h1 className='text-xl font-semibold mb-3'>Service I Offer</h1>
          <p>Keanu Reeves, the actor behind John Wick, is a Canadian star known for his calm intensity, humility, and powerful screen presence.
            Born on September 2, 1964, he gained global fame through roles in The Matrix and later redefined the action genre with John Wick,
            where his disciplined performance, emotional depth, and physical commitment turned the character into a modern cinematic icon.</p>
        </div>

        <div className=' flex justify-between mt-10 gap-5 px-6 w-full max-w-[1440px] mx-auto'>
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

        <div className=' flex justify-between mt-10 gap-5 px-6 w-full max-w-[1440px] mx-auto'>
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
        </div>









      </div>
    </div>
  )
}
