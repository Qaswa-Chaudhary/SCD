import React from 'react'

async function page() {

  const res = await fetch('https://dummyjson.com/recipes');
  const response = await res.json()
  console.log(response.recipes);

  return (

    {response.recipes.map((i) => 
      {
    <div>page</div>

      })}
  )
}

export default page