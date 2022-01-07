import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import SkillsDetail from "parts/SkillsPage/SkillsDetail";
import React, { Component } from "react";

export default class SkillsPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <SkillsDetail />
        <Footer />
      </>
    );
  }
}
