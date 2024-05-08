// src/redux/filters/filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameFilter: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.nameFilter = action.payload.toLowerCase();
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectFilter = (state) => state.filters.nameFilter;

export default filtersSlice.reducer;
