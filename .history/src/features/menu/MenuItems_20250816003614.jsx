import React from "react";
import PizzaItem from "./PizzaItem";
import { useQuery } from "@tanstack/react-query";
import { menuData } from "../../api/apiMenu";
import { menuRows } from "../../api/queryKeys";
import {ClipLoader} from "react-spinners"
export default function MenuItems() {
  const { data, isLoading } = useQuery({
    queryFn: menuData,
    queryKey: menuRows,
  });
  console.log(isLoading);

  const pizzaData = data?.data;

    return (
    <div className="relative min-h-[300px]">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center z-10">
          <ClipLoader size={25} color="#0f356d" />
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
