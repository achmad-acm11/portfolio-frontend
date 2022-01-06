import React from "react";
import completeIcon from "assets/img/icon/Complete Icon.svg";
import clockIcon from "assets/img/icon/coolicon.svg";
import logoPHP from "assets/img/Logo_PHP.png";
import logoHtml from "assets/img/Logo_html.png";
import logoNodeJS from "assets/img/Logo_nodejs.png";
import logoGolang from "assets/img/Logo_go.png";
import logoJavascript from "assets/img/Logo_javascript.png";
import logoCss from "assets/img/Logo_css.png";

export default function Skills() {
  return (
    <section className="skills mt-5" id="skills">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8 mb-3 qualification-side">
            <div className="card">
              <div className="card-header">
                <h5 className="text-uppercase m-0">Qualification</h5>
                <a href="qualification.html" className="m-0">
                  View All
                </a>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <th>01</th>
                        <th>
                          <div className="icon-circle rounded-circle text-center d-inline-block">
                            <i className="uil uil-graduation-cap"></i>
                          </div>
                          <span style={{ fontSize: "14px" }}>
                            {" "}
                            IPB UNIVERSITY
                          </span>
                        </th>
                        <td className="text-center">
                          <div className="q-occupation">
                            D3 - Informatics Management
                          </div>
                          <div className="q-long-time">2017 - 2020</div>
                        </td>
                        <td className="text-center">
                          <img src={completeIcon} alt="" />
                        </td>
                        <td className="text-center">
                          <a
                            href="qualification.html"
                            className="text-decoration-none q-detail"
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>02</th>
                        <th>
                          <div className="icon-circle rounded-circle text-center d-inline-block">
                            <i className="uil uil-briefcase-alt"></i>
                          </div>
                          <span style={{ fontSize: "14px" }}>
                            {" "}
                            National Civil Service Agency (Intern)
                          </span>
                        </th>
                        <td className="text-center">
                          <div className="q-occupation">Web Developer</div>
                          <div className="q-long-time">
                            January 2020 - March 2020
                          </div>
                        </td>
                        <td className="text-center">
                          <img src={completeIcon} alt="" />
                        </td>
                        <td className="text-center">
                          <a
                            href="qualification.html"
                            className="text-decoration-none q-detail"
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th>03</th>
                        <th>
                          <div className="icon-circle rounded-circle text-center d-inline-block">
                            <i className="uil uil-briefcase-alt"></i>
                          </div>
                          <span style={{ fontSize: "14px" }}>
                            {" "}
                            PT. Rynest Technology Indomedia
                          </span>
                        </th>
                        <td className="text-center">
                          <div className="q-occupation">Web Developer</div>
                          <div className="q-long-time">
                            August 2020 - Present
                          </div>
                        </td>
                        <td className="text-center">
                          <img src={clockIcon} alt="" />
                        </td>
                        <td className="text-center">
                          <a
                            href="qualification.html"
                            className="text-decoration-none q-detail"
                          >
                            Detail
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 skills-side">
            <div className="card">
              <div className="card-header">
                <h5 className="text-uppercase m-0">Skills</h5>
                <a href="skills.html" className="m-0">
                  View All
                </a>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-evenly mb-3">
                  <div
                    className="skills-wrapper text-center"
                    style={{ width: "50%", padding: "5px 0" }}
                  >
                    <img src={logoPHP} alt="" className="img-fluid" />
                  </div>
                  <div
                    className="skills-wrapper text-center"
                    style={{ width: "30%" }}
                  >
                    <img src={logoHtml} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="d-flex justify-content-evenly mb-3">
                  <div
                    className="skills-wrapper text-center"
                    style={{ width: "30%" }}
                  >
                    <img src={logoNodeJS} alt="" className="img-fluid" />
                  </div>
                  <div
                    className="skills-wrapper text-center"
                    style={{ width: "50%" }}
                  >
                    <img src={logoGolang} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="d-flex justify-content-evenly mb-3">
                  <div
                    className="skills-wrapper text-center"
                    style={{ width: "50%" }}
                  >
                    <img src={logoJavascript} alt="" className="img-fluid" />
                  </div>
                  <div
                    className="skills-wrapper text-center"
                    style={{ width: "30%" }}
                  >
                    <img src={logoCss} alt="" />
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
