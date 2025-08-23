import React from "react";

export default function TransitionDetailsItem({ data }) {
  console.log(data);

  return (
    <div className="flex py-3 mx-5 justify-between border-y border-gray-300">
      <span className="font-bold">{data.number * data.price}$</span>
      <span className="text-gray-600">
        {data.number} ✖ {data.pizza_name}{" "}
      </span>
    </div>
  );
}
