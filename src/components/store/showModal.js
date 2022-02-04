import { createSlice } from "@reduxjs/toolkit";

const initialState = { modalVisible: false };
const modalSlice = createSlice({
  name: "showModal",
  initialState: initialState,
  reducers: {
    showModal(state) {
      state.modalVisible = true;
    },
    hideModal(state) {
      state.modalVisible = false;
    },
  },
});
export const modalAction = modalSlice.actions;
export default modalSlice;
