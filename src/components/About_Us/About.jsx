import React from "react";
import { Link } from "react-router-dom";
import devraj from "../../assets/images/devraj.jpg";

// import muskan from '../../assets/images/muskan.jpg'
// import kashish from '../../assets/images/kashish.jpg'
// import priyanka from '../../assets/images/priyanka.jpg'
// import rinkesh from '../../assets/images/rinkesh.jpg'
// import aman from '../../assets/images/aman.jpg'

function About() {
  return (
    <>
      <div className="main-content">
        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>About Us</h1>
                <span>
                  <Link to="/">Home</Link>
                  About Us
                </span>
              </div>
            </div>
          </div>
        </div>
        <section className="steps">
          <div className="section-heading">
            <h4 style={{ fontSize: "xx-large", textAlign: "center" }}>
              We are the best
            </h4>
            <h1
              style={{
                color: "#009df2",
                fontSize: "xxx-large",
                textAlign: "center",
              }}
            >
              For all your needs
            </h1>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="step-item">
                  <div className="item-number">
                    <h6>01</h6>
                  </div>
                  <div className="item-content">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FFor-all-your-needs%2Fa1-removebg-preview.png?alt=media&token=a5352e82-184a-4a0b-89ce-f31a898d2bb3"
                      alt
                    />
                  </div>
                  <br />
                  <h4
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginLeft: "7%",
                    }}
                  >
                    Consult your idea with us!
                  </h4>
                  <div className="item-arrow">
                    <i className="fa fa-angle-right" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="step-item">
                  <div className="item-number">
                    <h6>02</h6>
                  </div>
                  <div className="item-content">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FFor-all-your-needs%2Fa1-removebg-preview.png?alt=media&token=a5352e82-184a-4a0b-89ce-f31a898d2bb3"
                      alt
                    />
                  </div>
                  <br />
                  <h4
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginLeft: "7%",
                    }}
                  >
                    We'll Develop your idea
                  </h4>
                  <div className="item-arrow">
                    <i className="fa fa-angle-right" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="step-item">
                  <div className="item-number">
                    <h6>03</h6>
                  </div>
                  <div className="item-content">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FFor-all-your-needs%2Fa3.png?alt=media&token=9999aa98-d5d5-4af8-9601-809c5d2f7ffd"
                      alt
                    />
                  </div>
                  <br />
                  <h4
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginLeft: "7%",
                    }}
                  >
                    We'll Digital Market your idea.{" "}
                  </h4>
                  <div className="item-arrow">
                    <i className="fa fa-angle-right" />
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="step-item">
                  <div className="item-number">
                    <h6>04</h6>
                  </div>
                  <div className="item-content">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FFor-all-your-needs%2Fa4-removebg-preview.png?alt=media&token=443a3899-cb40-4759-95d2-93c21623682d"
                      alt
                    />
                  </div>
                  <br />
                  <h4
                    style={{
                      width: "75%",
                      textAlign: "center",
                      marginLeft: "7%",
                    }}
                  >
                    Client's happiness{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="about-tips"
          style={{ backgroundColor: "#00aaff", padding: "50px 0" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="section-heading"
                  style={{ marginBottom: "20px" }}
                >
                  <h6></h6>
                  <h2
                    style={{
                      color: "white",
                      fontSize: "36px",
                      fontWeight: "bold",
                    }}
                  >
                    Who &amp; We are?
                  </h2>
                </div>
                <p
                  className="text-justify text-medium"
                  style={{ color: "white", lineHeight: "1.8" }}
                >
                  We are a one-stop destination for all digital solutions, be it
                  website designing, web development, digital marketing, SEO,
                  mobile apps and full maintenance and compliance services for
                  Government and Commercial facilities both large and small. Our
                  elegant group of Developers provide their innovation who
                  transform your idea into an amazing website Design or Mobile
                  App Development while keeping every custom project unique.
                  <br />
                  <br />
                  We are part of this IT industry since 2018, we not only
                  developed products and websites but also provide internship
                  and training to students and make them capable to work in this
                  IT software industry. Our internship and training program is
                  totally based on hands-on practical experience with live
                  projects.
                  <br />
                  <br />
                  Our team of certified IT professionals services Dental
                  Offices, Medical Offices, Restaurants, Bars and all types of
                  businesses throughout the Lowcountry and the world. Our team
                  of certified IT professionals services Hospitals, Colleges,
                  Research Institutes, Schools, Restaurants, Bars and all types
                  of businesses throughout the Lowcountry and the world.
                </p>
              </div>
              <div className="col-lg-6 align-self-center">
                <div
                  className="video-thumb"
                  style={{ position: "relative", textAlign: "center" }}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FWho-%26-We-Are%3F%2Ftemplate.png?alt=media&token=ade88e5d-901f-4037-b97d-d19e3b9c442d"
                    alt=""
                    className="img-fluid"
                    style={{ borderRadius: "10px" }}
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FWho-%26-We-Are%3F%2Fplayicon.png?alt=media&token=ebed2050-72f3-4946-a17e-12fe48c775fd"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter"
                    className="play-btn"
                    alt="Play Icon"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      cursor: "pointer",
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </div>
                <div
                  id="exampleModalCenter"
                  className="modal fade"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-body" style={{ padding: "0" }}>
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FWho-%26-We-Are%3F%2Flearn.jpg?alt=media&token=b95d388f-e1c0-457f-8835-dae0390077b7"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="recent-cases">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="section-heading">
                  <h4 style={{ fontSize: "xx-large" }}>Technologies</h4>
                  <h1 style={{ color: "#009df2", fontSize: "xxx-large" }}>
                    We works on..
                  </h1>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="portfolio-filters">
                  <ul>
                    <li data-filter="*" className="active">
                      Show All
                    </li>
                    <li data-filter=".web_design">Web Designing</li>
                    <li data-filter=".web_dev">Web Development</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row masonry-layout filters-content normal-col-gap">
                  <div className="col-lg-3 masonry-item all web_design">
                    <div className="case-item">
                      <div className="case-thumb">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fhtml_5.png?alt=media&token=61a7ca43-c857-4fad-9a61-a369753f95a9"
                          alt
                          style={{ width: "75%", marginLeft: 39 }}
                        />
                      </div>
                      <div className="down-content" style={{ height: 118 }}>
                        <h4>HTML 5</h4>
                        <span>Markup language for Web pages.</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 masonry-item all web_design">
                    <div className="case-item">
                      <div className="case-thumb">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fcss_3.png?alt=media&token=55492815-4de7-4fee-9c1e-043549aabac5"
                          alt
                          style={{ width: "75%", marginLeft: 39 }}
                        />
                      </div>
                      <div className="down-content">
                        <h4>CSS 3</h4>
                        <span>Cascading Style Sheets.</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 masonry-item all web_design">
                    <div className="case-item">
                      <div className="case-thumb">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fjavascript1.png?alt=media&token=bca923e2-0748-486d-bc2a-a9e7ea571f22"
                          alt
                          style={{ width: "75%", marginLeft: 39 }}
                        />
                      </div>
                      <div className="down-content" style={{ height: 118 }}>
                        <h4>Javascript</h4>
                        <span>programming language for websites.</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 masonry-item all web_design">
                    <div className="case-item">
                      <div className="case-thumb">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fjquery.png?alt=media&token=20b7e294-b475-40dc-842d-991ece5eeb43"
                          alt
                          style={{ width: "75%", marginLeft: 39 }}
                        />
                      </div>
                      <div className="down-content">
                        <h4>jQuery</h4>
                        <span>jQuery is a JavaScript Library.</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 masonry-item all web_design">
                    <div className="case-item">
                      <div className="case-thumb">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fbootstrap.png?alt=media&token=2fcc40e5-88f5-4cbe-8280-a96216ac8769"
                          alt
                          style={{ width: "75%", marginLeft: 39 }}
                        />
                      </div>
                      <div className="down-content">
                        <h4>Bootstrap</h4>
                        <span>CSS framework</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 masonry-item all web_design">
                    <div className="case-item">
                      <div className="case-thumb">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fwordpress.png?alt=media&token=4466e1d5-e13b-45a3-be77-4f76d984b8c4"
                          alt
                          style={{ width: "75%", marginLeft: 39 }}
                        />
                      </div>
                      <div className="down-content" style={{ height: 118 }}>
                        <h4>Wordpress</h4>
                        <span>Content Management System (CMS). </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 masonry-item all web_dev">
                    <div className="case-item">
                      <div className="case-thumb">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fphp.png?alt=media&token=701022ac-d1bc-4df6-b0f5-8655f48421fe"
                          alt
                          style={{ width: "75%", marginLeft: 39 }}
                        />
                      </div>
                      <div className="down-content" style={{ height: 118 }}>
                        <h4>PHP</h4>
                        <span>PHP is a Server Scripting Language. </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 masonry-item all web_design">
                    <div className="case-item">
                      <div className="case-thumb">
                        <img
                          src="https://pninfosys.com/assets/frontend/images/technology/angular.png"
                          alt
                          style={{ width: "75%", marginLeft: 39 }}
                        />
                      </div>
                      <div className="down-content">
                        <h4>Angular</h4>
                        <span>JavaScript framework. </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 masonry-item all web_dev">
                    <div className="case-item">
                      <div className="case-thumb">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Flaravel.png?alt=media&token=a443045f-69b4-4f8d-be75-729b241e0c76"
                          alt
                          style={{ width: "75%", marginLeft: 39 }}
                        />
                      </div>
                      <div className="down-content">
                        <h4>Laravel</h4>
                        <span>PHP based web-framework. </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 masonry-item all web_design">
                    <div className="case-item">
                      <div className="case-thumb">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fsql.jpg?alt=media&token=120f6bf6-24b2-43d8-a73b-0e8d9a2c1195"
                          alt
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div className="down-content">
                        <h4>SQL</h4>
                        <span>Query Language For Database. </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 masonry-item all web_dev">
                    <div className="case-item">
                      <div className="case-thumb">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fpython.png?alt=media&token=3778eca2-0dce-4f18-a765-8b954ecc46a0"
                          alt
                          style={{ width: "75%", marginLeft: 39 }}
                        />
                      </div>
                      <div className="down-content">
                        <h4>Python</h4>
                        <span>Programing Language. </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 masonry-item all web_dev">
                    <div className="case-item">
                      <div className="case-thumb">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ecases%2Fdjango.png?alt=media&token=d42f9fd1-24c1-4821-aa63-91bbe6b5f879"
                          alt
                          style={{ width: "75%", marginLeft: 39 }}
                        />
                      </div>
                      <div className="down-content" style={{ height: 118 }}>
                        <h4>Django</h4>
                        <span>Open Source Python FrameWork</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h3>Our Team</h3>
                  <h2>Meet Our Team Members</h2>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="team-item">
                  <div className="team-thumb">
                    <div className="hover-effect">
                      <ul>
                        <li>
                          <a
                            href="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FOur-Team%2Fvkj.png?alt=media&token=c2e9af3e-25bc-478e-b758-73dd296d67e6"
                            target="_blank"
                            className="fancybox-pop fancybox.image"
                          >
                            <i className="fa fa-search fa-border fa-2x" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FOur-Team%2Fvkj.png?alt=media&token=c2e9af3e-25bc-478e-b758-73dd296d67e6"
                      alt
                    />
                  </div>
                  <div className="down-content">
                    <h4>Vikas Jain</h4>
                    <span>Director PNINFOSYS </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="team-item">
                  <div className="team-thumb">
                    <div className="hover-effect">
                      <ul>
                        <li>
                          <a
                            href="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FOur-Team%2Fvaibhav.jpg?alt=media&token=71a35861-d268-488b-8699-ac6108881d4c"
                            target="_blank"
                            className="fancybox-pop fancybox.image"
                          >
                            <i className="fa fa-search fa-border fa-2x" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FOur-Team%2Fvaibhav.jpg?alt=media&token=71a35861-d268-488b-8699-ac6108881d4c"
                      alt
                    />
                  </div>
                  <div className="down-content">
                    <h4> Vaibhav Sir</h4>
                    <span>Senior Advisor</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="team-item">
                  <div className="team-thumb">
                    <div className="hover-effect">
                      <ul>
                        <li>
                          <a
                            href="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FOur-Team%2Fniket.jpg?alt=media&token=4ea14f42-85c3-48ca-9dfa-8c0817bf1563"
                            target="_blank"
                            className="fancybox-pop fancybox.image"
                          >
                            <i className="fa fa-search fa-border fa-2x" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FOur-Team%2Fniket.jpg?alt=media&token=4ea14f42-85c3-48ca-9dfa-8c0817bf1563"
                      alt
                    />
                  </div>
                  <div className="down-content">
                    <h4> Niket Bansal</h4>
                    <span>Senior Advisor</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="team-item">
                  <div className="team-thumb">
                    <div className="hover-effect">
                      <ul>
                        <li>
                          <a
                            href="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FOur-Team%2Frishi.jpg?alt=media&token=0a7f3772-d8c0-465e-b527-0faea353ed0a"
                            target="_blank"
                            className="fancybox-pop fancybox.image"
                          >
                            <i className="fa fa-search fa-border fa-2x" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FOur-Team%2Frishi.jpg?alt=media&token=0a7f3772-d8c0-465e-b527-0faea353ed0a"
                      alt
                    />
                  </div>
                  <div className="down-content">
                    <h4>Rishi Jha</h4>
                    <span>General Manager</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="team-item">
                  <div className="team-thumb">
                    <div className="hover-effect">
                      <ul>
                        <li>
                          <a
                            href="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FOur-Team%2Fceo.png?alt=media&token=4722e889-dc9d-40b4-8734-ac760495b08f"
                            target="_blank"
                            className="fancybox-pop fancybox.image"
                          >
                            <i className="fa fa-search fa-border fa-2x" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FOur-Team%2Fceo.png?alt=media&token=4722e889-dc9d-40b4-8734-ac760495b08f"
                      alt
                    />
                  </div>
                  <div className="down-content">
                    <h4>
                      Neha
                      <br /> Jain
                    </h4>
                    <span>CEO PNINFOSYS</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="team-item">
                  <div className="team-thumb">
                    <div className="hover-effect">
                      <ul>
                        <li>
                          <a
                            href="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FOur-Team%2Fshivam-min.jpg?alt=media&token=5f4381dc-ab1d-4a5d-8ae7-7da24d0711d3"
                            target="_blank"
                            className="fancybox-pop fancybox.image"
                          >
                            <i className="fa fa-search fa-border fa-2x" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img style={{ height: "205px" }} src={devraj} alt />
                  </div>
                  <div className="down-content">
                    <h4>Devraj Pun</h4>
                    <span>Full Stack Intern</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="team-item">
                  <div className="team-thumb">
                    <div className="hover-effect">
                      <ul>
                        <li>
                          <a
                            href="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FOur-Team%2Fchanchal.jpg?alt=media&token=4f020a95-4d8e-42a3-92d7-6a5c5d79a50c"
                            target="_blank"
                            className="fancybox-pop fancybox.image"
                          >
                            <i className="fa fa-search fa-border fa-2x" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img
                      // src={muskan}
                      alt
                    />
                  </div>
                  <div className="down-content">
                    <h4>Muskan Tiwari</h4>
                    <span>Full Stack Intern</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="team-item">
                  <div className="team-thumb">
                    <div className="hover-effect">
                      <ul>
                        <li>
                          <a
                            href="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FOur-Team%2Fvishakha.png?alt=media&token=2c53aabf-2341-4d28-a597-3f35d403b46f"
                            target="_blank"
                            className="fancybox-pop fancybox.image"
                          >
                            <i className="fa fa-search fa-border fa-2x" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img
                      // src={kashish}
                      alt
                    />
                  </div>
                  <div className="down-content">
                    <h4>Kashish Tiwari</h4>
                    <span>Full Stack Intern</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="team-item">
                  <div className="team-thumb">
                    <div className="hover-effect">
                      <ul>
                        <li>
                          <a
                            href="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FOur-Team%2Fyash.png?alt=media&token=3ffa7826-0688-46e8-b94a-6594c08feff6"
                            target="_blank"
                            className="fancybox-pop fancybox.image"
                          >
                            <i className="fa fa-search fa-border fa-2x" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img
                      // src={priyanka}
                      alt
                    />
                  </div>
                  <div className="down-content">
                    <h4>Priyanka Chaturvedi</h4>
                    <span>Full Stack Intern</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="team-item">
                  <div className="team-thumb">
                    <div className="hover-effect">
                      <ul>
                        <li>
                          <a
                            href="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FOur-Team%2Faman.jpeg?alt=media&token=1a993fe2-eb2c-43f1-8e47-35db4f170864"
                            target="_blank"
                            className="fancybox-pop fancybox.image"
                          >
                            <i className="fa fa-search fa-border fa-2x" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img
                      // src={rinkesh}
                      alt
                    />
                  </div>
                  <div className="down-content">
                    <h4>Rinkesh Jha</h4>
                    <span>Full Stack Intern</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="team-item">
                  <div className="team-thumb">
                    <div className="hover-effect">
                      <ul>
                        <li>
                          <a
                            href="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/about%2FOur-Team%2Fkanishka.jpeg?alt=media&token=03bc9233-8066-45a1-8b8a-5725a57393fe"
                            target="_blank"
                            className="fancybox-pop fancybox.image"
                          >
                            <i className="fa fa-search fa-border fa-2x" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img
                      // src={aman}
                      alt
                    />
                  </div>
                  <div className="down-content">
                    <h4>Aman Narwariya</h4>
                    <span>Full Stack Intern</span>
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

export default About;
