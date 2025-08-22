import React from "react";
import AppLayout from "../layout/AppLayout";
import useTransitionOrder from "../features/transitionOrder/useTransitionOrder";
import { useParams } from "react-router-dom";

export default function TransitionOrder() {
  const { transitionId } = useParams();
  console.log(transitionId);
  const {  , error } = useTransitionOrder(transitionId);
  console.log(data);
  console.log(error);
  
  return (
    <AppLayout>
      <div className="flex flex-col font-Vazirmatn p-3 mt-4">
        <div className="flex flex-row flex-wrap gap-y-1 justify-center gap-x-6">
          <h2 className="text-2xl font-bold">سفارش #134245 وضیعت</h2>
          <span className="bg-green-400  p-1 text-white font-bold rounded-full">
            سفارش داده شده
          </span>
        </div>
      </div>
    </AppLayout>
  );
}
