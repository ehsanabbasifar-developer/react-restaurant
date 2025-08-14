import React from 'react'

export default function OrderItem({data}) {
  return (
    <li>
        <span>{data.} ✖️ {data.name}</span>
    </li>
  )
}
