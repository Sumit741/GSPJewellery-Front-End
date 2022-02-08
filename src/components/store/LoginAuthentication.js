import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuthenticationTrue(state) {
      state.isAuth = true;
    },
    setAuthenticationFalse(state) {
      state.isAuth = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
