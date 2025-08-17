import React from "react";
import PizzaItem from "./PizzaItem";
import { PulseLoader } from "react-spinners";
import useMenu from "./useMenu";
import { useSelector } from "react-redux";
export default function MenuItems() {
  const { data, isLoading, error } = useMenu();
  const isFind = useSelector((store) => store.orderItems.pizzas.length >= 1);
  console.log(isFind);

  return (
    <div className="relative min-h-[300px]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <PulseLoader size={20} color=" #bfc1c5" />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-bold">
            مشکلی پیش امده لطفا صفخه را دوباره بارگزاری کنید
          </p>
        </div>
      )}

      <ul className="flex flex-wrap">
        {data?.map((pizza) => (
          <PizzaItem key={pizza.id} data={pizza} />
        ))}
      </ul>
      {isFind && (
        <>
        <button className="bg-yellow-400 rounded-full p-2 font-bold border-t-black">
          تکمیل سفارش
        </button>
        </>
      )}
    </div>
  );
}
