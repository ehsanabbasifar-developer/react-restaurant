import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearList } from "../../redux/orderItemsSlice";
import { useMutation } from "@tanstack/react-query";
import { insertOrder } from "../../api/apiOrder";

export default function AcceptOrder() {
  const dispatch = useDispatch();
  const allPrice = useSelector((store) =>
    store.orderItems.pizzas.reduce(
      (acc, value) => acc + value.price * value.number,
      0
    )
  );
  const {  orderMutate, isPending } = useMutation({
    mutationFn: insertOrder,
  });

  const navigate = useNavigate();
  function handleRejectButton() {
    dispatch(clearList());
    navigate("/menu");
  }
  return (
    <div className="flex p-2 mt-2 gap-x-3 items-center justify-center">
      <button
        onClick={() => orderMutate()}
        disabled={isPending}
        className="bg-yellow-400 rounded-full p-3 font-bold cursor-pointer"
      >
        پرداخت {allPrice}$ و ثبت سفارش
      </button>
      <button
        onClick={handleRejectButton}
        className="bg-white rounded-full p-3 font-bold cursor-pointer"
      >
        خالی کردن سبد خرید و برگشت به منو
      </button>
    </div>
  );
}
