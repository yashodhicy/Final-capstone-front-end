import axios from "axios";
import { sessionParamsGenerator } from "../../components/utils/session";

const baseUrl = "https://house-rental-8mh7.onrender.com/api/v1";

export const reserve = (data) => {
  return axios.post(
    `${baseUrl}/houses/${
      data.house.id
    }/reservations${sessionParamsGenerator()}`,
    {
      booking_date: data.bookingDate,
      checkout_date: data.checkoutDate,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "include",
      },
    }
  );
};
