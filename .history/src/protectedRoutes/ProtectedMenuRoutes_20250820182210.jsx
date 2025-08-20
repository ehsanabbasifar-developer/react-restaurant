import React, { useEffect } from "react";
import useCurrentUser from "../features/login/useCurrentUser";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";

export default function ProtectedMenuRoutes({ children }) {
  const { isAuth, isPending } = useCurrentUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth && !isPending) navigate("/login");
  }, [isAuth , isPending]);
  if (isPending)
    return (
      <div className="relative min-h-[300px]">
        <div className="flex inset-0 justify-center items-center absolute">
          <PulseLoader size={20} color="#bfc1c5" />
        </div>
      </div>
    );  
if(is)  return children;
}
