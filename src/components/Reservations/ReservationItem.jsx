/* eslint-disable react/prop-types */
const ReservationItem = ({ reservation }) => {
  return reservation ? (
    <li className="my-2 shadow border p-3 rounded d-flex flex-column flex-md-row w-100 justify-content-md-between align-items-center align-items-md-start">
      <div>
        <p>
          <span className=" fw-bold">Name: </span>{" "}
          {reservation.house ? reservation.house.name : "...loading"}
        </p>
        <p>
          <span className=" fw-bold">Booking date: </span>
          {new Date(reservation.booking_date).toString().split(" ")[1]}{" "}
          {new Date(reservation.booking_date).getDay()},
          {new Date(reservation.booking_date).toString().split(" ")[3]}{" "}
          <span>
            <i className="bi bi-calendar"></i>
          </span>
        </p>
        <p>
          <span className=" fw-bold">Return date: </span>
          {new Date(reservation.checkout_date).toString().split(" ")[1]}{" "}
          {new Date(reservation.checkout_date).getDay()} ,
          {new Date(reservation.checkout_date).toString().split(" ")[3]}{" "}
          <span>
            <i className="bi bi-calendar-event"></i>
          </span>
        </p>
        <p>
          <span className=" fw-bold">City: </span>{" "}
          {reservation.house ? reservation.house.location : "...loading"}
        </p>
      </div>
      <div className="d-flex flex-column align-items-center">
        <h4 className="text-dark mb-4">Total charge: ${reservation.total_charge}</h4>
        {reservation.house ? (
          <div
            className="rounded-3"
            style={{
              width: 300,
              overflow: "hidden",
              height: 250,
            }}
          >
            <img className="w-100 rounded-3" src={reservation.house.image} alt="" />
          </div>
        ) : (
          "...loading image"
        )}
      </div>
    </li>
  ) : (
    ""
  );
};

export default ReservationItem;
