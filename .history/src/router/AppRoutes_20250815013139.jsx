import React, { lazy } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Login = lazy(() => import("../pages/Login"));
const Menu = lazy(() => import("../pages/Menu"));
const Order = lazy(() => import("../pages/Menu"));
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path = "/order" element = {}/>
      </Routes>
    </BrowserRouter>
  );
}
