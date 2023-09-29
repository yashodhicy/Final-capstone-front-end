import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";

const HouseDetails = () => {
  const { houseId } = useParams();

  const houses = useSelector((state) => state.houses).houses;
  const houseIdNumber = parseInt(houseId, 10);
  const house = houses.find((house) => houseIdNumber === house.id);
  console.log(house);

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
    </div>
  );
  } 
  else {
    return <div>Loading...</div>;
  }
};

export default HouseDetails;
