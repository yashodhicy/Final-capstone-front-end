import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddnewHouse } from "../Redux/HouseSlice";
import isImgUrl from "./utils/imageUrlCheck";
import { toast } from "react-toastify";

const AddHouse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storage = localStorage.getItem("token");
  const user = JSON.parse(storage);
  const [imageTest, setImageTest] = useState({
    isImage: false,
    pending: false,
  });
  const testImage = async (url) => {
    setImageTest({ isImage: false, pending: true });
    const result = await isImgUrl(url);
    setImageTest({ isImage: result, pending: false });
    return new Promise((resolve, reject) => {
      if (result) resolve({ isImage: result, pending: false });
      else reject({ isImage: result, pending: false });
    });
  };
  const [houseDatas, setHouseDatas] = useState({
    name: "",
    area: "",
    price: "",
    description: "",
    number_of_rooms: "",
    location: "",
    image: "",
    uid: user && user.uid ? user.uid : null,
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageTest.isImage) {
      toast.error("The image url is not an image please review this field")
      return
    }
    if (
      !houseDatas.name ||
      !houseDatas.area ||
      !houseDatas.price ||
      !houseDatas.description ||
      !houseDatas.number_of_rooms ||
      !houseDatas.location ||
      !houseDatas.image
    ) {
      setError("Please Fill All The Fields");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    const formData = new FormData();

    formData.append("house[name]", houseDatas.name);
    formData.append("house[area]", houseDatas.area);
    formData.append("house[price]", houseDatas.price);
    formData.append("house[description]", houseDatas.description);
    formData.append("house[number_of_rooms]", houseDatas.number_of_rooms);
    formData.append("house[location]", houseDatas.location);
    formData.append("house[image]", houseDatas.image);
    formData.append("house[uid]", houseDatas.uid);

    await dispatch(AddnewHouse(formData));
    setHouseDatas({
      name: "",
      area: "",
      price: "",
      description: "",
      number_of_rooms: "",
      location: "",
      image: "",
    });
    setSuccess("House Added Successfully");
    navigate("/");
  };

  const handleChange = (e) => {
    setHouseDatas({ ...houseDatas, [e.target.name]: e.target.value });
  };

  return (
    <section className="container w-100 d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col-md-10 w-100">
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
          <h1 className="text-primary">Add New House</h1>
          <form onSubmit={handleSubmit} className="w-100">
            <div className="mb-3">
              <label htmlFor="houseName" className="form-label text-primary">
                House Name
                <input
                  type="text"
                  name="name"
                  value={houseDatas.name}
                  onChange={handleChange}
                  id="houseName"
                  className="form-control"
                  placeholder="Enter House Name"
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="houseArea" className="form-label text-primary">
                House Area
                <input
                  type="number"
                  name="area"
                  value={houseDatas.area}
                  onChange={handleChange}
                  className="form-control"
                  id="houseArea"
                  placeholder="Enter House area"
                />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="housePrice" className="form-label text-primary">
                House Price
                <input
                  type="number"
                  name="price"
                  value={houseDatas.price}
                  onChange={handleChange}
                  className="form-control"
                  id="housePrice"
                  placeholder="Enter House Price"
                />
              </label>
            </div>
            <div className="mb-3">
              <label
                htmlFor="houseDescription"
                className="form-label text-primary"
              >
                House Description
                <input
                  type="text"
                  name="description"
                  value={houseDatas.description}
                  onChange={handleChange}
                  className="form-control"
                  id="houseDescription"
                  placeholder="Enter House Description"
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="houseRooms" className="form-label text-primary">
                Number of Rooms
                <input
                  type="number"
                  name="number_of_rooms"
                  value={houseDatas.number_of_rooms}
                  onChange={handleChange}
                  className="form-control"
                  id="houseRooms"
                  placeholder="Enter Number of Rooms"
                />
              </label>
            </div>

            <div className="mb-3">
              <label
                htmlFor="houseLocation"
                className="form-label text-primary"
              >
                Location of House
                <input
                  type="text"
                  name="location"
                  value={houseDatas.location}
                  onChange={handleChange}
                  className="form-control"
                  id="houseLocation"
                  placeholder="Enter the location of the house"
                />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="houseImage" className="form-label text-primary">
                House Image
                <input
                  onBlur={(e) => {
                    if(!navigator.onLine && e.target.value.startsWith("http")) {
                      toast.error("Please connect to the internet so that we can check the validity of the image!")
                      setImageTest({isImage: false, pending: false})
                      return
                    }
                    toast.promise(testImage(e.target.value), {
                      pending: "Wait the while we are checking the image url",
                      success: "The provided url is an image url",
                      error: "The provided url is not an image url",
                    });
                  }}
                  type="text"
                  name="image"
                  value={houseDatas.image}
                  onChange={handleChange}
                  className="form-control"
                  id="houseImage"
                  placeholder="Enter the URL of house"
                />
              </label>
            </div>

            <div className="mb-3">
              <input
                type="submit"
                className="btn btn-primary"
                value="Add House"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddHouse;
