import React from "react";
import PizzaItem from "./PizzaItem";
import { useQuery } from "@tanstack/react-query";
import { menuData } from "../../api/apiMenu";
import { menuRows } from "../../api/queryKeys";
import {}
export default function MenuItems() {
  const { data, isLoading } = useQuery({
    queryFn: menuData,
    queryKey: menuRows,
  });
  console.log(isLoading);

  const pizzaData = data?.data;

  return (
    
    <ul className="flex flex-wrap bg-gray-100">
      <ClipLoader
      {pizzaData?.map((pizza) => {
        return <PizzaItem key={pizza.id} data={pizza} />;
      })}
    </ul>
  );
}
