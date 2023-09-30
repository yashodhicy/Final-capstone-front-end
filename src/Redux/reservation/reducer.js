import { createSlice } from "@reduxjs/toolkit";
import { getReservations, reserve } from "./middlewares";
import { toast } from "react-toastify";
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
      .addCase(reserve.pending, (state) => {
          return {
              ...state,
          isPending: true,
          error: null,
        };
      })
      .addCase(reserve.fulfilled, (state, { payload }) => {
          toast.success("Reservation successful")
          return {
              reservations: payload,
          isPending: false,
          error: null,
        };
    })
    .addCase(reserve.rejected, (state, { payload }) => {
          toast.error("An error occured while reserving the house")
        return {
          ...state,
          isPending: false,
          error: payload,
        };
      });
  },
});

export default reservationSlice.reducer;
