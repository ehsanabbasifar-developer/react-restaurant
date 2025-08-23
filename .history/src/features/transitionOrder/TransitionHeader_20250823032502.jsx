import React from "react";

export default function TransitionHeader({}) {
  return (
    <div className="flex flex-row flex-wrap gap-y-1 justify-center gap-x-6">
      <h2 className="text-2xl font-bold">
        <span>{transitionId}</span> وضیعت شماره
      </h2>
      <span className="bg-green-400  p-1 text-white font-bold rounded-full">
        سفارش داده شده
      </span>
    </div>
  );
}
