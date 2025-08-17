import React from "react";
import PizzaItem from "./PizzaItem";
import { useQuery } from "@tanstack/react-query";
import { menuData } from "../../api/apiMenu";
import { menuRows } from "../../api/queryKeys";
import { ClipLoader } from "react-spinners";
export default function MenuItems() {
  const { data, isLoading } = useQuery({
    queryFn: menuData,
    queryKey: menuRows,
  });
  console.log(isLoading);

  const pizzaData = data?.data;

  return (
    <ul className="flex flex-wrap">
      {pizzaData?.map((pizza) => {
        return <PizzaItem key={pizza.id} data={pizza} />;
      })}
      {isLoading && <ClipLoader size={30} color="#00BFFF" />}
    </ul>
  );
}
