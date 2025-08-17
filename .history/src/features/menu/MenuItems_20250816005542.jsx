import React from "react";
import PizzaItem from "./PizzaItem";
import { useQuery } from "@tanstack/react-query";
import { menuData } from "../../api/apiMenu";
import { menuRows } from "../../api/queryKeys";
import { ClipLoader, PulseLoader } from "react-spinners";
import { Toaster } from "react-hot-toast";
export default function MenuItems() {
  const { data, isLoading, error } = useQuery({
    queryFn: menuData,
    queryKey: menuRows,
  });
  const {pizzaData} = data?.data;
console.log(error);

  return (
    <div className="relative min-h-[300px]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <PulseLoader size={20} color=" #bfc1c5" />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p>مشکلی پیش امده لطفا صفخه را دوباره بارکزاری کنید</p>
        </div>
      )}

      <ul className="flex flex-wrap">
        {pizzaData?.map((pizza) => (
          <PizzaItem key={pizza.id} data={pizza} />
        ))}
      </ul>
    </div>
  );
}
