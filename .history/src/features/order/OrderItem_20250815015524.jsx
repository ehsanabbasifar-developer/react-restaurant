import React from 'react'

export default function OrderItem({data}) {
  return (
    <li className='p-2'>
        <span className='text-lg'>{data.number}  ✖  {data.name}</span>
        <div>
            <span>{data.price}</span>
        </div>
    </li>
  )
}
