import React from "react";
import PizzaItem from "./PizzaItem";
import { useQuery } from "@tanstack/react-query";
import { menuData } from "../../api/apiMenu";
import { menuRows } from "../../api/queryKeys";
import { PulseLoader } from "react-spinners";
export default function MenuItems() {
  const { data, isLoading } = useQuery({
    queryFn: menuData,
    queryKey: menuRows,
  });
  console.log(isLoading);

  const pizzaData = data?.data;

  return (
    <ul className="flex flex-wrap">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-300 opacity-10 flex items-center justify-center z-10">
          <PulseLoader size={25} color="#ce2815" />
        </div>
      )}
      {pizzaData?.map((pizza) => {
        return <PizzaItem key={pizza.id} data={pizza} />;
      })}
    </ul>
  );
}
