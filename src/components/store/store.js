import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./showModal";
const Store = configureStore({
  reducer: { modal: modalSlice.reducer },
});

export default Store;
