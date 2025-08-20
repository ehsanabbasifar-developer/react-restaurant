import React from "react";
import AppLayout from "../layout/AppLayout";
import { Link } from "react-router-dom";
import OrderList from "../features/order/OrderList";

export default function Order() {
  return (
    <AppLayout>
      <div className="p-3 font-Vazirmatn ">
        <Link to={"/menu"} className="text-blue-600 text-right block">
          برگشت به منو ➡️
        </Link>
        <p className="text-right me-2 mt-3 text-xl">لیست سفارشات شما</p>
        <OrderList/>
      </div>
    </AppLayout>
  );
}
