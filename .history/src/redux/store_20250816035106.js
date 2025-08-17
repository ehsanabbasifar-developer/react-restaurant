import { configureStore } from "@reduxjs/toolkit";
import orderItems
export const store = configureStore({
    reducer : {
        orderItems : orderItemsReducer
    }
})