import AboutMe from "parts/AboutPage/AboutMe";
import HeroAbout from "parts/AboutPage/HeroAbout";
import Footer from "parts/Footer";
import Header from "parts/Header";
import React, { Component } from "react";

export default class AboutPage extends Component {
  render() {
    return (
      <>
        <Header />
        <HeroAbout />
        <AboutMe />
        <Footer />
      </>
    );
  }
}
