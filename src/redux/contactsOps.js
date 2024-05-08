// src/redux/contacts/contactsOps.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://connections-api.herokuapp.com/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { getState }) => {
    const token = getState().auth.token;
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/add",
  async (contact, { getState }) => {
    const token = getState().auth.token;
    const response = await axios.post(API_URL, contact, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (contactId, { getState }) => {
    const token = getState().auth.token;
    await axios.delete(`${API_URL}/${contactId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return contactId;
  }
);

export const updateContact = createAsyncThunk(
  "contacts/update",
  async ({ id, contact }, { getState }) => {
    const token = getState().auth.token;
    // Створюємо об'єкт з даними, які потрібно оновити
    const contactData = {
      name: contact.name,
      number: contact.number,
    };
    const response = await axios.patch(`${API_URL}/${id}`, contactData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);
