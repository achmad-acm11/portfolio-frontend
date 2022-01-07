import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import PortfolioDetail from "parts/PortfolioPage/PortfolioDetail";
import React, { Component } from "react";

export default class PortfolioPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <PortfolioDetail />
        <Footer />
      </>
    );
  }
}
