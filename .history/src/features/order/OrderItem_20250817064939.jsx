import React from "react";
import SetupOrderButton from "../../ui/SetupOrderButton";

export default function OrderItem({ data }) {
  console.log(data);

  return (
    <li className="p-2 mt-3 flex flex-wrap justify-between sm:flex-row-reverse items-center  border-b-gray-400 border-b ">
      <div className="mb-2 basis-full sm:basis-auto">
        <span className="text-lg sm:basis-auto block text-right ">
          {data.number} ✖ {data.pizza_name}
        </span>
      </div>
      <div className="flex justify-between items-center gap-x-4">
        <SetupOrderButton id={data.id} number={data.number} />
        <span className="font-bold">{data.price}$</span>
      </div>
    </li>
  );
}
