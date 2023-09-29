/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Modal from "../components/Modal";
import ReactDatePicker from "react-datepicker";
import { Country, State, City } from "country-state-city";
import { Button, Form } from "react-bootstrap";
import TextTruncate from "react-text-truncate";

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <article
      className="d-flex align-items-center p-3 w-100 h-100 text-white"
      style={{
        backgroundColor: "rgba(172, 255, 47, 0.86)",
      }}
    >
      <div style={{ margin: "auto", padding: 10 }}>
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
        <form style={{ width: "100%", maxWidth: 400, margin: "auto" }}>
          <div className="d-flex justify-content-between gap-3 p-2 align-items-center">
            <label style={{ fontWeight: "bold" }} htmlFor="house">
              Select the house
            </label>
            <div className="d-flex w-50 gap-1">
              <Modal show={true} />
              <TextTruncate
                line={1}
                element="span"
                truncateText="…"
                text="Bungalow nex to the beach."
                // textTruncateChild={<a href="#">Read on</a>}
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
                selected={startDate}
                onChange={(date) => {
                  console.log(date);
                  setStartDate(date);
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
                minDate={startDate}
                selected={startDate}
                onChange={(date) => {
                  console.log(date);
                  setStartDate(date);
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
              <Form.Select aria-label="Default select example">
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
            <h2>Total charge: 300$</h2>
            <Button type="submit" variant="light">
              RESERVE NOW
            </Button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Reservation;
