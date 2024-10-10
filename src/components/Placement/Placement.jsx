import React, { useState } from "react";
// import axios from "axios";
// import "../assets/placement.css";

function Placement() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setImage(file);
      setErrorMessage("");
    } else {
      setImage(null);
      setErrorMessage("Please upload a valid image file (JPEG or PNG).");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setErrorMessage("Please upload a valid image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("companyName", companyName);
    formData.append("designation", designation);
    formData.append("image", image); // Append the image file

    try {
      const response = await axios.post(
        "http://localhost:4000/api/placement",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Success:", response.data);
      alert("Placement details submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit placement details.");
    }
  };

  return (
    <>
      <div className="container-fluid py-5 bg-light">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="card shadow-lg">
              <div className="card-body">
                <h3 className="text-center mb-4">Add Placement Details</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="image" className="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      className="form-control"
                      onChange={handleFileChange}
                      required
                    />
                    {errorMessage && (
                      <small className="text-danger">{errorMessage}</small>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="companyName" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      placeholder="Enter company name"
                      className="form-control"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="designation" className="form-label">
                      Designation
                    </label>
                    <input
                      type="text"
                      id="designation"
                      placeholder="Enter your designation"
                      className="form-control"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Submit Details
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Placement;
