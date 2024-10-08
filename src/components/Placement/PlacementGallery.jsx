import React from "react";
import StudentCard from "./StudentCard";

function PlacementGallery() {
  const students = [
    {
      name: "ritik bansal",
      jobTitle: "Full Stack Developer",
      company: "expert webtech",
      image:
        "https://pninfosys.com/assets/images/placement/placement2019/ritikbansal.png",
    },
    {
      name: "Shivraj dhakad",
      jobTitle: "Full Stack Developer",
      company: "First fiddle",
      image:
        "https://pninfosys.com/assets/images/placement/placement2019/shivraj.png",
    },
    {
      name: "Vinod Chauhan",
      jobTitle: "Full Stack Developer",
      company: "Mile high (DELHI)",
      image:
        "https://pninfosys.com/assets/images/placement/placement2018/vinod.jpg",
    },
    {
      name: "Vipin sharma",
      jobTitle: "Full Stack Developer",
      company: "capgemini",
      image:
        "https://pninfosys.com/assets/images/placement/placement2018/vipinsharma1.jpg",
    },
    {
      name: "Vishal Gaur",
      jobTitle: "Software engineer",
      company: "Infosys",
      image:
        "https://pninfosys.com/assets/images/placement/placement2018/vishal1.jpg",
    },
    {
      name: "rohit rathore",
      jobTitle: "Full Stack Developer",
      company: "Mile High(Delhi)",
      image:
        "https://pninfosys.com/assets/images/placement/placement2018/rohit.jpg",
    },
    {
      name: "Akanksha Rajauria",
      jobTitle: "Full Stack Developer",
      company: "Apptech",
      image:
        "https://pninfosys.com/assets/images/placement/placement2018/akansha1.jpg",
    },
    {
      name: "Akanksha Tomar",
      jobTitle: "Full Stack Developer",
      company: "Ignis it solution",
      image:
        "https://pninfosys.com/assets/images/placement/placement2019/akanshatomar1.jpg",
    },
    {
      name: "riya parashar",
      jobTitle: "Full Stack Developer",
      company: "Airo",
      image:
        "https://pninfosys.com/assets/images/placement/placement2019/riyaparashar.png",
    },
  ];
  return (
    <>
      <div className="main-content">
        <div className="parallax-banner1" style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
              zIndex: 1, // Ensure overlay is behind the text
            }}
          />
          <div
            className="inner-header"
            style={{
              position: "relative",
              zIndex: 2, // Ensure text is above the overlay
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%", // Ensure it takes full height for centering
            }}
          >
            <div className="inner-content">
              <h1
                className="text-center"
                style={{ color: "white", textShadow: "0px 0px 5px #000000" }}
              >
                Placement Gallery
              </h1>
              <div
                className="main-decoration"
                style={{ marginTop: "20px" }}
              ></div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-center my-4">Students Who Got Placed</h2>
          <div
            className="justify-content-center"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {students.map((student, index) => (
              <StudentCard key={index} student={student} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlacementGallery;
