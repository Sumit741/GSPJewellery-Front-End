import { createSlice } from "@reduxjs/toolkit";

const initialValue = { keyword: "", searchList: [] };

const searchSlice = createSlice({
  name: "products",
  initialState: initialValue,
  reducers: {
    setKeyword(state, action) {
      state.keyword = action.payload.keyword;
    },
    setSearchList(state, action) {
      state.searchList = action.payload.products;
    },
  },
});
export const searchActions = searchSlice.actions;
export default searchSlice;
