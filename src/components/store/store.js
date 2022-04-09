import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cart";
import authSlice from "./LoginAuthentication";
import productSlice from "./Products";
import rateSlice from "./Rate";
import searchSlice from "./search";
import modalSlice from "./showModal";
import navSlice from "./ShowNavbar";
const Store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    auth: authSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    search: searchSlice.reducer,
    rate: rateSlice.reducer,
    nav: navSlice.reducer,
  },
});

export default Store;
