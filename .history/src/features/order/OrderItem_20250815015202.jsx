import React from 'react'

export default function OrderItem({data}) {
  return (
    <li>
        <span>{data.value} ✖️ {data.name}</span>
    </li>
  )
}
