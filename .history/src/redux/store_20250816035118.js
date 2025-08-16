import { configureStore } from "@reduxjs/toolkit";
import orderItemsReducer from "./orderItemsSlice";
export const store = configureStore({
  reducer: {
    orderItems: orderItemsReducer,
  },
});
