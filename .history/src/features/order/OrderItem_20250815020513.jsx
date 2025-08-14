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
        <div>
         <IncrementDecrementButton>+</IncrementDecrementButton>
          <span className="font-bold mx-3">{data.number}</span>
         <IncrementDecrementButton>-</IncrementDecrementButton>
          
        </div>
        
      </div>
    </li>
  );
}
