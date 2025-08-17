import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decreaseNumber, increaseNumber } from "../../redux/orderItemsSlice";
import IncrementDecrementButton from "../../ui/IncrementDecrementButton";

export default function PizzaItem({ data }) {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();
  const number = useSelector((store) => store.orderItems.find((item) => item.id === data.id)?.number || 0);
  console.log(number);
  
  function handleClickOrdered(data) {
    dispatch(addItem(data));
    setIsSelected(true);
  }
  console.log(data);

  return (
    <li className="mx-auto font-Vazirmatn">
      <div className="flex p-2 gap-x-3">
        <div className="flex flex-col gap-y-1">
          <h3 className="font-bold text-right">{data.pizza_name}</h3>
          <p className="font-thin text-right">{data.description}</p>
          <div className="flex justify-between w-full">
            {isSelected ? (
              <div className="flex gap-x-1">
                <button className="bg-yellow-400 rounded-full p-2 font-bold">
                  حذف
                </button>
                <div>
                  <button
                    onClick={() => dispatch(decreaseNumber(data.id))}
                    className="bg-yellow-400 rounded-full p-2 font-bold"
                  >
                    -
                  </button>
                  <span className="font-bold mx-3"></span>
                  <button onClick={() => dispatch(increaseNumber(data.id))} className="bg-yellow-400 rounded-full p-2 font-bold">
                    +
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="click"
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
