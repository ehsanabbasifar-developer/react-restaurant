import React from 'react'

export default function ProtectedOrderRoute({children}) {
    const isFind = uses((store) => store.orderItems.pizzas.length >= 1)
    if (isfind)
}
