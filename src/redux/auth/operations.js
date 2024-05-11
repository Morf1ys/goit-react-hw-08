import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUser, setLogout } from "./authSlice";

const API_BASE_URL = "https://connections-api.herokuapp.com";

const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/signup`,
        userData
      );
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      clearAuthHeader();
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/users/login`,
        userData
      );
      setAuthHeader(response.data.token);
      dispatch(
        setUser({ user: response.data.user, token: response.data.token })
      );
      return response.data;
    } catch (error) {
      clearAuthHeader();
      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch, getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      await axios.post(
        `${API_BASE_URL}/users/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${auth.token}` },
        }
      );
      clearAuthHeader();
      dispatch(setLogout());
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState();
    if (!auth.token) return rejectWithValue("No token available");

    try {
      const response = await axios.get(`${API_BASE_URL}/users/current`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const clearAuthHeader = () => {
  delete axios.defaults.headers.common["Authorization"];
};
