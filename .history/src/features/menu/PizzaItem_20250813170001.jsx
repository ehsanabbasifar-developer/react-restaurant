import React from 'react'

export default function PizzaItem({data}) {
    console.log(data);
    
  return (
    <div className='flex p-2 gap-x-3'>
        <div>
            <img src= {data.img} className='h-24'  />
        </div>
        <div>
            <h3 className='font-bold'>{data.name}</h3>
            <p>{}</p>
        </div>
    </div>
  )
}
