import React from "react";
import AppLayout from "../layout/AppLayout";

export default function TransitionOrder() {
  return (
    <AppLayout>
      <div className="flex flex-col font-Vazirmatn p-3 mt-4">
        <div className="flex flex-row flex-wrap gap-y-1 justify-center ali">
          <h2 className="text-3xl font-bold">سفارش #134245 وضیعت</h2>
          <span className="bg-green-400 text-xl p-1 text-white font-bold rounded-full">سفارش داده شده</span>
        </div>
      </div>
    </AppLayout>
  );
}
