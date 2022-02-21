import { createSlice } from "@reduxjs/toolkit";

const initialValue = { id: 0, listOfProducts: [], listOfProductsAdmin: [] };

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
    setListOfProductsAdmin(state, action) {
      state.listOfProductsAdmin = action.payload.products;
    },
    setProductId(state, action) {
      state.id = action.payload.id;
    },
  },
});
export const productActions = productSlice.actions;
export default productSlice;
