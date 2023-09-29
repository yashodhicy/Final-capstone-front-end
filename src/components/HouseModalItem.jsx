/* eslint-disable react/prop-types */
import React from "react";
import { Form, ListGroup } from "react-bootstrap";

const HouseModalItem = ({ house }) => {
  return (
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
                <img className="w-100 " src={house.image} />
              </div>
              <div>
                <h5 className="fs-5">{house.name}</h5>
                <h6>Price per day: {house.price}$</h6>
              </div>
            </div>
            <p>{house.description}</p>
          </div>
        }
        name="house"
        value={house.id}
        onChange={(e) => console.log(e.target.value)}
      />
    </ListGroup.Item>
  );
};

export default HouseModalItem;
