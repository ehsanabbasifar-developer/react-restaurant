import React from "react";
import TransitionDetailsItem from "./TransitionDetailsItem";

export default function TransitionDetails({ data }) {
  if (!data || data.length === 0) return;
  const dateCreated = new Date(data[0].created_at).getTime();
  const formatted = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(dateCreated);
  const diffMs = new Date() - dateCreated;
  const diffMin = Math.floor(diffMs / (1000 * 60));
  console.log(data);
  
  return (
    <div className="flex flex-col">
      <div className="bg-gray-200 p-3  mx-3">
        <p className="font-bold">
          از زمان ثبت سفارش شما {diffMin} دقیقه گذشته است{" "}
        </p>
        <p className="text-center mt-3">( {formatted} )</p>
      </div>
      <div>
        {data[].details?.obj.map((item) => {
            <TransitionDetailsItem/>
        })}
      </div>
      <div></div>
    </div>
  );
}
