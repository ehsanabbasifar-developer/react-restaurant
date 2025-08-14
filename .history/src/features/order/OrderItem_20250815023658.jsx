import React from "react";
import IncrementDecrementButton from "../../ui/IncrementDecrementButton";

export default function OrderItem({ data }) {
  return (
    <li className="p-2 mt-3 flex flex-wrap">
      <div className="mb-2 basis-full sm:basis-auto">
        <span className="text-lg sm:basis-auto block text-right ">
          {data.number} ✖ {data.name}
        </span>
      </div>
      <div className="flex justify-between items-center gap-x-4">
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
