import React from 'react'

export default function OrderItem({data}) {
  return (
    <li className='p-2'>
        <span className='text-lg'>{data.number}  ✖  {data.name}</span>
        <div className='flex justify-between'>
            <span className='font-bold'>{data.price}</span>
            <div>
                <button>+</button>
                <span>{data.number}</span>
                <button>-</button>
            </div>
            <button className=''>حذف</button>
        </div>
    </li>
  )
}
