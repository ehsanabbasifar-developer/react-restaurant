import React from "react";
import AppLayout from "../layout/AppLayout";
import { Link } from "react-router-dom";

export default function Order() {
  return (
    <AppLayout>
      <div className="p-3">
        <Link to={"/menu"} className="text-blue-600 text-right block font-Vazirmatn">
          برگشت به منو ➡️
        </Link>
      </div>
    </AppLayout>
  );
}
