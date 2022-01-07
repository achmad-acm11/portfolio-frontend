import React from "react";
import profileImage from "assets/img/IMG_3528.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg position-fixed bottom-0 start-0 w-100 navbar-dark">
      <div className="container flex-row-reverse flex-lg-row">
        <div className="collapse navbar-collapse nav_menu" id="nav_menu">
          <div className="row">
            <div className="col-4 col-lg-auto">
              <Link
                to="/"
                className="nav-item nav-link d-flex flex-column align-items-center btn-navbar active"
              >
                <i className="uil uil-estate"></i>Home
              </Link>
            </div>
            <div className="col-4 col-lg-auto">
              <Link
                to="/about"
                className="nav-item nav-link d-flex flex-column align-items-center btn-navbar"
              >
                <i className="uil uil-user"></i>About
              </Link>
            </div>
            <div className="col-4 col-lg-auto">
              <Link
                to="/qualification"
                className="nav-item nav-link d-flex flex-column align-items-center btn-navbar"
              >
                <i className="uil uil-briefcase-alt"></i>Qualification
              </Link>
            </div>
            <div className="col-4 col-lg-auto">
              <Link
                to="/skills"
                className="nav-item nav-link d-flex flex-column align-items-center btn-navbar"
              >
                <i className="uil uil-file-alt"></i>Skills
              </Link>
            </div>
            <div className="col-4 col-lg-auto">
              <Link
                to="/portfolio"
                className="nav-item nav-link d-flex flex-column align-items-center btn-navbar"
              >
                <i className="uil uil-scenery"></i>Portfolio
              </Link>
            </div>
            <div className="col-4 col-lg-auto">
              <a
                href="#contact"
                className="nav-item nav-link d-flex flex-column align-items-center btn-navbar"
              >
                <i className="uil uil-message"></i>Contact
              </a>
            </div>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav_menu"
          aria-controls="nav_menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="uil uil-apps"></i>
        </button>

        {/* Navbar Brand for Mobile */}
        <a className="navbar-brand n-mobile text-brand" href="/">
          Achmad M
        </a>

        {/* Navbar Brand for Desktop */}
        <a
          href="/"
          className="navbar-brand n-desktop d-flex justify-content-between align-items-center"
        >
          <div
            className="rounded-circle overflow-hidden me-1"
            style={{ width: "40px", height: "40px" }}
          >
            <img
              src={profileImage}
              alt=""
              className="navbar-brand-img"
              width="130"
              height="86"
            />
          </div>
          <div className="brand-text">
            <p className="brand-name m-0">Achmad M</p>
            <p className="brand-occupation m-0">Web Developer</p>
          </div>
        </a>
      </div>
    </nav>
  );
}
