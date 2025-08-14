import React from 'react'

export default function PizzaItem({data}) {
    console.log(data);
    
  return (
    <div className='flex p-2 h-20'>
        <div>
            <img src= {data.img}  />
        </div>
    </div>
  )
}
