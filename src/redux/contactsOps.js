import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://connections-api.herokuapp.com/contacts";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addContact = createAsyncThunk("contacts/add", async (contact) => {
  const response = await axios.post(API_URL, contact);
  return response.data;
});

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (contactId) => {
    await axios.delete(`${API_URL}/${contactId}`);
    return contactId;
  }
);

export const updateContact = createAsyncThunk(
  "contacts/update",
  async ({ id, contact }) => {
    const response = await axios.patch(`${API_URL}/${id}`, contact);
    return response.data;
  }
);
