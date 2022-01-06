import React from "react";
import itemProject1 from "assets/img/Group 6.png";
import itemProject2 from "assets/img/Group 7.png";

export default function Portfolio() {
  return (
    <section className="portfolio mt-5" id="portfolio">
      <div className="container">
        <div className="card bg-transparent">
          <div className="card-header">
            <h5 className="text-uppercase m-0">Portfolio</h5>
            <a href="portfolio.html" className="m-0 text-secondary">
              View All
            </a>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-2">
                <ul
                  className="nav mb-3 justify-content-start flex-md-column gap-4"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      href="/"
                      className="nav-link active portfolio-nav ps-0 pe-0 me-3"
                      id="pills-project-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-project"
                      role="tab"
                      aria-controls="pills-project"
                      aria-selected="true"
                    >
                      Project
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/"
                      className="nav-link portfolio-nav ps-0"
                      id="pills-study-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-study"
                      role="tab"
                      aria-controls="pills-study"
                      aria-selected="false"
                    >
                      Study Case
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-10">
                <div className="tab-content mb-3" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active text-center text-md-start"
                    id="pills-project"
                    role="tabpanel"
                    aria-labelledby="pills-project-tab"
                  >
                    <div
                      id="carouselProject"
                      className="carousel slide"
                      data-bs-ride="carousel"
                      data-bs-interval="false"
                    >
                      <div
                        className="carousel-indicators"
                        style={{ bottom: "-60px" }}
                      >
                        <button
                          type="button"
                          data-bs-target="#carouselProject"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselProject"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="row">
                            <div className="col-12 to-project-detail">
                              <div className="image-wrapper text-center">
                                <img src={itemProject1} alt="" />
                              </div>
                              <div className="project-text text-center">
                                Staycation
                              </div>
                              <div className="label-wrapper text-center">
                                <div className="project-label badge rounded-pill">
                                  Project
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-12 to-project-detail">
                              <div className="image-wrapper text-center">
                                <img src={itemProject2} alt="" />
                              </div>
                              <div className="project-text text-center">
                                Staycation
                              </div>
                              <div className="label-wrapper text-center">
                                <div className="project-label badge rounded-pill">
                                  Project
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselProject"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselProject"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade text-center text-md-start"
                    id="pills-study"
                    role="tabpanel"
                    aria-labelledby="pills-study-tab"
                  >
                    <div
                      id="carouselStudyCase"
                      className="carousel slide"
                      data-bs-ride="carousel"
                      data-bs-interval="false"
                    >
                      <div
                        className="carousel-indicators"
                        style={{ bottom: "-60px" }}
                      >
                        <button
                          type="button"
                          data-bs-target="#carouselStudyCase"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselStudyCase"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="row">
                            <div className="col-12 to-project-detail">
                              <div className="image-wrapper text-center">
                                <img src={itemProject1} alt="" />
                              </div>
                              <div className="study-case-text text-center">
                                Staycation
                              </div>
                              <div className="label-wrapper text-center">
                                <div className="study-case-label badge rounded-pill">
                                  Study Case
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-12 to-project-detail">
                              <div className="image-wrapper text-center">
                                <img src={itemProject2} alt="" />
                              </div>
                              <div className="study-case-text text-center">
                                Staycation
                              </div>
                              <div className="label-wrapper text-center">
                                <div className="study-case-label badge rounded-pill">
                                  Study Case
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselStudyCase"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselStudyCase"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
