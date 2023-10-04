/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
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
      <Button className= 'reserve-button' disabled={!!selectedHouse} variant="primary" onClick={handleShow}>
        {selectedHouse ? "selected" : "select"}
      </Button>

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
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              selectHouse(selected);
              handleClose();
            }}
          >
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
