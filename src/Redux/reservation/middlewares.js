import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sessionParamsGenerator } from "../../components/utils/session";

const baseUrl = "https://house-rental-8mh7.onrender.com/api/v1";

export const reserve = createAsyncThunk("add/reservation", async (data) => {
  const response = await axios.post(
    `${baseUrl}/houses/${data.house.id}/reservations${sessionParamsGenerator()}`,
    {

      booking_date: data.bookingDate,
      checkout_date: data.checkoutDate,
    },
    {
      headers: {
        'Access-Control-Allow-Origin': 'include'
      }
    }
  );
  return response.data;
});

export const getReservations = createAsyncThunk(
  "get/reservations",
  async () => {
    const response = await axios.get(
      `${baseUrl}/myreservations${sessionParamsGenerator()}`
    );
    console.log(response.data);
    return response.data;
  }
);
