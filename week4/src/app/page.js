import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '@/components/Section5'

import React from 'react'

function index() {
  return (
    <div className='bg-blue-950 min-h-screen text-white sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5/>

    </div>
  )
}

export default index


