import React from "react";
import TransitionDetailsItem from "./TransitionDetailsItem";
import { PulseLoader } from "react-spinners";

export default function TransitionDetails({ isPending, data }) {
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
  const totalPrice = data[0].details.obj.reduce(
    (acc, value) => acc + value.price * value.number,
    0
  );
  console.log(isLoading);
  
  if (isLoading)
    return (
      <div className="relative min-h-[300px]">
        <div className="flex  inset-0  justify-center items-center">
          <PulseLoader size={20} color="#bfc1c5" />
        </div>
      </div>
    );
  return (
    <div className="flex flex-col gap-y-6">
      <div className="bg-gray-200 p-3  mx-3">
        <p className="font-bold text-center">
          از زمان ثبت سفارش شما {diffMin} دقیقه گذشته است{" "}
        </p>
        <p className="text-center mt-3">( {formatted} )</p>
      </div>
      <div className="flex flex-col gap-y-6">
        {data[0].details.obj.map((item) => {
          return <TransitionDetailsItem data={item} key={item.created_at} />;
        })}
      </div>
      <div className="bg-gray-200 p-3 mx-3">
        <p className="font-bold text-center">
          قیمت کل پیتزا شما : ${totalPrice}
        </p>
      </div>
    </div>
  );
}
