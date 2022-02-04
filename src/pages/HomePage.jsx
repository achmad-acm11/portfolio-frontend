import React, { Component } from "react";
import AboutMe from "parts/AboutMe";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Skills from "parts/Skills";
import Portfolio from "parts/Portfolio";
import Footer from "parts/Footer";
import APIProfile from "services/Profile";
import APISocialMedia from "services/Social_media";
import APIQualification from "services/Qualification";
import APIStudyCase from "services/Study_case";
import APIProject from "services/Project";
import AOS from "aos";
import "aos/dist/aos.css";

export default class HomePage extends Component {
  state = {
    profile: {},
    social: {},
    qualification: [],
    skills: [],
    project: [],
    study_case: [],
  };
  componentDidMount() {
    window.scrollTo(0,0);
    document.title = "Achmad Mauliddin - Home";
    this.profileData();
    this.socialData();
    this.qualificationData();
    this.studyCase();
    this.project();
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      once: true
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
  qualificationData = async () => {
    const qualification = await APIQualification.getQualification();
    this.setState({
      ...this.state,
      qualification,
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
  // skillsData = async () => {
  //   const skills = await APISkills.getSkills();
  //   this.setState({
  //     ...this.state,
  //     skills,
  //   });
  // };
  render() {
    return (
      <>
        <Header {...this.props} profile={this.state.profile} />
        <Hero profile={this.state.profile} social={this.state.social} />
        <AboutMe />
        <Skills qualification={this.state.qualification} />
        <Portfolio
          {...this.props}
          project={this.state.project}
          study_case={this.state.study_case}
        />
        <Footer />
      </>
    );
  }
}
