import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "currentItem",
  initialState: { item: null },
  reducers: {
    currentItemSlice: (state, { payload }) => {
      state.item = payload;
    },
  },
});

const { reducer, actions } = itemSlice;

export const { currentItemSlice } = actions;

export default reducer;
