import React, { Component } from "react";
import AboutMe from "parts/AboutMe";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Skills from "parts/Skills";
import Portfolio from "parts/Portfolio";
import Footer from "parts/Footer";
// import APIProfile from "services/Profile";
// import APISocialMedia from "services/Social_media";
// import APIQualification from "services/Qualification";
// import APIStudyCase from "services/Study_case";
// import APIProject from "services/Project";
import AOS from "aos";
// import profileJson from "json/profile.json";
// import socialMediaJson from "json/social_media.json";
// import qualificationJson from "json/qualification.json";
// import caseStudyJson from "json/case_study.json";
// import projectJson from "json/project.json";

import "aos/dist/aos.css";
import APIProfile from "services/Profile";
import APISocialMedia from "services/Social_media";

export default class HomePage extends Component {
  state = {
    profile: {},
    social: {},
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Achmad Mauliddin - Home";
    this.profileData();
    this.socialData();
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
  }
  profileData = async () => {
    const profile = await APIProfile.getProfile();
    this.setState({
      profile: profile[0],
    });
  };
  socialData = async () => {
    const social = await APISocialMedia.getSocialMedia();
    this.setState({
      ...this.state,
      social: social,
    });
  };
  render() {
    // Handle if onject state empty
    if (Object.keys(this.state.profile).length === 0) {
      return null;
    }

    return (
      <>
        <Header {...this.props} profile={this.state.profile} />
        <Hero profile={this.state.profile} social={this.state.social} />
        <AboutMe />
        <Skills />
        <Portfolio {...this.props} />
        <Footer />
      </>
    );
  }
}
