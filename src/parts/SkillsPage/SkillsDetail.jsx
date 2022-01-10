import React from "react";

export default function SkillsDetail({ skills }) {
  if (skills.frontend === undefined) {
    return null;
  }

  return (
    <section className="skills-detail mt-5" id="skills_detail">
      <div className="container">
        <h5 className="text-uppercase mb-5 fw-bold">skills</h5>

        <div className="row gap-3 gap-md-0">
          <div className="col-12 col-md-6 mb-3">
            <h6 className="fw-bold header-skills-detail mb-4">
              <i className="uil uil-arrow"></i> Frontend
            </h6>
            <div className="body-skills-detail">
              {skills.frontend.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="progress-skills d-flex mt-4 flex-column"
                  >
                    <div className="progress-skills-head d-flex justify-content-between">
                      <div className="skills-icon">
                        <img src={item.image} alt="" width="30" height="30" />
                        &nbsp;{item.name}
                      </div>
                      <div className="skills-percentage">
                        <p>{item.value}%</p>
                      </div>
                    </div>
                    <div className="progress-skills-body">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: item.value + "%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <h6 className="fw-bold header-skills-detail mb-4">
              <i className="uil uil-server-connection"></i> Backend
            </h6>
            <div className="body-skills-detail">
              {skills.backend.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="progress-skills d-flex mt-4 flex-column"
                  >
                    <div className="progress-skills-head d-flex justify-content-between">
                      <div className="skills-icon">
                        <img src={item.image} alt="" width="40" height="30" />
                        &nbsp;{item.name}
                      </div>
                      <div className="skills-percentage">
                        <p>{item.value}%</p>
                      </div>
                    </div>
                    <div className="progress-skills-body">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: item.value + "%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
