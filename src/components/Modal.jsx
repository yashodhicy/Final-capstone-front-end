/* eslint-disable react/prop-types */
import { useState } from "react";
import {ListGroup } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import HouseModalItem from "./HouseModalItem";

function Example({ selectHouse, selectedHouse }) {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const houses = useSelector((state) => state.Houses).houses;

  return (
    <>
      <button className= 'reserve-button' disabled={!!selectedHouse} onClick={handleShow}>
        {selectedHouse ? "selected" : "select"}
      </button>

      <Modal
        scrollable
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Select a house from the list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Modal body */}
          <ListGroup as="ol">
            {houses.map((house, index) => (
              <HouseModalItem
                elToMatch={selected}
                setSelected={setSelected}
                key={index}
                house={house}
              />
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            Cancel
          </button>
          <button
            variant="primary"
            onClick={() => {
              selectHouse(selected);
              handleClose();
            }}
          >
            Continue
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
