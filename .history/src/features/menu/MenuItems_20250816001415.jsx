import React from "react";
import PizzaItem from "./PizzaItem";
import { useQuery } from "@tanstack/react-query";
import { menuData } from "../../api/apiMenu";
import { menuRows } from "../../api/queryKeys";
export default function MenuItems() {
  const { data ,isLoading } = useQuery({
    queryFn: menuData,
    queryKey: menuRows,
  });
  log
  const pizzaData = data?.data;
  console.log(pizzaData);

  return (
    <ul className="flex flex-wrap">
      {pizzaData?.map((pizza) => {
        return <PizzaItem key={pizza.id} data={pizza} />;
      })}
    </ul>
  );
}
