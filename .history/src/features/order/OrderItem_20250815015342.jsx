import React from 'react'

export default function OrderItem({data}) {
  return (
    <li className=''>
        <span className='text-lg'>{data.number}  ✖  {data.name}</span>
    </li>
  )
}
