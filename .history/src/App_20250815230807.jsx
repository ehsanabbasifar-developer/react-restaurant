import React from "react";
import AppRoutes from "./router/AppRoutes";
import { QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function App() {

  return () <AppRoutes />;
}
