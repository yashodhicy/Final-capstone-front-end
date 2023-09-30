import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const HouseDetails = () => {
  const dispatch = useDispatch();
  const { houseId } = useParams();
  const navigate = useNavigate();
  const userId =1;

  const houses = useSelector((state) => state.Houses).houses;
  const houseIdNumber = parseInt(houseId, 10);
  const house = houses.find((house) => houseIdNumber === house.id);
  console.log(house);

  const [deleteMessage, setDeleteMessage] = useState("");
  
  const handleDelete = () => {
      dispatch(deleteHouseThunk(houseId)).then((action) => {
        const message = 'Successfully Deleted';
        navigate(`/?message=${encodeURIComponent(message)}`);
    })
    .catch((error) => {
      const message = 'Error: Unable to delete';
    });
  };

  if (house) {
  return (
    <div className="house-details">
      <div className="details">
        <img src={house.image} alt="House" />
        <h2>{house.name}</h2>
        <p>Location: {house.location}</p>
        <p>Area : {house.area}</p>
        <p>Number of Rooms: {house.number_of_rooms}</p>
        <p>Price per day: {house.price} $</p>
        <div>
          <button
            type="button"
            className="reserve"
            onClick={() => console.log("reserve")}
          >
            Reserve
          </button>
        </div> 
      </div>
      {house.user_id === userId &&
      (
      <div className="delete">
        <button type="button" className="delete" onClick={handleDelete}>
          Delete House
        </button>
      </div>
      )}
    </div>
  );
  } 
  else {
    return <div>Loading...</div>;
  }
};

export default HouseDetails;
