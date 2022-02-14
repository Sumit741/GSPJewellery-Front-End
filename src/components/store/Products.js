import { createSlice } from "@reduxjs/toolkit";

const initialValue = { listOfProducts: [] };

const productSlice = createSlice({
  name: "products",
  initialState: initialValue,
  reducers: {
    setListOfProducts(state, action) {
      state.listOfProducts = action.payload.listOfProducts;
    },
    setToInitialState(state, action) {
      state.listOfProducts = initialValue.listOfProducts;
    },
  },
});
export const productActions = productSlice.actions;
export default productSlice;
