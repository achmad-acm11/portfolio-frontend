import React from "react";
import frontEnd from "assets/img/frontend.png";
import cv from "assets/file/CV Achmad Mauliddin.pdf";

export default function AboutMe() {
  return (
    <section className="about-me mt-5" id="about_me">
      <div className="container">
        <div className="row gap-3 gap-md-0 align-items-md-center">
          <div
            className="col-12 col-md-6 mb-3"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <ul
              className="nav mb-3 justify-content-around justify-content-md-start gap-5"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item">
                <button
                  style={{ border: "none", background: "transparent" }}
                  className="nav-link active about-me-nav ps-0 pe-0 me-3"
                  id="pills-about-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-about"
                  role="tab"
                  aria-controls="pills-about"
                  aria-selected="true"
                >
                  About Me
                </button>
              </li>
              <li className="nav-item">
                <button
                  style={{ border: "none", background: "transparent" }}
                  className="nav-link about-me-nav ps-0"
                  id="pills-info-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-info"
                  role="tab"
                  aria-controls="pills-info"
                  aria-selected="false"
                >
                  Personal Information
                </button>
              </li>
            </ul>
            <div className="tab-content mb-3" id="pills-tabContent">
              <div
                className="tab-pane fade show active text-center text-md-start"
                id="pills-about"
                role="tabpanel"
                aria-labelledby="pills-about-tab"
              >
                I’m a professional full stack developer based in Bogor, Indonesia. I
                have the ability to develop, test, and maintain a web-based
                application. I have good motivation to always give my best
                effort on each project I do.
                <br />
                <br />
                Personally, I'm a person eager to learn and improve, with a
                passion for creative thinking.
              </div>
              <div
                className="tab-pane fade text-md-start"
                id="pills-info"
                role="tabpanel"
                aria-labelledby="pills-info-tab"
              >
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th className="text-start">Full Name :</th>
                      <td className="text-end">Achmad Mauliddin</td>
                    </tr>
                    <tr>
                      <th className="text-start">Gender :</th>
                      <td className="text-end">Male</td>
                    </tr>
                    <tr>
                      <th className="text-start">Address :</th>
                      <td className="text-end">Bogor</td>
                    </tr>
                    <tr>
                      <th className="text-start">Nationality :</th>
                      <td className="text-end">Indonesia</td>
                    </tr>
                    <tr>
                      <th className="text-start">Religion :</th>
                      <td className="text-end">Muslim</td>
                    </tr>
                    <tr>
                      <th className="text-start">Occupation :</th>
                      <td className="text-end">Programmer, Full Stack Developer</td>
                    </tr>
                    <tr>
                      <th className="text-start">Email :</th>
                      <td className="text-end">achmadmauliddin2@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="button-wrapper text-center">
              <a
                href={cv}
                target={"_blank"}
                rel="noreferrer"
                className="btn btn-primary text-white"
              >
                Download CV &nbsp; <i className="uil uil-download-alt"></i>
              </a>
            </div>
          </div>
          <div
            className="col-12 col-md-6 d-flex justify-content-center mb-3"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src={frontEnd} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
