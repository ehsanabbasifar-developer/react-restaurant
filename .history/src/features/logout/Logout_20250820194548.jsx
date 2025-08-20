import React from "react";
import { IoIosLogOut } from "react-icons/io";
import useLogout from "./useLogout";

export default function Logout() {
  const { mutateLogout } = useLogout();
  return (
    <div onClick={() => mutateLogout}>
        <span>خروج</span>
      <IoIosLogOut />
    </div>
  );
}
