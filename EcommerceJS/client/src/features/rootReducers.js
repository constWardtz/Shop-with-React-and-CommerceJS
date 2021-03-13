import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./cart/cartSlice";
import currentItemReducer from "./currentItem/currentItemSlice";

export default combineReducers({
  cart: cartReducer,
  current: currentItemReducer,
});
