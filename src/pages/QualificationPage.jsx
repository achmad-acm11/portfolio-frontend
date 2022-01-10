import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Qualification from "parts/QualificationPage/Qualification";
import React, { Component } from "react";
import APIProfile from "services/Profile";
import APIQualification from "services/Qualification";
import APISocialMedia from "services/Social_media";

export default class QualificationPage extends Component {
  state = {
    profile: {},
    social: {},
    qualification: [],
  };
  componentDidMount() {
    document.title = "Achmad Mauliddin - Qualification";
    this.profileData();
    this.socialData();
    this.qualificationData();
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
