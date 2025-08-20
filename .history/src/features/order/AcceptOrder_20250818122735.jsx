import React from "react";
import { useSelector } from "react-redux";

export default function AcceptOrder() {
  const allPrice = useSelector((store) =>
    store.orderItems.pizzas.reduce((acc, value) => acc + (value.price * value.), 0)
  );
  console.log(allPrice);
  
  return <div>AcceptOrder</div>;
}
