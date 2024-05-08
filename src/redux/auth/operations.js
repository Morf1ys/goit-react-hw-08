import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setUser, setLogout } from "./authSlice";
// Основна адреса API
const API_BASE_URL = "https://connections-api.herokuapp.com";

// Реєстрація нового користувача
export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/signup`,
        userData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Логін існуючого користувача
export const login = createAsyncThunk(
  "auth/login",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/login`,
        userData
      );
      dispatch(
        setUser({ user: response.data.user, token: response.data.token })
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch, getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const response = await axios.post(
        `${API_BASE_URL}/users/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${auth.token}` },
        }
      );
      dispatch(setLogout());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// Оновлення стану користувача
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/current`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
