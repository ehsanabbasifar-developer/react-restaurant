import { configureStore } from "@reduxjs/toolkit";
import orderItemsReducer from "./"
export const store = configureStore({
    reducer : {
        orderItems : orderItemsReducer
    }
})