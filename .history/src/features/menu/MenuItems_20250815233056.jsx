import React from "react";
import PizzaItem from "./PizzaItem";
import { useQuery } from "@tanstack/react-query";
import { menuData } from "../../api/apiMenu";
import { menuRows } from "../../api/queryKeys";
export default function MenuItems() {

  const {data} = useQuery({
    queryFn: menuData,
    queryKey: menuRows,
  });
  const pizzaData}

  return (
    <ul className="flex flex-wrap">
      {data.map((pizza, value) => {
        return <PizzaItem key={value} data={pizza} />;
      })}
    </ul>
  );
}
