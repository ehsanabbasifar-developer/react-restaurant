import React from "react";
import AppLayout from "../layout/AppLayout";

export default function TransitionOrder() {
  return (
    <AppLayout>
      <div className="flex flex-col font-Vazirmatn p-3">
        <div className="">
          <h2 className="text-2xl font-bold">سفارش #134245 وضیعت</h2>
          <span className="bg-green-400 p-2 text-white font-bold rounded-full">سفارش داده شده</span>
        </div>
      </div>
    </AppLayout>
  );
}
