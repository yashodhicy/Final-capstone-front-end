import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  errors: null,
  pending: true,
};

export const fetchUser = createAsyncThunk("fetch/user", async (data) => {
  const url = "https://house-rental-8mh7.onrender.com/auth/validate_token";
  const response = await axios.get(url, {
    params: {
      ...data,
    },
  });
  return response;
});

const reducer = createSlice({
  name: "user slice",
  initialState,
  extraReducers: (build) => {
    build.addCase(fetchUser.fulfilled, (state, { payload }) => {
      return {
        ...state,
        user: payload.data.data,
        pending: false,
        errors: null,
      };
    });
    build.addCase(fetchUser.pending, (state) => {
      return {
        ...state,
        user: null,
        pending: true,
        errors: null,
      };
    });
    build.addCase(fetchUser.rejected, (state, action) => {
      return {
        ...state,
        user: null,
        pending: false,
        errors: action.error,
      };
    });
  },
});

export default reducer.reducer;
