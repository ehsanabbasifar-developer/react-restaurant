import React from "react";
import AppLayout from "../layout/AppLayout";
import { Link } from "react-router-dom";

export default function Order() {
  return (
    <AppLayout>
      <div className="p-3 font-Vazirmatn">
        <Link to={"/menu"} className="text-blue-600 text-right block">
          برگشت به منو ➡️
        </Link>
        <p className="text-right me-2 mt-3 ">لیست سفارشات شما</p>
      </div>
    </AppLayout>
  );
}
