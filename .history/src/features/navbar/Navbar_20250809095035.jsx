import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../searchOrder/Search";

export default function Navbar() {
  const resturantName = "رستوران ری اکت اصفهان";

  return (
    <nav className="flex items-center p-3 gap-4">
      <h1 className="flex-2 text-lg font-bold">{resturantName}</h1> {/* flex-2 ممکنه تعریف نشده باشه */}
      <div className="flex-1  max-w-xs">
        <Search />
      </div>
    </nav>
  );
}