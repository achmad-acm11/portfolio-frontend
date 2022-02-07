import React from "react";
import parse from "html-react-parser";

export default function Qualification(props) {
  return (
    <section className="qualification-detail mt-5" id="qualification_detail" data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-delay="500" data-aos-anchor-placement="top-center" data-aos-once="true">
      <div className="container">
        <h5 className="text-uppercase mb-4 fw-bold">qualification</h5>
        {props.qualification.map((item, index) => {
          return (
              <div key={item.id} className="row gap-3 gap-md-0 mb-5 mb-md-3">
                <div className="col-12 col-md-2 mb-3">
                  <img src={item.image} alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-7 mb-3">
                  <div className="text-title">
                    <h6 className="fw-bold header-qualification-detail">
                      {item.name}
                    </h6>
                    <div className="body-qualification-detail">
                      <p>{item.address}</p>
                    </div>
                  </div>
                  <div className="text-description">
                    <h6 className="fw-bold header-qualification-detail">
                      Short Description
                    </h6>
                    <div className="body-qualification-detail">
                      {parse(item.description)}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-3 mb-3">
                  <div className="occupation-wrapper">
                    <div className="header-qualification-detail">
                      Occupation
                    </div>
                    <div className="body-qualification-detail">
                      <p>
                        {item.occupation_main}
                        <br />
                        {item.occupation}
                      </p>
                    </div>
                  </div>
                  <div className="longtime-wrapper">
                    <div className="header-qualification-detail">Long Time</div>
                    <div className="body-qualification-detail">
                      <p>{item.long_time}</p>
                    </div>
                  </div>
                  <div className="lern-wrapper">
                    <div className="header-qualification-detail">
                      What I Lern
                    </div>
                    <div className="body-qualification-detail">
                      <div className="d-flex flex-nowrap gap-1">
                        {item.lern.map((lernItem, index) => {
                          return (
                            <div
                              key={lernItem.id}
                              className="lern-wrapper-icon p-1"
                            >
                              <img
                                src={lernItem.image}
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
          );
        })}
      </div>
    </section>
  );
}
