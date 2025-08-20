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
    <div className="flex p-2 mt-2 gap-x-3 items-center">
      <button className="bg-yellow-400 rounded-full p-3 font-bold cursor-pointer">
پرداخت {allPrice}
      </button>
      <button onClick={() =>navigate("/menu")} className="bg-white rounded-full p-3 font-bold cursor-pointer">
        برگشت به منو
      </button>
     
    </div>
  );
}
