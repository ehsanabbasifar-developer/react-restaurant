import React, { useEffect } from "react";
import useCurrentUser from "../features/login/useCurrentUser";
import { useNavigate } from "react-router-dom";

export default function ProtectedMenuRoutes({ children }) {
  const { isAuth, isPending } = useCurrentUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) navigate("/login");
  }, [isAuth]);
  if (isPending) return (
    <div className="relative min-h-[300px]">
        <div></div>
    </div>
  )
  return children;
}
