import React from "react";
import { Carousel } from "react-bootstrap";

function PlacementDesk() {
  return (
    <>
      <div className="main-content">
        <div className="page-heading1">
          <div className="container">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col-lg-12">
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <section className="steps">
          <div className="section-heading">
            <h1
              style={{
                color: "#009df2",
                fontSize: "xxx-large",
                textAlign: "center",
              }}
            >
              Welcome to our Placement Cell
            </h1>
            <h4
              className="align-justify"
              style={{ fontSize: "xx-large", textAlign: "center" }}
            >
              We are here for your bright future.
            </h4>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="step-item">
                  <div className="item-number">
                    <h6>01</h6>
                  </div>
                  <div className="item-content">
                    <h4>First Step</h4>
                    <p>Come to us...!!</p>
                  </div>
                  <div className="item-arrow">
                    <i className="fa fa-angle-right" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="step-item">
                  <div className="item-number">
                    <h6>02</h6>
                  </div>
                  <div className="item-content">
                    <h4>Second Step</h4>
                    <p>Learn with us..!!</p>
                  </div>
                  <div className="item-arrow">
                    <i className="fa fa-angle-right" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="step-item">
                  <div className="item-number">
                    <h6>03</h6>
                  </div>
                  <div className="item-content">
                    <h4>Third Step</h4>
                    <p>
                      Be a <span>JOB SEEKER</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-tips our-team-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="video-thumb">
                  <img
                    src="https://pninfosys.com/assets/images/placement/placementdesk/vj1.png"
                    alt
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-heading">
                  <h6>Message From</h6>
                  <h2>Chairman's Desk</h2>
                </div>
                <p className="text-justify message">
                  Established in the year of 2018 .Pninfosys is the software
                  company rapidly growing in last 2 year in Gwalior. Our company
                  is not only a training centre as well it is a product based
                  company Pninfosys which was a dream few year ago has become a
                  reality and much sought after institutions in and around
                  Gwalior. <br />
                  <br />
                  It gives me a great pleasure to informing U to batch of
                  2018,19 are full placed All students reached in high paid
                  company In Delhi, indore,Bhopal I m happy to have the
                  opportunity serve in such a magnificent and a look forward to
                  helping pav the way for a bright and successful future.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="about-tips our-team-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-heading">
                  <h6>Message From</h6>
                  <h2>CEO Desk</h2>
                </div>
                <p className="text-justify message">
                  When educating the minds of our youth we must not forget to
                  educate their hearts. We focus on discovering developing and
                  drawing out the hidden talent and the magic lying Dormant
                  inside all of it's student Our future goal in clear.
                  <br />
                  <br /> We gives good quality training for our students in next
                  5year. Today dynamic world 360 degree development And grooming
                  is of supreme important and through our company. We are
                  creating an environment for future leaders , entrepreneurs and
                  professional who posses skill and aptitude in añ array of
                  functional Discipline.
                </p>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="video-thumb">
                  <img
                    src="https://pninfosys.com/assets/images/placement/placementdesk/neha%20(1).jpeg"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            What Our Students Say
          </h2>
          <Carousel
            controls={false}
            indicators={false}
            interval={3000}
            slide={true}
            pause="hover"
            className="carousel-right-to-left"
          >
            <Carousel.Item>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="testimonial p-4">
                    <h4 className="font-weight-bold mt-4">Manoj Palwaliya</h4>
                    <h6 className="text-primary font-weight-bold my-3">
                      Full Stack Developer
                    </h6>
                    <p className="font-weight-normal">
                      <i className="fa fa-quote-left pr-2" /> It is the best
                      learning hub for all adamant students. It is based on a
                      100% practical approach. Here, trainees get to work on
                      Live Projects, which automatically strengthens their
                      portfolio (C.V).
                      <i className="fa fa-quote-right pl-2" />
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 d-none d-md-block">
                  <div className="testimonial p-4">
                    <h4 className="font-weight-bold mt-4">Riya Parashar</h4>
                    <h6 className="text-primary font-weight-bold my-3">
                      Web Developer
                    </h6>
                    <p className="font-weight-normal">
                      <i className="fa fa-quote-left pr-2" /> It is the best
                      learning hub for all students. Best place to learn. Thank
                      you, PN Infosys!
                      <i className="fa fa-quote-right pl-2" />
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 d-none d-md-block">
                  <div className="testimonial p-4">
                    <h4 className="font-weight-bold mt-4">Akansha Tomar</h4>
                    <h6 className="text-primary font-weight-bold my-3">
                      Full Stack Developer
                    </h6>
                    <p className="font-weight-normal">
                      <i className="fa fa-quote-left pr-2" /> Best place to
                      learn, grow, and nourish technical skills. Work on the
                      latest technologies in demand.
                      <i className="fa fa-quote-right pl-2" />
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="testimonial p-4">
                    <h4 className="font-weight-bold mt-4">Rohit Kumar</h4>
                    <h6 className="text-primary font-weight-bold my-3">
                      UI/UX Developer
                    </h6>
                    <p className="font-weight-normal">
                      <i className="fa fa-quote-left pr-2" /> It's a great
                      experience at PN Infosys. The working environment is
                      incredible.
                      <i className="fa fa-quote-right pl-2" />
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 d-none d-md-block">
                  <div className="testimonial p-4">
                    <h4 className="font-weight-bold mt-4">Vinod Chauhan</h4>
                    <h6 className="text-primary font-weight-bold my-3">
                      Full Stack Developer
                    </h6>
                    <p className="font-weight-normal">
                      <i className="fa fa-quote-left pr-2" /> Excellent teaching
                      staff, hands-on experience on the latest technologies. 80%
                      practical, 20% theory, we enjoy learning new things here.
                      <i className="fa fa-quote-right pl-2" />
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 d-none d-md-block">
                  <div className="testimonial p-4">
                    <h4 className="font-weight-bold mt-4">Vipin Sharma</h4>
                    <h6 className="text-primary font-weight-bold my-3">
                      Developer
                    </h6>
                    <p className="font-weight-normal">
                      <i className="fa fa-quote-left pr-2" /> A great place to
                      learn web designing, development, and presentation skills.
                      <i className="fa fa-quote-right pl-2" />
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
    </>
  );
}

export default PlacementDesk;
