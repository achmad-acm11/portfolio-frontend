import React from "react";
import { Link } from "react-router-dom";
import laptop from "../../assets/img/Laptop 1.png";

export default function PortfolioDetailDesc({ detail }) {
  if (detail.images === undefined) {
    return null;
  }
  return (
    <section className="portfolio-detail mt-5" id="portfolio_detail">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item home">
              <Link to="/portfolio" className="text-decoration-none">
                Portfolio
              </Link>
            </li>
            <li className="breadcrumb-item">{detail.name}</li>
          </ol>
        </nav>
        <div className="container">
          <div className="row gap-5">
            <div className="col-12">
              <div
                className="image-primary mx-auto position-relative"
                style={{ width: "fit-content" }}
              >
                <img
                  src={detail.main_image}
                  alt=""
                  className="img-fluid position-absolute img-item"
                />
                <img src={laptop} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-12">
              <div className="thumbnail-wrapper d-flex justify-content-center flex-nowrap gap-md-5 gap-1">
                {detail.images.map((item, index) => {
                  return (
                    <div key={item.id} className="thumbnail-item">
                      <img src={item.image} alt="" className="img-fluid" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-12 mt-3">
              <div className="row justify-content-center">
                <div className="col-7">
                  <h6 className="fw-bold header-portfolio-detail">
                    Short Description
                  </h6>
                  <div className="body-portfolio-detail">
                    <p>{detail.description}</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="client-wrapper">
                    <div className="fw-bold header-portfolio-detail">
                      Company/Client
                    </div>
                    <div className="body-portfolio-detail">
                      <p>{detail.clinet}</p>
                    </div>
                  </div>
                  <div className="longtime-wrapper">
                    <div className="fw-bold header-portfolio-detail">
                      Long Time
                    </div>
                    <div className="body-portfolio-detail">
                      <p>{detail.long_time}</p>
                    </div>
                  </div>
                  <div className="platform-wrapper">
                    <div className="fw-bold header-portfolio-detail">
                      Platform
                    </div>
                    <div className="body-portfolio-detail">
                      <p>{detail.platform}</p>
                    </div>
                  </div>
                  <div className="stack-wrapper">
                    <div className="fw-bold header-portfolio-detail">Stack</div>
                    <div className="body-portfolio-detail">
                      <div className="d-flex flex-nowrap gap-1">
                        {detail.stacks.map((item, index) => {
                          return (
                            <div
                              key={item.id}
                              className="stack-wrapper-icon p-1"
                            >
                              <img
                                src={item.image}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          );
                        })}
                      </div>
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