/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Modal from "../components/Modal";
import ReactDatePicker from "react-datepicker";
import { City } from "country-state-city";
import {  Form } from "react-bootstrap";
import { toast } from "react-toastify";

import { useDispatch} from "react-redux";
import { reserve } from "../Redux/reservation/middlewares";
import "../components/componentsCss/reservation.css";;
import dateDifference from "../components/utils/dateDifference";

const Reservation = () => {
  const dispatch = useDispatch();

  const [selectedHouse, setSelectedHouse] = useState(null);
  const selectHouse = (house) => setSelectedHouse(house);
  const [startDate, setStartDate] = useState(new Date());
  const [bookDate, setBookDate] = useState(startDate);
  const [checkoutDay, setSheckoutDay] = useState(startDate);
  const [city, setCity] = useState("");

  const validate = () => {
    for (let el of [selectedHouse, bookDate, checkoutDay, city]) {
      if (el == null || el == "") return false;
    }
    return true;
  };
  const submitReservation = (e) => {
    e.preventDefault();
    if (!validate()) return toast.error("Please fill all the required fields");
    if(dateDifference(bookDate, checkoutDay) == 0) return toast.error("The booking and checkout dates are meant to be different!");
    const data = {
      bookingDate: new Date(bookDate).toISOString(),
      checkoutDate: new Date(checkoutDay).toISOString(),
      house: selectedHouse,
    };

    dispatch(reserve(data));
  };
  return (
    <div className="res-container">
    <article 
    className="d-flex align-items-center p-3 w-100 h-100 text-white reserve"  
    >
      <div className='form-container' style={{ margin: "auto", padding: 10 }}>
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
        <form className="form-reserve"
          onSubmit={submitReservation}
        >
          <div className="d-flex justify-content-between p-2 align-items-center">
            <label style={{ fontWeight: "bold" }} htmlFor="house">
              Select the house
            </label>
            <div className="d-flex w-50 gap-1 select align-items-end">
              <Modal selectHouse={selectHouse} show={true} />
              <span>
                {selectedHouse ? selectedHouse.name : "not selected"}
                </span>
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
            <button className='reserve-button' type="submit" >
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
