import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "https://connections-api.herokuapp.com/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { getState }) => {
    const token = getState().auth.token;
    try {
      const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      toast.error("Failed to fetch contacts.");
      throw error;
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/add",
  async (contact, { getState }) => {
    const token = getState().auth.token;
    try {
      const response = await axios.post(API_URL, contact, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Contact added successfully!");
      return response.data;
    } catch (error) {
      toast.error("Failed to add contact.");
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (contactId, { getState }) => {
    const token = getState().auth.token;
    try {
      await axios.delete(`${API_URL}/${contactId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Contact deleted successfully!");
      return contactId;
    } catch (error) {
      toast.error("Failed to delete contact.");
      throw error;
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/update",
  async ({ id, contact }, { getState }) => {
    const token = getState().auth.token;
    try {
      const response = await axios.patch(`${API_URL}/${id}`, contact, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Contact updated successfully!");
      return response.data;
    } catch (error) {
      toast.error("Failed to update contact.");
      throw error;
    }
  }
);
