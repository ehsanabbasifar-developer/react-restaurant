import React from "react";
import PizzaItem from "./PizzaItem";
import { useQuery } from "@tanstack/react-query";
import { menuData } from "../../api/apiMenu";
import { menuRows } from "../../api/queryKeys";
export default function MenuItems() {
  const { data} = useQuery({
    queryFn: menuData,
    queryKey: menuRows,
  });
  const pizza
 console.log(pizzaData);
 

  return (
    <ul className="flex flex-wrap">
      {pizzaData.map((pizza, value) => {
        return <PizzaItem key={value} data={pizza} />;
      })}
    </ul>
  );
}
