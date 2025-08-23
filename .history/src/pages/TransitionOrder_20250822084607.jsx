import React from "react";
import AppLayout from "../layout/AppLayout";

export default function TransitionOrder() {
  return (
    <AppLayout>
      <div className="flex flex-col font-Vazirmatn p-3">
        <div className="text-2xl">
          <h2>سفارش #134245 وضیعت</h2>
          <span className="bg-green-400 rounded-full">سفارش داده شده</span>
        </div>
      </div>
    </AppLayout>
  );
}
