import React from "react";

export default function TransitionDetailsItem({data}) {
    console.log(data);
    
  return <div className="flex justify-between">
    <span>{}</span>
    <span>{data.number} ✖ {data.pizza_name}  </span>
  </div>;
}
