import React from "react";
import useCurrentUser from "../features/login/useCurrentUser";

export default function ProtectedMenuRoutes({ children }) {
  const { isAuth , isPending  } = useCurrentUser();
  return children;
}
