import React from "react";
import IncrementDecrementButton from "../../ui/IncrementDecrementButton";

export default function OrderItem({ data }) {
  return (
    <li className="p-2">
      <span className="text-lg text-right block">
        {data.number} ✖ {data.name}
      </span>
      <div className="flex p-3 justify-between items-center">
        <span className="font-bold">{data.price}$</span>
        <div>
         <IncrementDecrementButton>-</IncrementDecrementButton>
          <span className="font-bold mx-3">{data.number}</span>
         <IncrementDecrementButton>+</IncrementDecrementButton>
          
        </div>
         <IncrementDecrementButton>حذف</IncrementDecrementButton>
        
      </div>
    </li>
  );
}
