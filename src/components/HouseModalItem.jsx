/* eslint-disable react/prop-types */
import React from "react";
import { Form, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const HouseModalItem = ({ house, setSelected, elToMatch }) => {
  const houses = useSelector((state) => state.Houses).houses;
  return (
    <ListGroup.Item
      className="my-1"
      as="li"
      style={{ backgroundColor: "rgba(172, 255, 47, 0.86)" }}
    >
      <Form.Check
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
        checked={elToMatch? house.id == elToMatch.id: ""}
        onChange={(e) => {
          if (e.target.checked) {
            const selected = houses.find(
              (hou) => hou.id == e.target.value
            );
            console.log(selected);
            setSelected(selected);
          }
        }}
      />
    </ListGroup.Item>
  );
};

export default HouseModalItem;
