import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  adminAuth: false,
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
    setAdminAuthenticationFalse(state, action) {
      state.adminAuth = action.payload.isAuth;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
