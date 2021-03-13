import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./cart";
import currentItemReducer from "./currentItem";

export default combineReducers({
  cart: cartReducer,
  current: currentItemReducer,
});
