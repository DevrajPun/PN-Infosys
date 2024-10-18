import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/colorlogo.png";

function ContactUs() {
  return (
    <>
      <div className="main-content">
        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>Say Hello To Us!</h1>
                <span>
                  <Link to="/">Home</Link>
                  Contact Us
                </span>
              </div>
            </div>
          </div>
        </div>
        <section className="contact-info">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="info-item">
                  <div className="icon">
                    <i className="fa fa-envelope" />
                  </div>
                  <h4>Email Address</h4>
                  <p>
                    <a href="#">www.pninfosys.com</a>
                    <br />
                    <a href="#">support@pninfosys.com</a>
                  </p>
                  <p style={{ visibility: "hidden" }}>kuch nahi</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="info-item">
                  <div className="icon">
                    <i className="fa fa-phone" />
                  </div>
                  <h4>Phone Number</h4>
                  <p>
                    <a href="#">+91 7000846823</a>
                    <br />
                    <a href="#">+91 7415289378</a>
                  </p>
                  <p style={{ visibility: "hidden" }}>kuch nahi</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="info-item">
                  <div className="icon">
                    <i className="fa fa-map-marker" />
                  </div>
                  <h4>Street Address</h4>
                  <p>
                    <a href="#">
                      MIG-332
                      <br />
                      Darpan Colony,Thatipur,
                      <br />
                      Gwalior,Madhya Pradesh
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="inner-content">
                  <div className="block-heading">
                    <h4>Say Hello To Us!</h4>
                  </div>
                  <form
                    noValidate
                    ng-reflect-form="[object Object]"
                    className="ng-untouched ng-pristine ng-invalid"
                  >
                    <div className="row">
                      <div className="col-lg-4 col-md-12 col-sm-12">
                        <input
                          name="name"
                          type="text"
                          formcontrolname="name"
                          id="name"
                          placeholder="Full Name"
                          required
                          className="form-control ng-untouched ng-pristine ng-invalid"
                          ng-reflect-name="name"
                          ng-reflect-required
                        />
                      </div>
                      <div className="col-lg-8 col-md-12 col-sm-12">
                        <input
                          name="email"
                          type="text"
                          formcontrolname="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="E-Mail Address"
                          required
                          className="form-control ng-untouched ng-pristine ng-invalid"
                          ng-reflect-name="email"
                          ng-reflect-required
                          ng-reflect-pattern="[^ @]*@[^ @]*"
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="phone"
                          type="text"
                          formcontrolname="phone"
                          id="phone"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Phone Number"
                          required
                          className="form-control ng-untouched ng-pristine ng-invalid"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          formcontrolname="message"
                          rows={6}
                          id="your-message"
                          placeholder="Your Message"
                          required
                          className="form-control ng-untouched ng-pristine ng-invalid"
                          ng-reflect-name="message"
                          ng-reflect-required
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          id="form-submit"
                          className="filled-button"
                        >
                          Send Message Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inner-content">
                  <div className="block-heading">
                    <h4>More Info</h4>
                  </div>
                  <img src={logo} style={{ width: 239 }} />
                  <div className="row">
                    <div className="col-lg-12">
                      <p style={{ fontSize: 15, textAlign: "justify" }}>
                        PN INFOSYS provides the best service possible to its
                        customers because for us, our client’s happiness is
                        important. Whatever we choose to do, we do it an
                        exorbitant manner. PN INFOSYS Company provides a full
                        range of maintenance and compliance services for
                        Government and Commercial facilities both large and
                        small.
                      </p>
                    </div>
                    <div className="col-lg-12">
                      <br />
                      <button
                        type="submit"
                        id="form-submit"
                        className="filled-button"
                      >
                        Read More..
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content">
                  <div className="block-heading">
                    <h4>Find Us On Map</h4>
                  </div>
                  <div id="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.6287734169678!2d78.20696011434966!3d26.208751696349776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c3a3faabd5e3%3A0x88d563b9d79500ed!2sPN%20INFOSYS!5e0!3m2!1sen!2sin!4v1594718912596!5m2!1sen!2sin"
                      allowFullScreen
                      style={{
                        border: "none",
                        width: "100%",
                        height: 400,
                        borderRadius: 10,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;
