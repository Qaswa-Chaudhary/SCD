import React from 'react'
import Mycard from './Mycard'


function Section1() {
  return (
    <div className='py-10 bg-gray-300 '>
      {/*Section 1*/}
      <div className='flex flex-col justify-center items-center gap-6'>
        <Mycard
          image='/img.jpeg'
          title='Programming for everyoone'
          date='May 12,2026'
          lower='Somerset 25, 12345 San Somewhere'
          button='Explore Page'
        />

        <Mycard
          image='/img1.jpeg'
          title='Networking for Introverts'
          date='May 30,2026'
          lower='Somerset 25, 12345 San New Work'
          button='Explore Page'
        />

        <Mycard
          image='/img2.jpeg'
          title='Networking for Extroverts'
          date='April 10,2026'
          lower='Somerset 25, 12345 Main City'
          button='Explore Page'
        />


      </div>
    </div>
  )
}

export default Section1