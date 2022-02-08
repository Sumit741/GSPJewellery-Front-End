import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./LoginAuthentication";
import modalSlice from "./showModal";
const Store = configureStore({
  reducer: { modal: modalSlice.reducer, auth: authSlice.reducer },
});

export default Store;
