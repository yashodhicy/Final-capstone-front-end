import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  errors: null,
  pending: false,
};

export const fetchUser = createAsyncThunk("fetch/user", async (session) => {
  const url = "https://house-rental-8mh7.onrender.com/auth/validate_token";
  const response = await axios.get(url, {
    params: {
      ...session,
    },
  });
  return response;
});

const reducer = createSlice({
  name: "user slice",
  initialState,
  reducers: {
    deleteUserData: () => initialState,
  },
  extraReducers: (build) => {
    build.addCase(fetchUser.fulfilled, (state, { payload }) => {
      toast.success(
        "You successfully logged in, welcome " + payload.data.data.username
      );
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
export const { deleteUserData } = reducer.actions;
