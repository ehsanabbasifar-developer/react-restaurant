import React from "react";

export default function MenuItems() {
  const data = [
    {
      name: "Prosciutto e Rucola",
      description: "tomato, mozzarella, prosciutto, arugula",
      price: 16.0,
      img: "./pizza-4.jpg",
    },
    {
      name: "Prosciutto e Rucola",
      description: "tomato, mozzarella, prosciutto, arugula",
      price: 16.0,
      img: "./pizza-5.jpg",
    },{
      name: "Prosciutto e Rucola",
      description: "tomato, mozzarella, prosciutto, arugula",
      price: 16.0,
      img: "./pizza-6.jpg",
    } ,{
      name: "Prosciutto e Rucola",
      description: "tomato, mozzarella, prosciutto, arugula",
      price: 16.0,
      img: "./pizza-7.jpg",
    },
    {
      name: "Prosciutto e Rucola",
      description: "tomato, mozzarella, prosciutto, arugula",
      price: 16.0,
      img: "./pizza-8.jpg",
    }
  ];
  return (
    <div>
        {data.map((pizza) => {
            return <PizzaItem key = {pizza.img} data ={pi}/>
        })}
    </div>
  )
}
