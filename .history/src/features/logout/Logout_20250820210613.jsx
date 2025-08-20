import React from "react";
import { IoIosLogOut } from "react-icons/io";
import useLogout from "./useLogout";

export default function Logout() {
  const { mutateLogout } = useLogout();
  return (
    <div className="ms-auto flex items-center gap-x-2 p-2 mt-3" onClick={() => mutateLogout}>
      <span className="font-bold ">خروج</span>
      <IoIosLogOut />
    </div>
  );
}
