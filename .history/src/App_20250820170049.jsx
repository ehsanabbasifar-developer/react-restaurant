import React from "react";
import AppRoutes from "./router/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppRoutes />;
        <Toast
      </Provider>
    </QueryClientProvider>
  );
}
