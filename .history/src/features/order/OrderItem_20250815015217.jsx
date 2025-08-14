import React from 'react'

export default function OrderItem({data}) {
  return (
    <li>
        <span>{data.number} ✖️ {data.name}</span>
    </li>
  )
}
