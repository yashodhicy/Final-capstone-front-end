import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sessionParamsGenerator } from "../../components/utils/session";

const baseUrl = "https://house-rental-8mh7.onrender.com/api/v1";

export const getReservations = createAsyncThunk(
  "get/reservations",
  async () => {
    const response = await axios.get(
      `${baseUrl}/myreservations${sessionParamsGenerator()}`
    );
    return response.data;
  }
);

export const deleteReservations = createAsyncThunk('reservation/delete', async ({houseId,reservationId}) => {
  console.log("houseId:", houseId);
  console.log("reservationId:", reservationId);
  const response = await axios.delete(`${baseUrl}/houses/${houseId}/reservations/${reservationId}${sessionParamsGenerator()}`);

  if (response.status !== 200) {
    throw new Error('Delete request failed');
  }
  return response.data;
});