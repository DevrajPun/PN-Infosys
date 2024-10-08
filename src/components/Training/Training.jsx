import React from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Training</h1>
              <span>
                <Link to="/">Home</Link>
                Training
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="good-tips" style={{ margin: 0, paddingBottom: 0 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h1 style={{ color: "white" }}>Helping Hands</h1>
                <br />
                <p
                  className="text-justify align-justify"
                  style={{ color: "white" }}
                >
                  We have capability to train even novice students, students who
                  don’t have any experience with coding can work efficiently in
                  our training sessions. We need only adamant students who are
                  disciplined enough to pay attention and have that urge in them
                  for learning new things. You will have the experience to work
                  on Live Projects, which will ameliorate your portfolio.
                  Basically through these training sessions, we want to help
                  students to grow, Our training sessions are helping hands for
                  adamant students.
                </p>
              </div>
              <div className="tips-content" />
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
      <section className="recent-cases">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <h4 style={{ fontSize: "xx-large" }}>What will you</h4>
                <h1 style={{ color: "#009df2", fontSize: "xxx-large" }}>
                  Learn
                </h1>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="portfolio-filters" />
            </div>
            <div className="col-lg-12">
              <div className="row masonry-layout filters-content normal-col-gap">
                <div className="col-lg-4 masonry-item all category-analysis">
                  <div className="case-item">
                    <a href="single-project.html">
                      <div className="case-thumb">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/traning%2Fcase3.jpg?alt=media&token=cc2f60c1-f87a-4c58-8106-93094e670db5"
                          alt
                        />
                      </div>
                      <div className="down-content">
                        <h4>
                          Learn HTML, CSS, JAVASCRIPT, BOOTSTRAP, WORDPRESS
                        </h4>
                        <span>45 Days to Complete</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 masonry-item all category-seo">
                  <div className="case-item">
                    <a href="single-project.html">
                      <div className="case-thumb">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/traning%2Fcase1.jpg?alt=media&token=3ce1d0a6-96d7-4a52-af86-0843364f3d5f"
                          alt
                        />
                      </div>
                      <div className="down-content">
                        <h4>Learn MYSQL, CORE PHP , OPS, LARAVEL</h4>
                        <span>60 Days to Complete</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 masonry-item all category-digital">
                  <div className="case-item">
                    <a href="single-project.html">
                      <div className="case-thumb">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/traning%2Fcase2.jpg?alt=media&token=760e9692-2081-4b5e-b4eb-34b8e18ac041"
                          alt
                        />
                      </div>
                      <div
                        className="down-content"
                        style={{ paddingBottom: 2 }}
                      >
                        <h4>
                          Javescript, Angular, React Js, Node Js, React Native,
                          Restfull API, Mongo DB, Git, AWS{" "}
                        </h4>
                        <span>90 Days to Complete</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h4 style={{ fontSize: "xx-large" }}>Internship</h4>
          <h1 style={{ color: "#009df2", fontSize: "xxx-large" }}>
            Experience
          </h1>
          <div className="row">
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="icon" style={{ paddingTop: 15 }}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/traning%2Fbanner_small.png?alt=media&token=1b4e98d5-531b-4ca7-8b7a-dc305445e62e"
                    alt
                  />
                </div>
                <h4>100% Practical Training</h4>
                <p>
                  We don't use paper and pencil at all in our training sessions.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/traning%2Foffice_work_6.png?alt=media&token=3f0fd8a9-3ddf-40ca-8f60-2979a5383414"
                    alt
                    style={{ maxWidth: 154 }}
                  />
                </div>
                <h4>Live Projects</h4>
                <p>
                  We make you work on Live projects, in order to strengthen your
                  portfolio.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature-item">
                <div className="icon">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/pn-images.appspot.com/o/traning%2Flaptop_3.png?alt=media&token=27efabb2-bc3a-4d94-8884-104edab73205"
                    alt
                    style={{ maxWidth: 128 }}
                  />
                </div>
                <h4>Innovative Ideas</h4>
                <p>
                  We always inbuilt innovation in our training sessions, to
                  learn something new.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /><br />
    </>
  );
}

export default Index;
