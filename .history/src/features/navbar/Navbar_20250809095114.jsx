import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../searchOrder/Search";

export default function Navbar() {
  const restaurantName = "رستوران ری اکت اصفهان";

  return (
    <nav className="flex items-center p-3 gap-4">
      <h1 className="flex-2 text-lg font-bold">{resturantName}</h1>
      <div className="flex-1">
        <Search />
      </div>
    </nav>
  );
}