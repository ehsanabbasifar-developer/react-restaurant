import React, { lazy } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ProtectedOrderRoute from "../protectedRoutes/ProtectedOrderRoute";
import ProtectedMenuRoutes from "../protectedRoutes/ProtectedMenuRoutes";
const Home = lazy(() => import("../pages/Home"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Login = lazy(() => import("../pages/Login"));
const Menu = lazy(() => import("../pages/Menu"));
const Order = lazy(() => import("../pages/Order"));
const TransitionOrder = lazy(() => import("../pages/TransitionOrder"));
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/menu"
          element={
            <ProtectedMenuRoutes>
              <Menu />
            </ProtectedMenuRoutes>
          }
        />
        <Route
          path="/order"
          element={
            <ProtectedOrderRoute>
              <Order />
            </ProtectedOrderRoute>
          }
        />
        <Route path="/order/:transitionId" element={<TransitionOrder />} />
      </Routes>
    </BrowserRouter>
  );
}
