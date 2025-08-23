import React from "react";

export default function TransitionDetailsItem({ data }) {
  console.log(data);

  return (
    <div className="flex justify-between border-y-gray-400">
      <span className="font-bold">{data.number * data.price}</span>
      <span className="">
        {data.number} ✖ {data.pizza_name}{" "}
      </span>
    </div>
  );
}
