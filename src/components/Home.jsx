import React from "react";

function Home() {
  return (
    <>
      {/* section one */}
      <div
        className="main-content"
        style={{
          background:
            "url('https://pninfosys.com/assets/frontend/images/banner.png')",
        }}
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
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Ebanner%2Fbanner2.png?alt=media&token=ca3ffc74-514c-4d79-9af4-c025e88b89aa"
                  alt
                  style={{ width: "50%" }}
                />
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
        <h4 className="lead text-center">
          PN INFOSYS is a leading global business consulting and IT service
          company,
          <br />
          Whether you need to run your business more efficiently or accelerate
          revenue growth, PN INFOSYS can get you there.
        </h4>
        <div className="container-fluid" style={{ width: "95%" }}>
          <div className="row">
            <div className="col-lg-3">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Efeature%2Fcollaborative1.jpg?alt=media&token=b8ce06a7-a1c9-41e7-a4ed-3e65be127f11"
                    alt
                  />
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
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Efeature%2Fthinking.png?alt=media&token=a4d7e55a-cc39-443b-bcbc-92921ae35f6a"
                    alt
                  />
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
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Efeature%2Fdedication.jpg?alt=media&token=2b6177d8-816a-45d8-acec-ca235232235e"
                    alt
                  />
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
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Efeature%2Ftraining.png?alt=media&token=9f731de1-607f-4ce5-999b-3b5b940a78ae"
                    alt
                  />
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
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Etips%2Flearning.png?alt=media&token=ce9f919b-595f-44e0-bbbd-aa72aba5b8f6"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* technology */}
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
      {/* portfolio */}
      <section className="portfolio-page-second-version">
        <div className="container">
          <div className="row mb-5">
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
                src: "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2Fidtrnew.png?alt=media&token=724ae9b3-fc39-4e1d-9def-8f717da38d66",
                alt: "Institute of Drivers Training and Research",
                title: "Institute of Drivers Training and Research",
                subtitle: "Gwalior",
                link: "http://idtrgwl.com/",
              },
              {
                src: "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2Fport2.jpg?alt=media&token=64c3b21f-108d-43c9-948d-26f2d22968e1",
                alt: "Central Institute for Research on Buffaloes",
                title: "C I A R",
                subtitle: "Central Institute for Research on Buffaloes",
                link: "#/none",
              },
              {
                src: "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2Fport3.jpg?alt=media&token=97999133-c6a3-46e6-a728-e32c5a92c74a",
                alt: "Rishi Galav Public School",
                title: "Rishi Galav Public School",
                subtitle: "Best School in Gwalior",
                link: "#/none",
              },
              {
                src: "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2Fvee.jpg?alt=media&token=66c083af-8a0b-4a18-8d83-3965d9db6743",
                alt: "VEE ACADEMY",
                title: "VEE ACADEMY",
                subtitle: "Gwalior",
                link: "https://vikasedugwl.com/",
              },
              {
                src: "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2Fport5.jpg?alt=media&token=41a3ba64-bfaa-4872-9445-e761d44fa94a",
                alt: "Allure Constructions",
                title: "Allure Constructions",
                subtitle: "Allure Constructions Company",
                link: "#/none",
              },
              {
                src: "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eportfolio%2FSonagir-logo.png?alt=media&token=5d2c5b91-e7a1-4ae3-a234-6f946dafd08d",
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
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eservices%2Fe-learning.png?alt=media&token=71eaebcc-1041-4891-bb3d-68cc30b0173b"
                  alt
                />
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
                      "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eclient%2Fe1.jpg?alt=media&token=e6e44a43-8e57-4d03-a8c5-5c120f33f9f0",
                    altText: "Workshop by Senior Advisor",
                    title: "Workshop by Senior Advisor",
                    description: [
                      "Workshop was enacted by Vaibhav Shrivastava, who is Product Owner at Xiaomi, China",
                      "He is our Senior Advisor, he conducted the workshop in which he holistically motivated the team of PN INFOSYS.",
                    ],
                  },
                  {
                    imgSrc:
                      "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eclient%2Fe2.jpg?alt=media&token=858212a2-77c6-4932-9a26-06eeccb44168",
                    altText: "PN INFOSYS invited as Chief Guest",
                    title: "PN INFOSYS invited as Chief Guest",
                    description: [
                      "Rustamji Institute of Technology, BSF Academy, Tekanpur invited PN INFOSYS as a Chief Guest in their Software Tech-Fest.",
                      "Rustamji Institute of Technology, BSF Academy, Tekanpur invited PN INFOSYS as a Chief Guest in their Software Tech-Fest.",
                    ],
                  },
                  {
                    imgSrc:
                      "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eclient%2Fe3.jpg?alt=media&token=0f9d6230-34e3-4233-b31f-a6c5e646bbcd",
                    altText: "Social Applaud by MPCT college",
                    title: "Social Applaud by MPCT college",
                    description: [
                      "PN INFOSYS gave two months training sessions to MPCT College.",
                      "This training was meant for web designing to make sure that at the end of the two months, students become capable enough to master Web Designing.",
                    ],
                  },
                  {
                    imgSrc:
                      "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eclient%2Fe4.jpg?alt=media&token=33d539d8-9574-40ff-85f7-ae4ce208f65e",
                    altText: "Social Applaud for our Work",
                    title: "Social Applaud for our Work",
                    description: [
                      "PN INFOSYS did a project for Samaysaar Vidhyaniketan, which is a non-profit institution providing free schooling, accommodation, and food to poor Jain students.",
                    ],
                  },
                  {
                    imgSrc:
                      "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eclient%2Fe5.jpg?alt=media&token=1a40c8b1-c469-48b6-b0ad-608edae9543c",
                    altText: "New Branch Opening in Indore",
                    title: "New Branch Opening in Indore",
                    description: [
                      "PN INFOSYS has a new branch in Indore also.",
                      "It was a grand launch of our new branch in Indore.",
                    ],
                  },
                  {
                    imgSrc:
                      "https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/home-%3Eclient%2Fe6.jpg?alt=media&token=d293bbea-2474-4b0e-99c2-1734428c81fc",
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
