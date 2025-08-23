import React from "react";
import AppRoutes from "./router/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <reactq initialIsOpen={false} />
      <Provider store={store}>
        <AppRoutes />;
        <Toaster />
      </Provider>
    </QueryClientProvider>
  );
}
