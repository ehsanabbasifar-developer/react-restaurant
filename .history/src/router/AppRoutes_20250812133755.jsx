import React, { lazy } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
const SignUp = lazy(() => import("../pages/SignUp"));
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path = "/login" element = {<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
