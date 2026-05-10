import React from 'react'
import Mycrad from './Mycrad'

function Section4() {
  return (
    <div>
      {/* SEection 4 */}
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex justify-center  mt-10 gap-8 px-6 text-black'>

        <Mycrad
          title={"web"}
          content={"I design and develop fast, responsive, and user-friendly websites using modern technologies."}
          lower={'Frontend · Backend · Performance'} />
        <Mycrad title={"web2"}
          content={"I design and develop fast, responsive, and user-friendly websites using modern technologies."}
          lower={'Frontend · Backend · Performance'} />
        <Mycrad title={"web3"}
          content={"I design and develop fast, responsive, and user-friendly websites using modern technologies."}
          lower={'Frontend · Backend · Performance'} />



      </div>
    </div>
  )
}

export default Section4