import React from 'react'

export default function PizzaItem({data}) {
    console.log(data);
    
  return (
    <div className='flex p-2'>
        <div>
            <img src= {data.img} className='h-24'  />
        </div>
        <div></div>
    </div>
  )
}
