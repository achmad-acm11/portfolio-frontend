import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Qualification from "parts/QualificationPage/Qualification";
import React, { Component } from "react";

export default class QualificationPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <Qualification />
        <Footer />
      </>
    );
  }
}
