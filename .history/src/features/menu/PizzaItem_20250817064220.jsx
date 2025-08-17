import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decraseNumber,
  ,
  
} from "../../redux/orderItemsSlice";
import SetupOrderButton from "../../ui/SetupOrderButton";

export default function PizzaItem({ data }) {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();
  const number = useSelector(
    (store) =>
      store.orderItems.pizzas.find((item) => item.id === data.id)?.number || 0
  );
  function handleClickOrdered(data) {
    dispatch(addItem(data));
    setIsSelected(true);
  }
  useEffect(() => {
    if (number === 0) setIsSelected(false);
  }, [number]);

  return (
    <li className="mx-auto font-Vazirmatn">
      <div className="flex p-2 gap-x-3">
        <div className="flex flex-col gap-y-1">
          <h3 className="font-bold text-right">{data.pizza_name}</h3>
          <p className="font-thin text-right">{data.description}</p>
          <div className="flex justify-between w-full">
            {isSelected ? (
              <div className="flex gap-x-1">
                <SetupOrderButton id={data.id} number={number} />
              </div>
            ) : (
              <button
                onClick={() => handleClickOrdered(data)}
                className="bg-yellow-400 cursor-pointer rounded-full p-1 px-3 "
              >
                ثبت سفارش
              </button>
            )}
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
