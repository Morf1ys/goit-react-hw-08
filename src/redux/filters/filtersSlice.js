import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameFilter: "", // Фільтр за іменем
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.nameFilter = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

// Селектор для отримання поточного фільтра
export const selectFilter = (state) => state.filters.nameFilter;

export default filtersSlice.reducer;
