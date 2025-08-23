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

  return (
    <div className="flex flex-col gap-y-6">
      <div className="bg-gray-200 p-3  mx-3">
        <p className="font-bold">
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
        <p className="font-bold">
            قیمت کل پیتزا شما : {data[0].details.obj.const initialState = {}
            
            export default (state = initialState, { type, payload }) => {
              switch (type) {
            
              case first:
                return { ...state, ...payload }
            
              default:
                return state
              }
            }
            }
        </p>
      </div>
    </div>
  );
}
