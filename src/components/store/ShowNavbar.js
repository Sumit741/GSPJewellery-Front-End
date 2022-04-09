import { createSlice } from "@reduxjs/toolkit";

const initialValue = { status: true };

const navSlice = createSlice({
  name: "products",
  initialState: initialValue,
  reducers: {
    setStatusTrue(state, action) {
      state.status = true;
    },
    setStatusFalse(state, action) {
      state.status = false;
    },
  },
});
export const navActions = navSlice.actions;
export default navSlice;
