import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCartSlice: (state, { payload }) => {
      const { success, event, product_id } = payload;
      // const inCart = state.find(item => item.id === cart.id)
      state.push({ success, event, product_id });
    },
  },
});

const { reducer, actions } = cartSlice;

export const { addToCartSlice } = actions;
export default reducer;
