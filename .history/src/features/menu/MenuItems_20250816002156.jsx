import React from "react";
import PizzaItem from "./PizzaItem";
import { useQuery } from "@tanstack/react-query";
import { menuData } from "../../api/apiMenu";
import { menuRows } from "../../api/queryKeys";
import { ClipLoader, PulseLoader, RingLoader } from "react-spinners";
export default function MenuItems() {
  const { data, isLoading } = useQuery({
    queryFn: menuData,
    queryKey: menuRows,
  });
  console.log(isLoading);

  const pizzaData = data?.data;
 if (isLoading)  return (
    <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center z-50">
      <PulseLoader size={25} color="#D1D5DB" /> {/* این رنگ معادل bg-gray-300 است */}
    </div>
  );
}
  return (
    <ul className="flex flex-wrap">
      {pizzaData?.map((pizza) => {
        return <PizzaItem key={pizza.id} data={pizza} />;
      })}
             
    </ul>
  );
}
