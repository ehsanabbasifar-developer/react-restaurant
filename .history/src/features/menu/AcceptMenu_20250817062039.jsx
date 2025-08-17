import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AcceptMenu() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  return (
     <div className="my-2 flex justify-center gap-x-2">
        <button onClick={()=>navigate("/order")} className="bg-green-300 rounded-full p-2  border-t-black">
          تکمیل سفارش
        </button>
        <button onClick={() =>dispatch(clear)} className="bg-red-400 rounded-full p-2  border-t-black">
           خالی کردن لیست سفارش
        </button>
        </div>
  )
}
