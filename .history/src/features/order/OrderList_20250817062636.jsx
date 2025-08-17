import React from "react";
import OrderItem from "./OrderItem";
import { useSelector } from "react-redux";

export default function OrderList() {

  const data = useSelector((store) => store.orderItems.pizzas);
  console.log(store);

  return (
    <ul className="flex flex-col">
      {data.map((order, index) => {
        return <OrderItem data={order} key={index} />;
      })}
    </ul>
  );
}
