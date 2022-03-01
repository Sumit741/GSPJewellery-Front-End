import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cart";
import authSlice from "./LoginAuthentication";
import productSlice from "./Products";
import modalSlice from "./showModal";
const Store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    auth: authSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default Store;
