import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cart";
import authSlice from "./LoginAuthentication";
import productSlice from "./Products";
import searchSlice from "./search";
import modalSlice from "./showModal";
const Store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    auth: authSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default Store;
