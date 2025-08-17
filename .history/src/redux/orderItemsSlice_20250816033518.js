import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
};

const orderItemsSlice = createSlice({
  name: "orderItems",
  initialState,
  reducers : {
    addItem : (state,action)
  },
});
