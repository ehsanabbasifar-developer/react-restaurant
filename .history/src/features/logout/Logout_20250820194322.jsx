import React from "react";
import { IoIosLogOut } from "react-icons/io";
import useLogout from "./useLogout";

export default function Logout() {
   const  {}= useLogout()
  return (
    <div>
      <IoIosLogOut />
    </div>
  );
}
