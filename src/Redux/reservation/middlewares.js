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
