import React from "react";

export default function OrderItem({ data }) {
  return (
    <li className="p-2">
      <span className="text-lg">
        {data.number} ✖ {data.name}
      </span>
      <div className="flex p-2 justify-between">
        <span className="font-bold">{data.price}$</span>
        <div>
          <button className="bg-ye">+</button>
          <span className="font-bold">{data.number}</span>
          <button>-</button>
        </div>
        <button className="font-bold">حذف</button>
      </div>
    </li>
  );
}
