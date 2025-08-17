import React from "react";
import { useDispatch } from "react-redux";
import { decreaseNumber, increaseNumber, removeItem } from "../redux/orderItemsSlice";

export default function SetupOrderButton({id,number}) {
    const dispatch = useDispatch()
  return (
    <>
      <button
        onClick={() => dispatch(removeItem(id))}
        className="bg-yellow-400 rounded-full cursor-pointer p-2 font-bold"
      >
        حذف
      </button>
      <div>
        <button
          onClick={() => dispatch(decreaseNumber(id))}
          className="bg-yellow-400 rounded-full cursor-pointer p-2 font-bold"
        >
          -
        </button>
        <span className="font-bold mx-3">{number}</span>
        <button
          onClick={() => dispatch(increaseNumber(id))}
          className="bg-yellow-400 rounded-full cursor-pointer p-2 font-bold"
        >
          +
        </button>
      </div>
    </>
  );
}
