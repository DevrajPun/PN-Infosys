import React, { useState } from "react";

function Technologies() {
  const [activeFilter, setActiveFilter] = useState("*"); // Set the initial filter to show all

  const handleFilterClick = (filter) => {
    setActiveFilter(filter); // Update the active filter state
  };

  const filterClasses = (category) => {
    // If the filter is active or set to show all, return true to display the card
    return activeFilter === "*" || activeFilter === category
      ? "d-block"
      : "d-none";
  };

  return (
    <section className="recent-cases">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-heading">
              <h4 style={{ fontSize: "xx-large" }}>Technologies</h4>
              <h1 style={{ color: "#009df2", fontSize: "xxx-large" }}>
                We work on..
              </h1>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="portfolio-filters">
              <ul>
                <li
                  onClick={() => handleFilterClick("*")}
                  className={activeFilter === "*" ? "active" : ""}
                >
                  Show All
                </li>
                <li
                  onClick={() => handleFilterClick("web_design")}
                  className={activeFilter === "web_design" ? "active" : ""}
                >
                  Web Designing
                </li>
                <li
                  onClick={() => handleFilterClick("web_dev")}
                  className={activeFilter === "web_dev" ? "active" : ""}
                >
                  Web Development
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row masonry-layout filters-content normal-col-gap">
          {/* Web Design Cards */}
          <div
            className={`col-lg-3 col-md-6 masonry-item web_design ${filterClasses(
              "web_design"
            )}`}
          >
            <div className="case-item">
              <div className="case-thumb">
                <img
                  src="https://res.cloudinary.com/dow1049t2/image/upload/v1728741857/PN_INFOSYS/HTML_oimktn.png"
                  alt="HTML"
                  style={{ height: "200px" }}
                />
              </div>
              <div className="down-content">
                <h4>HTML 5</h4>
                <span>Markup language for Web pages.</span>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-3 col-md-6 masonry-item web_design ${filterClasses(
              "web_design"
            )}`}
          >
            <div className="case-item">
              <div className="case-thumb">
                <img
                  src="https://res.cloudinary.com/dow1049t2/image/upload/v1728741939/PN_INFOSYS/CSS_hcgvvx.png"
                  alt="CSS"
                  style={{ height: "200px" }}
                />
              </div>
              <div className="down-content">
                <h4>CSS 3</h4>
                <span>Cascading Style Sheets.</span>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-3 col-md-6 masonry-item web_design ${filterClasses(
              "web_design"
            )}`}
          >
            <div className="case-item">
              <div className="case-thumb">
                <img
                  src="https://res.cloudinary.com/dow1049t2/image/upload/v1728741867/PN_INFOSYS/javaScript_ebz3w9.jpg"
                  alt="JavaScript"
                  style={{ height: "200px" }}
                />
              </div>
              <div className="down-content">
                <h4>JavaScript</h4>
                <span>Dynamic, lightweight, essential.</span>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-3 col-md-6 masonry-item web_design ${filterClasses(
              "web_design"
            )}`}
          >
            <div className="case-item">
              <div className="case-thumb">
                <img
                  src="https://res.cloudinary.com/dow1049t2/image/upload/v1728741857/PN_INFOSYS/jQuery_ucnh06.png"
                  alt="jQuery"
                  style={{ height: "200px" }}
                />
              </div>
              <div className="down-content">
                <h4>jQuery</h4>
                <span>JavaScript Library.</span>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-3 col-md-6 masonry-item web_design ${filterClasses(
              "web_design"
            )}`}
          >
            <div className="case-item">
              <div className="case-thumb">
                <img
                  src="https://res.cloudinary.com/dow1049t2/image/upload/v1728741857/PN_INFOSYS/Bootstrap_c860yo.png"
                  alt="Bootstrap"
                  style={{ height: "200px" }}
                />
              </div>
              <div className="down-content">
                <h4>Bootstrap</h4>
                <span>CSS framework</span>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-3 col-md-6 masonry-item web_design ${filterClasses(
              "web_design"
            )}`}
          >
            <div className="case-item">
              <div className="case-thumb">
                <img
                  src="https://res.cloudinary.com/dow1049t2/image/upload/v1728741866/PN_INFOSYS/tailwindcss_enf6fa.png"
                  alt="Tailwind CSS"
                  style={{ height: "200px" }}
                />
              </div>
              <div className="down-content">
                <h4>Tailwind CSS</h4>
                <span>Utility-first framework.</span>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-3 col-md-6 masonry-item web_design ${filterClasses(
              "web_design"
            )}`}
          >
            <div className="case-item">
              <div className="case-thumb">
                <img
                  src="https://res.cloudinary.com/dow1049t2/image/upload/v1728741863/PN_INFOSYS/react.js_j1esca.png"
                  alt="React.js"
                  style={{ height: "200px" }}
                />
              </div>
              <div className="down-content">
                <h4>React.js</h4>
                <span>Dynamic user interfaces.</span>
              </div>
            </div>
          </div>

          {/* Web Development Cards */}
          <div
            className={`col-lg-3 col-md-6 masonry-item web_dev ${filterClasses(
              "web_dev"
            )}`}
          >
            <div className="case-item">
              <div className="case-thumb">
                <img
                  src="https://res.cloudinary.com/dow1049t2/image/upload/v1728742155/PN_INFOSYS/download_pncgp8.jpg"
                  alt="Node.js"
                  style={{ height: "200px" }}
                />
              </div>
              <div className="down-content">
                <h4>Node.js</h4>
                <span>Fast server-side scripting.</span>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-3 col-md-6 masonry-item web_dev ${filterClasses(
              "web_dev"
            )}`}
          >
            <div className="case-item">
              <div className="case-thumb">
                <img
                  src="https://res.cloudinary.com/dow1049t2/image/upload/v1728741862/PN_INFOSYS/mongodb_qgbsmd.jpg"
                  alt="MongoDB"
                  style={{ height: "200px" }}
                />
              </div>
              <div className="down-content">
                <h4>MongoDB</h4>
                <span>Scalable data storage.</span>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-3 col-md-6 masonry-item web_dev ${filterClasses(
              "web_dev"
            )}`}
          >
            <div className="case-item">
              <div className="case-thumb">
                <img
                  src="https://res.cloudinary.com/dow1049t2/image/upload/v1728741862/PN_INFOSYS/python_cezoxy.png"
                  alt="Python"
                  style={{ height: "200px" }}
                />
              </div>
              <div className="down-content">
                <h4>Python</h4>
                <span>Programming Language.</span>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-3 col-md-6 masonry-item web_dev ${filterClasses(
              "web_dev"
            )}`}
          >
            <div className="case-item">
              <div className="case-thumb">
                <img
                  src="https://res.cloudinary.com/dow1049t2/image/upload/v1728741857/PN_INFOSYS/django_n07vyz.jpg"
                  alt="Django"
                  style={{ height: "200px" }}
                />
              </div>
              <div className="down-content">
                <h4>Django</h4>
                <span>Open Source Python Framework</span>
              </div>
            </div>
          </div>

          <div
            className={`col-lg-3 col-md-6 masonry-item web_dev ${filterClasses(
              "web_dev"
            )}`}
          >
            <div className="case-item">
              <div className="case-thumb">
                <img
                  src="https://res.cloudinary.com/dow1049t2/image/upload/v1728741857/PN_INFOSYS/SQL_tkea7p.jpg"
                  alt="SQL"
                  style={{ height: "200px" }}
                />
              </div>
              <div className="down-content">
                <h4>SQL</h4>
                <span>Structured Query Language</span>
              </div>
            </div>
          </div>

          {/* Additional Cards can be added below */}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
