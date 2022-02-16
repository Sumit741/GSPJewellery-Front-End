import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalVisible: false,
  amdinModalVisible: false,
  modalText: "",
};
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
    setModalText(state, action) {
      state.modalText = action.payload.text;
    },
    showAdminModal(state) {
      state.amdinModalVisible = true;
    },
    hideAdminModal(state) {
      state.amdinModalVisible = false;
    },
  },
});
export const modalAction = modalSlice.actions;
export default modalSlice;
