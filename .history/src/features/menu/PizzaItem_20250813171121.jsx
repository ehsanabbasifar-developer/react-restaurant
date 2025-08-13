import React from "react";

export default function PizzaItem({ data }) {
  console.log(data);

  return (
    <div className="flex w-screen p-2 gap-x-3">
      <div>
        <img src={data.img} className="h-24" />
      </div>
      <div className="flex flex-col gap-y-1">
        <h3 className="font-bold">{data.name}</h3>
        <p className="font-thin">{data.description}</p>
        <div className="flex justify-between w-screen">
          <span>{data.price}$</span>
          <button className="bg-yellow-400 rounded-full p-1 px-3">add to cart</button>
        </div>
      </div>
    </div>
  );
}
