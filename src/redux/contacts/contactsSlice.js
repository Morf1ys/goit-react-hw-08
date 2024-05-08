import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from "../contactsOps";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload; // Запис даних контактів
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Збереження повідомлення про помилку
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload); // Додавання нового контакту
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload // Видалення контакту
        );
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload; // Оновлення контакту
        }
      });
  },
});

// export const selectFilteredContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export default contactsSlice.reducer;

export const selectFilteredContacts = createSelector(
  [(state) => state.contacts.items, (state) => state.filters.nameFilter],
  (items, filter) =>
    items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
