import React from 'react'

export default function OrderItem({data}) {
  return (
    <li>
        <span> ✖️ {data.name}</span>
    </li>
  )
}
