import React, { Component } from "react";
import AboutMe from "parts/AboutMe";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Skills from "parts/Skills";
import Portfolio from "parts/Portfolio";
import Footer from "parts/Footer";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Footer />
      </>
    );
  }
}
