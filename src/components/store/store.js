import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./LoginAuthentication";
import productSlice from "./Products";
import modalSlice from "./showModal";
const Store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    auth: authSlice.reducer,
    product: productSlice.reducer,
  },
});

export default Store;
