import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewEvent } from "../redux/features/event/eventSlice";
import { Link } from "react-router-dom";
import "./e.css";

function AddEvents() {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    location: "",
    dated: "",
    time: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Handler for image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // Set image preview
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload image to Cloudinary
    const uploadedImageUrl = await uploadImage();

    // Create new blog object with image URL
    const newEvent = {
      title: formData.title,
      image: uploadedImageUrl,
      location: formData.location,
      dated: formData.dated,
      time: formData.time,
      category: formData.category,
    };

    // Dispatch action to add new blog
    dispatch(addNewEvent(newEvent));

    // Reset form and image states
    setFormData({
      title: "",
      image: "",
      location: "",
      dated: "",
      time: "",
      category: "",
    });
    setImage(null);
    setImagePreview(null);
  };
  // Function to upload image to Cloudinary
  const uploadImage = async () => {
    if (!image) return null;

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "acxccm7q");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dycl3upvy/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const imageData = await response.json();
      return imageData.secure_url;
    } catch (error) {
      console.error("Error uploading image: ", error);
      return null;
    }
  };

  return (
    <div>
      <Link to="/events" className="btn mt-3 ms-2 ">
        Go To Events
      </Link>
      <form
        className="col-lg-5  px-5 py-5 mx-auto mt-3 shadow rounded-3"
        onSubmit={handleSubmit}
      >
        <label className="fw-bold mt-2 fs-5">
          Title:
          <input
            className="form-control"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="fw-bold mt-2 fs-5">Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Uploaded"
            style={{ width: "100px", height: "100px" }}
          />
        )}
        <br />
        <label className="fw-bold mt-2 fs-5">
          Location:
          <input
            className="form-control"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="fw-bold mt-2 fs-5">
          Dated:
          <input
            className="form-control"
            type="Date"
            name="dated"
            value={formData.dated}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="fw-bold mt-2 fs-5">
          Time:
          <input
            className="form-control"
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="fw-bold mt-2 fs-5">
          Category:
          <input
            className="form-control"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className="btn mt-2 showss">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddEvents;
