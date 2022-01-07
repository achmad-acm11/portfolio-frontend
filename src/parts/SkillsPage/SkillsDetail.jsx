import React from "react";
import logoPHP from "assets/img/Logo_PHP.png";
import logoHtml from "assets/img/Logo_html.png";
import logoNodeJS from "assets/img/Logo_nodejs.png";
import logoGolang from "assets/img/Logo_go.png";
import logoJavascript from "assets/img/Logo_javascript.png";
import logoCss from "assets/img/Logo_css.png";

export default function SkillsDetail() {
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
              <div className="progress-skills d-flex flex-column">
                <div className="progress-skills-head d-flex justify-content-between">
                  <div className="skills-icon">
                    <img src={logoHtml} alt="" width="30" height="30" />
                    &nbsp;HTML
                  </div>
                  <div className="skills-percentage">
                    <p>90%</p>
                  </div>
                </div>
                <div className="progress-skills-body">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="progress-skills mt-4 d-flex flex-column">
                <div className="progress-skills-head d-flex justify-content-between">
                  <div className="skills-icon">
                    <img src={logoCss} alt="" width="25" height="30" />
                    &nbsp;CSS
                  </div>
                  <div className="skills-percentage">
                    <p>90%</p>
                  </div>
                </div>
                <div className="progress-skills-body">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="progress-skills mt-4 d-flex flex-column">
                <div className="progress-skills-head d-flex justify-content-between">
                  <div className="skills-icon">
                    <img src={logoJavascript} alt="" width="30" height="30" />
                    &nbsp;Javscript
                  </div>
                  <div className="skills-percentage">
                    <p>90%</p>
                  </div>
                </div>
                <div className="progress-skills-body">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <h6 className="fw-bold header-skills-detail mb-4">
              <i className="uil uil-server-connection"></i> Backend
            </h6>
            <div className="body-skills-detail">
              <div className="progress-skills d-flex flex-column">
                <div className="progress-skills-head d-flex justify-content-between">
                  <div className="skills-icon">
                    <img src={logoPHP} alt="" width="40" height="30" />
                    &nbsp;PHP
                  </div>
                  <div className="skills-percentage">
                    <p>90%</p>
                  </div>
                </div>
                <div className="progress-skills-body">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="progress-skills d-flex mt-4 flex-column">
                <div className="progress-skills-head d-flex justify-content-between">
                  <div className="skills-icon">
                    <img src={logoNodeJS} alt="" width="30" height="30" />
                    &nbsp;Node JS
                  </div>
                  <div className="skills-percentage">
                    <p>90%</p>
                  </div>
                </div>
                <div className="progress-skills-body">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="progress-skills d-flex mt-4 flex-column">
                <div className="progress-skills-head d-flex justify-content-between">
                  <div className="skills-icon">
                    <img src={logoGolang} alt="" width="50" height="30" />
                    &nbsp;Golang
                  </div>
                  <div className="skills-percentage">
                    <p>90%</p>
                  </div>
                </div>
                <div className="progress-skills-body">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
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
