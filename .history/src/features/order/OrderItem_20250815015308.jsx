import React from 'react'

export default function OrderItem({data}) {
  return (
    <li>
        <span className='text-lg'>{data.number} ✖️ {data.name}</span>
    </li>
  )
}
