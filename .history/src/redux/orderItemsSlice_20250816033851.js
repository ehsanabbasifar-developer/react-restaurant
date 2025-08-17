import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
};

const orderItemsSlice = createSlice({
  name: "orderItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.pizzas.push(action.payload);
    },
    removeItem : (state,action) => {
        state.pizzas = state.pizzas.fil
    }
  },
});
