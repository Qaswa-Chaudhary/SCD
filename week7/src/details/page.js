import React from 'react'

async function page() {
   let res =  await fetch('API')
   let response = await res.json
   console.log
  return (
    <div>page</div>
  )
}

export default page




// response.recipes