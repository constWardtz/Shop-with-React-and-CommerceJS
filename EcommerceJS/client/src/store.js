import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./features/rootReducers";

export default configureStore({
  reducer: rootReducers,
});
