import React from "react";
import { useSelector } from "react-redux";

export default function AcceptOrder() {
  const allPrice = useSelector((store) =>
    store.orderItems.pizzas.reduce(
      (acc, value) => acc + value.price * value.number,
      0
    )
  );

  return <div className="flex p-2 mt-2">
    <button className="bg-yellow-400 rounded-full p-3 font-bold">تایید و ثبت سفارش</button>
    <button className="bg--100 rounded-full p-3 font-bold">تایید و ثبت سفارش</button>
  </div>;
}
