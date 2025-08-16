import { configureStore } from "@reduxjs/toolkit";
import orderItemsR
export const store = configureStore({
    reducer : {
        orderItems : orderItemsReducer
    }
})