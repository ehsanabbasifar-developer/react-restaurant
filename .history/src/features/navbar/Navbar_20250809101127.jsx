import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../searchOrder/Search";

export default function Navbar() {
  const restaurantName = "رستوران ری اکت اصفهان";

  return (
    <>
    <nav className="flex items-center p-3 gap-4 md:hidden">
      <h1 className="flex-5 sm:flex-1 text-lg font-bold">{restaurantName}</h1>
      <div className="flex-3 sm:flex-1">
        <Search />
      </div>
    </nav>
    <nav className="flex items-center">

    </nav>
    </>
  );
}