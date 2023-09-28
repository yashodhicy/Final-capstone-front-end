import React from "react";
import { Button } from "react-bootstrap";
import Modal from '../components/Modal'

const Reservation = () => {
  return (
    <article
      style={{
        width: "100%",
        height: "100%",
        color: "white",
        backgroundColor: "aqua",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ margin: "auto", backgroundColor: "grey", padding: 10 }}>
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
        <hr />
        <form style={{ width: "100%", maxWidth: 300, margin: "auto" }}>
          <div
            className=""
            style={{
              backgroundColor: "red",
              display: "flex",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <label htmlFor="house">Select the house</label>
            <Modal show={true}/>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Reservation;
