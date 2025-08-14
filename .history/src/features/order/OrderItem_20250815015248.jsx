import React from 'react'

export default function OrderItem({data}) {
  return (
    <li>
        <span className=''>{data.number} ✖️ {data.name}</span>
    </li>
  )
}
