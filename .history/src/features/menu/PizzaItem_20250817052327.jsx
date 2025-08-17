import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/orderItemsSlice";

export default function PizzaItem({ data }) {
  const isSelected   = useState(false)
  const dispatch = useDispatch();
  const store = useSelector((store) => store.orderItems);
  function handleClick
  return (
    <li className="mx-auto font-Vazirmatn">
      <div className="flex p-2 gap-x-3">
        <div className="flex flex-col gap-y-1">
          <h3 className="font-bold text-right">{data.pizza_name}</h3>
          <p className="font-thin text-right">{data.description}</p>
          <div className="flex justify-between w-full">
            <button
              type="click"
              onClick={() => dispatch(addItem(data))}
              className="bg-yellow-400 cursor-pointer rounded-full p-1 px-3 "
            >
              ثبت سفارش
            </button>
            <span>{data.price}$</span>
          </div>
        </div>
        <div>
          <img src={data.image} className="h-24" />
        </div>
      </div>
    </li>
  );
}
