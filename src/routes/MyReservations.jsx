import React, { useEffect } from "react";
import ReservationItem from "../components/Reservations/ReservationItem";
import { useDispatch, useSelector } from "react-redux";
import { getReservations } from "../Redux/reservation/middlewares";

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);
  return (
    <article className="p-3 d-flex flex-column align-items-center w-100">
      <h1 className="text-center text-secondary mb-5">My reservations</h1>
      <ul className="p-0 w-100" style={{ maxWidth: 1500 }}>
        {reservations.reservations.map((reservation, index) => (
          <ReservationItem key={index} reservation={reservation} />
        ))}
      </ul>
    </article>
  );
};

export default MyReservations;
