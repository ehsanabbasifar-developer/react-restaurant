import React from "react";
import PizzaItem from "./PizzaItem";
import { useQuery } from "@tanstack/react-query";
import { , PulseLoader } from "react-spinners";
export default function MenuItems() {


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
    </div>
  );
}
