import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../searchOrder/Search";

export default function Navbar() {
  const resturantName = "رستوران ری اکت اصفهان";
  return (
    <nav className="flex justify-between p-3 items-center">
      <h1 className="flex-1 baisa">{resturantName}</h1>
      <Search />
    </nav>
  );
}
