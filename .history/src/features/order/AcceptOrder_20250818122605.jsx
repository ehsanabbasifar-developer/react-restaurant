import React from 'react'
import { useSelector } from 'react-redux'

export default function AcceptOrder() {
    const allPrice = useSelector((store) => store.orderItems.pizzas.reduce((acc,)))
  return (
    <div>AcceptOrder</div>
  )
}
