import { configureStore } from "@reduxjs/toolkit";
import order
export const store = configureStore({
    reducer : {
        orderItems : orderItemsReducer
    }
})