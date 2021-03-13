import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./cart/cartSlice";

export default combineReducers({
  cart: cartReducer,
});
