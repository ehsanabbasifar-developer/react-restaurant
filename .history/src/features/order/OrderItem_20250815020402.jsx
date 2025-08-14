import React from "react";
import IncrementDecrementButton from "../../ui/IncrementDecrementButton";

export default function OrderItem({ data }) {
  return (
    <li className="p-2">
      <span className="text-lg">
        {data.number} ✖ {data.name}
      </span>
      <div className="flex p-2 justify-between">
        <span className="font-bold">{data.price}$</span>
        <div className="flex justify-around">
         <IncrementDecrementButton>+</IncrementDecrementButton>
          <span className="font-bold">{data.number}</span>
         <IncrementDecrementButton>-</IncrementDecrementButton>
          
        </div>
        <button className="font-bold">حذف</button>
      </div>
    </li>
  );
}
