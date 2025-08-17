import React from "react";
import PizzaItem from "./PizzaItem";
import { useQuery } from "@tanstack/react-query";
import { menuData } from "../../api/apiMenu";
import { menuRows } from "../../api/queryKeys";
export default function MenuItems() {
  const data = [
    {
      name: "Prosciutto e Rudolf",
      description: "tomato, mozzarella, prosciutto, arugula",
      price: 16.55,
      img: "./pizza-4.jpg",
    },
    {
      name: "Prosciutto e Rudolf",
      description: "tomato, mozzarella, prosciutto, arugula",
      price: 16.55,
      img: "./pizza-5.jpg",
    },
    {
      name: "Prosciutto e Rudolf",
      description: "tomato, mozzarella, prosciutto, arugula",
      price: 16.55,
      img: "./pizza-6.jpg",
    },
    {
      name: "Prosciutto e Rudolf",
      description: "tomato, mozzarella, prosciutto, arugula",
      price: 16.55,
      img: "./pizza-7.jpg",
    },
    {
      name: "Prosciutto e Rudolf",
      description: "tomato, mozzarella, prosciutto, arugula",
      price: 16.55,
      img: "./pizza-8.jpg",
    },
    {
      name: "Prosciutto e Rudolf",
      description: "tomato, mozzarella, prosciutto, arugula",
      price: 16.55,
      img: "./pizza-4.jpg",
    },
    {
      name: "Prosciutto e Rudolf",
      description: "tomato, mozzarella, prosciutto, arugula",
      price: 16.55,
      img: "./pizza-5.jpg",
    },
    {
      name: "Prosciutto e Rudolf",
      description: "tomato, mozzarella, prosciutto, arugula",
      price: 16.55,
      img: "./pizza-6.jpg",
    },
    {
      name: "Prosciutto e Rudolf",
      description: "tomato, mozzarella, prosciutto, arugula",
      price: 16.55,
      img: "./pizza-7.jpg",
    },
    {
      name: "Prosciutto e Rudolf",
      description: "tomato, mozzarella, prosciutto, arugula",
      price: 16.55,
      img: "./pizza-8.jpg",
    },
  ];
  const {data} = useQuery({
    queryFn: menuData,
    queryKey: menuRows,
  });
  console.log();

  return (
    <ul className="flex flex-wrap">
      {data.map((pizza, value) => {
        return <PizzaItem key={value} data={pizza} />;
      })}
    </ul>
  );
}
