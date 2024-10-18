import React from "react";
import training from "../../assets/images/training.png";
import collaborative1 from "../../assets/images/collaborative1.jpg";
import thinking from "../../assets/images/thinking.png";
import dedication from "../../assets/images/dedication.jpg";
import banner2 from "../../assets/images/banner2.png";
import learning from "../../assets/images/learning.png";
import elearning from "../../assets/images/e-learning.png";
import Technologies from "../Technologies/Technologies";

function Home() {
  return (
    <>
      {/* section one */}
      <div
        className="main-content"
      >
        <div className="parallax-banner">
          <div className="inner-header">
            <div className="inner-content">
              <h4 style={{ textShadow: "0px 0px 5px #000000" }}>
                what are you waiting for?
              </h4>
              <h1 style={{ textShadow: "0px 0px 5px #000000" }}>
                Our PN Infosys
                <br /> We're ready to help you grow!.
              </h1>
              <div className="main-decoration">
                <img src={banner2} alt style={{ width: "50%" }} />
              </div>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
              className="waves"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={0}
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={3}
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x={48}
                  y={5}
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      {/* section two */}
      <section className="features" style={{ marginTop: 45 }}>
        <p class="lead text-center fs-6 fs-md-5 fs-lg-4 px-1">
          PN INFOSYS is a leading global business consulting and IT service
          company, Whether you need to run your business more efficiently or
          accelerate revenue growth, PN INFOSYS can get you there.
        </p>
        <div className="container-fluid" style={{ width: "95%" }}>
          <div className="row">
            <div className="col-lg-3">
              <div className="feature-item">
                <div className="icon">
                  <img src={collaborative1} alt />
                </div>
                <h4>
                  Collaborative
                  <br /> Spirit
                </h4>
                <p>
                  We believe in developing true partnerships and making clients
                  happy.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-item">
                <div className="icon">
                  <img src={thinking} alt />
                </div>
                <h4>
                  Expert
                  <br /> Thinking
                </h4>
                <p>
                  We brings robust skill and forward looking perspectives to
                  solve customer challenges.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-item">
                <div className="icon">
                  <img src={dedication} alt />
                </div>
                <h4>Exorbitant Dedication</h4>
                <p>
                  PN Infosys is driven to meet client needs with determination
                  and grit. We embrace tough challenges.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-item">
                <div className="icon">
                  <img src={training} alt />
                </div>
                <h4>
                  Industrial <br />
                  Training
                </h4>
                <p>
                  We provide free Industrial Internship to novice
                  undergratuates. Basically our aim is to help students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section three */}
      <section className="good-tips">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h2>
                  Learning environment,Free Internship to novice students.
                </h2>
              </div>
              <div className="tips-content">
                <ul>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-laptop"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>WEB DESIGNING</h4>
                      <p>
                        Something which makes PN INFOSYS different from other IT
                        companies is that we train novice students and also make
                        them work on Live projects.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-laptop"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>WEB DEVELOPMENT</h4>
                      <p>
                        Something which makes PN INFOSYS different from other IT
                        companies is that we train novice students and also make
                        them work on Live projects.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-mobile"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>APP DEVELOPMENT</h4>
                      <p>
                        Something which makes PN INFOSYS different from other IT
                        companies is that we train novice students and also make
                        them work on Live projects.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-laptop"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>ANGULAR, PYTHON, DJANGO, LARAVEL</h4>
                      <p>
                        Something which makes PN INFOSYS different from other IT
                        companies is that we train novice students and also make
                        them work on Live projects.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="right-image">
                <img src={learning} alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* technology */}
      <Technologies />
      {/* portfolio */}
      <section className="portfolio-page-second-version">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <h4 style={{ fontSize: "xx-large" }}>Our</h4>
                <h1 style={{ color: "#009df2", fontSize: "xxx-large" }}>
                  Portfolio
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            {[
              {
                src: "https://res.cloudinary.com/dow1049t2/image/upload/v1728717201/PN_INFOSYS/IDTR-Logo_u3uwci.png",
                alt: "Institute of Drivers Training and Research",
                title: "Institute of Drivers Training and Research",
                subtitle: "Gwalior",
                link: "http://idtrgwl.com/",
              },
              {
                src: "https://res.cloudinary.com/dow1049t2/image/upload/v1728716781/PN_INFOSYS/port2_xz2iko.jpg",
                alt: "Central Institute for Research on Buffaloes",
                title: "C I A R",
                subtitle: "Central Institute for Research on Buffaloes",
                link: "#/none",
              },
              {
                src: "https://res.cloudinary.com/dow1049t2/image/upload/v1728716781/PN_INFOSYS/port3_pwjlbq.jpg",
                alt: "Rishi Galav Public School",
                title: "Rishi Galav Public School",
                subtitle: "Best School in Gwalior",
                link: "#/none",
              },
              {
                src: "https://res.cloudinary.com/dow1049t2/image/upload/v1728716781/PN_INFOSYS/vee_ilu7x5.jpg",
                alt: "VEE ACADEMY",
                title: "VEE ACADEMY",
                subtitle: "Gwalior",
                link: "https://vikasedugwl.com/",
              },
              {
                src: "https://res.cloudinary.com/dow1049t2/image/upload/v1728716781/PN_INFOSYS/port5_w8d0ms.jpg",
                alt: "Allure Constructions",
                title: "Allure Constructions",
                subtitle: "Allure Constructions Company",
                link: "#/none",
              },
              {
                src: "https://res.cloudinary.com/dow1049t2/image/upload/v1728716780/PN_INFOSYS/Sonagir-logo_s8rgqi.png",
                alt: "Sonagir",
                title: "Sonagir",
                subtitle: "Sonagir Website",
                link: "#/none",
              },
            ].map((item, index) => (
              <div className="col-lg-4 mb-4" key={index}>
                <div className="case-item">
                  <div className="case-thumb">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="img-fluid"
                      style={{
                        height: "300px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                    <div className="hover-effect">
                      <div className="hover-content">
                        <a href="#/none">
                          <i className="fa fa-search" />
                        </a>
                        <a href={item.link}>
                          <i className="fa fa-link" />
                        </a>
                        <h3 style={{ color: "white" }}>{item.title}</h3>
                        <h5 style={{ color: "white" }}>{item.subtitle}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* service */}
      <section className="good-tips">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={{ textAlign: "center", color: "white" }}>
                Our Services
              </h1>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="section-heading" />
              <div className="tips-content">
                <ul>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-lightbulb-o"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>INNOVATIVE Ideas</h4>
                      <p className="align-justify">
                        PN INFOSYS believes in developing true partnerships. We
                        foster a collegial environment where individual
                        perspectives are respected and honest dialogue is
                        expected.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-server"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>CREATIVE Designing</h4>
                      <p className="align-justify">
                        PN INFOSYS brings robust skills and forward looking
                        perspectives to solve customer challenges. We use proven
                        knowledge to make recommendations and provide expert
                        guidance to our customers.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-users"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>CLIENT'S Happiness</h4>
                      <p className="align-justify">
                        PN INFOSYS is driven to meet client needs with
                        determination and grit. We embrace tough challenges and
                        do not rest until the problem is solved, the right way.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-tasks"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>FULL Maintenance</h4>
                      <p className="text-justify text-align">
                        PN INFOSYS Company provides a full range of maintenance
                        and compliance services for Government and Commercial
                        facilities both large and small.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i
                        className="fa fa-bullseye"
                        style={{ fontSize: 40, color: "red" }}
                      />
                    </div>
                    <div className="right-content">
                      <h4>PRACTICAL Training</h4>
                      <p className="align-justify">
                        We don't use paper and pencil at all in our training
                        sessions.We are provided only practical work at training
                        class session.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="right-image">
                <img src={elearning} alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* events */}
      <section className="recent-cases portfolio-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <h4 style={{ fontSize: "xx-large" }}>News</h4>
                <h1 style={{ color: "#009df2", fontSize: "xxx-large" }}>
                  Events
                </h1>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                {[
                  {
                    imgSrc:
                      "https://res.cloudinary.com/dow1049t2/image/upload/PN_INFOSYS/v1728716414/e1_efkxht.jpg",
                    altText: "Workshop by Senior Advisor",
                    title: "Workshop by Senior Advisor",
                    description: [
                      "Workshop was enacted by Vaibhav Shrivastava, who is Product Owner at Xiaomi, China",
                      "He is our Senior Advisor, he conducted the workshop in which he holistically motivated the team of PN INFOSYS.",
                    ],
                  },
                  {
                    imgSrc:
                      "https://res.cloudinary.com/dow1049t2/image/upload/PN_INFOSYS/v1728716409/e2_blivfl.jpg",
                    altText: "PN INFOSYS invited as Chief Guest",
                    title: "PN INFOSYS invited as Chief Guest",
                    description: [
                      "Rustamji Institute of Technology, BSF Academy, Tekanpur invited PN INFOSYS as a Chief Guest in their Software Tech-Fest.",
                      "Rustamji Institute of Technology, BSF Academy, Tekanpur invited PN INFOSYS as a Chief Guest in their Software Tech-Fest.",
                    ],
                  },
                  {
                    imgSrc:
                      "https://res.cloudinary.com/dow1049t2/image/upload/PN_INFOSYS/v1728716413/e3_rsuqh7.jpg",
                    altText: "Social Applaud by MPCT college",
                    title: "Social Applaud by MPCT college",
                    description: [
                      "PN INFOSYS gave two months training sessions to MPCT College.",
                      "This training was meant for web designing to make sure that at the end of the two months, students become capable enough to master Web Designing.",
                    ],
                  },
                  {
                    imgSrc:
                      "https://res.cloudinary.com/dow1049t2/image/upload/PN_INFOSYS/v1728716409/e4_mrhd3h.jpg",
                    altText: "Social Applaud for our Work",
                    title: "Social Applaud for our Work",
                    description: [
                      "PN INFOSYS did a project for Samaysaar Vidhyaniketan, which is a non-profit institution providing free schooling, accommodation, and food to poor Jain students.",
                    ],
                  },
                  {
                    imgSrc:
                      "https://res.cloudinary.com/dow1049t2/image/upload/PN_INFOSYS/v1728716409/e5_zr2mla.jpg",
                    altText: "New Branch Opening in Indore",
                    title: "New Branch Opening in Indore",
                    description: [
                      "PN INFOSYS has a new branch in Indore also.",
                      "It was a grand launch of our new branch in Indore.",
                    ],
                  },
                  {
                    imgSrc:
                      "https://res.cloudinary.com/dow1049t2/image/upload/PN_INFOSYS/v1728716409/e6_juczdv.jpg",
                    altText: "Workshop by Senior Advisor",
                    title: "Workshop by Senior Advisor",
                    description: [
                      "He is our Senior Advisor, he conducted the workshop in which he holistically motivated the team of PN INFOSYS.",
                    ],
                  },
                ].map((item, index) => (
                  <div className="col-lg-4 col-md-6 mb-4" key={index}>
                    <div
                      className="case-item d-flex flex-column"
                      style={{ height: "100%" }}
                    >
                      <a href="#/none">
                        <div className="case-thumb">
                          <img
                            src={item.imgSrc}
                            alt={item.altText}
                            className="img-fluid"
                          />
                        </div>
                      </a>
                      <div className="down-content d-flex flex-column flex-grow-1">
                        <a href="#/none">
                          <h4>{item.title}</h4>
                          <ul
                            className="list-unstyled"
                            style={{ color: "black", fontSize: "12px" }}
                          >
                            {item.description.map((desc, idx) => (
                              <li key={idx}>{desc}</li>
                            ))}
                          </ul>
                        </a>
                        <a
                          className="btn btn-xs px-1 btn-primary mt-auto"
                          href="#/none"
                        >
                          Read more...
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
