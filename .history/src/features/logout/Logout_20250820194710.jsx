import React from "react";
import { IoIosLogOut } from "react-icons/io";
import useLogout from "./useLogout";

export default function Logout() {
  const { mutateLogout } = useLogout();
  return (
    <div className="flex items-center gap-x-2" onClick={() => mutateLogout}>
      <span className="font-bold ">خروج</span>
      <IoIosLogOut />
    </div>
  );
}
