import React from "react";
import frontEnd from "assets/img/frontend.png";
import profileImage from "assets/img/image_profile.png";

export default function AboutMe(props) {
  return (
    <section className="about-me mt-5" id="about_me">
      <div className="container">
        <div className="row gap-3 gap-md-0 mb-5 align-items-md-center">
          <div className="col-12 col-md-6 mb-3">
            <h5 className="text-uppercase mb-4 fw-bold">about me</h5>
            <div className="text-center text-md-start">
              I’m a web developer who has the ability to develop, test, and
              maintain web-based applications. Personally, I’m a person who
              likes to continue to grow, learn new things, and think creatively.{" "}
              <br /> <br />
              Quidam alii sunt, et non est in nostra potestate. Quae omnia in
              nostra sententia, pursuit, cupiditatem, aversatio, ex quibus in
              Verbo, quicquid non suis actibus nostris. Non sunt in nostra
              potestate corpore bona fama imperii, denique quod non sunt actus.
            </div>

            <div className="button-wrapper mt-4 text-center">
              <a href="/" className="btn btn-primary text-white">
                Download CV &nbsp; <i className="uil uil-download-alt"></i>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center mb-3">
            <img src={frontEnd} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row gap-3 gap-md-0 align-items-md-center">
          <div className="col-12 col-md-6 d-flex justify-content-center mb-3">
            <img src={profileImage} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <h5 className="text-uppercase mb-4 fw-bold">personal info</h5>
            <div className="text-md-start">
              <table className="table table-borderless">
                <tr>
                  <th className="text-start">Full Name :</th>
                  <td className="text-end">{props.profile.name}</td>
                </tr>
                <tr>
                  <th className="text-start">Gender :</th>
                  <td className="text-end">{props.profile.gender}</td>
                </tr>
                <tr>
                  <th className="text-start">Address :</th>
                  <td className="text-end">{props.profile.address}</td>
                </tr>
                <tr>
                  <th className="text-start">Nationality :</th>
                  <td className="text-end">{props.profile.nationality}</td>
                </tr>
                <tr>
                  <th className="text-start">Religion :</th>
                  <td className="text-end">{props.profile.religion}</td>
                </tr>
                <tr>
                  <th className="text-start">Occupation :</th>
                  <td className="text-end">{props.profile.occupation_main}, {props.profile.occupation}</td>
                </tr>
                <tr>
                  <th className="text-start">Email :</th>
                  <td className="text-end">{props.profile.email}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
