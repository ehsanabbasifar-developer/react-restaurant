import React from 'react'
import { useSelector } from 'react-redux'

export default function ProtectedOrderRoute({children}) {
    const isFind = useSelector((store) => store.orderItems.pizzas.length >= 1)
     isFind ? children  : null
}
