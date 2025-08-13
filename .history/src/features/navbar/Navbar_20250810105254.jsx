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
      <nav className=" items-center p-3 hidden justify-between md:flex">
        <h1 className="text-lg font-bold">{restaurantName}</h1>
        <ul className="flex  items-center justify-between gap-x-6">
          <li>
            <Search />
          </li>
          <li>
            <NavLink to={"/menu"}>منو</NavLink>
          </li
          <li>
            <NavLink to={"/Login"}>ورود</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
