import React from 'react'
import { GiSpiderWeb } from "react-icons/gi";
import { MdLocalPostOffice } from "react-icons/md";
import { SiMediapipe } from "react-icons/si";


function Mycrad({title,content,lower}) {
  return (

    <div>

      <div className=' bg-white rounded-xl p-8'>
        <GiSpiderWeb className='text-4xl mx-auto mb-4'/>
        <h1 className='text-xl font-semibold mb-3 text-center'>{title}</h1>
        <p className='text-center mb-4'>{content}</p>
        <p className='text-sm font-medium text-gray-500 text-center'>{lower}</p>
      </div>


    </div>


  )
}

export default Mycrad