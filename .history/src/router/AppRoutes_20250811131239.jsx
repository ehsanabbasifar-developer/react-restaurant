import React, { lazy } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
const Login = 
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element ={}/>
      </Routes>
    </BrowserRouter>
  );
}
