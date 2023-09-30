import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://house-rental-8mh7.onrender.com/api/v1";

export const reserve = createAsyncThunk("add/reservation", async (data) => {
  const response = await axios.post(
    `${baseUrl}/houses/${data.house.id}/reservations?access-token=ttbqe7K338BIaChQ6-xmUg&client=Z7druuGq8xXAeW1U6QznSA&uid=brhanu@gamil.com`,
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
      `${baseUrl}/houses/1/reservations?access-token=ttbqe7K338BIaChQ6-xmUg&client=Z7druuGq8xXAeW1U6QznSA&uid=brhanu@gamil.com`
    );
    return response.data;
  }
);
