import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import PortfolioDetail from "parts/PortfolioPage/PortfolioDetail";
import React, { Component } from "react";
// import APIProfile from "services/Profile";
// import APIProject from "services/Project";
// import APISocialMedia from "services/Social_media";
// import APIStudyCase from "services/Study_case";
import AOS from "aos";
import profileJson from "json/profile.json";
import socialMediaJson from "json/social_media.json";
import caseStudyJson from "json/case_study.json";
import projectJson from "json/project.json";

export default class PortfolioPage extends Component {
  state = {
    profile: {},
    social: {},
    project: [],
    study_case: [],
  };
  componentDidMount() {
    window.scrollTo(0, 0);

    document.title = "Achmad Mauliddin - Portfolio";
    this.profileData();
    this.socialData();
    this.studyCase();
    this.project();
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }
  profileData = async () => {
    // const profile = await APIProfile.getProfile();
    // this.setState({
    //   ...this.state,
    //   profile: profile[0],
    // });
    this.setState({
      profile: profileJson,
    });
  };
  socialData = async () => {
    // const social = await APISocialMedia.getSocialMedia();
    // this.setState({
    //   ...this.state,
    //   social: social,
    // });
    this.setState({
      social: socialMediaJson,
    });
  };
  studyCase = async () => {
    // const study_case = await APIStudyCase.getStudyCase();
    // this.setState({
    //   ...this.state,
    //   study_case,
    // });
    this.setState({
      study_case: caseStudyJson,
    });
  };
  project = async () => {
    // const project = await APIProject.getProject();
    // this.setState({
    //   ...this.state,
    //   project,
    // });
    this.setState({
      project: projectJson,
    });
  };
  render() {
    return (
      <>
        <Header {...this.props} profile={this.state.profile} />
        <Hero profile={this.state.profile} social={this.state.social} />
        <PortfolioDetail
          {...this.props}
          study_case={this.state.study_case}
          project={this.state.project}
        />
        <Footer />
      </>
    );
  }
}
