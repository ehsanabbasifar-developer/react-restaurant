import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
};

const orderItemsSlice = createSlice({
  name: "orderItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.pizzas.push({ ...action.payload, number: 1 });
    },
    removeItem: (state, action) => {
      state.pizzas = state.pizzas.filter((item) => item.id !== action.payload);
    },
    clearList: (state, action) => {
      state.pizzas = [];
    },
    increaseNumber: (state, action) => {
      const target = state.pizzas.find((item) => item.id === action.payload);
      if (target) target.number += 1;
    },
    decreaseNumber: (state, action) => {
      if (state.pizzas.find((item) => item.id === action.payload).number >= 2) {
        const target = state.pizzas.find((item) => item.id === action.payload);
        if (target) target.number -= 1;
      }
    },
  },
});

export default orderItemsSlice.reducer;

export const {
  decreaseNumber,
  increaseNumber,
  clearList,
  removeItem,
  addItem,
} = orderItemsSlice.actions;
