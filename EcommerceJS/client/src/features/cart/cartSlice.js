import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, { payload }) => {
      const { item } = payload;
      state.push({ item });
    },
  },
});

const { reducer, actions } = cartSlice;

export const { addToCart } = actions;
export default reducer;
