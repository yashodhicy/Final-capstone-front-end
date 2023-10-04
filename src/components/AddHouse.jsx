import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddnewHouse } from "../Redux/HouseSlice";
import isImgUrl from "./utils/imageUrlCheck";
import { toast } from "react-toastify";
import "../components/componentsCss/addhouse.css";
import FormField from "./FormField";

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
      toast.error("The image URL is not valid. Please review this field.");
      return;
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
      setError("Please fill in all the fields.");
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
    setSuccess("House added successfully.");
    navigate("/");
  };

  const handleChange = (e) => {
    setHouseDatas({ ...houseDatas, [e.target.name]: e.target.value });
  };

  const formFields = [
    {
      name: "name",
      value: houseDatas.name,
      type: "text",
      placeholder: "Enter House Name",
    },
    {
      name: "area",
      value: houseDatas.area,
      type: "number",
      placeholder: "Enter House area",
    },
    {
      name: "price",
      value: houseDatas.price,
      type: "number",
      placeholder: "Enter House Price",
    },
    {
      name: "description",
      value: houseDatas.description,
      type: "text",
      placeholder: "Enter House Description",
    },
    {
      name: "number_of_rooms",
      value: houseDatas.number_of_rooms,
      type: "number",
      placeholder: "Enter Number of Rooms",
    },
    {
      name: "location",
      value: houseDatas.location,
      type: "text",
      placeholder: "Enter the location of the house",
    }
  ];

  return (
    <div className="res-container">
      <section className="container w-100 h-100 d-flex justify-content-center align-items-center">
        <div>
          <div className="col-md-10 w-100 ">
            {success && <div className="alert alert-success">{success}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <h1 className="title">Add New House</h1>
            <form onSubmit={handleSubmit} className="w-100 mt-5 d-flex add-form">
              {formFields.map((field) => (
                <FormField
                  key={field.name}
                  name={field.name}
                  value={field.value}
                  type={field.type}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                />
              ))}
              {imageTest.pending && <p>Testing image...</p>}
              <div className="mb-3">
              <label htmlFor="houseImage" className="form-label">
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
              <button type="submit" className="btn btn-primary">
                Add House
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddHouse;