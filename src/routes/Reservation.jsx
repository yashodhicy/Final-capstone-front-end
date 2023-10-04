/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import ReactDatePicker from "react-datepicker";
import { City } from "country-state-city";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import "../components/componentsCss/reservation.css";
import dateDifference from "../components/utils/dateDifference";
import { reserve } from "./features/reservation";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import { useSelector } from "react-redux";

const Reservation = () => {
  const houses = useSelector((state) => state.Houses).houses;
  const params = new URLSearchParams(window.location.search);
  const [selectedHouse, setSelectedHouse] = useState(
    houses.find((house) => house.id == params.get("id"))
  );
  const selectHouse = (house) => setSelectedHouse(house);
  const [startDate, setStartDate] = useState(new Date());
  const [bookDate, setBookDate] = useState(startDate);
  const [checkoutDay, setSheckoutDay] = useState(startDate);
  const [city, setCity] = useState("");

  useEffect(() => {
    setSelectedHouse(houses.find((house) => house.id == params.get("id")));
  }, [houses]);

  const validate = () => {
    for (let el of [selectedHouse, bookDate, checkoutDay, city]) {
      if (el == null || el == "") return false;
    }
    return true;
  };

  const reset = () => {
    setSelectedHouse(null);
    setBookDate(startDate);
    setSheckoutDay(startDate);
    setCity(null);
  };

  const submitReservation = async (e) => {
    e.preventDefault();
    if (!validate()) return toast.error("Please fill all the required fields");
    if (dateDifference(bookDate, checkoutDay) <= 0)
      return toast.error(
        "The checkout date is suppose to be greater than the booking date!"
      );
    const data = {
      bookingDate: new Date(bookDate).toISOString(),
      checkoutDate: new Date(checkoutDay).toISOString(),
      house: selectedHouse,
    };
    try {
      const { data: reservations } = await reserve(data);
      if (reservations) {
        toast.success(
          <p>
            Reservation successful! You can see your reservations{" "}
            <a href="/reservations">here</a>
          </p>
        );
      }
    } catch (error) {
      console.log(error);
      toast.error(
        "An error occured while trying to reserve the house, please try again!"
      );
    }
  };
  return (
    <div className="res-container">
      <article className="d-flex align-items-center p-3 w-100 h-100 text-white reserve">
        <div className="form-container" style={{ margin: "auto", padding: 10 }}>
          <h1
            style={{
              fontSize: 50,
              fontWeight: "normal",
              wordSpacing: 20,
              letterSpacing: 5,
            }}
          >
            Have a reservation
          </h1>
          <hr
            style={{
              height: 3,
              width: "100%",
              border: "white 2px black",
              backgroundColor: "white",
            }}
          />
          <form className="form-reserve" onSubmit={submitReservation}>
            <div className="d-flex justify-content-between p-2 align-items-center">
              <label style={{ fontWeight: "bold" }} htmlFor="house">
                Select the house
              </label>
              <div className="d-flex w-50 gap-1 d-flex w-50 gap-1 select align-items-end">
                <Modal
                  selectedHouse={houses.find(
                    (house) => house.id == params.get("id")
                  )}
                  selectHouse={selectHouse}
                  show={true}
                />
                <TextTruncate
                  className="w-100"
                  line={2}
                  element="p"
                  truncateText="…"
                  text={selectedHouse ? selectedHouse.name : "not selected"}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between p-2 align-items-center">
              <label style={{ fontWeight: "bold" }} htmlFor="house">
                Booking Date
              </label>
              <div>
                <ReactDatePicker
                  minDate={startDate}
                  selected={bookDate ? bookDate : startDate}
                  onChange={(date) => {
                    setBookDate(date);
                  }}
                  showDisabledMonthNavigation
                />
              </div>
            </div>
            <div className="d-flex justify-content-between p-2 align-items-center">
              <label style={{ fontWeight: "bold" }} htmlFor="house">
                Return Date
              </label>
              <div>
                <ReactDatePicker
                  minDate={bookDate ? bookDate : startDate}
                  selected={
                    checkoutDay ? checkoutDay : bookDate ? bookDate : startDate
                  }
                  onChange={(date) => {
                    setSheckoutDay(date);
                  }}
                  showDisabledMonthNavigation
                />
              </div>
            </div>
            <div className="d-flex justify-content-between p-2 align-items-center">
              <label style={{ fontWeight: "bold" }} htmlFor="house">
                Select the desired city
              </label>
              <div
                className="d-flex justify-content-end"
                style={{ width: "200px" }}
              >
                <Form.Select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>Select the city</option>
                  {City.getAllCities()
                    .slice(1, 100)
                    .map((city, index) => {
                      return (
                        <option key={index} value={city.name}>
                          {city.name}
                        </option>
                      );
                    })}
                </Form.Select>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <h2>
                Total charge:{" "}
                {selectedHouse
                  ? dateDifference(bookDate, checkoutDay) * selectedHouse.price
                  : 0}
                $
              </h2>
              <button className="reserve-button" type="submit">
                RESERVE NOW
              </button>
            </div>
          </form>
        </div>
      </article>
    </div>
  );
};

export default Reservation;
