import React from "react";
import OrderItem from "./OrderItem";

export default function OrderList() {
  const data =[{
    name: "پیتزا مخصوص",
    price: 16.55,
    value: 2,
  },{
    name: "پیتزا پپرونی",
    price: 16.55,
    value: 2,
  },{
    name: "پیتزا مرغ",
    price: 16.55,
    value: 2,
  },{
    name: "پیتزا گوشت",
    price: 16.55,
    value: 2,
  }] ;
  return <ul className="flex flex-col">
    {data.map((order) => {
        return <OrderItem
    })}
  </ul>;
}
