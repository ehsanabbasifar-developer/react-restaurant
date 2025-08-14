import React from "react";
import IncrementDecrementButton from "../../ui/IncrementDecrementButton";

export default function OrderItem({ data }) {
  return (
    <li className="p-2 mt-3 flex flex-wrap">
      <span className="text-lg sm:basis-auto  text-right block mb-2 basis-full">
        {data.number} ✖ {data.name}
      </span>
      <div className="flex justify-between items-center">
        <IncrementDecrementButton>حذف</IncrementDecrementButton>
        <div>
          <IncrementDecrementButton>-</IncrementDecrementButton>
          <span className="font-bold mx-3">{data.number}</span>
          <IncrementDecrementButton>+</IncrementDecrementButton>
        </div>
        <span className="font-bold me-auto">{data.price}$</span>
      </div>
    </li>
  );
}
