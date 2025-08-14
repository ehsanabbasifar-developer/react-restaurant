import React from "react";
import IncrementDecrementButton from "../../ui/IncrementDecrementButton";

export default function OrderItem({ data }) {
  return (
    <li className="p-2 mt-3">
      <span className="text-lg text-right block mb-2">
        {data.name} ✖ {data.number}
      </span>
      <div className="flex p-3 justify-between items-center">
        <IncrementDecrementButton>حذف</IncrementDecrementButton>
        <div>
          <IncrementDecrementButton>-</IncrementDecrementButton>
          <span className="font-bold mx-3">{data.number}</span>
          <IncrementDecrementButton>+</IncrementDecrementButton>
        </div>
        <span className="font-bold">{data.price}$</span>
      </div>
    </li>
  );
}
