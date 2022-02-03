import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import PortfolioDetail from "parts/PortfolioPage/PortfolioDetail";
import React, { Component } from "react";
import APIProfile from "services/Profile";
import APIProject from "services/Project";
import APISocialMedia from "services/Social_media";
import APIStudyCase from "services/Study_case";

export default class PortfolioPage extends Component {
  state = {
    profile: {},
    social: {},
    project: [],
    study_case: [],
  };
  componentDidMount() {
    window.scrollTo(0,0);
    document.title = "Achmad Mauliddin - Portfolio";
    this.profileData();
    this.socialData();
    this.studyCase();
    this.project();
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
  studyCase = async () => {
    const study_case = await APIStudyCase.getStudyCase();
    this.setState({
      ...this.state,
      study_case,
    });
  };
  project = async () => {
    const project = await APIProject.getProject();
    this.setState({
      ...this.state,
      project,
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
