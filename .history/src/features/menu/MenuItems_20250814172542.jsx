import React from "react";
import PizzaItem from "./PizzaItem"
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
      name: "Prosciutto e Rucola",
      description: "tomato, mozzarella, prosciutto, arugula",
      price: 16.55,
      img: "./pizza-8.jpg",
    },
        {
        name: "Prosciutto e Rucola",
        description: "tomato, mozzarella, prosciutto, arugula",
        price: 16.55,
        img: "./pizza-4.jpg",
        },
        {
        name: "Prosciutto e Rucola",
        description: "tomato, mozzarella, prosciutto, arugula",
        price: 16.55,
        img: "./pizza-5.jpg",
        },
        {
        name: "Prosciutto e Rucola",
        description: "tomato, mozzarella, prosciutto, arugula",
        price: 16.55,
        img: "./pizza-6.jpg",
        },
        {
        name: "Prosciutto e Rucola",
        description: "tomato, mozzarella, prosciutto, arugula",
        price: 16.55,
        img: "./pizza-7.jpg",
        },
        {
        name: "Prosciutto e Rucola",
        description: "tomato, mozzarella, prosciutto, arugula",
        price: 16.55,
        img: "./pizza-8.jpg",
        },
  ];
  return (
    <ul className="flex flex-wrap">
      {data.map((pizza) => {
        return <PizzaItem key={pizza.img} data={pizza} />;
      })}

      
    </ul>
  );
}
