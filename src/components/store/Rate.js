import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  rateDetails: {},
};

const rateSlice = createSlice({
  name: "rate",
  initialState: initialValue,
  reducers: {
    setRate(state, action) {
      state.rateDetails = action.payload.details;
    },
  },
});

export const rateActions = rateSlice.actions;
export default rateSlice;
