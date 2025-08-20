import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AcceptOrder() {
  const allPrice = useSelector((store) =>
    store.orderItems.pizzas.reduce(
      (acc, value) => acc + value.price * value.number,
      0
    )
  );
   const navigate = useNavigate()
  return (
    <div className="flex p-1 mt-2 gap-x-3 items-center">
      <button className="bg-yellow-400 rounded-full p-2 font-bold cursor-pointer">
پرداخت {allPrice}$ و ثبت سفارش
      </button>
      <button onClick={() =>navigate("/menu")} className="bg-white rounded-full p-1 font-bold cursor-pointer">
         خالی کردن سبد خرید و برگشت به منو 
      </button>
     
    </div>
  );
}
