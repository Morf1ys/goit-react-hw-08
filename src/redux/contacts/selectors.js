import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [(state) => state.contacts.items, (state) => state.filters.nameFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  }
);
