import { configureStore } from "@reduxjs/toolkit";
import siteReducer from "./siteSlice";
import cartSlice from "./cartSlice";
export default configureStore({
  reducer: {
    site: siteReducer,
    cart:cartSlice
  },
});
