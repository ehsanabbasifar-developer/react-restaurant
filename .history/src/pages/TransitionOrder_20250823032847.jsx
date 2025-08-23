import React from "react";
import AppLayout from "../layout/AppLayout";
import useTransitionOrder from "../features/transitionOrder/useTransitionOrder";
import { useParams } from "react-router-dom";
import TransitionHeader from "../features/transitionOrder/TransitionHeader";
import TransitionDetails from "../features/transitionOrder/TransitionDetails";

export default function TransitionOrder() {
  const { transitionId } = useParams();
  const { data, error } = useTransitionOrder(transitionId);
  console.log(data);
  
  return (
    <AppLayout>
      <div className="flex flex-col font-Vazirmatn p-3 mt-4">
        <TransitionHeader transitionId={transitionId} />
        <TransitionDetails data = {data}/>
      </div>
    </AppLayout>
  );
}
