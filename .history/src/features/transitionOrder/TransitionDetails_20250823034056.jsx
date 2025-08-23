import React from "react";

export default function TransitionDetails({ data }) {
  if (!data || data.length === 0) return;
  const dateCreated = new Date(data[0].created_at).getTime();

  const diffMs = new Date() - dateCreated;
  const diffMin = Math.floor(diffMs / (1000 * 60));
  console.log(diffMin);

  return (
    <div className="flex flex-col">
      <div className="bg-gray-300">
        <p>از زمان ثبت سفارش شما {diffMin} دقیقه گزشته است</p>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
