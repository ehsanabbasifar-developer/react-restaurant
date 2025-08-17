import React from "react";
import AppRoutes from "./router/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
export default function App() {

  return (
    <QueryClientProvider>
      
    </QueryClientProvider>
     <AppRoutes />;
  )
}
