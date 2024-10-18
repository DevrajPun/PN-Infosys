import React from "react";
import StudentCard from "./StudentCard";

function PlacementGallery() {
  const students = [
    {
      name: "ritik bansal",
      jobTitle: "Full Stack Developer",
      company: "expert webtech",
      image:
        "https://res.cloudinary.com/dow1049t2/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1728759986/PN_INFOSYS/ritikbansal_xrghcp.png",
    },
    {
      name: "Shivraj dhakad",
      jobTitle: "Full Stack Developer",
      company: "First fiddle",
      image:
        "https://res.cloudinary.com/dow1049t2/image/upload/v1728759990/PN_INFOSYS/shivraj_zjfxu4.png",
    },
    {
      name: "Vinod Chauhan",
      jobTitle: "Full Stack Developer",
      company: "Mile high (DELHI)",
      image:
        "https://res.cloudinary.com/dow1049t2/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1728759992/PN_INFOSYS/vinod_q3orcs.jpg",
    },
    {
      name: "Vipin sharma",
      jobTitle: "Full Stack Developer",
      company: "capgemini",
      image:
        "https://res.cloudinary.com/dow1049t2/image/upload/v1728759971/PN_INFOSYS/vipinsharma1_bxceq5.jpg",
    },
    {
      name: "Vishal Gaur",
      jobTitle: "Software engineer",
      company: "Infosys",
      image:
        "https://res.cloudinary.com/dow1049t2/image/upload/v1728759972/PN_INFOSYS/vishal1_udfhha.jpg",
    },
    {
      name: "rohit rathore",
      jobTitle: "Full Stack Developer",
      company: "Mile High(Delhi)",
      image:
        "https://res.cloudinary.com/dow1049t2/image/upload/v1728759976/PN_INFOSYS/rohit_h8gser.jpg",
    },
    {
      name: "Akanksha Rajauria",
      jobTitle: "Full Stack Developer",
      company: "Apptech",
      image:
        "https://res.cloudinary.com/dow1049t2/image/upload/v1728759977/PN_INFOSYS/akansha1_x8stzs.jpg",
    },
    {
      name: "Akanksha Tomar",
      jobTitle: "Full Stack Developer",
      company: "Ignis it solution",
      image:
        "https://res.cloudinary.com/dow1049t2/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1728759981/PN_INFOSYS/akanshatomar1_rsmb5f.jpg",
    },
    {
      name: "riya parashar",
      jobTitle: "Full Stack Developer",
      company: "Airo",
      image:
        "https://res.cloudinary.com/dow1049t2/image/upload/v1728759984/PN_INFOSYS/riyaparashar_nsvgb9.png",
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
              backgroundColor: "rgba(0, 0, 0, 0.5)", 
              zIndex: 1,
            }}
          />
          <div
            className="inner-header"
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%", 
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
