import { useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
// import { Form } from "react-router-dom";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Select
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
            <ListGroup.Item
              className="my-1"
              as="li"
              style={{ backgroundColor: "rgba(172, 255, 47, 0.86)" }}
            >
              <Form.Check // prettier-ignore
                type="radio"
                size="lg"
                id={`default-radio`}
                label={
                  <div>
                    <div className="d-flex justify-content-between gap-2">
                      <div className="" style={{ width: 150 }}>
                        <img
                          className="w-100 "
                          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600"
                        />
                      </div>
                      <div>
                        <h5 className="fs-5">Bungalow next to the beach</h5>
                        <h6>Price per day: 100$</h6>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quasi, ea.
                    </p>
                  </div>
                }
                name="house"
                value={2}
                onChange={(e) => console.log(e.target.value)}
              />
            </ListGroup.Item>
            <ListGroup.Item
              className="my-1"
              as="li"
              style={{ backgroundColor: "rgba(172, 255, 47, 0.86)" }}
            >
              <Form.Check // prettier-ignore
                type="radio"
                size="lg"
                id={`default-radio`}
                label={
                  <div>
                    <div className="d-flex justify-content-between gap-2">
                      <div className="" style={{ width: 150 }}>
                        <img
                          className="w-100 "
                          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600"
                        />
                      </div>
                      <div>
                        <h5 className="fs-5">Bungalow next to the beach</h5>
                        <h6>Price per day: 100$</h6>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quasi, ea.
                    </p>
                  </div>
                }
                name="house"
                value={2}
                onChange={(e) => console.log(e.target.value)}
              />
            </ListGroup.Item>
            <ListGroup.Item
              className="my-1"
              as="li"
              style={{ backgroundColor: "rgba(172, 255, 47, 0.86)" }}
            >
              <Form.Check // prettier-ignore
                type="radio"
                size="lg"
                id={`default-radio`}
                label={
                  <div>
                    <div className="d-flex justify-content-between gap-2">
                      <div className="" style={{ width: 150 }}>
                        <img
                          className="w-100 "
                          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600"
                        />
                      </div>
                      <div>
                        <h5 className="fs-5">Bungalow next to the beach</h5>
                        <h6>Price per day: 100$</h6>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quasi, ea.
                    </p>
                  </div>
                }
                name="house"
                value={2}
                onChange={(e) => console.log(e.target.value)}
              />
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
