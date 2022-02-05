import React from "react";
import frontEnd from "assets/img/frontend.png";
import profileImage from "assets/img/image_profile.png";

export default function AboutMe(props) {
  return (
    <section
      className="about-me mt-5"
      id="about_me"
      data-aos="fade-zoom-in"
      data-aos-duration="1500"
      data-aos-delay="500"
      data-aos-anchor-placement="top-center"
      data-aos-once="true"
    >
      <div className="container">
        <div className="row gap-3 gap-md-0 mb-5 align-items-md-center">
          <div className="col-12 col-md-6 mb-3">
            <h5 className="text-uppercase mb-4 fw-bold">about me</h5>
            <div className="text-center text-md-start">
              I’m a professional web developer based in Jakarta, Indonesia. I
              have the ability to develop, test, and maintain web-based
              applications. I have good motivated to always give the best effort
              for each project I did. <br />
              <br />
              Personally, I'm a person to eager to learn and improve, with a
              passion for creative thingking.
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
                <tbody>
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
                    <td className="text-end">
                      {props.profile.occupation_main},{" "}
                      {props.profile.occupation}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-start">Email :</th>
                    <td className="text-end">{props.profile.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
