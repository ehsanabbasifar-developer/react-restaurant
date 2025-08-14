import React from 'react'

export default function OrderItem({data}) {
  return (
    <li className='p-2'>
        <span className='text-lg'>{data.number}  ✖  {data.name}</span>
        <div className='flex jus'>
            <span>{data.price}</span>
            <div>
                <button>+</button>
                <span>{data.number}</span>
                <button>-</button>
            </div>
            <button>delete</button>
        </div>
    </li>
  )
}
