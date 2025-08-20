import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearList } from "../../redux/orderItemsSlice";

export default function AcceptOrder() {
  const dispatch = useDispatch();
  const allPrice = useSelector((store) =>
    store.orderItems.pizzas.reduce(
      (acc, value) => acc + value.price * value.number,
      0
    )
  );
  function handleRegectButton () {
    dispatch(clearList)
  }
  const navigate = useNavigate();
  return (
    <div className="flex p-2 mt-2 gap-x-3 items-center justify-center">
      <button className="bg-yellow-400 rounded-full p-3 font-bold cursor-pointer">
        پرداخت {allPrice}$ و ثبت سفارش
      </button>
      <button
        onClick={() => navigate("/menu")}
        className="bg-white rounded-full p-3 font-bold cursor-pointer"
      >
        خالی کردن سبد خرید و برگشت به منو
      </button>
    </div>
  );
}
