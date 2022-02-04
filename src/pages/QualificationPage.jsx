import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Qualification from "parts/QualificationPage/Qualification";
import React, { Component } from "react";
import APIProfile from "services/Profile";
import APIQualification from "services/Qualification";
import APISocialMedia from "services/Social_media";
import AOS from 'aos';


export default class QualificationPage extends Component {
  state = {
    profile: {},
    social: {},
    qualification: [],
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Achmad Mauliddin - Qualification";
    this.profileData();
    this.socialData();
    this.qualificationData();
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
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
  render() {
    return (
      <>
        <Header {...this.props} profile={this.state.profile} />
        <Hero profile={this.state.profile} social={this.state.social} />
        <Qualification qualification={this.state.qualification}/>
        <Footer />
      </>
    );
  }
}
