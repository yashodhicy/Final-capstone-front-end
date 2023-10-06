import { createSlice } from "@reduxjs/toolkit";
import { getReservations } from "./middlewares";
const initialState = {
  error: null,
  isPending: true,
  reservations: [],
};

const reservationSlice = createSlice({
  name: "reservation reduicer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getReservations.pending, (state) => {
        return {
          ...state,
          isPending: true,
          error: null,
        };
      })
      .addCase(getReservations.fulfilled, (state, { payload }) => {
        return {
          reservations: payload,
          isPending: false,
          error: null,
        };
      })
      .addCase(getReservations.rejected, (state, { payload }) => {
        return {
          ...state,
          isPending: false,
          error: payload,
        };
      })
  },
});

export default reservationSlice.reducer;
