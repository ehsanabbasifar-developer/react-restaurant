import React from 'react'

export default function OrderItem({data}) {
  return (
    <li>
        <span className='tex'>{data.number} ✖️ {data.name}</span>
    </li>
  )
}
