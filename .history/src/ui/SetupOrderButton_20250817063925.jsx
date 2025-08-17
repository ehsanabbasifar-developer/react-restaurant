import React from "react";
import { useDispatch } from "react-redux";

export default function SetupOrderButton() {
    const dispatch = useDispatch
  return (
    <>
      <button
        onClick={() => dispatch(removeItem(data.id))}
        className="bg-yellow-400 rounded-full p-2 font-bold"
      >
        حذف
      </button>
      <div>
        <button
          onClick={() => dispatch(decreaseNumber(data.id))}
          className="bg-yellow-400 rounded-full p-2 font-bold"
        >
          -
        </button>
        <span className="font-bold mx-3">{number}</span>
        <button
          onClick={() => dispatch(increaseNumber(data.id))}
          className="bg-yellow-400 rounded-full p-2 font-bold"
        >
          +
        </button>
      </div>
    </>
  );
}
