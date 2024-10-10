import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";

function Prestige() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Prestige Institute of Management & Research, Gwalior</h1>
              <span>
                <Link to="/">Home</Link>
                WorkShop
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="recent-cases portfolio-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h6 className="text-center">
                  Prestige Institute of Management & Research, Gwalior
                </h6>
                <h5 className="text-center">WorkShop</h5>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row masonry-layout filters-content normal-col-gap">
                <div className="col-lg-4 masonry-item all category-analysis">
                  <div className="case-item">
                    <a target className="zoom">
                      <div className="case-thumb">
                        <img
                          src={img1}
                          alt
                          style={{ marginTop: 0, height: "250px" }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 masonry-item all category-seo">
                  <div className="case-item">
                    <a target className="zoom">
                      <div className="case-thumb">
                        <img
                          src={img2}
                          alt
                          style={{ marginTop: 0, height: "250px" }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 masonry-item all category-digital">
                  <div className="case-item">
                    <a target className="zoom">
                      <div className="case-thumb">
                        <img
                          src={img3}
                          alt
                          style={{ marginTop: 0, height: "250px" }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 masonry-item all category-digital">
                  <div className="case-item">
                    <a target className="zoom">
                      <div className="case-thumb">
                        <img
                          src={img4}
                          alt
                          style={{ marginTop: 0, height: "250px" }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 masonry-item all category-analysis">
                  <div className="case-item">
                    <a target className="zoom">
                      <div className="case-thumb">
                        <img
                          src={img5}
                          alt
                          style={{ marginTop: 0, height: "250px" }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 masonry-item all category-seo">
                  <div className="case-item">
                    <a target className="zoom">
                      <div className="case-thumb">
                        <img
                          src={img6}
                          alt
                          style={{ marginTop: 0, height: "250px" }}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Prestige;
