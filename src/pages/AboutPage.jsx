import AboutMeDetail from "parts/AboutPage/AboutMeDetail";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import React, { Component } from "react";

export default class AboutPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <AboutMeDetail />
        <Footer />
      </>
    );
  }
}
