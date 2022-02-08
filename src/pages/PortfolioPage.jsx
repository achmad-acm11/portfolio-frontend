import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import PortfolioDetail from "parts/PortfolioPage/PortfolioDetail";
import React, { Component } from "react";
import APIProfile from "services/Profile";
// import APIProject from "services/Project";
import APISocialMedia from "services/Social_media";
// import APIStudyCase from "services/Study_case";
import AOS from "aos";
// import profileJson from "json/profile.json";
// import socialMediaJson from "json/social_media.json";
// import caseStudyJson from "json/case_study.json";
// import projectJson from "json/project.json";

export default class PortfolioPage extends Component {
  state = {
    profile: {},
    social: {},
  };
  componentDidMount() {
    window.scrollTo(0, 0);

    document.title = "Achmad Mauliddin - Portfolio";
    this.profileData();
    this.socialData();
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }
  profileData = async () => {
    const profile = await APIProfile.getProfile();
    this.setState({
      ...this.state,
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
    return (
      <>
        <Header {...this.props} profile={this.state.profile} />
        <Hero profile={this.state.profile} social={this.state.social} />
        <PortfolioDetail
          {...this.props}
        />
        <Footer />
      </>
    );
  }
}
